import React, { useCallback, useMemo, useState } from 'react';
import { BookOpen } from 'lucide-react';
import type { BookData } from './types/book';
import { INITIAL_BOOKS, LIBRARY_SHELVES } from './data/booksCatalog';
import { LibraryShelf } from './components/LibraryShelf';
import { BookReader } from './components/BookReader';

type SectionFilter = 'all' | 'primaire' | 'college';

const STORAGE_PROGRESS = 'ldvelh_reading_progress_v1';

function loadStoredProgress(): Record<string, number> {
  try {
    const raw = window.localStorage.getItem(STORAGE_PROGRESS);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? (parsed as Record<string, number>) : {};
  } catch {
    return {};
  }
}

export default function App() {
  const [savedProgress, setSavedProgress] = useState<Record<string, number>>(() =>
    loadStoredProgress()
  );
  const [sectionFilter, setSectionFilter] = useState<SectionFilter>('all');
  const [activeBook, setActiveBook] = useState<BookData | null>(() => {
    const params = new URLSearchParams(window.location.search);
    const requestedId = params.get('book');
    if (requestedId) {
      return INITIAL_BOOKS.find((b) => b.id === requestedId) || null;
    }
    if (params.get('autostart') === '1') {
      return INITIAL_BOOKS.find((b) => b.id === 'cm1-ombre-de-la-cour') || null;
    }
    return null;
  });

  const totalParagraphsAcrossLibrary = useMemo(
    () => INITIAL_BOOKS.reduce((acc, b) => acc + b.totalParagraphs, 0),
    []
  );

  const handleProgressChange = useCallback((bookId: string, paragraphId: number) => {
    setSavedProgress((prev) => {
      if (prev[bookId] === paragraphId) return prev;
      const next = { ...prev, [bookId]: paragraphId };
      try {
        window.localStorage.setItem(STORAGE_PROGRESS, JSON.stringify(next));
      } catch {
        // Ignore storage quota errors
      }
      return next;
    });
  }, []);

  const handleOpenBook = (book: BookData) => {
    setActiveBook(book);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const primaryShelves = LIBRARY_SHELVES.filter((s) => s.section === 'primaire');
  const collegeShelves = LIBRARY_SHELVES.filter((s) => s.section === 'college');

  if (activeBook) {
    return (
      <BookReader
        book={activeBook}
        initialParagraphId={savedProgress[activeBook.id] || 0}
        onProgressChange={handleProgressChange}
        onBackToLibrary={() => setActiveBook(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#1E2524] flex flex-col">
      {/* Strict 3-Zone Top Navigation Bar */}
      <header className="sticky top-0 z-30 bg-[#FAF8F2]/95 backdrop-blur-sm border-b border-[#E4DCCB]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Single-line Brand Wordmark */}
          <a
            href="#bibliotheque"
            onClick={(e) => {
              e.preventDefault();
              setSectionFilter('all');
            }}
            className="font-display text-lg sm:text-xl font-bold tracking-tight text-[#1E2524] whitespace-nowrap shrink-0"
          >
            La Bibliothèque des Héros
          </a>

          {/* Zone 2: Clean Single-Line Section Links */}
          <nav
            aria-label="Sections de la bibliothèque"
            className="hidden md:flex items-center gap-7 text-sm font-medium text-[#5A5349]"
          >
            <button
              type="button"
              onClick={() => setSectionFilter('all')}
              className={`whitespace-nowrap shrink-0 pb-0.5 transition-colors cursor-pointer ${
                sectionFilter === 'all'
                  ? 'text-[#1E5647] font-semibold border-b-2 border-[#1E5647]'
                  : 'hover:text-[#1E2524]'
              }`}
            >
              Tous les niveaux
            </button>
            <button
              type="button"
              onClick={() => setSectionFilter('primaire')}
              className={`whitespace-nowrap shrink-0 pb-0.5 transition-colors cursor-pointer ${
                sectionFilter === 'primaire'
                  ? 'text-[#1E5647] font-semibold border-b-2 border-[#1E5647]'
                  : 'hover:text-[#1E2524]'
              }`}
            >
              École Primaire
            </button>
            <button
              type="button"
              onClick={() => setSectionFilter('college')}
              className={`whitespace-nowrap shrink-0 pb-0.5 transition-colors cursor-pointer ${
                sectionFilter === 'college'
                  ? 'text-[#1E5647] font-semibold border-b-2 border-[#1E5647]'
                  : 'hover:text-[#1E2524]'
              }`}
            >
              Collège
            </button>
          </nav>

          {/* Zone 3: Quick Jump to Shelves */}
          <div className="shrink-0">
            <a
              href="#etageres"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-[#1E5647] text-white hover:bg-[#164236] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E5647]"
            >
              <BookOpen className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Parcourir les étagères</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main id="bibliotheque" className="flex-1 max-w-[1280px] w-full mx-auto px-5 sm:px-8 py-8 sm:py-10">
        {/* Warm CDI Welcome Header (books are browsed directly on the wooden shelves below) */}
        <section className="pb-7 border-b border-[#E3DAC8]">
          <div className="max-w-3xl space-y-3">
            <p className="text-sm font-semibold text-[#1E5647]">
              Bibliothèque interactive EMC & pHARe · Du CE2 à la 3ème
            </p>
            <h1 className="font-display text-3xl sm:text-5xl font-bold text-[#1B2221] leading-[1.12]">
              Des livres dont tu es le héros pour mieux vivre ensemble
            </h1>
            <p className="text-base sm:text-lg text-[#504A41] leading-relaxed max-w-[62ch]">
              Choisis un ouvrage sur les étagères en bois du CDI, prends tes propres décisions à
              chaque paragraphe illustré et découvre comment tes choix transforment la vie de la
              classe.
            </p>
          </div>
        </section>

        {/* Quick Section Filter Bar */}
        <section
          id="etageres"
          aria-label="Filtrer par cycle scolaire"
          className="py-6 flex flex-wrap items-center justify-between gap-4 scroll-mt-20"
        >
          <div className="inline-flex items-center p-1 rounded-xl bg-[#EAE4D7] border border-[#DDD4C2]">
            {(
              [
                { id: 'all', label: 'Tous les niveaux (7)' },
                { id: 'primaire', label: 'École Primaire (CE2–CM2)' },
                { id: 'college', label: 'Collège (6ème–3ème)' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSectionFilter(tab.id)}
                aria-pressed={sectionFilter === tab.id}
                className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                  sectionFilter === tab.id
                    ? 'bg-[#FCFBF7] text-[#1E5647] shadow-sm'
                    : 'text-[#5A5349] hover:text-[#1E2524]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <p className="text-xs sm:text-sm text-[#635B50] tabular-nums">
            {INITIAL_BOOKS.length} livres interactifs · {totalParagraphsAcrossLibrary} paragraphes sur 7 étagères
          </p>
        </section>

        {/* Wooden Bookshelves organized in Two Clear School Sections */}
        <div className="space-y-14">
          {(sectionFilter === 'all' || sectionFilter === 'primaire') && (
            <div aria-labelledby="section-primaire-title" className="space-y-9">
              <div className="flex flex-wrap items-baseline justify-between gap-2 pb-2 border-b border-[#E1D8C5]">
                <h2
                  id="section-primaire-title"
                  className="font-display text-2xl sm:text-3xl font-bold text-[#1E2524]"
                >
                  École Primaire
                </h2>
                <span className="text-sm text-[#665E53]">
                  Cycles 2 & 3 · CE2, CM1, CM2 (8 à 11 ans)
                </span>
              </div>

              <div className="space-y-9">
                {primaryShelves.map((shelf) => (
                  <LibraryShelf
                    key={shelf.grade}
                    shelf={shelf}
                    books={INITIAL_BOOKS.filter((b) => b.grade === shelf.grade)}
                    savedProgress={savedProgress}
                    onOpenBook={handleOpenBook}
                  />
                ))}
              </div>
            </div>
          )}

          {(sectionFilter === 'all' || sectionFilter === 'college') && (
            <div aria-labelledby="section-college-title" className="space-y-9">
              <div className="flex flex-wrap items-baseline justify-between gap-2 pb-2 border-b border-[#E1D8C5]">
                <h2
                  id="section-college-title"
                  className="font-display text-2xl sm:text-3xl font-bold text-[#1E2524]"
                >
                  Collège
                </h2>
                <span className="text-sm text-[#665E53]">
                  Cycles 3 & 4 · 6ème, 5ème, 4ème, 3ème (11 à 15 ans)
                </span>
              </div>

              <div className="space-y-9">
                {collegeShelves.map((shelf) => (
                  <LibraryShelf
                    key={shelf.grade}
                    shelf={shelf}
                    books={INITIAL_BOOKS.filter((b) => b.grade === shelf.grade)}
                    savedProgress={savedProgress}
                    onOpenBook={handleOpenBook}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Quiet Footer */}
      <footer className="mt-16 border-t border-[#E4DCCB] bg-[#F2EEE4]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 py-6 flex flex-wrap items-center justify-between gap-4 text-xs text-[#655D52]">
          <span>La Bibliothèque des Héros — Ressources interactives EMC & pHARe (CE2 à 3ème)</span>
          <span>Lecture accessible · Choix mélangés à chaque visite</span>
        </div>
      </footer>
    </div>
  );
}
