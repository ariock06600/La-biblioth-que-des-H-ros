import React, { useEffect, useMemo, useState } from 'react';
import type { BookParagraph } from '../types/book';
import { analyzeParagraphScene, type SceneAnalysis, type SceneMood } from '../utils/sceneAnalyzer';
import { fetchOptionalAiIllustration } from '../utils/illustrationService';

interface SceneIllustrationProps {
  paragraph: BookParagraph;
  bookTitle: string;
  bookGrade?: string;
  bookId?: string;
}

const MOOD_PALETTES: Record<
  SceneMood,
  { skyTop: string; skyBottom: string; wall: string; floor: string; accent: string; glow: string }
> = {
  warm: {
    skyTop: '#89C2D9',
    skyBottom: '#F7E6C4',
    wall: '#F6EEDB',
    floor: '#D9B98B',
    accent: '#E09F3E',
    glow: '#FFF3D1',
  },
  festive: {
    skyTop: '#69B3D6',
    skyBottom: '#FCE8B2',
    wall: '#F9F1DF',
    floor: '#DFC08F',
    accent: '#D95D39',
    glow: '#FFE699',
  },
  hopeful: {
    skyTop: '#95C5D6',
    skyBottom: '#EFE6D5',
    wall: '#F2EFE6',
    floor: '#D4BC96',
    accent: '#2D7D67',
    glow: '#E4F3EC',
  },
  neutral: {
    skyTop: '#A4C3D2',
    skyBottom: '#ECE9DF',
    wall: '#EFECE3',
    floor: '#CDB797',
    accent: '#4C7A72',
    glow: '#F4F1E8',
  },
  tense: {
    skyTop: '#7E95A8',
    skyBottom: '#D6CFC4',
    wall: '#E6E1D8',
    floor: '#BFA98C',
    accent: '#C25B3A',
    glow: '#F2DDD3',
  },
  sad: {
    skyTop: '#687E94',
    skyBottom: '#BDC7D1',
    wall: '#DEE2E6',
    floor: '#AEABA4',
    accent: '#546E85',
    glow: '#DCE4EC',
  },
};

function CharacterFigure({
  x,
  y,
  shirt,
  hair,
  skin = '#F2C6A0',
  scale = 1,
  expression = 'neutral',
  facing = 1,
  hasGlasses = false,
  hasBackpack = false,
  isAdult = false,
  waving = false,
  label,
}: {
  x: number;
  y: number;
  shirt: string;
  hair: string;
  skin?: string;
  scale?: number;
  expression?: 'happy' | 'sad' | 'neutral' | 'smirk' | 'concerned';
  facing?: 1 | -1;
  hasGlasses?: boolean;
  hasBackpack?: boolean;
  isAdult?: boolean;
  waving?: boolean;
  label?: string;
}) {
  const heightBoost = isAdult ? 1.24 : 1;
  return (
    <g transform={`translate(${x}, ${y}) scale(${scale * facing}, ${scale * heightBoost})`}>
      {/* Soft ground shadow */}
      <ellipse cx="0" cy="48" rx="18" ry="5" fill="rgba(35,30,22,0.16)" />

      {/* Optional backpack behind character */}
      {hasBackpack && (
        <rect
          x="-20"
          y="-2"
          width="14"
          height="26"
          rx="5"
          fill="#355C7D"
          stroke="#223B52"
          strokeWidth="1.5"
        />
      )}

      {/* Legs */}
      <line x1="-6" y1="24" x2="-7" y2="45" stroke="#2F3E46" strokeWidth="6" strokeLinecap="round" />
      <line x1="6" y1="24" x2="7" y2="45" stroke="#2F3E46" strokeWidth="6" strokeLinecap="round" />
      {/* Shoes */}
      <ellipse cx="-6" cy="46" rx="6" ry="3.2" fill="#4A3728" />
      <ellipse cx="8" cy="46" rx="6" ry="3.2" fill="#4A3728" />

      {/* Torso / Cardigan */}
      <path
        d="M -13 -3 C -14 10 -12 24 -10 27 L 10 27 C 12 24 14 10 13 -3 C 10 -9 -10 -9 -13 -3 Z"
        fill={shirt}
        stroke="rgba(30,37,36,0.22)"
        strokeWidth="1.4"
      />
      {/* Shirt collar detail */}
      <path d="M -5 -7 L 0 -1 L 5 -7" fill="none" stroke="rgba(255,255,255,0.65)" strokeWidth="1.8" />

      {/* Arms */}
      <path
        d="M -12 0 Q -20 12 -14 21"
        fill="none"
        stroke={shirt}
        strokeWidth="5.5"
        strokeLinecap="round"
      />
      {waving ? (
        <path
          d="M 12 0 Q 22 -12 25 -22"
          fill="none"
          stroke={shirt}
          strokeWidth="5.5"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M 12 0 Q 20 12 15 21"
          fill="none"
          stroke={shirt}
          strokeWidth="5.5"
          strokeLinecap="round"
        />
      )}
      {waving && <circle cx="25" cy="-24" r="3.4" fill={skin} />}

      {/* Neck & Head */}
      <rect x="-3.5" y="-12" width="7" height="6" rx="2" fill={skin} />
      <circle cx="0" cy="-23" r="13.5" fill={skin} stroke="rgba(60,40,25,0.16)" strokeWidth="1.2" />

      {/* Hair */}
      <path
        d="M -14 -24 C -14 -37 14 -37 14 -24 C 11 -30 -8 -31 -14 -24 Z"
        fill={hair}
      />
      {isAdult && <circle cx="-11" cy="-29" r="5" fill={hair} />}

      {/* Eyes */}
      <circle cx="-4.2" cy="-23.5" r="1.5" fill="#232B2A" />
      <circle cx="4.8" cy="-23.5" r="1.5" fill="#232B2A" />

      {/* Glasses */}
      {hasGlasses && (
        <g stroke="#2C3E3C" strokeWidth="1.3" fill="rgba(255,255,255,0.22)">
          <circle cx="-4.2" cy="-23.5" r="3.8" />
          <circle cx="4.8" cy="-23.5" r="3.8" />
          <line x1="-0.4" y1="-23.5" x2="1" y2="-23.5" />
        </g>
      )}

      {/* Rosy cheeks for happy/warm */}
      {expression === 'happy' && (
        <>
          <circle cx="-8" cy="-20" r="2.2" fill="#E77B6F" opacity="0.38" />
          <circle cx="8" cy="-20" r="2.2" fill="#E77B6F" opacity="0.38" />
        </>
      )}

      {/* Mouth */}
      {expression === 'happy' && (
        <path d="M -4 -17.5 Q 0.5 -13.5 5 -17.5" fill="none" stroke="#3B2B23" strokeWidth="1.7" strokeLinecap="round" />
      )}
      {expression === 'sad' && (
        <path d="M -4 -15.5 Q 0.5 -19 5 -15.5" fill="none" stroke="#3B2B23" strokeWidth="1.7" strokeLinecap="round" />
      )}
      {expression === 'neutral' && (
        <line x1="-3.5" y1="-17" x2="4" y2="-17" stroke="#3B2B23" strokeWidth="1.6" strokeLinecap="round" />
      )}
      {expression === 'smirk' && (
        <path d="M -3 -17 Q 2 -16 5.5 -19" fill="none" stroke="#3B2B23" strokeWidth="1.7" strokeLinecap="round" />
      )}
      {expression === 'concerned' && (
        <ellipse cx="0.5" cy="-16.5" rx="2.4" ry="1.8" fill="none" stroke="#3B2B23" strokeWidth="1.5" />
      )}

      {/* Subtle name caption for clarity (counter-flipped if facing -1) */}
      {label && (
        <g transform={`scale(${facing}, ${1 / heightBoost})`}>
          <text
            x="0"
            y={59 * heightBoost}
            textAnchor="middle"
            fontSize="9.5"
            fontWeight="600"
            fill="#3B352D"
            opacity="0.74"
            fontFamily="Plus Jakarta Sans, sans-serif"
          >
            {label}
          </text>
        </g>
      )}
    </g>
  );
}

