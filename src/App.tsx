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

  const cm1Book = useMemo(
    () => INITIAL_BOOKS.find((b) => b.id === 'cm1-ombre-de-la-cour') || INITIAL_BOOKS[0],
    []
  );
  const quatriemeBook = useMemo(
    () => INITIAL_BOOKS.find((b) => b.id === '4eme-le-groupe-prive') || INITIAL_BOOKS[1],
    []
  );

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
      <main id="bibliotheque" className="flex-1 max-w-[1280px] w-full mx-auto px-5 sm:px-8 py-8 sm:py-12">
        {/* Warm CDI Welcome & Playable Books Spotlight */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start pb-10 border-b border-[#E3DAC8]">
          <div className="lg:col-span-6 space-y-4">
            <p className="text-sm font-semibold text-[#1E5647]">
              Bibliothèque interactive EMC & pHARe · Du CE2 à la 3ème
            </p>
            <h1 className="font-display text-3xl sm:text-5xl font-bold text-[#1B2221] leading-[1.12] max-w-2xl">
              Des livres dont tu es le héros pour mieux vivre ensemble
            </h1>
            <p className="text-base sm:text-lg text-[#504A41] leading-relaxed max-w-[58ch]">
              Choisis un ouvrage sur les étagères en bois du CDI, prends tes propres décisions à
              chaque paragraphe illustré et découvre comment tes choix transforment la vie de la
              classe.
            </p>

            <p className="pt-1 text-xs sm:text-sm text-[#6B6358] tabular-nums">
              {INITIAL_BOOKS.length} livres complets · {totalParagraphsAcrossLibrary} paragraphes illustrés · Débats EMC
            </p>
          </div>

          {/* Two Playable Featured Book Plaques on Right */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* CM1 Featured Plaque */}
            {cm1Book && (
              <div
                className="rounded-2xl p-5 sm:p-6 text-[#FAF8F2] shadow-[0_16px_34px_-14px_rgba(30,52,70,0.34)] flex flex-col justify-between"
                style={{
                  background: `linear-gradient(145deg, ${cm1Book.coverTheme.secondary} 0%, ${cm1Book.coverTheme.primary} 100%)`,
                }}
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-white/80">
                    <span>Étagère CM1</span>
                    <span className="tabular-nums">{cm1Book.totalParagraphs} §</span>
                  </div>

                  <h2 className="mt-2.5 font-display text-xl sm:text-2xl font-bold text-white leading-snug">
                    {cm1Book.title}
                  </h2>
                  <p className="mt-2 text-xs sm:text-sm text-white/85 leading-relaxed">
                    Face au « jeu du fantôme » dans la cour de l’école du Marronnier, chaque décision
                    compte pour Samy.
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-white/15 flex items-center justify-between gap-2">
                  <span className="text-[11px] text-[#FBE6B5] font-medium truncate">
                    Empathie · Inclusion · PAI
                  </span>
                  <button
                    type="button"
                    onClick={() => handleOpenBook(cm1Book)}
                    className="px-3.5 py-2 rounded-lg text-xs font-semibold bg-[#F4EFE4] text-[#1B3E57] hover:bg-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    Ouvrir
                  </button>
                </div>
              </div>
            )}

            {/* 4ème Featured Plaque */}
            {quatriemeBook && (
              <div
                className="rounded-2xl p-5 sm:p-6 text-[#FAF8F2] shadow-[0_16px_34px_-14px_rgba(45,35,76,0.36)] flex flex-col justify-between"
                style={{
                  background: `linear-gradient(145deg, ${quatriemeBook.coverTheme.secondary} 0%, ${quatriemeBook.coverTheme.primary} 100%)`,
                }}
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-white/80">
                    <span>Étagère 4ème</span>
                    <span className="tabular-nums">{quatriemeBook.totalParagraphs} §</span>
                  </div>

                  <h2 className="mt-2.5 font-display text-xl sm:text-2xl font-bold text-white leading-snug">
                    {quatriemeBook.title}
                  </h2>
                  <p className="mt-2 text-xs sm:text-sm text-white/85 leading-relaxed">
                    Un dimanche soir en 4ème B, un montage photo visant Chloé circule dans un groupe
                    privé. Comment réagis-tu ?
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-white/15 flex items-center justify-between gap-2">
                  <span className="text-[11px] text-[#FBE6B5] font-medium truncate">
                    Cyberharcèlement · pHARe
                  </span>
                  <button
                    type="button"
                    onClick={() => handleOpenBook(quatriemeBook)}
                    className="px-3.5 py-2 rounded-lg text-xs font-semibold bg-[#F4EFE4] text-[#322A52] hover:bg-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    Ouvrir
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Quick Section Filter Bar */}
        <section
          id="etageres"
          aria-label="Filtrer par cycle scolaire"
          className="py-7 flex flex-wrap items-center justify-between gap-4 scroll-mt-20"
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
