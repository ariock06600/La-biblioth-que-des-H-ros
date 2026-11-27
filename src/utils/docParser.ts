import type {
  BookChoice,
  BookCoverTheme,
  BookData,
  BookEnding,
  BookParagraph,
  EndingCategory,
  GradeLevel,
  ParsedDocumentResult,
  ParseValidationReport,
  SchoolSection,
} from '../types/book';

const GRADE_META: Record<
  GradeLevel,
  { section: SchoolSection; cycleLabel: string; ageRange: string }
> = {
  CE2: { section: 'primaire', cycleLabel: 'Cycle 2', ageRange: '8-9 ans' },
  CM1: { section: 'primaire', cycleLabel: 'Cycle 3', ageRange: '9-10 ans' },
  CM2: { section: 'primaire', cycleLabel: 'Cycle 3', ageRange: '10-11 ans' },
  '6ème': { section: 'college', cycleLabel: 'Cycle 3', ageRange: '11-12 ans' },
  '5ème': { section: 'college', cycleLabel: 'Cycle 4', ageRange: '12-13 ans' },
  '4ème': { section: 'college', cycleLabel: 'Cycle 4', ageRange: '13-14 ans' },
  '3ème': { section: 'college', cycleLabel: 'Cycle 4', ageRange: '14-15 ans' },
};

const DEFAULT_COVER_THEMES: Record<GradeLevel, BookCoverTheme> = {
  CE2: { primary: '#2D6A4F', secondary: '#40916C', accent: '#F4A261', motif: 'amitie' },
  CM1: { primary: '#1F4B6E', secondary: '#2E6F95', accent: '#E9A84C', motif: 'cour' },
  CM2: { primary: '#7B3F3B', secondary: '#A0554F', accent: '#F2C166', motif: 'rumeur' },
  '6ème': { primary: '#2B4C7E', secondary: '#3E69A8', accent: '#E59F52', motif: 'groupe' },
  '5ème': { primary: '#3A5A5E', secondary: '#4F7A80', accent: '#E6A85C', motif: 'ecrans' },
  '4ème': { primary: '#4A3F6B', secondary: '#655792', accent: '#E8A95B', motif: 'reseaux' },
  '3ème': { primary: '#2F4858', secondary: '#45697E', accent: '#E09F3E', motif: 'citoyen' },
};

export interface ParseOptions {
  title?: string;
  subtitle?: string;
  grade?: GradeLevel;
  theme?: string;
  coverTheme?: BookCoverTheme;
  id?: string;
  isCustom?: boolean;
}

function stripMarkdownBold(str: string): string {
  return str.replace(/\*\*/g, '').replace(/__/g, '').trim();
}

function normalizeLine(line: string): string {
  return line.replace(/\uFEFF/g, '').replace(/\r/g, '').trim();
}

function parseChoiceLine(rawLine: string): BookChoice | null {
  const cleaned = rawLine.replace(/^[\*\-•–—]\s+/, '').trim();
  // Match "... rends-toi au **14**." or "... va au 14." or "... page 14"
  const linkRegex =
    /(?:rends[\s-]toi\s+(?:au|à\s+la\s+section|au\s+paragraphe)|va\s+au|passe\s+au|dirige[\s-]toi\s+vers\s+le)\s+\*{0,2}(\d{1,4})\*{0,2}\.?$/i;
  const match = cleaned.match(linkRegex);
  if (!match) return null;

  const target = parseInt(match[1], 10);
  if (Number.isNaN(target)) return null;

  return {
    text: stripMarkdownBold(cleaned),
    target,
  };
}

function parseEndingCategory(line: string): {
  category: EndingCategory;
  label: string;
  tone: 'negative' | 'mitigee' | 'positive';
} | null {
  const clean = stripMarkdownBold(line);
  const match = clean.match(/^FIN\s*([ABC])\s*[:\-–—]\s*(.+)$/i);
  if (!match) return null;

  const letter = match[1].toUpperCase() as EndingCategory;
  const label = match[2].trim();

  let tone: 'negative' | 'mitigee' | 'positive' = 'mitigee';
  if (letter === 'A' || /négative|isolement|inaction/i.test(label)) {
    tone = 'negative';
  } else if (letter === 'C' || /positive|solidarité|alliance/i.test(label)) {
    tone = 'positive';
  } else {
    tone = 'mitigee';
  }

  return { category: letter, label: `FIN ${letter} : ${label}`, tone };
}

