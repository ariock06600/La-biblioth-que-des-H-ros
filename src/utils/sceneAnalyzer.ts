import type { BookParagraph } from '../types/book';

export type SceneLocation =
  | 'rang_entree'
  | 'classe'
  | 'cour_recreation'
  | 'cantine'
  | 'parc_eps'
  | 'bureau_directeur'
  | 'bureau_cpe'
  | 'infirmerie'
  | 'conseil_eleves'
  | 'atelier_maquette'
  | 'salle_info'
  | 'foyer_college'
  | 'fete_ecole'
  | 'maison_soir'
  | 'portail_sortie'
  | 'couloir_portemanteaux';

export type SceneMood = 'tense' | 'warm' | 'sad' | 'hopeful' | 'festive' | 'neutral';

export type SceneProp =
  | 'billes'
  | 'ballon'
  | 'plateau_pai'
  | 'carte_orientation'
  | 'maquette_affiche'
  | 'diplome'
  | 'bd'
  | 'trousse_regle'
  | 'peinture'
  | 'fanions'
  | 'manteau'
  | 'chamboule_tout'
  | 'smartphone'
  | 'ordinateur'
  | 'charte_phare'
  | 'charte_cour'
  | 'mur_qualites'
  | 'cartes'
  | 'mot_plie'
  | 'journal_classe'
  | 'none';

export type SceneCharacter =
  | 'samy'
  | 'hugo'
  | 'lea'
  | 'mme_martin'
  | 'directeur'
  | 'chloe'
  | 'enzo'
  | 'sarah'
  | 'cpe'
  | 'prof_college'
  | 'surveillant'
  | 'noe'
  | 'lucas'
  | 'leo'
  | 'm_moreau'
  | 'ines'
  | 'maxime'
  | 'mme_girault'
  | 'lina'
  | 'sami'
  | 'nathan'
  | 'maya'
  | 'theo'
  | 'clara'
  | 'amis'
  | 'parents';

export interface SceneAnalysis {
  location: SceneLocation;
  locationLabel: string;
  mood: SceneMood;
  timeOfDay: 'morning' | 'noon' | 'afternoon' | 'evening';
  characters: SceneCharacter[];
  prop: SceneProp;
  dayNumber: 1 | 2 | 3;
  endingTone?: 'negative' | 'mitigee' | 'positive';
  promptDescription: string;
}

const LOCATION_LABELS: Record<SceneLocation, string> = {
  rang_entree: 'Devant la classe de CM1 · Le rang du matin',
  classe: 'La salle de classe de Mme Martin',
  cour_recreation: 'La cour de l’école du Marronnier',
  cantine: 'Le réfectoire de la cantine',
  parc_eps: 'Le parc · Course d’orientation (EPS)',
  bureau_directeur: 'Le bureau de M. Bernard, le directeur',
  bureau_cpe: 'Bureau de la CPE · Vie Scolaire',
  infirmerie: 'L’infirmerie de l’établissement',
  conseil_eleves: 'Le conseil d’élèves autour du grand tapis',
  atelier_maquette: 'L’atelier maquette & affiches',
  salle_info: 'La salle informatique · Cours de technologie',
  foyer_college: 'Le foyer des élèves · Pause méridienne',
  fete_ecole: 'La fête de l’école du Marronnier',
  maison_soir: 'À la maison · Le soir',
  portail_sortie: 'Devant le portail de l’établissement',
  couloir_portemanteaux: 'Le couloir et les casiers',
};

/**
 * Analyzes a paragraph's text, ID, and ending metadata to derive the exact
 * visual scene (location, mood, characters, props, lighting) for rich dynamic
 * storybook SVG illustration rendering.
 */
