import React from 'react';
import { BookOpen } from 'lucide-react';
import type { BookCoverTheme, BookData, ShelfDefinition } from '../types/book';

interface LibraryShelfProps {
  shelf: ShelfDefinition;
  books: BookData[];
  savedProgress: Record<string, number>;
  onOpenBook: (book: BookData) => void;
}

function CoverMotif({ motif, accent }: { motif: BookCoverTheme['motif']; accent: string }) {
  switch (motif) {
    case 'cour':
      return (
        <svg viewBox="0 0 120 72" className="w-full h-14 opacity-90" aria-hidden="true">
          <circle cx="94" cy="20" r="11" fill={accent} opacity="0.9" />
          <path d="M 10 62 Q 60 44 110 62" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="2" />
          <rect x="26" y="34" width="8" height="24" rx="2" fill="rgba(255,255,255,0.35)" />
          <circle cx="30" cy="24" r="15" fill="rgba(255,255,255,0.22)" />
          <circle cx="62" cy="40" r="5" fill="#FFFFFF" opacity="0.88" />
          <path d="M 55 56 C 55 48 69 48 69 56" fill="#FFFFFF" opacity="0.85" />
          <circle cx="78" cy="42" r="4.5" fill={accent} opacity="0.9" />
          <path d="M 72 56 C 72 49 84 49 84 56" fill={accent} opacity="0.85" />
        </svg>
      );
    case 'ecrans':
    case 'reseaux':
      return (
        <svg viewBox="0 0 120 72" className="w-full h-14 opacity-90" aria-hidden="true">
          {/* Phone screen + chat bubbles */}
          <rect
            x="40"
            y="8"
            width="40"
            height="58"
            rx="7"
            fill="rgba(255,255,255,0.16)"
            stroke="rgba(255,255,255,0.52)"
            strokeWidth="1.6"
          />
          <line x1="54" y1="13" x2="66" y2="13" stroke="rgba(255,255,255,0.45)" strokeWidth="1.6" strokeLinecap="round" />
          <rect x="46" y="21" width="24" height="10" rx="4" fill="rgba(255,255,255,0.32)" />
          <rect x="52" y="35" width="22" height="10" rx="4" fill={accent} opacity="0.92" />
          <rect x="46" y="49" width="18" height="8" rx="3.5" fill="rgba(255,255,255,0.25)" />
          <circle cx="84" cy="18" r="6" fill={accent} />
          <text x="84" y="21" textAnchor="middle" fontSize="8" fontWeight="700" fill="#231D38">
            !
          </text>
        </svg>
      );
    case 'rumeur':
      return (
        <svg viewBox="0 0 120 72" className="w-full h-14 opacity-85" aria-hidden="true">
          <rect x="20" y="18" width="46" height="26" rx="8" fill="rgba(255,255,255,0.22)" />
          <rect x="54" y="34" width="46" height="24" rx="8" fill={accent} opacity="0.85" />
          <line x1="30" y1="31" x2="54" y2="31" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 120 72" className="w-full h-14 opacity-85" aria-hidden="true">
          <circle cx="44" cy="34" r="14" fill="rgba(255,255,255,0.2)" />
          <circle cx="76" cy="34" r="14" fill={accent} opacity="0.8" />
          <path d="M 24 58 Q 60 42 96 58" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
        </svg>
      );
  }
}

