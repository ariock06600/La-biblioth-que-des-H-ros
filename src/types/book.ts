export type GradeLevel = 'CE2' | 'CM1' | 'CM2' | '6ème' | '5ème' | '4ème' | '3ème';

export type SchoolSection = 'primaire' | 'college';

export type EndingCategory = 'A' | 'B' | 'C';

export interface BookChoice {
  text: string;
  target: number;
}

export interface BookEnding {
  category: EndingCategory;
  label: string;
  tone: 'negative' | 'mitigee' | 'positive';
  pedagogicalMessage: string;
  outro?: string;
}

export interface BookParagraph {
  id: number;
  text: string;
  choices: BookChoice[];
  isEnding?: boolean;
  ending?: BookEnding;
}

export interface BookCoverTheme {
  primary: string;
  secondary: string;
  accent: string;
  motif: 'cour' | 'ecrans' | 'rumeur' | 'groupe' | 'reseaux' | 'amitie' | 'citoyen';
}

export interface BookData {
  id: string;
  title: string;
  subtitle: string;
  grade: GradeLevel;
  section: SchoolSection;
  cycleLabel: string;
  ageRange: string;
  theme: string;
  howToPlay: string;
  introduction: string[];
  paragraphs: Record<number, BookParagraph>;
  totalParagraphs: number;
  debateQuestions: string[];
  coverTheme: BookCoverTheme;
  status: 'playable' | 'upcoming';
  isCustom?: boolean;
  authorNote?: string;
}

export interface ShelfDefinition {
  grade: GradeLevel;
  section: SchoolSection;
  cycle: string;
  ageRange: string;
  shortLabel: string;
}

export interface ParseValidationReport {
  totalParagraphs: number;
  endingCount: number;
  brokenLinks: Array<{ from: number; target: number; choiceText: string }>;
  orphanParagraphs: number[];
  warnings: string[];
}

export interface ParsedDocumentResult {
  book: BookData;
  report: ParseValidationReport;
}