function SceneBackdrop({
  analysis,
  bookGrade,
  isOmbreBook,
  isGroupePriveBook,
}: {
  analysis: SceneAnalysis;
  bookGrade: string;
  isOmbreBook: boolean;
  isGroupePriveBook: boolean;
}) {
  const pal = MOOD_PALETTES[analysis.mood];
  const isEvening = analysis.timeOfDay === 'evening';
  const isCollege = /ème$/.test(bookGrade) || isGroupePriveBook;
  const schoolSign = isOmbreBook
    ? 'ÉCOLE DU MARRONNIER'
    : isGroupePriveBook
      ? 'COLLÈGE JEAN MOULIN'
      : isCollege
        ? 'COLLÈGE'
        : 'ÉCOLE PRIMAIRE';

  switch (analysis.location) {
    case 'cour_recreation':
    case 'portail_sortie':
    case 'fete_ecole': {
      return (
        <g>
          {/* Sky */}
          <rect width="520" height="320" fill={`url(#skyGrad-${analysis.mood})`} />
          {/* Sun & soft clouds */}
          <circle cx="445" cy="64" r="28" fill={pal.glow} opacity="0.92" />
          <circle cx="445" cy="64" r="19" fill="#F6C85F" opacity="0.88" />
          <g fill="#FFFFFF" opacity="0.78">
            <ellipse cx="115" cy="54" rx="34" ry="13" />
            <ellipse cx="138" cy="49" rx="22" ry="11" />
            <ellipse cx="310" cy="44" rx="30" ry="11" />
          </g>

          {/* School / Collège facade */}
          <rect x="28" y="88" width="275" height="122" rx="3" fill={isCollege ? '#E5E2DC' : '#EAE0CE'} stroke="#C5B59B" strokeWidth="1.5" />
          {isCollege ? (
            <rect x="22" y="76" width="287" height="14" rx="2" fill="#465564" />
          ) : (
            <polygon points="20,90 165,46 312,90" fill="#B5654D" />
          )}
          {/* School sign */}
          <rect x="86" y="96" width="158" height="20" rx="2" fill="#2A3C3A" />
          <text
            x="165"
            y="109.5"
            textAnchor="middle"
            fill="#F4F1EA"
            fontSize="8.8"
            fontWeight="600"
            letterSpacing="0.8"
          >
            {schoolSign}
          </text>
          {/* Tall classroom windows */}
          {[50, 108, 198, 250].map((wx) => (
            <g key={wx} transform={`translate(${wx}, 126)`}>
              <rect width="34" height="44" rx="2" fill="#B9D6E5" stroke="#8C7B65" strokeWidth="1.5" />
              <line x1="17" y1="0" x2="17" y2="44" stroke="#F8F5EE" strokeWidth="1.5" />
              <line x1="0" y1="22" x2="34" y2="22" stroke="#F8F5EE" strokeWidth="1.5" />
            </g>
          ))}
          {/* School entrance arch / door */}
          <rect x="148" y="150" width="36" height="60" rx={isCollege ? 3 : 16} fill={isCollege ? '#3D4F5E' : '#6D4C3D'} />

          {/* Big Tree */}
          <g transform="translate(412, 118)">
            <rect x="-12" y="34" width="24" height="72" rx="6" fill="#6E4E37" />
            <circle cx="-26" cy="14" r="38" fill="#467A55" />
            <circle cx="24" cy="16" r="35" fill="#3B6B4A" />
            <circle cx="0" cy="-14" r="42" fill="#528A61" />
            <circle cx="14" cy="-6" r="24" fill="#669C70" opacity="0.65" />
          </g>

          {/* Courtyard ground */}
          <rect x="0" y="206" width="520" height="114" fill={isCollege ? '#D5CFC3' : '#DFC9A8'} />
          <line x1="0" y1="206" x2="520" y2="206" stroke="#BFA57E" strokeWidth="2" />
          {/* Hopscotch lines for primary school only */}
          {!isCollege && (
            <g stroke="rgba(255,255,255,0.55)" strokeWidth="2" fill="none">
              <rect x="52" y="268" width="22" height="18" />
              <rect x="74" y="268" width="22" height="18" />
              <rect x="96" y="268" width="22" height="18" />
            </g>
          )}

          {/* Wooden courtyard bench */}
          <g transform="translate(334, 212)">
            <rect x="0" y="0" width="96" height="10" rx="2" fill="#A67449" />
            <rect x="0" y="13" width="96" height="9" rx="2" fill="#8E603A" />
            <rect x="10" y="22" width="7" height="16" fill="#494540" />
            <rect x="79" y="22" width="7" height="16" fill="#494540" />
          </g>

          {/* School Gate if portail_sortie */}
          {analysis.location === 'portail_sortie' && (
            <g stroke="#2F3E3D" strokeWidth="3">
              <line x1="320" y1="138" x2="510" y2="138" />
              <line x1="320" y1="204" x2="510" y2="204" />
              {[335, 360, 385, 410, 435, 460, 485].map((gx) => (
                <line key={gx} x1={gx} y1="138" x2={gx} y2="204" strokeWidth="2.2" />
              ))}
            </g>
          )}

          {/* Colorful Pennants if fete_ecole */}
          {analysis.location === 'fete_ecole' && (
            <g>
              <path d="M 10 56 Q 260 112 510 52" fill="none" stroke="#5D4B3B" strokeWidth="1.8" />
              {[
                { x: 52, y: 69, c: '#E06D53' },
                { x: 102, y: 79, c: '#F2B84B' },
                { x: 154, y: 86, c: '#3C8D74' },
                { x: 208, y: 90, c: '#4882B4' },
                { x: 262, y: 91, c: '#E06D53' },
                { x: 316, y: 89, c: '#F2B84B' },
                { x: 370, y: 83, c: '#3C8D74' },
                { x: 422, y: 74, c: '#4882B4' },
                { x: 470, y: 64, c: '#E06D53' },
              ].map((flag, i) => (
                <polygon
                  key={i}
                  points={`${flag.x - 12},${flag.y} ${flag.x + 12},${flag.y - 2} ${flag.x},${flag.y + 22}`}
                  fill={flag.c}
                />
              ))}
              {/* Exhibition table */}
              <rect x="195" y="196" width="132" height="44" rx="3" fill="#FAF6EE" stroke="#B79E7A" strokeWidth="1.8" />
              <rect x="208" y="168" width="106" height="30" rx="2" fill="#FFFFFF" stroke="#2D6A4F" strokeWidth="2" />
              <text x="261" y="186" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#2D6A4F">
                SOLIDARITÉ {bookGrade}
              </text>
            </g>
          )}
        </g>
      );
    }

    case 'bureau_cpe': {
      return (
        <g>
          <rect width="520" height="320" fill="#ECEAE3" />
          {/* Glass partition to hallway */}
          <rect x="24" y="34" width="128" height="156" rx="3" fill="#D5E4EB" stroke="#85959E" strokeWidth="3" />
          <line x1="88" y1="34" x2="88" y2="190" stroke="#85959E" strokeWidth="2" />
          <rect x="38" y="50" width="100" height="22" rx="2" fill="#2C3E4A" />
          <text x="88" y="64.5" textAnchor="middle" fill="#F5F3EE" fontSize="8.5" fontWeight="700" letterSpacing="0.5">
            VIE SCOLAIRE · CPE
          </text>

          {/* pHARe Anti-bullying poster on wall */}
          <rect x="212" y="36" width="102" height="82" rx="3" fill="#FAF8F2" stroke="#3B335E" strokeWidth="3" />
          <rect x="220" y="44" width="86" height="18" rx="2" fill="#3B335E" />
          <text x="263" y="56.5" textAnchor="middle" fill="#FAF8F2" fontSize="8" fontWeight="700">
            PROGRAMME pHARe
          </text>
          <text x="263" y="80" textAnchor="middle" fill="#2D3B39" fontSize="8" fontWeight="700">
            3018 · Écoute
          </text>
          <text x="263" y="95" textAnchor="middle" fill="#5A6368" fontSize="7.2">
            Non au cyberharcèlement
          </text>

          {/* Window on right */}
          <rect x="372" y="36" width="114" height="114" rx="3" fill={`url(#skyGrad-${analysis.mood})`} stroke="#8F8272" strokeWidth="3" />
          <line x1="429" y1="36" x2="429" y2="150" stroke="#FAF6EE" strokeWidth="2.5" />

          {/* Floor & CPE Desk */}
          <rect x="0" y="198" width="520" height="122" fill="#CFC4B2" />
          <rect x="158" y="188" width="214" height="64" rx="4" fill="#8C6E52" />
          <rect x="150" y="182" width="230" height="12" rx="3" fill="#A88664" />
          {/* Open laptop on CPE desk */}
          <rect x="294" y="156" width="46" height="26" rx="2" fill="#34424D" />
          <rect x="298" y="160" width="38" height="18" rx="1" fill="#BFD7E6" />
          <rect x="288" y="181" width="58" height="4" rx="1.5" fill="#53626E" />
        </g>
      );
    }

    case 'salle_info': {
      return (
        <g>
          <rect width="520" height="320" fill="#EAECEB" />
          <rect x="0" y="200" width="520" height="120" fill="#CFC8BC" />

          {/* Whiteboard in front */}
          <rect x="92" y="26" width="246" height="94" rx="3" fill="#FAFBF9" stroke="#859196" strokeWidth="4" />
          <text x="215" y="60" textAnchor="middle" fill="#2A3B42" fontSize="12" fontWeight="700" fontFamily="Fraunces, serif">
            Salle Informatique · Technologie
          </text>
          <line x1="124" y1="74" x2="306" y2="74" stroke="#CBD4D8" strokeWidth="1.5" />
          <text x="215" y="96" textAnchor="middle" fill="#516670" fontSize="9.5">
            Classe de {bookGrade} · Citoyenneté numérique
          </text>

          {/* Window on right */}
          <rect x="378" y="28" width="110" height="96" rx="3" fill={`url(#skyGrad-${analysis.mood})`} stroke="#8F989C" strokeWidth="3" />

          {/* Computer workstations row */}
          <rect x="34" y="190" width="452" height="16" rx="3" fill="#B79E7E" stroke="#8F7659" strokeWidth="1.5" />
          {[78, 212, 346].map((cx) => (
            <g key={cx} transform={`translate(${cx}, 136)`}>
              <rect x="0" y="0" width="76" height="46" rx="4" fill="#2E3A42" />
              <rect x="5" y="5" width="66" height="34" rx="2" fill="#B8D5E6" />
              <rect x="12" y="12" width="32" height="5" rx="1.5" fill="#FFFFFF" opacity="0.7" />
              <rect x="12" y="21" width="48" height="4" rx="1.5" fill="#5E859E" opacity="0.55" />
              <rect x="32" y="46" width="12" height="8" fill="#4A5861" />
              <rect x="20" y="52" width="36" height="3" rx="1" fill="#4A5861" />
            </g>
          ))}
        </g>
      );
    }

    case 'foyer_college': {
      return (
        <g>
          <rect width="520" height="320" fill="#F2EBE0" />
          <rect x="0" y="202" width="520" height="118" fill="#D4BEA0" />

          {/* Cork bulletin board */}
          <rect x="44" y="34" width="176" height="98" rx="4" fill="#C49A6C" stroke="#8C663F" strokeWidth="4" />
          <rect x="62" y="48" width="62" height="34" rx="2" fill="#FAF7F0" />
          <text x="93" y="64" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#3B335E">
            FOYER 4ème
          </text>
          <text x="93" y="75" textAnchor="middle" fontSize="6.5" fill="#635B50">
            Clubs & Jeux
          </text>
          <rect x="138" y="54" width="64" height="42" rx="2" fill="#E8F1EE" />
          <line x1="146" y1="68" x2="194" y2="68" stroke="#3D7263" strokeWidth="2" />
          <line x1="146" y1="80" x2="184" y2="80" stroke="#7A9E92" strokeWidth="1.8" />

          {/* Window */}
          <rect x="356" y="34" width="126" height="106" rx="4" fill={`url(#skyGrad-${analysis.mood})`} stroke="#9E764E" strokeWidth="3" />

          {/* Lounge sofa */}
          <g transform="translate(56, 168)">
            <rect x="0" y="16" width="154" height="38" rx="8" fill="#4D6E82" />
            <rect x="12" y="0" width="130" height="24" rx="6" fill="#5D8296" />
            <rect x="14" y="54" width="8" height="14" fill="#5A4535" />
            <rect x="132" y="54" width="8" height="14" fill="#5A4535" />
          </g>

          {/* Foosball (Baby-foot) table */}
          <g transform="translate(296, 174)">
            <rect x="0" y="0" width="146" height="34" rx="4" fill="#9E6E46" stroke="#6E4A2D" strokeWidth="2" />
            <rect x="10" y="6" width="126" height="20" rx="2" fill="#3F7E56" />
            <line x1="42" y1="-4" x2="42" y2="38" stroke="#B7BEC2" strokeWidth="2.5" />
            <line x1="74" y1="-4" x2="74" y2="38" stroke="#B7BEC2" strokeWidth="2.5" />
            <line x1="106" y1="-4" x2="106" y2="38" stroke="#B7BEC2" strokeWidth="2.5" />
            <rect x="14" y="34" width="10" height="34" fill="#6E4A2D" />
            <rect x="122" y="34" width="10" height="34" fill="#6E4A2D" />
          </g>
        </g>
      );
    }

    case 'cantine': {
      return (
        <g>
          <rect width="520" height="320" fill="#F4EFE4" />
          {/* Tall cafeteria windows */}
          {[40, 185, 330].map((wx) => (
            <g key={wx} transform={`translate(${wx}, 30)`}>
              <rect width="115" height="92" rx="4" fill="#CBE3EE" stroke="#BFA98A" strokeWidth="2" />
              <line x1="57" y1="0" x2="57" y2="92" stroke="#F8F4EC" strokeWidth="2.5" />
            </g>
          ))}
          {/* Menu chalkboard */}
          <rect x="458" y="34" width="48" height="72" rx="3" fill="#293A38" />
          <text x="482" y="52" textAnchor="middle" fill="#F5F2EA" fontSize="7.5" fontWeight="700">
            {isCollege ? 'SELF' : 'MENU'}
          </text>
          <line x1="466" y1="62" x2="498" y2="62" stroke="#A6B8B4" strokeWidth="1.5" />
          <line x1="466" y1="74" x2="494" y2="74" stroke="#A6B8B4" strokeWidth="1.5" />
          <line x1="466" y1="86" x2="496" y2="86" stroke="#A6B8B4" strokeWidth="1.5" />

          {/* Floor tiles */}
          <rect x="0" y="188" width="520" height="132" fill="#E3D5BE" />
          <line x1="0" y1="188" x2="520" y2="188" stroke="#C7B293" strokeWidth="2" />

          {/* Cafeteria tables */}
          <g transform="translate(88, 204)">
            <rect x="0" y="16" width="344" height="22" rx="4" fill="#D4A672" stroke="#A3784A" strokeWidth="1.8" />
            <rect x="28" y="38" width="12" height="44" fill="#6F675E" />
            <rect x="304" y="38" width="12" height="44" fill="#6F675E" />
            {/* First tray */}
            <rect x="52" y="4" width="68" height="16" rx="3" fill="#3D7C6B" />
            <circle cx="72" cy="11" r="6" fill="#FFFFFF" />
            <rect x="90" y="7" width="18" height="8" rx="1.5" fill="#F2C864" />
            {isOmbreBook && (
              <text x="86" y="31" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#244B41">
                PLATEAU PAI
              </text>
            )}
            {/* Second tray */}
            <rect x="220" y="4" width="64" height="16" rx="3" fill="#D9824B" />
            <circle cx="242" cy="11" r="6" fill="#FFFFFF" />
            <circle cx="266" cy="11" r="4.5" fill="#77A866" />
          </g>
        </g>
      );
    }

    case 'parc_eps': {
      return (
        <g>
          <rect width="520" height="320" fill={`url(#skyGrad-${analysis.mood})`} />
          <circle cx="430" cy="56" r="24" fill="#F7CC66" opacity="0.9" />
          {/* Rolling park hills */}
          <path d="M 0 198 Q 140 152 290 185 T 520 172 L 520 320 L 0 320 Z" fill="#89B87A" />
          <path d="M 0 226 Q 190 194 360 222 T 520 206 L 520 320 L 0 320 Z" fill="#6FA164" />
          {/* Winding orientation path */}
          <path
            d="M 20 315 Q 160 264 265 245 T 490 218"
            fill="none"
            stroke="#DFC69F"
            strokeWidth="28"
            strokeLinecap="round"
          />
          {/* Park trees */}
          {[75, 165, 388, 466].map((tx, idx) => (
            <g key={tx} transform={`translate(${tx}, ${idx % 2 === 0 ? 128 : 140})`}>
              <rect x="-6" y="24" width="12" height="42" rx="3" fill="#6E4E37" />
              <circle cx="0" cy="10" r="28" fill={idx % 2 === 0 ? '#3E7550' : '#4E885D'} />
              <circle cx="-14" cy="18" r="18" fill="#5B976A" />
            </g>
          ))}
          {/* Orienteering marker (Balise orange & blanc) */}
          <g transform="translate(312, 186)">
            <line x1="0" y1="0" x2="0" y2="38" stroke="#4D3D30" strokeWidth="3" />
            <rect x="-12" y="-12" width="24" height="24" fill="#FFFFFF" stroke="#333" strokeWidth="1.2" />
            <polygon points="-12,-12 12,-12 -12,12" fill="#E3642A" />
          </g>
        </g>
      );
    }

    case 'bureau_directeur': {
      return (
        <g>
          <rect width="520" height="320" fill="#ECE5D6" />
          {/* Bookcase on left */}
          <rect x="26" y="42" width="110" height="162" rx="3" fill="#9E734B" />
          {[56, 98, 140].map((sy) => (
            <g key={sy}>
              <rect x="34" y={sy} width="94" height="34" fill="#6E4E33" />
              <rect x="40" y={sy + 6} width="12" height="28" fill="#C45C48" />
              <rect x="54" y={sy + 4} width="14" height="30" fill="#376985" />
              <rect x="70" y={sy + 8} width="11" height="26" fill="#D8A348" />
              <rect x="84" y={sy + 5} width="15" height="29" fill="#3D725B" />
              <rect x="102" y={sy + 9} width="12" height="25" fill="#7D5A78" />
            </g>
          ))}
          {/* Framed school charter */}
          <rect x="215" y="44" width="90" height="68" rx="2" fill="#FAF7F0" stroke="#7A5B3E" strokeWidth="4" />
          <text x="260" y="68" textAnchor="middle" fontSize="8" fontWeight="700" fill="#2A3D3B">
            CHARTE DU
          </text>
          <text x="260" y="81" textAnchor="middle" fontSize="8" fontWeight="700" fill="#2A3D3B">
            RESPECT
          </text>
          <line x1="232" y1="92" x2="288" y2="92" stroke="#C5B59B" strokeWidth="2" />
          {/* Window */}
          <rect x="372" y="42" width="112" height="110" rx="3" fill="#C7E0EB" stroke="#9E734B" strokeWidth="3" />
          {/* Wooden Floor & Principal Desk */}
          <rect x="0" y="202" width="520" height="118" fill="#CFB289" />
          <rect x="172" y="192" width="190" height="62" rx="4" fill="#8C5E3C" />
          <rect x="164" y="186" width="206" height="12" rx="3" fill="#A6744C" />
          {/* Desk lamp */}
          <path d="M 326 186 L 326 164 L 314 156" fill="none" stroke="#2D4A43" strokeWidth="3" />
          <polygon points="304,158 326,158 320,148 310,148" fill="#2D6A4F" />
        </g>
      );
    }

    case 'infirmerie': {
      return (
        <g>
          <rect width="520" height="320" fill="#EEF4F2" />
          <rect x="0" y="206" width="520" height="114" fill="#D8E5E1" />
          {/* First aid emblem */}
          <rect x="234" y="42" width="52" height="52" rx="10" fill="#FFFFFF" stroke="#B7D0C8" strokeWidth="2" />
          <rect x="255" y="54" width="10" height="28" rx="2" fill="#2D8667" />
          <rect x="246" y="63" width="28" height="10" rx="2" fill="#2D8667" />
          {/* Calm resting cot */}
          <rect x="74" y="176" width="166" height="36" rx="6" fill="#FFFFFF" stroke="#9AB5AD" strokeWidth="2" />
          <rect x="80" y="166" width="44" height="16" rx="6" fill="#CFE6DE" />
          <rect x="86" y="212" width="8" height="26" fill="#6F8A82" />
          <rect x="220" y="212" width="8" height="26" fill="#6F8A82" />
          {/* Cabinet */}
          <rect x="342" y="114" width="112" height="94" rx="4" fill="#FFFFFF" stroke="#A6C0B8" strokeWidth="2" />
          <rect x="364" y="132" width="68" height="22" rx="3" fill="#E6F2EE" />
          <text x="398" y="146" textAnchor="middle" fontSize="9" fontWeight="700" fill="#1F5E4B">
            {isOmbreBook ? 'DOSSIERS PAI' : 'INFIRMERIE'}
          </text>
        </g>
      );
    }

    case 'maison_soir': {
      return (
        <g>
          <rect width="520" height="320" fill="#2A364B" />
          {/* Warm bedroom wall */}
          <rect x="0" y="0" width="520" height="218" fill={isGroupePriveBook ? '#E4E2EC' : '#EAE0CE'} />
          <rect x="0" y="218" width="520" height="102" fill="#C9A87C" />
          {/* Night window with crescent moon & stars */}
          <rect x="190" y="34" width="144" height="114" rx="4" fill="#22324B" stroke="#7A5A3E" strokeWidth="4" />
          <circle cx="294" cy="68" r="14" fill="#F9E396" />
          <circle cx="300" cy="64" r="12" fill="#22324B" />
          <circle cx="222" cy="58" r="2" fill="#FFF7D6" />
          <circle cx="250" cy="76" r="1.6" fill="#FFF7D6" />
          <circle cx="236" cy="96" r="2.2" fill="#FFF7D6" />
          <line x1="262" y1="34" x2="262" y2="148" stroke="#7A5A3E" strokeWidth="3" />
          {/* Desk with warm lamp */}
          <rect x="64" y="182" width="160" height="14" rx="2" fill="#9E6E46" />
          <rect x="76" y="196" width="10" height="54" fill="#7D5333" />
          <rect x="202" y="196" width="10" height="54" fill="#7D5333" />
          <circle cx="110" cy="146" r="34" fill="#FFE6A3" opacity="0.35" />
          <polygon points="94,154 126,154 119,134 101,134" fill="#E39D3E" />
          <line x1="110" y1="154" x2="110" y2="182" stroke="#5D4635" strokeWidth="3" />

          {isGroupePriveBook ? (
            /* Teen homework notebook + glowing smartphone notification on desk */
            <g>
              <rect x="142" y="172" width="44" height="10" rx="1.5" fill="#FAF8F2" stroke="#596E82" strokeWidth="1.2" />
              <circle cx="198" cy="166" r="16" fill="#7AA8E8" opacity="0.28" />
              <rect x="190" y="156" width="16" height="25" rx="3" fill="#252C3D" stroke="#52607A" strokeWidth="1.2" />
              <rect x="192.5" y="159" width="11" height="18" rx="1.5" fill="#9BC3F5" />
              <circle cx="205" cy="157" r="4.5" fill="#E05D44" />
            </g>
          ) : (
            /* Stack of BD comics */
            <g>
              <rect x="148" y="168" width="46" height="14" rx="2" fill="#3B7197" />
              <rect x="152" y="156" width="42" height="12" rx="2" fill="#D96846" />
            </g>
          )}
          {isEvening && <circle cx="430" cy="72" r="24" fill="#E8C98F" opacity="0.22" />}
        </g>
      );
    }

    case 'conseil_eleves': {
      return (
        <g>
          <rect width="520" height="320" fill={pal.wall} />
          <rect x="0" y="192" width="520" height="128" fill="#D8BD96" />
          {/* Classroom blackboard in back */}
          <rect x="108" y="30" width="304" height="110" rx="4" fill={isGroupePriveBook ? '#2A3347' : '#2A443D'} stroke="#9C7148" strokeWidth="5" />
          <text x="260" y="72" textAnchor="middle" fill="#F2F0E6" fontSize="13.5" fontWeight="600" fontFamily="Fraunces, serif">
            {isGroupePriveBook ? `Vie de classe · ${bookGrade} B` : `Conseil d’élèves · ${bookGrade}`}
          </text>
          <text x="260" y="98" textAnchor="middle" fill="#C9DDD6" fontSize="10.2">
            {isGroupePriveBook
              ? 'Programme pHARe · Respect · Citoyenneté'
              : 'Écoute · Respect · Vivre ensemble'}
          </text>
          {/* Gathering floor */}
          {!isGroupePriveBook && (
            <>
              <ellipse cx="260" cy="252" rx="185" ry="44" fill="#4E8373" opacity="0.88" />
              <ellipse cx="260" cy="252" rx="158" ry="34" fill="#5D9483" />
            </>
          )}
        </g>
      );
    }

    case 'couloir_portemanteaux':
    case 'rang_entree': {
      return (
        <g>
          <rect width="520" height="320" fill={pal.wall} />
          <rect x="0" y="198" width="520" height="122" fill="#D9C3A3" />
          {/* Classroom door */}
          <rect x="44" y="48" width="102" height="152" rx="3" fill="#B68557" stroke="#7E5634" strokeWidth="3" />
          <rect x="64" y="66" width="62" height="44" rx="2" fill="#CAE2ED" />
          <circle cx="132" cy="134" r="4.5" fill="#E5BE62" />
          <rect x="70" y="30" width="52" height="18" rx="2" fill="#2B3D3B" />
          <text x="96" y="42.5" textAnchor="middle" fill="#FAF6EE" fontSize="9.5" fontWeight="700">
            {isGroupePriveBook ? '4ème B' : bookGrade}
          </text>

          {isCollege ? (
            /* Collège metal lockers (casiers) */
            <g transform="translate(184, 62)">
              {[0, 58, 116, 174, 232].map((lx) => (
                <g key={lx} transform={`translate(${lx}, 0)`}>
                  <rect x="0" y="0" width="54" height="136" rx="2" fill="#6D8496" stroke="#4D6170" strokeWidth="2" />
                  <line x1="10" y1="16" x2="44" y2="16" stroke="#4D6170" strokeWidth="2" />
                  <line x1="10" y1="23" x2="44" y2="23" stroke="#4D6170" strokeWidth="2" />
                  <circle cx="42" cy="70" r="3.5" fill="#E2C375" />
                </g>
              ))}
            </g>
          ) : (
            /* Primary school coat rack strip */
            <g>
              <rect x="184" y="114" width="298" height="14" rx="3" fill="#9E6E44" />
              {[214, 268, 322, 376, 430].map((hx, idx) => (
                <g key={hx}>
                  <circle cx={hx} cy="121" r="3" fill="#463D36" />
                  {idx < 3 && (
                    <path
                      d={`M ${hx} 124 L ${hx - 14} 174 L ${hx + 14} 174 Z`}
                      fill={['#4B749F', '#D07A48', '#5B8C68'][idx]}
                      opacity="0.88"
                    />
                  )}
                </g>
              ))}
            </g>
          )}
        </g>
      );
    }

    case 'atelier_maquette':
    case 'classe':
    default: {
      return (
        <g>
          <rect width="520" height="320" fill={pal.wall} />
          <rect x="0" y="198" width="520" height="122" fill={pal.floor} />
          {/* Classic French Chalkboard */}
          <rect x="74" y="28" width="260" height="114" rx="4" fill="#2A463E" stroke="#A6794F" strokeWidth="5" />
          <rect x="94" y="138" width="62" height="5" rx="2" fill="#F2EFE8" />
          <text x="204" y="66" textAnchor="middle" fill="#F3F1E8" fontSize="12.5" fontFamily="Fraunces, serif">
            {analysis.location === 'atelier_maquette'
              ? 'Projet Fête de l’École'
              : isGroupePriveBook
                ? 'Salle 204 · 4ème B'
                : `Classe de ${bookGrade}`}
          </text>
          <line x1="114" y1="84" x2="294" y2="84" stroke="rgba(243,241,232,0.35)" strokeWidth="1.5" />
          <text x="204" y="106" textAnchor="middle" fill="#CFE2DA" fontSize="9.5">
            {isGroupePriveBook
              ? 'Collège Jean Moulin'
              : analysis.dayNumber === 1
                ? 'Jour 1 · Lundi'
                : analysis.dayNumber === 2
                  ? 'Jour 2 · Mardi'
                  : 'Jour 3 · Mercredi'}
          </text>

          {/* Classroom window on right */}
          <rect x="372" y="34" width="112" height="112" rx="3" fill={`url(#skyGrad-${analysis.mood})`} stroke="#A6794F" strokeWidth="3" />
          <line x1="428" y1="34" x2="428" y2="146" stroke="#FAF6EE" strokeWidth="3" />
          <line x1="372" y1="90" x2="484" y2="90" stroke="#FAF6EE" strokeWidth="3" />

          {/* Wooden pupil desks */}
          <g transform="translate(64, 212)">
            <rect x="0" y="0" width="150" height="16" rx="3" fill="#B98756" stroke="#8A6039" strokeWidth="1.5" />
            <rect x="14" y="16" width="8" height="40" fill="#5D5952" />
            <rect x="128" y="16" width="8" height="40" fill="#5D5952" />
            <rect x="34" y="-6" width="44" height="8" rx="1" fill="#FDFCF7" stroke="#537A96" strokeWidth="1.2" />
          </g>
          <g transform="translate(292, 212)">
            <rect x="0" y="0" width="150" height="16" rx="3" fill="#B98756" stroke="#8A6039" strokeWidth="1.5" />
            <rect x="14" y="16" width="8" height="40" fill="#5D5952" />
            <rect x="128" y="16" width="8" height="40" fill="#5D5952" />
            {analysis.location === 'atelier_maquette' && (
              <>
                <rect x="26" y="-22" width="96" height="22" rx="2" fill="#FFFDF7" stroke="#3D7C6B" strokeWidth="1.5" />
                <circle cx="52" cy="-11" r="5" fill="#E39D3E" />
                <circle cx="94" cy="-11" r="5" fill="#467A55" />
              </>
            )}
          </g>
        </g>
      );
    }
  }
}