export const LibraryShelf: React.FC<LibraryShelfProps> = ({
  shelf,
  books,
  savedProgress,
  onOpenBook,
}) => {
  const hasBooks = books.length > 0;

  return (
    <section
      aria-label={`Étagère ${shelf.grade}`}
      className="relative"
      data-testid={`shelf-${shelf.grade}`}
    >
      {/* Shelf Header with School Slate Plaque */}
      <div className="flex flex-wrap items-baseline justify-between gap-4 mb-3">
        <div className="flex items-center gap-3.5">
          <div className="slate-plaque px-4 py-1.5 rounded-md border border-white/15">
            <h3 className="text-base sm:text-lg font-bold tracking-tight text-[#F6F5EF] leading-none">
              {shelf.grade}
            </h3>
          </div>
          <p className="text-sm text-[#585147]">
            <span>{shelf.cycle}</span>
            <span aria-hidden="true" className="mx-2 text-[#A79B8A]">·</span>
            <span>{shelf.ageRange}</span>
          </p>
        </div>

        <span className="text-xs font-medium text-[#766D61] tabular-nums">
          {hasBooks
            ? `${books.length} ${books.length > 1 ? 'livres disponibles' : 'livre disponible'}`
            : 'Étagère libre'}
        </span>
      </div>

      {/* Books standing on the wooden plank */}
      <div className="relative pt-2">
        {hasBooks ? (
          <div className="px-4 sm:px-6 flex items-end gap-5 sm:gap-6 overflow-x-auto pb-0.5">
            {books.map((book) => {
              const currentPara = savedProgress[book.id];
              const hasSavedRun = typeof currentPara === 'number' && currentPara > 1;

              return (
                <button
                  key={book.id}
                  type="button"
                  onClick={() => onOpenBook(book)}
                  aria-label={`Lire « ${book.title} » (${book.grade}, ${book.totalParagraphs} paragraphes)`}
                  className="shelf-book-card group relative shrink-0 text-left rounded-r-lg rounded-l-[3px] w-[196px] sm:w-[216px] h-[264px] shadow-[6px_10px_22px_rgba(38,28,16,0.24)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E5647] cursor-pointer"
                  style={{
                    background: `linear-gradient(155deg, ${book.coverTheme.secondary} 0%, ${book.coverTheme.primary} 100%)`,
                  }}
                >
                  {/* Realistic hardcover spine crease */}
                  <div
                    className="absolute inset-y-0 left-0 w-3.5 rounded-l-[3px]"
                    style={{
                      background:
                        'linear-gradient(90deg, rgba(0,0,0,0.32) 0%, rgba(255,255,255,0.14) 48%, rgba(0,0,0,0.18) 100%)',
                    }}
                    aria-hidden="true"
                  />
                  {/* Subtle page edges on right */}
                  <div
                    className="absolute inset-y-1.5 right-0 w-[3px] bg-gradient-to-b from-[#FAF5EA] via-[#E8DEC9] to-[#FAF5EA] opacity-70 rounded-r-sm"
                    aria-hidden="true"
                  />

                  <div className="relative h-full pl-5 pr-3.5 py-4 flex flex-col justify-between text-[#FAF8F2]">
                    {/* Top metadata line */}
                    <div className="flex items-center justify-between gap-2 text-[11px] font-semibold tracking-wide text-white/85">
                      <span>{book.grade}</span>
                      <span className="tabular-nums">{book.totalParagraphs} §</span>
                    </div>

                    {/* Center cover illustration & title */}
                    <div className="my-auto py-1">
                      <div className="mb-1.5">
                        <CoverMotif motif={book.coverTheme.motif} accent={book.coverTheme.accent} />
                      </div>

                      <h4 className="font-display font-bold leading-snug text-white text-[17.5px]">
                        {book.title}
                      </h4>
                      <p className="mt-1 text-[11.5px] leading-snug text-white/80 line-clamp-2">
                        {book.theme}
                      </p>
                    </div>

                    {/* Bottom action cue */}
                    <div className="pt-2 border-t border-white/15 flex items-center justify-between gap-1 text-[11.5px] font-semibold">
                      <span className="inline-flex items-center gap-1.5 text-[#FBE6B5]">
                        <BookOpen className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span className="truncate">
                          {hasSavedRun ? `Reprendre (§ ${currentPara})` : 'Ouvrir le livre'}
                        </span>
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        ) : (
          <div className="px-5 sm:px-7 py-5 flex items-center justify-between">
            <p className="text-xs sm:text-sm text-[#7D7467] italic">
              Aucun ouvrage rangé sur cette étagère pour le moment.
            </p>
          </div>
        )}

        {/* Natural Light-Oak Wooden Shelf Plank */}
        <div className="relative -mt-0.5 pointer-events-none" aria-hidden="true">
          <div className="wood-shelf-top h-3 rounded-t-sm mx-0.5" />
          <div className="wood-shelf-front h-4 rounded-b-md" />
          {/* Wooden shelf brackets */}
          <div className="flex justify-between px-10">
            <div className="w-4 h-3 bg-[#9E7647] rounded-b-sm opacity-75" />
            <div className="w-4 h-3 bg-[#9E7647] rounded-b-sm opacity-75" />
          </div>
        </div>
      </div>
    </section>
  );
};
