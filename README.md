# La Bibliothèque des Héros — LDVELH Éducatifs (CE2 à 3ème)

Application web éducative interactive (React + TypeScript + Tailwind CSS + Lucide Icons) transformant des **Livres Dont Vous Êtes le Héros** (EMC, inclusion, lutte contre le harcèlement et le cyberharcèlement) en livres illustrés jouables au sein d'une bibliothèque scolaire couvrant du **CE2 à la 3ème**.

## Contenu inclus

- **« L'Ombre de la Cour » (CM1)** : intégralité des **150 paragraphes** (empathie, inclusion, PAI), avec 3 choix par étape, **15 fins pédagogiques** (Fin A Négative, Fin B Mitigée, Fin C Positive) et **4 questions de débat EMC**.
- **« Le Groupe Privé » (4ème)** : intégralité des **150 paragraphes** (cyberharcèlement au collège, droit à l'image, programme pHARe), avec 3 choix par étape, **15 fins pédagogiques** et **4 questions de débat EMC / pHARe**.
- **Ordre des choix aléatoire (anti-copie)** : à chaque visite ou redémarrage, l'ordre des choix est mélangé de façon cryptographique pour éviter la copie entre élèves sur la même page.
- **Bibliothèque graphique sur 7 étagères** :
  - *École Primaire* : CE2, CM1, CM2
  - *Collège* : 6ème, 5ème, 4ème, 3ème
- **Moteur d'illustration dynamique** : chaque paragraphe génère automatiquement une illustration SVG cohérente avec le lieu, l'ambiance, les personnages et les objets de la scène (avec support optionnel d'un endpoint d'illustration IA via `VITE_ILLUSTRATION_ENDPOINT` et repli automatique sur les SVG).
- **Mode Accessibilité / Dyslexie** : police adaptée (*Lexend* / *Atkinson Hyperlegible*), espacements élargis et taille de texte ajustable.

## Développement local

```bash
npm install
npm run dev
```

## Tests unitaires (intégrité des 150 paragraphes, analyseur de scènes & mélange des choix)

```bash
npx tsx --test src/utils/docParser.test.ts src/utils/sceneAnalyzer.test.ts src/utils/shuffleChoices.test.ts
```

## Déploiement sur GitHub Pages

Le fichier `vite.config.ts` est déjà configuré avec `base: './'`.

```bash
npm run build
```

Publiez ensuite le dossier `dist/` via GitHub Pages (onglet **Settings → Pages → GitHub Actions** ou branche `gh-pages`).