function ScenePropOverlay({ prop }: { prop: SceneAnalysis['prop'] }) {
  switch (prop) {
    case 'smartphone':
      return (
        <g transform="translate(260, 152)">
          {/* Soft notification glow */}
          <circle cx="0" cy="0" r="30" fill="#5B85C7" opacity="0.16" />
          {/* Smartphone body */}
          <rect x="-15" y="-24" width="30" height="48" rx="5" fill="#232B38" stroke="#4D5C73" strokeWidth="1.6" />
          <rect x="-12" y="-19" width="24" height="36" rx="2.5" fill="#D5E5F7" />
          {/* Chat notification bubbles inside screen */}
          <rect x="-9" y="-13" width="14" height="6" rx="2" fill="#FFFFFF" />
          <rect x="-5" y="-4" width="14" height="7" rx="2" fill="#E8A852" />
          <rect x="-9" y="6" width="12" height="5" rx="2" fill="#FFFFFF" />
          {/* Alert badge */}
          <circle cx="15" cy="-21" r="7" fill="#D9533B" stroke="#FFFFFF" strokeWidth="1.5" />
          <text x="15" y="-18" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#FFFFFF">
            !
          </text>
        </g>
      );
    case 'ordinateur':
      return (
        <g transform="translate(260, 260)">
          <rect x="-24" y="-16" width="48" height="28" rx="3" fill="#2F3B45" />
          <rect x="-20" y="-12" width="40" height="20" rx="1.5" fill="#B8D8EA" />
          <rect x="-28" y="12" width="56" height="5" rx="2" fill="#52606B" />
        </g>
      );
    case 'charte_phare':
      return (
        <g transform="translate(260, 152)">
          <rect x="-38" y="-20" width="76" height="40" rx="4" fill="#FFFDF6" stroke="#3B335E" strokeWidth="2.4" />
          <text x="0" y="-4" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#3B335E">
            pHARe · 3018
          </text>
          <text x="0" y="9" textAnchor="middle" fontSize="7" fontWeight="600" fill="#2D6A4F">
            Tous solidaires
          </text>
        </g>
      );
    case 'billes':
      return (
        <g transform="translate(260, 276)">
          <circle cx="-18" cy="4" r="6" fill="#3B82A6" />
          <circle cx="-20" cy="2" r="2" fill="#FFFFFF" opacity="0.7" />
          <circle cx="0" cy="0" r="6.5" fill="#E07A3F" />
          <circle cx="-2" cy="-2" r="2" fill="#FFFFFF" opacity="0.7" />
          <circle cx="18" cy="5" r="5.5" fill="#4C9A70" />
          <circle cx="16" cy="3" r="1.8" fill="#FFFFFF" opacity="0.7" />
        </g>
      );
    case 'ballon':
      return (
        <g transform="translate(264, 266)">
          <circle cx="0" cy="0" r="15" fill="#E05A47" stroke="#9F3627" strokeWidth="1.5" />
          <path d="M -12 -6 Q 0 2 12 -6" fill="none" stroke="#F8D8B8" strokeWidth="1.8" />
          <path d="M -12 6 Q 0 -2 12 6" fill="none" stroke="#F8D8B8" strokeWidth="1.8" />
        </g>
      );
    case 'diplome':
      return (
        <g transform="translate(260, 152)">
          <rect x="-34" y="-20" width="68" height="40" rx="4" fill="#FFFDF6" stroke="#C89234" strokeWidth="2.5" />
          <line x1="-22" y1="-6" x2="22" y2="-6" stroke="#7A6B58" strokeWidth="2" />
          <line x1="-18" y1="4" x2="18" y2="4" stroke="#A69784" strokeWidth="1.8" />
          <circle cx="18" cy="14" r="7" fill="#D95D39" />
          <circle cx="18" cy="14" r="3.5" fill="#F4C95D" />
        </g>
      );
    case 'carte_orientation':
      return (
        <g transform="translate(258, 250)">
          <polygon points="-24,-10 0,-16 24,-10 20,16 -4,10 -28,16" fill="#FAF5E6" stroke="#8C6D46" strokeWidth="1.5" />
          <path d="M -16 4 L -2 -4 L 12 6" fill="none" stroke="#D95D39" strokeWidth="2" strokeDasharray="3 2" />
          <circle cx="12" cy="6" r="3" fill="#D95D39" />
        </g>
      );
    case 'trousse_regle':
      return (
        <g transform="translate(245, 276)">
          <rect x="-24" y="-4" width="48" height="8" rx="1.5" fill="#F2C85B" stroke="#B58927" strokeWidth="1.2" transform="rotate(-8)" />
          <rect x="20" y="2" width="26" height="4" rx="2" fill="#3B6E96" transform="rotate(14)" />
        </g>
      );
    case 'peinture':
      return (
        <g transform="translate(260, 270)">
          <ellipse cx="0" cy="8" rx="22" ry="7" fill="#4682A9" opacity="0.72" />
          <rect x="-10" y="-12" width="16" height="18" rx="2" fill="#D6D1C7" stroke="#6E6A63" strokeWidth="1.5" transform="rotate(28)" />
        </g>
      );
    case 'bd':
      return (
        <g transform="translate(260, 260)">
          <rect x="-22" y="-12" width="22" height="26" rx="2" fill="#FAF6EE" stroke="#366287" strokeWidth="2" />
          <rect x="0" y="-12" width="22" height="26" rx="2" fill="#FAF6EE" stroke="#366287" strokeWidth="2" />
          <rect x="-18" y="-8" width="14" height="8" fill="#E8A84E" opacity="0.8" />
          <rect x="4" y="-8" width="14" height="12" fill="#599B7F" opacity="0.8" />
        </g>
      );
    default:
      return null;
  }
}

