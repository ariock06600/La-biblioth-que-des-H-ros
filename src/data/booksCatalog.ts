import type { BookData, ShelfDefinition } from '../types/book';
import { cm1OmbreDeLaCour } from './cm1_ombre_de_la_cour';
import { cm1LaRumeurQuiCourt } from './cm1_la_rumeur_qui_court';
import { cm1LeMysterieuxCasier } from './cm1_le_mysterieux_casier';
import { quatriemeGroupePrive } from './quatrieme_groupe_prive';

export const LIBRARY_SHELVES: ShelfDefinition[] = [
  {
    grade: 'CE2',
    section: 'primaire',
    cycle: 'Cycle 2',
    ageRange: '8-9 ans',
    shortLabel: 'CE2',
  },
  {
    grade: 'CM1',
    section: 'primaire',
    cycle: 'Cycle 3',
    ageRange: '9-10 ans',
    shortLabel: 'CM1',
  },
  {
    grade: 'CM2',
    section: 'primaire',
    cycle: 'Cycle 3',
    ageRange: '10-11 ans',
    shortLabel: 'CM2',
  },
  {
    grade: '6ème',
    section: 'college',
    cycle: 'Cycle 3',
    ageRange: '11-12 ans',
    shortLabel: '6ème',
  },
  {
    grade: '5ème',
    section: 'college',
    cycle: 'Cycle 4',
    ageRange: '12-13 ans',
    shortLabel: '5ème',
  },
  {
    grade: '4ème',
    section: 'college',
    cycle: 'Cycle 4',
    ageRange: '13-14 ans',
    shortLabel: '4ème',
  },
  {
    grade: '3ème',
    section: 'college',
    cycle: 'Cycle 4',
    ageRange: '14-15 ans',
    shortLabel: '3ème',
  },
];

export const INITIAL_BOOKS: BookData[] = [
  cm1OmbreDeLaCour,
  cm1LaRumeurQuiCourt,
  cm1LeMysterieuxCasier,
  quatriemeGroupePrive,
];
