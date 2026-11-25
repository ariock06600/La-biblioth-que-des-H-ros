import React, { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Award,
  BookOpen,
  Compass,
  Eye,
  MessageCircle,
  Minus,
  Plus,
  RotateCcw,
  Scale,
  Undo2,
} from 'lucide-react';
import type { BookChoice, BookData } from '../types/book';
import { SceneIllustration } from './SceneIllustration';
import { shuffleChoices } from '../utils/shuffleChoices';

interface BookReaderProps {
  book: BookData;
  initialParagraphId?: number;
  onProgressChange: (bookId: string, paragraphId: number) => void;
  onBackToLibrary: () => void;
}

const FONT_SIZE_CLASSES = ['text-[15px]', 'text-[17px]', 'text-[19px]', 'text-[21px]'] as const;

export const BookReader: React.FC<BookReaderProps> = ({
  book,
  initialParagraphId = 0,
  onProgressChange,
  onBackToLibrary,
}) => {
  const [currentId, setCurrentId] = useState<number>(initialParagraphId);
  const [visitNonce, setVisitNonce] = useState<number>(0);
  const [history, setHistory] = useState<number[]>([]);
  const [dyslexiaMode, setDyslexiaMode] = useState<boolean>(false);
  const [fontScaleIdx, setFontScaleIdx] = useState<number>(1);
  const [turnDirection, setTurnDirection] = useState<1 | -1>(1);
  const contentTopRef = useRef<HTMLDivElement>(null);
  const lastOrderByParagraphRef = useRef<Record<number, BookChoice[]>>({});

  const currentParagraph = currentId > 0 ? book.paragraphs[currentId] : null;
  const savedResumeId = initialParagraphId > 1 ? initialParagraphId : null;

  const displayedChoices = useMemo<BookChoice[]>(() => {
    if (!currentParagraph || currentParagraph.isEnding || currentParagraph.choices.length === 0) {
      return [];
    }
    const previousOrder = lastOrderByParagraphRef.current[currentParagraph.id];
    const shuffled = shuffleChoices(currentParagraph.choices, {
      previousOrder,
      getKey: (choice) => `${choice.target}:${choice.text}`,
    });
    lastOrderByParagraphRef.current[currentParagraph.id] = shuffled;
    return shuffled;
  }, [book.id, currentParagraph, visitNonce]);

  useEffect(() => {
    if (currentId > 0) {
      onProgressChange(book.id, currentId);
    }
  }, [book.id, currentId, onProgressChange]);

  const goToParagraph = (targetId: number, pushHistory = true) => {
    if (!book.paragraphs[targetId]) return;
    setTurnDirection(1);
    if (pushHistory && currentId > 0) {
      setHistory((prev) => [...prev, currentId]);
    }
    setCurrentId(targetId);
    setVisitNonce((n) => n + 1);
    contentTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleStepBack = () => {
    if (history.length === 0) return;
    const prevId = history[history.length - 1];
    setTurnDirection(-1);
    setHistory((prev) => prev.slice(0, -1));
    setCurrentId(prevId);
    setVisitNonce((n) => n + 1);
  };

  const handleRestart = () => {
    setTurnDirection(-1);
    setHistory([]);
    setCurrentId(1);
    setVisitNonce((n) => n + 1);
    onProgressChange(book.id, 1);
    contentTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const bodySizeClass = FONT_SIZE_CLASSES[fontScaleIdx];

  return (
    <div
      ref={contentTopRef}
      className={`min-h-screen bg-[#F4F0E6] text-[#1E2524] flex flex-col ${
        dyslexiaMode ? 'dyslexia-mode bg-[#FBF6E9]' : ''
      }`}
      data-testid="book-reader"
    >
      {/* Top Reading Navigation Bar */}
      <header className="sticky top-0 z-30 bg-[#FCFBF7]/95 backdrop-blur-sm border-b border-[#E2D9C8]">
        <div className="max-w-[1280px] mx-auto px-3 sm:px-6 py-2 sm:py-3 flex items-center justify-between gap-2 sm:gap-3">
          {/* Left: Back to library + book info */}
          <div className="flex items-center gap-2.5 sm:gap-4 min-w-0">
            <button
              type="button"
              onClick={onBackToLibrary}
              aria-label="Retour à la bibliothèque"
              className="inline-flex items-center gap-1.5 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold text-[#1E5647] hover:bg-[#1E5647]/8 transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E5647]"
            >
              <ArrowLeft className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span className="hidden sm:inline">Retour à la bibliothèque</span>
              <span className="sm:hidden">Retour</span>
            </button>

            <div className="hidden md:block h-5 w-px bg-[#DFD5C3] shrink-0" aria-hidden="true" />

            <div className="hidden md:block min-w-0">
              <h1 className="font-display text-base lg:text-lg font-bold text-[#1E2524] truncate">
                {book.title}
              </h1>
              <p className="text-xs text-[#615A50] truncate tabular-nums">
                <span className="font-semibold text-[#1E5647]">{book.grade}</span>
                <span aria-hidden="true" className="mx-1.5">·</span>
                <span>
                  {currentId === 0
                    ? 'Introduction'
                    : `§ ${currentId} / ${book.totalParagraphs}`}
                </span>
              </p>
            </div>
          </div>

          {/* Right: Accessibility controls + Restart */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Font size adjuster */}
            <div
              className="inline-flex items-center border border-[#DDD3C1] rounded-lg bg-[#F7F4EC]"
              role="group"
              aria-label="Taille du texte"
            >
              <button
                type="button"
                onClick={() => setFontScaleIdx((v) => Math.max(0, v - 1))}
                disabled={fontScaleIdx === 0}
                aria-label="Réduire la taille du texte"
                className="p-1.5 sm:p-2 text-[#3A352E] hover:bg-[#EAE2D3] disabled:opacity-35 rounded-l-lg transition-colors cursor-pointer"
              >
                <Minus className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
              <span className="px-1.5 sm:px-2 text-xs font-semibold text-[#4F483E] select-none tabular-nums">
                Aa
              </span>
              <button
                type="button"
                onClick={() => setFontScaleIdx((v) => Math.min(FONT_SIZE_CLASSES.length - 1, v + 1))}
                disabled={fontScaleIdx === FONT_SIZE_CLASSES.length - 1}
                aria-label="Agrandir la taille du texte"
                className="p-1.5 sm:p-2 text-[#3A352E] hover:bg-[#EAE2D3] disabled:opacity-35 rounded-r-lg transition-colors cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            </div>

            {/* Dyslexia mode toggle */}
            <button
              type="button"
              onClick={() => setDyslexiaMode((prev) => !prev)}
              aria-pressed={dyslexiaMode}
              className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs font-semibold border transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E5647] ${
                dyslexiaMode
                  ? 'bg-[#1E5647] text-white border-[#1E5647]'
                  : 'bg-[#F7F4EC] text-[#2F2B25] border-[#DDD3C1] hover:bg-[#EDE6D8]'
              }`}
            >
              <Eye className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span className="hidden sm:inline">Mode Dyslexie</span>
              <span className="sm:hidden">Dyslexie</span>
            </button>

            {/* Restart button */}
            <button
              type="button"
              onClick={handleRestart}
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs font-semibold text-[#3C362D] bg-[#F7F4EC] border border-[#DDD3C1] hover:bg-[#EDE6D8] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E5647]"
            >
              <RotateCcw className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span className="hidden md:inline">Recommencer au début</span>
              <span className="md:hidden">Début</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Double-Page Book Spread */}
      <main className="flex-1 w-full max-w-[1220px] mx-auto px-4 sm:px-6 py-6 sm:py-10 flex items-start justify-center">
        <AnimatePresence mode="wait" initial={false}>
          <motion.article
            key={currentId}
            initial={{ opacity: 0, x: turnDirection * 18 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: turnDirection * -14 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="w-full book-spread-paper rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2"
          >
            {currentId === 0 || !currentParagraph ? (
              /* ==================== INTRO DOUBLE-PAGE SPREAD ==================== */
              <>
                {/* Left Page: Book Cover & Rules */}
                <div className="p-6 sm:p-10 lg:p-12 book-gutter-left border-b lg:border-b-0 lg:border-r border-[#E6DEC9] flex flex-col justify-between gap-8">
                  <div>
                    <p className="text-xs font-semibold text-[#1E5647] tracking-wide">
                      {book.grade} · {book.cycleLabel} · {book.ageRange}
                    </p>
                    <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-[#1B2221] leading-tight">
                      {book.title}
                    </h2>
                    <p className="mt-1.5 text-base text-[#5C554B]">{book.subtitle}</p>
                  </div>

                  {/* Book visual vignette */}
                  {book.paragraphs[1] && (
                    <SceneIllustration
                      paragraph={book.paragraphs[1]}
                      bookTitle={book.title}
                      bookGrade={book.grade}
                      bookId={book.id}
                    />
                  )}

                  <div className="pt-5 border-t border-[#E8E0D0]">
                    <h3 className="font-display text-lg font-bold text-[#222B29] flex items-center gap-2">
                      <Compass className="w-4 h-4 text-[#1E5647]" aria-hidden="true" />
                      <span>Comment jouer à ce livre ?</span>
                    </h3>
                    <p className={`mt-2 text-[#48433C] leading-relaxed ${bodySizeClass}`}>
                      {book.howToPlay}
                    </p>
                  </div>
                </div>

                {/* Right Page: Story Introduction & Start CTA */}
                <div className="p-6 sm:p-10 lg:p-12 book-gutter-right flex flex-col justify-between gap-8">
                  <div>
                    <p className="text-xs font-semibold text-[#7A7062] tabular-nums">
                      Ouverture · {book.totalParagraphs} paragraphes interactifs
                    </p>
                    <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-[#1E2524]">
                      L’Histoire
                    </h3>
                    <div className={`mt-5 space-y-4 text-[#2B2F2E] leading-relaxed ${bodySizeClass}`}>
                      {book.introduction.map((para, idx) => (
                        <p key={idx}>{para}</p>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-[#E8E0D0] flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => goToParagraph(1, false)}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold bg-[#1E5647] text-white hover:bg-[#164236] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E5647]"
                    >
                      <BookOpen className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>Commencer au paragraphe 1</span>
                      <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                    </button>

                    {savedResumeId && book.paragraphs[savedResumeId] && (
                      <button
                        type="button"
                        onClick={() => goToParagraph(savedResumeId, false)}
                        className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-[#1E5647] bg-[#EAF2EE] hover:bg-[#DCE9E3] transition-colors cursor-pointer"
                      >
                        <span>Reprendre au paragraphe {savedResumeId}</span>
                      </button>
                    )}
                  </div>
                </div>
              </>
            ) : (
              /* ==================== STORY / ENDING DOUBLE-PAGE SPREAD ==================== */
              <>
                {/* Left Page: Dynamic Scene Illustration + Reading Trail */}
                <div className="p-6 sm:p-8 lg:p-11 book-gutter-left border-b lg:border-b-0 lg:border-r border-[#E6DEC9] flex flex-col justify-between gap-6">
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span className="font-display text-2xl sm:text-3xl font-bold text-[#1E5647] tabular-nums">
                        § {currentParagraph.id}
                      </span>
                      <span className="text-xs text-[#6B6358] tabular-nums">
                        {currentParagraph.isEnding
                          ? 'Dénouement de ton parcours'
                          : `Étape ${history.length + 1}`}
                      </span>
                    </div>

                    <SceneIllustration
                      paragraph={currentParagraph}
                      bookTitle={book.title}
                      bookGrade={book.grade}
                      bookId={book.id}
                    />
                  </div>

                  {/* Ending Banner on Left Page if Ending */}
                  {currentParagraph.isEnding && currentParagraph.ending && (
                    <div
                      data-testid="ending-banner"
                      className={`p-5 rounded-xl border ${
                        currentParagraph.ending.tone === 'positive'
                          ? 'bg-[#EAF5F0] border-[#B6DEC9] text-[#154535]'
                          : currentParagraph.ending.tone === 'negative'
                            ? 'bg-[#FAEEEB] border-[#E7C2B8] text-[#6B241A]'
                            : 'bg-[#FAF4E6] border-[#E5D0A1] text-[#614212]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 font-display text-lg font-bold">
                        {currentParagraph.ending.tone === 'positive' ? (
                          <Award className="w-5 h-5 shrink-0" aria-hidden="true" />
                        ) : currentParagraph.ending.tone === 'negative' ? (
                          <AlertTriangle className="w-5 h-5 shrink-0" aria-hidden="true" />
                        ) : (
                          <Scale className="w-5 h-5 shrink-0" aria-hidden="true" />
                        )}
                        <span>{currentParagraph.ending.label}</span>
                      </div>
                      <p className="mt-2.5 text-sm leading-relaxed opacity-95">
                        <strong className="font-semibold">Message pédagogique : </strong>
                        {currentParagraph.ending.pedagogicalMessage}
                      </p>
                    </div>
                  )}

                  {/* Subtle step-back helper for young readers */}
                  <div className="pt-4 border-t border-[#EAE2D3] flex items-center justify-between gap-3 text-xs text-[#6A6257]">
                    {history.length > 0 ? (
                      <button
                        type="button"
                        onClick={handleStepBack}
                        className="inline-flex items-center gap-1.5 font-semibold text-[#4B443A] hover:text-[#1E5647] transition-colors cursor-pointer"
                      >
                        <Undo2 className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Revenir au paragraphe {history[history.length - 1]}</span>
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setCurrentId(0)}
                        className="inline-flex items-center gap-1.5 font-semibold text-[#4B443A] hover:text-[#1E5647] transition-colors cursor-pointer"
                      >
                        <Undo2 className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Relire l’introduction</span>
                      </button>
                    )}
                    <span className="tabular-nums">
                      {book.grade} · {book.title}
                    </span>
                  </div>
                </div>

                {/* Right Page: Paragraph Narrative & Interactive Choices / EMC Debate */}
                <div className="p-6 sm:p-8 lg:p-11 book-gutter-right flex flex-col justify-between gap-8">
                  <div>
                    <p className="text-xs font-semibold text-[#7A7062] tabular-nums mb-3">
                      Paragraphe {currentParagraph.id}
                    </p>
                    <div
                      className={`space-y-4 text-[#1E2524] leading-[1.72] max-w-[62ch] ${bodySizeClass}`}
                      data-testid="paragraph-text"
                    >
                      {currentParagraph.text.split('\n\n').map((segment, i) => (
                        <p key={i}>{segment}</p>
                      ))}
                    </div>
                  </div>

                  {/* Interactive Choices — Randomly shuffled on each visit/session to prevent copying */}
                  {!currentParagraph.isEnding && displayedChoices.length > 0 && (
                    <div className="pt-6 border-t border-[#EAE2D3]" data-testid="choices-list">
                      <p className="text-xs font-semibold text-[#645C51] mb-3.5">
                        Que décides-tu de faire ?
                      </p>
                      <div className="space-y-3">
                        {displayedChoices.map((choice, idx) => (
                          <button
                            key={`${currentParagraph.id}-${visitNonce}-${idx}-${choice.target}`}
                            type="button"
                            onClick={() => goToParagraph(choice.target)}
                            className={`w-full text-left p-4 rounded-xl border border-[#DDD4C4] bg-[#F8F5EE] hover:bg-[#EFECE3] hover:border-[#1E5647] transition-all flex items-center justify-between gap-4 group cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E5647] ${bodySizeClass}`}
                          >
                            <span className="text-[#1F2625] leading-snug">{choice.text}</span>
                            <span
                              className="shrink-0 inline-flex items-center gap-1 text-xs font-bold text-[#1E5647] tabular-nums group-hover:translate-x-0.5 transition-transform"
                              aria-hidden="true"
                            >
                              <span>§ {choice.target}</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Ending Actions + EMC Classroom Debate Questions */}
                  {currentParagraph.isEnding && (
                    <div className="pt-6 border-t border-[#EAE2D3] space-y-6">
                      {currentParagraph.ending?.outro && (
                        <p className="text-sm font-medium text-[#464038] italic">
                          {currentParagraph.ending.outro}
                        </p>
                      )}

                      {book.debateQuestions.length > 0 && (
                        <div
                          className="p-5 rounded-xl bg-[#F6F2E8] border border-[#E2D8C5]"
                          data-testid="emc-debate-questions"
                        >
                          <h3 className="font-display text-lg font-bold text-[#1E2524] flex items-center gap-2">
                            <MessageCircle className="w-4 h-4 text-[#1E5647]" aria-hidden="true" />
                            <span>Pour en discuter en classe (Débat EMC · {book.grade})</span>
                          </h3>
                          <ol className="mt-3.5 space-y-2.5 text-sm text-[#2E3433] list-decimal list-inside leading-relaxed">
                            {book.debateQuestions.map((question, idx) => (
                              <li key={idx}>{question}</li>
                            ))}
                          </ol>
                        </div>
                      )}

                      <div className="flex flex-wrap items-center gap-3">
                        <button
                          type="button"
                          onClick={handleRestart}
                          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-[#1E5647] text-white hover:bg-[#164236] transition-colors cursor-pointer"
                        >
                          <RotateCcw className="w-4 h-4" aria-hidden="true" />
                          <span>Recommencer l’aventure</span>
                        </button>
                        <button
                          type="button"
                          onClick={onBackToLibrary}
                          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-[#1E5647] bg-[#EAF2EE] hover:bg-[#DCE9E3] transition-colors cursor-pointer"
                        >
                          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                          <span>Retour à la bibliothèque</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
          </motion.article>
        </AnimatePresence>
      </main>
    </div>
  );
};