export const SceneIllustration: React.FC<SceneIllustrationProps> = ({
  paragraph,
  bookTitle,
  bookGrade = 'CM1',
  bookId = 'cm1-ombre-de-la-cour',
}) => {
  const analysis = useMemo(() => analyzeParagraphScene(paragraph), [paragraph]);
  const [aiImageUrl, setAiImageUrl] = useState<string | null>(null);
  const isOmbreBook = bookId === 'cm1-ombre-de-la-cour';
  const isGroupePriveBook = bookId === '4eme-le-groupe-prive';

  useEffect(() => {
    const controller = new AbortController();
    setAiImageUrl(null);

    fetchOptionalAiIllustration(paragraph.id, analysis, controller.signal).then((url) => {
      if (url && !controller.signal.aborted) {
        setAiImageUrl(url);
      }
    });

    return () => controller.abort();
  }, [paragraph.id, analysis]);

  const pal = MOOD_PALETTES[analysis.mood];
  const protagonistExpression =
    analysis.mood === 'warm' || analysis.mood === 'festive' || analysis.mood === 'hopeful'
      ? 'happy'
      : analysis.mood === 'sad'
        ? 'sad'
        : 'neutral';

  const isSoloBedroomScene = isGroupePriveBook && analysis.location === 'maison_soir';

  // Primary-school (CM1) characters
  const hasSamy = analysis.characters.includes('samy');
  const hasHugo = analysis.characters.includes('hugo');
  const hasLea = analysis.characters.includes('lea');
  const hasTeacher = analysis.characters.includes('mme_martin');
  const hasDirector = analysis.characters.includes('directeur');

  // Middle-school (4ème) characters (classmates aren't physically in the teen's bedroom at night)
  const hasChloe = !isSoloBedroomScene && analysis.characters.includes('chloe');
  const hasEnzo = !isSoloBedroomScene && analysis.characters.includes('enzo');
  const hasSarah = !isSoloBedroomScene && analysis.characters.includes('sarah');
  const hasCpe = !isSoloBedroomScene && analysis.characters.includes('cpe');
  const hasProfCollege = !isSoloBedroomScene && analysis.characters.includes('prof_college');

  const hasFriends = !isSoloBedroomScene && analysis.characters.includes('amis');
  const hasParents = analysis.characters.includes('parents');

  const hasLeftAdult = hasTeacher || hasCpe || hasProfCollege;

  const captionLocation = useMemo(() => {
    if (isOmbreBook) return analysis.locationLabel;
    if (isGroupePriveBook) {
      switch (analysis.location) {
        case 'classe':
          return 'Salle 204 · Classe de 4ème B';
        case 'cour_recreation':
          return 'La cour du collège Jean Moulin';
        case 'cantine':
          return 'Le self du collège Jean Moulin';
        case 'conseil_eleves':
          return 'Heure de vie de classe · Programme pHARe';
        case 'portail_sortie':
          return 'Devant le portail du collège Jean Moulin';
        case 'couloir_portemanteaux':
          return 'Le couloir et les casiers · Collège';
        case 'maison_soir':
          return 'Dans ta chambre · Le soir';
        default:
          return analysis.locationLabel;
      }
    }
    return analysis.locationLabel
      .replace(/de CM1/g, `de ${bookGrade}`)
      .replace(/de Mme Martin/g, '')
      .replace(/du Marronnier/g, /ème$/.test(bookGrade) ? 'du collège' : 'de l’école')
      .trim();
  }, [analysis.location, analysis.locationLabel, bookGrade, isGroupePriveBook, isOmbreBook]);

  return (
    <figure className="w-full" data-testid="scene-illustration">
      <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-[#DED4C3] bg-[#F2ECE0] shadow-inner">
        {aiImageUrl ? (
          <img
            src={aiImageUrl}
            alt={`Illustration du paragraphe ${paragraph.id} — ${captionLocation}`}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
            onError={() => setAiImageUrl(null)}
          />
        ) : (
          <svg
            viewBox="0 0 520 320"
            className="w-full h-full block"
            role="img"
            aria-label={`Illustration de la scène : ${captionLocation}`}
          >
            <defs>
              <linearGradient id={`skyGrad-${analysis.mood}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={pal.skyTop} />
                <stop offset="100%" stopColor={pal.skyBottom} />
              </linearGradient>
              <radialGradient id="paperVignette" cx="50%" cy="50%" r="65%">
                <stop offset="70%" stopColor="rgba(255,255,255,0)" />
                <stop offset="100%" stopColor="rgba(72,56,36,0.12)" />
              </radialGradient>
            </defs>

            {/* Environment Backdrop */}
            <SceneBackdrop
              analysis={analysis}
              bookGrade={bookGrade}
              isOmbreBook={isOmbreBook}
              isGroupePriveBook={isGroupePriveBook}
            />

            {/* Adults */}
            {hasDirector && (
              <CharacterFigure
                x={258}
                y={192}
                shirt="#394B59"
                hair="#6C6A67"
                isAdult
                hasGlasses
                expression="concerned"
                label={isOmbreBook ? 'M. Bernard' : 'Direction'}
              />
            )}

            {hasCpe && !hasDirector && (
              <CharacterFigure
                x={108}
                y={208}
                shirt="#3B335E"
                hair="#4F3B32"
                isAdult
                hasGlasses
                expression={analysis.mood === 'festive' || analysis.mood === 'warm' ? 'happy' : 'concerned'}
                label="Mme Bernard"
              />
            )}

            {!hasCpe && !hasDirector && (hasTeacher || hasProfCollege) && (
              <CharacterFigure
                x={108}
                y={210}
                shirt="#3D7263"
                hair="#6B442A"
                isAdult
                hasGlasses
                expression={analysis.mood === 'tense' ? 'concerned' : 'happy'}
                label={isOmbreBook ? 'Mme Martin' : 'Professeur'}
              />
            )}

            {/* Central classmate (Samy for CM1, Chloé for 4ème when relevant) */}
            {isGroupePriveBook ? (
              hasChloe || analysis.location !== 'maison_soir' ? (
                <CharacterFigure
                  x={hasLeftAdult ? 186 : analysis.mood === 'sad' ? 148 : 204}
                  y={224}
                  shirt="#3C7D78"
                  hair="#32231E"
                  hasBackpack={analysis.location === 'portail_sortie' || analysis.location === 'couloir_portemanteaux'}
                  expression={protagonistExpression}
                  waving={analysis.mood === 'festive' || analysis.mood === 'warm'}
                  label="Chloé"
                />
              ) : null
            ) : (
              <CharacterFigure
                x={hasLeftAdult ? 184 : analysis.mood === 'sad' ? 148 : 212}
                y={224}
                shirt="#467599"
                hair="#3B2B22"
                hasBackpack={analysis.location === 'rang_entree' || analysis.location === 'portail_sortie'}
                expression={protagonistExpression}
                waving={analysis.mood === 'festive' || analysis.mood === 'warm'}
                label={hasSamy ? 'Samy' : 'Camarade'}
              />
            )}

            {/* Player / Narrator ally figure */}
            {!(analysis.endingTone === 'negative') && (
              <CharacterFigure
                x={isGroupePriveBook && analysis.location === 'maison_soir' && !hasChloe ? 260 : 278}
                y={226}
                shirt="#D68C45"
                hair="#593B28"
                facing={-1}
                expression={
                  analysis.mood === 'warm' || analysis.mood === 'festive'
                    ? 'happy'
                    : analysis.mood === 'tense' || analysis.mood === 'sad'
                      ? 'concerned'
                      : 'neutral'
                }
                waving={analysis.mood === 'warm' || analysis.mood === 'festive'}
                label="Toi"
              />
            )}

            {/* CM1 antagonists (Hugo & Léa) */}
            {hasHugo && (
              <CharacterFigure
                x={392}
                y={224}
                shirt="#B84A39"
                hair="#4F3727"
                facing={-1}
                expression={analysis.mood === 'festive' ? 'happy' : 'smirk'}
                label="Hugo"
              />
            )}

            {hasLea && (
              <CharacterFigure
                x={448}
                y={226}
                shirt="#7B527A"
                hair="#8F5C38"
                facing={-1}
                expression={analysis.mood === 'festive' ? 'happy' : 'smirk'}
                label="Léa"
              />
            )}

            {/* 4ème antagonists (Enzo & Sarah) */}
            {hasEnzo && !hasHugo && (
              <CharacterFigure
                x={390}
                y={224}
                shirt="#9E4244"
                hair="#3D2B22"
                facing={-1}
                expression={analysis.mood === 'festive' ? 'neutral' : 'smirk'}
                label="Enzo"
              />
            )}

            {hasSarah && !hasLea && (
              <CharacterFigure
                x={448}
                y={226}
                shirt="#6D4B7A"
                hair="#7A4B2E"
                facing={-1}
                expression={analysis.mood === 'festive' ? 'neutral' : 'smirk'}
                label="Sarah"
              />
            )}

            {/* Supportive Classmates when no crowding on the right */}
            {hasFriends && !hasLea && !hasSarah && (
              <CharacterFigure
                x={hasHugo || hasEnzo ? 340 : 382}
                y={226}
                shirt="#4D8A6B"
                hair="#2F2623"
                skin="#D49E72"
                facing={-1}
                expression="happy"
                label={isOmbreBook ? 'Yasmine' : 'Élèves'}
              />
            )}

            {hasParents && !hasDirector && !hasLeftAdult && (
              <CharacterFigure
                x={116}
                y={208}
                shirt="#7C5642"
                hair="#3D2C22"
                isAdult
                expression="happy"
                label="Parents"
              />
            )}

            {/* Props */}
            <ScenePropOverlay prop={analysis.prop} />

            {/* Subtle warm storybook paper vignette */}
            <rect width="520" height="320" fill="url(#paperVignette)" pointerEvents="none" />
          </svg>
        )}
      </div>

      <figcaption className="mt-3 flex items-center justify-between gap-3 text-xs text-[#5D564C]">
        <span className="truncate font-medium">{captionLocation}</span>
        <span className="shrink-0 tabular-nums text-[#786F63]">
          {bookTitle}
          {isOmbreBook ? ` · Jour ${analysis.dayNumber}` : ` · ${bookGrade}`}
        </span>
      </figcaption>
    </figure>
  );
};