/**
 * Parses a numbered "Livre Dont Vous Êtes le Héros" document (Google Docs export,
 * Markdown, plain text, or extracted DOCX text) into a playable BookData object
 * along with a complete integrity validation report.
 */
export function parseLDVELHDocument(
  rawText: string,
  options: ParseOptions = {}
): ParsedDocumentResult {
  const lines = rawText.split(/\n/).map(normalizeLine);

  // Locate where paragraph 1 starts and where EMC debate section starts
  let firstParagraphLineIdx = -1;
  let debateStartIdx = lines.length;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (
      firstParagraphLineIdx === -1 &&
      /^(?:#{1,4}\s*)?\*{0,2}1\*{0,2}\.?$/.test(line)
    ) {
      firstParagraphLineIdx = i;
    }
    if (
      firstParagraphLineIdx !== -1 &&
      /^(?:Pour\s+en\s+discuter|Questions?\s+de\s+débat|Débat\s+EMC)/i.test(
        stripMarkdownBold(line)
      )
    ) {
      debateStartIdx = i;
      break;
    }
  }

  // Extract header metadata (Title, Subtitle, How to play, Intro)
  const headerLines =
    firstParagraphLineIdx > 0
      ? lines.slice(0, firstParagraphLineIdx).filter((l) => l && !/^_{3,}$|^-{3,}$/.test(l))
      : [];

  let detectedTitle = '';
  let detectedSubtitle = '';
  let howToPlay = '';
  const introParagraphs: string[] = [];

  if (headerLines.length > 0) {
    let mode: 'meta' | 'howto' | 'intro' = 'meta';
    for (let i = 0; i < headerLines.length; i++) {
      const clean = stripMarkdownBold(headerLines[i]);
      if (/^(?:Comment\s+jouer|Pour\s+jouer\s*:?)/i.test(clean)) {
        mode = 'howto';
        continue;
      }
      if (/^(?:L['’]Histoire|Introduction(?:\s*&\s*Règles\s+du\s+jeu)?|Contexte|Le\s+contexte\s*:?|Ton\s+contexte\s*:?)$/i.test(clean)) {
        mode = 'intro';
        continue;
      }
      if (/^(?:Pour\s+commencer\s+l['’]aventure|L['’]aventure\s+commence\s+au\s+paragraphe)/i.test(clean)) {
        continue;
      }
      if (mode === 'meta') {
        if (!detectedTitle) {
          detectedTitle = clean;
        } else if (!detectedSubtitle) {
          detectedSubtitle = clean;
        } else if (/^Bienvenue\s+dans\s+ce\s+roman/i.test(clean)) {
          howToPlay = howToPlay ? `${howToPlay} ${clean}` : clean;
        } else {
          introParagraphs.push(clean);
        }
      } else if (mode === 'howto') {
        howToPlay = howToPlay ? `${howToPlay} ${clean}` : clean;
      } else {
        introParagraphs.push(clean);
      }
    }
  }

  const finalTitle = options.title?.trim() || detectedTitle || 'Nouvelle aventure interactive';
  const finalSubtitle = options.subtitle?.trim() || detectedSubtitle || 'Un livre dont tu es le héros';
  if (!howToPlay) {
    howToPlay =
      'À la fin de chaque paragraphe, choisis ta réaction parmi les propositions. Clique sur ton choix pour tourner la page vers le numéro correspondant.';
  }

  // Parse all numbered paragraphs
  const paragraphs: Record<number, BookParagraph> = {};
  const warnings: string[] = [];

  if (firstParagraphLineIdx === -1) {
    warnings.push(
      'Aucun paragraphe numéroté détecté. Assurez-vous que chaque paragraphe commence par son numéro seul sur une ligne (ex. : 1 ou **1**).'
    );
  } else {
    let currentId: number | null = null;
    let currentBodyLines: string[] = [];
    let currentChoices: BookChoice[] = [];
    let currentEndingMeta: {
      category: EndingCategory;
      label: string;
      tone: 'negative' | 'mitigee' | 'positive';
    } | null = null;
    let currentPedagogicalMessage = '';
    let currentOutro = '';

    const flushCurrent = () => {
      if (currentId === null) return;
      const bodyText = currentBodyLines.join('\n\n').trim();
      const isEnding = Boolean(currentEndingMeta || (currentChoices.length === 0 && currentId >= 2));

      let ending: BookEnding | undefined;
      if (currentEndingMeta) {
        ending = {
          category: currentEndingMeta.category,
          label: currentEndingMeta.label,
          tone: currentEndingMeta.tone,
          pedagogicalMessage:
            currentPedagogicalMessage ||
            'Prends un instant pour réfléchir aux conséquences de tes choix.',
          outro: currentOutro || undefined,
        };
      } else if (isEnding && currentChoices.length === 0) {
        ending = {
          category: 'B',
          label: 'Fin de l’aventure',
          tone: 'mitigee',
          pedagogicalMessage:
            currentPedagogicalMessage ||
            'Tu as atteint une fin de cette histoire. Rejoue pour explorer d’autres chemins !',
          outro: currentOutro || undefined,
        };
      }

      paragraphs[currentId] = {
        id: currentId,
        text: bodyText,
        choices: currentChoices,
        isEnding,
        ending,
      };
    };

    for (let i = firstParagraphLineIdx; i < debateStartIdx; i++) {
      const rawLine = lines[i];
      if (!rawLine) continue;
      if (/^_{3,}$|^---\s*FIN\s+DU\s+LIVRE/i.test(rawLine)) continue;

      // Detect standalone paragraph number header: "1", "**1**", "### 1", "1."
      const headerMatch = rawLine.match(/^(?:#{1,4}\s*)?\*{0,2}(\d{1,4})\*{0,2}\.?$/);
      if (headerMatch) {
        const nextId = parseInt(headerMatch[1], 10);
        // Guard against stray numbers unless it's a valid paragraph id
        if (nextId >= 1 && nextId <= 999) {
          flushCurrent();
          currentId = nextId;
          currentBodyLines = [];
          currentChoices = [];
          currentEndingMeta = null;
          currentPedagogicalMessage = '';
          currentOutro = '';
          continue;
        }
      }

      // Also support inline format like "**1** Le soleil se lève..."
      const inlineHeaderMatch = rawLine.match(/^\*\*(\d{1,4})\*\*\s+(.+)$/);
      if (inlineHeaderMatch) {
        const nextId = parseInt(inlineHeaderMatch[1], 10);
        if (nextId >= 1 && nextId <= 999 && !paragraphs[nextId]) {
          flushCurrent();
          currentId = nextId;
          currentBodyLines = [stripMarkdownBold(inlineHeaderMatch[2])];
          currentChoices = [];
          currentEndingMeta = null;
          currentPedagogicalMessage = '';
          currentOutro = '';
          continue;
        }
      }

      if (currentId === null) continue;

      // Check for choice line
      if (/^[\*\-•–—]\s+/.test(rawLine) || /rends[\s-]toi\s+au\s+\*{0,2}\d+/i.test(rawLine)) {
        const choice = parseChoiceLine(rawLine);
        if (choice) {
          currentChoices.push(choice);
          continue;
        }
      }

      // Check for ending marker (FIN A / FIN B / FIN C)
      const endingMeta = parseEndingCategory(rawLine);
      if (endingMeta) {
        currentEndingMeta = endingMeta;
        continue;
      }

      // Check for pedagogical / civic message
      const cleanLine = stripMarkdownBold(rawLine);
      const pedMatch = cleanLine.match(/^Message\s+(?:pédagogique|civique|pour\s+toi)\s*[:\-–—]\s*(.+)$/i);
      if (pedMatch) {
        currentPedagogicalMessage = pedMatch[1].trim();
        continue;
      }

      // Check for "--- FIN DE L'AVENTURE --- ..." or "--- FIN DU RÉCIT — ... ---" or ending outro sentences
      const outroMatch = cleanLine.match(
        /^-{2,}\s*FIN\s+(?:DE\s+L.+?(?:AVENTURE|HISTOIRE)|DU\s+RÉCIT)\s*[-—–]+\s*(.*?)(?:\s*-{2,})?$/i
      );
      if (outroMatch) {
        currentOutro = outroMatch[1].trim();
        continue;
      }
      if (
        currentEndingMeta &&
        currentPedagogicalMessage &&
        /^(?:C['’]est\s+la\s+fin\s+de\s+ton\s+aventure|C\s+me\s+est\s+la\s+fin\s+de\s+ton\s+aventure|BRAVO\s*!)/i.test(
          cleanLine
        )
      ) {
        currentOutro = cleanLine.replace(/^C\s+me\s+est\s+/i, "C'est ");
        continue;
      }

      currentBodyLines.push(cleanLine);
    }

    flushCurrent();
  }

  // Extract EMC debate questions
  const debateQuestions: string[] = [];
  if (debateStartIdx < lines.length) {
    for (let i = debateStartIdx + 1; i < lines.length; i++) {
      const rawLine = lines[i];
      if (!rawLine || /^_{3,}$|^-{3,}$|^---\s*FIN\s+DU\s+LIVRE/i.test(rawLine)) continue;
      const cleaned = stripMarkdownBold(rawLine)
        .replace(/^[\*\-•–—]\s*/, '')
        .replace(/^\d+[\.\)]\s*/, '')
        .trim();
      if (cleaned.length > 8) {
        debateQuestions.push(cleaned);
      }
    }
  }

  // Validate link integrity
  const report = validateBookGraph(paragraphs, warnings);

  // Detect grade if not explicitly provided
  const grade: GradeLevel = options.grade || detectGradeFromText(rawText) || 'CM1';
  const gradeMeta = GRADE_META[grade];
  const slug = finalTitle
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

  const book: BookData = {
    id: options.id || `custom-${slug || 'livre'}-${Date.now()}`,
    title: finalTitle,
    subtitle: finalSubtitle,
    grade,
    section: gradeMeta.section,
    cycleLabel: gradeMeta.cycleLabel,
    ageRange: gradeMeta.ageRange,
    theme: options.theme || 'EMC · Vivre-ensemble & Empathie',
    howToPlay,
    introduction:
      introParagraphs.length > 0
        ? introParagraphs
        : ['Tes choix vont façonner la suite de cette aventure. Bonne lecture !'],
    paragraphs,
    totalParagraphs: Object.keys(paragraphs).length,
    debateQuestions,
    coverTheme: options.coverTheme || DEFAULT_COVER_THEMES[grade],
    status: 'playable',
    isCustom: options.isCustom ?? true,
  };

  return { book, report };
}

function detectGradeFromText(text: string): GradeLevel | null {
  const sample = text.slice(0, 1500);
  if (/\bCE2\b/i.test(sample)) return 'CE2';
  if (/\bCM1\b/i.test(sample)) return 'CM1';
  if (/\bCM2\b/i.test(sample)) return 'CM2';
  if (/\b6[èe]me\b/i.test(sample)) return '6ème';
  if (/\b5[èe]me\b/i.test(sample)) return '5ème';
  if (/\b4[èe]me\b/i.test(sample)) return '4ème';
  if (/\b3[èe]me\b/i.test(sample)) return '3ème';
  return null;
}

export function validateBookGraph(
  paragraphs: Record<number, BookParagraph>,
  initialWarnings: string[] = []
): ParseValidationReport {
  const ids = Object.keys(paragraphs)
    .map(Number)
    .sort((a, b) => a - b);

  const brokenLinks: Array<{ from: number; target: number; choiceText: string }> = [];
  const referenced = new Set<number>([1]);
  let endingCount = 0;

  for (const id of ids) {
    const p = paragraphs[id];
    if (p.isEnding) {
      endingCount++;
    }
    for (const choice of p.choices) {
      if (!paragraphs[choice.target]) {
        brokenLinks.push({
          from: id,
          target: choice.target,
          choiceText: choice.text,
        });
      } else {
        referenced.add(choice.target);
      }
    }
  }

  const orphanParagraphs = ids.filter((id) => id !== 1 && !referenced.has(id));
  const warnings = [...initialWarnings];

  if (!paragraphs[1]) {
    warnings.push('Le paragraphe de départ (n° 1) est introuvable.');
  }
  if (brokenLinks.length > 0) {
    warnings.push(`${brokenLinks.length} lien(s) pointent vers un paragraphe inexistant.`);
  }

  return {
    totalParagraphs: ids.length,
    endingCount,
    brokenLinks,
    orphanParagraphs,
    warnings,
  };
}