export function analyzeParagraphScene(paragraph: BookParagraph): SceneAnalysis {
  const bodyLow = paragraph.text.toLowerCase();
  const text = `${paragraph.text} ${paragraph.choices.map((c) => c.text).join(' ')}`.toLowerCase();
  const id = paragraph.id;

  // Determine story day
  let dayNumber: 1 | 2 | 3 = 1;
  if (id >= 103 || /jour\s*3|fête\s+de\s+l'école|kermesse|vacances|diplôme|mercredi/i.test(text)) {
    dayNumber = 3;
  } else if (id >= 61 || /jour\s*2|mardi/i.test(text)) {
    dayNumber = 2;
  }

  // Determine location by strong contextual cues
  let location: SceneLocation = 'classe';

  if (/\bcpe\b|mme\s+bernard|vie\s+scolaire/.test(bodyLow)) {
    location = 'bureau_cpe';
  } else if (/bureau\s+(du|de\s+m\.\s+bernard|de\s+la\s+direction)|directeur|\bprincipal\b/.test(bodyLow)) {
    location = 'bureau_directeur';
  } else if (/infirmerie|infirmière|médicament/.test(bodyLow)) {
    location = 'infirmerie';
  } else if (/salle\s+informatique|poste\s+d['’]ordinateur|postes\s+d['’]ordinateurs|technologie/.test(bodyLow)) {
    location = 'salle_info';
  } else if (/foyer|baby-foot/.test(bodyLow)) {
    location = 'foyer_college';
  } else if (
    /tapis|conseil\s+d['’]élèves|vie\s+de\s+classe|ambassadeur|phare|atelier\s+de\s+sensibilisation|téléphone\s+arabe|séance\s+d['’]enseignement\s+moral/.test(
      bodyLow
    )
  ) {
    location = 'conseil_eleves';
  } else if (
    /kermesse|chamboule-tout|fanions|fête\s+de\s+l['’]école|stand|diplôme|goûter\s+d['’]adieu/.test(
      bodyLow
    )
  ) {
    location = 'fete_ecole';
  } else if (
    /téléphone\s+vibre|sur\s+ton\s+bureau|dans\s+ta\s+chambre|dimanche\s+soir|23h|de\s+retour\s+chez\s+toi|soirée|goûter|nuit|réveil|devoirs|endors|couches|rentres\s+chez\s+toi/.test(
      bodyLow
    )
  ) {
    location = 'maison_soir';
  } else if (
    /course\s+d['’]orientation|balise|chronométreur|parc\s+de\s+l['’]école|gymnase/.test(bodyLow) ||
    (/\beps\b/.test(bodyLow) && !/vendredi|photo|cliché|montage|matériel/.test(bodyLow))
  ) {
    location = 'parc_eps';
  } else if (
    /cantine|réfectoire|refectoire|\bself\b|plateau|dessert|repas|déjeuner|épluchures/.test(
      bodyLow
    )
  ) {
    location = 'cantine';
  } else if (
    /maquette|affiche|atelier|peinture|croquis|panneau|feutres|exposé\s+des\s+sciences|journal\s+de\s+classe|journal\s+anti-rumeur|charte\s+du\s+bon\s+camarade/.test(
      bodyLow
    )
  ) {
    location = 'atelier_maquette';
  } else if (
    (/portemanteau|porte-manteau|cintre|casier|couloir|escalier|palier/.test(bodyLow) ||
      (/manteau/.test(bodyLow) && !/une\s+fois\s+dehors|terrain\s+central/.test(bodyLow)))
  ) {
    location = 'couloir_portemanteaux';
  } else if (/portail|grille|voiture|trottoir|maman\s+de\s+samy|père|sortie\s+du\s+collège/.test(bodyLow)) {
    location = 'portail_sortie';
  } else if (
    /rangé\s+devant|rang\s+du\s+matin|rangement\s+du\s+matin|rangent\s+deux\s+par\s+deux|dans\s+le\s+rang\s+de\s+la\s+classe/.test(
      bodyLow
    )
  ) {
    location = 'rang_entree';
  } else if (
    /cour|récréation|préau|ballon|billes|banc|marronnier|chat\s+perché|terrain|bac\s+à\s+sable/.test(
      bodyLow
    )
  ) {
    location = 'cour_recreation';
  } else {
    location = 'classe';
  }

  // Override endings for clear symbolic scenes
  if (paragraph.isEnding && paragraph.ending) {
    const isCollegeStory = /chloé|enzo|collège|mme\s+bernard|mme\s+laurent|groupe\s+privé/.test(bodyLow);
    const isRumeurStory = /noé|tilleuls|m\.\s+moreau|3\s+filtres|journal\s+anti-rumeur/.test(bodyLow);
    const isCasierStory = /inès|érables|mme\s+girault|casier/.test(bodyLow);
    const isRecreationStory = /platanes|attelle|passeurs?\s+relais|charte\s+de\s+la\s+cour|ambassadeurs?/.test(bodyLow);
    const isCerisiersStory = /cerisiers|maya|théo|clara|mur\s+des\s+qualités|boîte\s+à\s+mots\s+gentils/.test(bodyLow);
    if (paragraph.ending.tone === 'negative') {
      location = isCasierStory || isCerisiersStory
        ? /cour/.test(bodyLow) && !/couloir|casiers|porte-manteau/.test(bodyLow)
          ? 'cour_recreation'
          : 'couloir_portemanteaux'
        : isRecreationStory
          ? /classe|tableau|débats/.test(bodyLow)
            ? 'classe'
            : 'cour_recreation'
          : /classe|salle/.test(bodyLow)
            ? 'classe'
            : 'cour_recreation';
    } else if (paragraph.ending.tone === 'positive') {
      if (isCollegeStory) {
        location = /phare|charte|conseil|classe|collège/.test(bodyLow)
          ? 'conseil_eleves'
          : 'cour_recreation';
      } else if (isRumeurStory) {
        location = /journal|affiche|3\s+filtres|charte/.test(bodyLow)
          ? 'atelier_maquette'
          : 'cour_recreation';
      } else if (isCasierStory) {
        location = /club\s+de\s+dessin|atelier|dessin/.test(bodyLow)
          ? 'atelier_maquette'
          : /casier|couloir/.test(bodyLow)
            ? 'couloir_portemanteaux'
            : 'cour_recreation';
      } else if (isRecreationStory) {
        location = /charte\s+de\s+la\s+cour/.test(bodyLow)
          ? 'conseil_eleves'
          : 'cour_recreation';
      } else if (isCerisiersStory) {
        location = /mur\s+des\s+qualités|fresque|couloir/.test(bodyLow)
          ? 'couloir_portemanteaux'
          : /cour|jeux\s+collectifs/.test(bodyLow)
            ? 'cour_recreation'
            : 'classe';
      } else {
        location = /classe|diplôme|fête|marronnier/.test(bodyLow)
          ? 'fete_ecole'
          : 'cour_recreation';
      }
    }
  }

  // Determine mood — prioritize tense/sad conflict cues over incidental words
  let mood: SceneMood = 'neutral';
  if (paragraph.isEnding && paragraph.ending) {
    mood =
      paragraph.ending.tone === 'positive'
        ? 'festive'
        : paragraph.ending.tone === 'negative'
          ? 'sad'
          : 'tense';
  } else if (
    /larme|tristesse|isolé|replié|honte|lâche|blessé|humilié|humiliant|pâlir|douleur|baisse\s+la\s+tête|étouffent\s+un\s+rire|teint\s+pâle|effondr|sanglot|anxieu|angoiss|boule\s+au\s+ventre|détresse|prostré/.test(
      bodyLow
    )
  ) {
    mood = 'sad';
  } else if (
    /dispute|crie|regard\s+noir|tendue|bouscul|colère|sifflant|énervé|provoqu|casse|tumulte|moque|fantôme|insult|menac|malaise|convoqu|sanction|rumeur|viral|voleur|méfiant|étrange|chuchot|calomnie/.test(
      bodyLow
    )
  ) {
    mood = 'tense';
  } else if (
    /sourire|rayonne|fier|joyeuse|applaudit|félicite|super|amitié|enthousiasme|diplôme|fanions|remercie|solidaire|bravo|radieuse/.test(
      bodyLow
    )
  ) {
    mood = location === 'fete_ecole' ? 'festive' : 'warm';
  } else if (/espoir|apais|réfléchi|demain|progrès|soulagé|rassur|protég|vérité/.test(bodyLow)) {
    mood = 'hopeful';
  }

  // Determine time of day
  let timeOfDay: 'morning' | 'noon' | 'afternoon' | 'evening' = 'morning';
  if (location === 'maison_soir' || /23h|dimanche\s+soir|ce\s+soir|nuit/.test(bodyLow)) {
    timeOfDay = 'evening';
  } else if (location === 'cantine' || location === 'foyer_college' || /midi|11h45|12h|déjeuner/.test(bodyLow)) {
    timeOfDay = 'noon';
  } else if (
    location === 'portail_sortie' ||
    /16h30|14h30|après-midi|15h30|13h30|17h/.test(bodyLow)
  ) {
    timeOfDay = 'afternoon';
  }

  // Characters present
  const characters: SceneCharacter[] = [];
  if (/samy/.test(bodyLow)) characters.push('samy');
  if (/hugo/.test(bodyLow)) characters.push('hugo');
  if (/léa/.test(bodyLow)) characters.push('lea');
  if (/mme\s+martin|maîtresse/.test(bodyLow)) characters.push('mme_martin');
  if (/m\.\s+bernard|directeur|\bprincipal\b/.test(bodyLow)) characters.push('directeur');
  if (/chloé/.test(bodyLow)) characters.push('chloe');
  if (/enzo/.test(bodyLow)) characters.push('enzo');
  if (/sarah/.test(bodyLow)) characters.push('sarah');
  if (/\bcpe\b|mme\s+bernard/.test(bodyLow)) characters.push('cpe');
  if (/mme\s+laurent|m\.\s+lemaire|m\.\s+thomas|professeur|prof\b/.test(bodyLow)) {
    characters.push('prof_college');
  }
  if (/surveillant|aed|\bmarc\b/.test(bodyLow)) characters.push('surveillant');
  if (/noé/.test(bodyLow)) characters.push('noe');
  if (/lucas/.test(bodyLow)) characters.push('lucas');
  if (/léo/.test(bodyLow)) characters.push('leo');
  if (/m\.\s+moreau|le\s+maître/.test(bodyLow)) characters.push('m_moreau');
  if (/inès/.test(bodyLow)) characters.push('ines');
  if (/maxime/.test(bodyLow)) characters.push('maxime');
  if (/mme\s+girault|la\s+maîtresse|l['’]enseignante/.test(bodyLow)) characters.push('mme_girault');
  if (/\blina\b/.test(bodyLow)) characters.push('lina');
  if (/\bsami\b/.test(bodyLow)) characters.push('sami');
  if (/\bnathan\b/.test(bodyLow)) characters.push('nathan');
  if (/\bmaya\b/.test(bodyLow)) characters.push('maya');
  if (/\bthéo\b/.test(bodyLow)) characters.push('theo');
  if (/\bclara\b/.test(bodyLow)) characters.push('clara');
  if (/thomas|yasmine|tom\b|antoine|jules|paul|camarades|amis|équipe|classe|élèves|délégué/.test(bodyLow)) {
    characters.push('amis');
  }
  if (/maman|père|parents|famille/.test(bodyLow)) characters.push('parents');

  // Featured prop
  let prop: SceneProp = 'none';
  if (/boîte\s+à\s+mots\s+gentils|mur\s+des\s+qualités/.test(bodyLow)) prop = 'mur_qualites';
  else if (/billes/.test(bodyLow)) prop = 'billes';
  else if (/ballon|balle\s+(?:au|en\s+mousse)|foot/.test(bodyLow)) prop = 'ballon';
  else if (/plateau|pai|repas/.test(bodyLow) && location === 'cantine') prop = 'plateau_pai';
  else if (/carte\s+d['’]orientation|balise|orientation/.test(bodyLow)) prop = 'carte_orientation';
  else if (/cartes?\s+(?:de\s+collection|super\s+rares|rares|ultra-rare|brillante|volées)|piqué\s+trois\s+cartes/.test(bodyLow)) {
    prop = 'cartes';
  } else if (/petit\s+mot\s+plié|mot\s+plié|papier\s+plié|fais\s+passer|petit\s+papier|billet\s+doux|billets?\s+anonymes?|billets?\s+moqueurs?|encre\s+violette|mot\s+violet/.test(bodyLow)) {
    prop = 'mot_plie';
  } else if (/journal\s+de\s+classe|journal\s+anti-rumeur|charte\s+du\s+bon\s+camarade|3\s+filtres|trois\s+filtres/.test(bodyLow)) {
    prop = 'journal_classe';
  } else if (/diplôme/.test(bodyLow)) prop = 'diplome';
  else if (/peinture/.test(bodyLow)) prop = 'peinture';
  else if (/maquette|croquis/.test(bodyLow)) prop = 'maquette_affiche';
  else if (/bandes?\s+dessinées?|\bbd\b/.test(bodyLow)) prop = 'bd';
  else if (/trousse|règle|stylos/.test(bodyLow)) prop = 'trousse_regle';
  else if (/chamboule-tout/.test(bodyLow)) prop = 'chamboule_tout';
  else if (/fanions/.test(bodyLow)) prop = 'fanions';
  else if (/manteau|cintre|portemanteau|porte-manteau/.test(bodyLow)) prop = 'manteau';
  else if (/charte\s+de\s+la\s+cour|charte\s+officielle|ambassadeurs?\s+de\s+la\s+récréation/.test(bodyLow)) {
    prop = 'charte_cour';
  } else if (/phare|charte|ambassadeur|affiche\s+de\s+sensibilisation/.test(bodyLow)) {
    prop = 'charte_phare';
  } else if (/ordinateur|clavier|salle\s+informatique/.test(bodyLow)) {
    prop = 'ordinateur';
  } else if (
    /téléphone|smartphone|notification|capture\s+d['’]écran|message|emoji|snapchat|whatsapp|groupe\s+privé|montage\s+photo|écran\s+s['’]allume/.test(
      bodyLow
    )
  ) {
    prop = 'smartphone';
  }

  const promptDescription = `Illustration jeunesse chaleureuse style album français, aquarelle et trait doux : ${LOCATION_LABELS[location]}, ambiance ${mood}, personnages (${characters.join(', ')}), scène fidèle au paragraphe ${id}.`;

  return {
    location,
    locationLabel: LOCATION_LABELS[location],
    mood,
    timeOfDay,
    characters,
    prop,
    dayNumber,
    endingTone: paragraph.ending?.tone,
    promptDescription,
  };
}
