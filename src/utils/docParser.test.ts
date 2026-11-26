import test from 'node:test';
import assert from 'node:assert/strict';
import { parseLDVELHDocument, validateBookGraph } from './docParser';
import { cm1OmbreDeLaCour } from '../data/cm1_ombre_de_la_cour';
import { cm1LaRumeurQuiCourt } from '../data/cm1_la_rumeur_qui_court';
import { quatriemeGroupePrive } from '../data/quatrieme_groupe_prive';

test('cm1LaRumeurQuiCourt contains all 150 paragraphs, 15 endings, and zero broken links', () => {
  assert.equal(cm1LaRumeurQuiCourt.grade, 'CM1');
  assert.equal(cm1LaRumeurQuiCourt.section, 'primaire');
  assert.equal(cm1LaRumeurQuiCourt.title, 'La rumeur qui court');
  assert.equal(cm1LaRumeurQuiCourt.totalParagraphs, 150);
  assert.equal(Object.keys(cm1LaRumeurQuiCourt.paragraphs).length, 150);
  assert.equal(cm1LaRumeurQuiCourt.introduction.length, 2);

  for (let i = 1; i <= 150; i++) {
    const p = cm1LaRumeurQuiCourt.paragraphs[i];
    assert.ok(p, `CM1 Rumeur Paragraph ${i} must exist`);
    assert.ok(p.text.length > 20, `CM1 Rumeur Paragraph ${i} must have body text`);

    if (i <= 135) {
      assert.equal(p.choices.length, 3, `CM1 Rumeur Paragraph ${i} must have 3 choices`);
      assert.ok(!p.isEnding, `CM1 Rumeur Paragraph ${i} should not be an ending`);
    } else {
      assert.equal(p.isEnding, true, `CM1 Rumeur Paragraph ${i} must be an ending`);
      assert.ok(p.ending, `CM1 Rumeur Paragraph ${i} must have ending metadata`);
      assert.ok(p.ending.pedagogicalMessage.length > 10, `CM1 Rumeur Paragraph ${i} must have civic message`);
      if (i <= 140) assert.equal(p.ending.category, 'A');
      else if (i <= 145) assert.equal(p.ending.category, 'B');
      else assert.equal(p.ending.category, 'C');
    }
  }

  const report = validateBookGraph(cm1LaRumeurQuiCourt.paragraphs);
  assert.equal(report.brokenLinks.length, 0);
  assert.equal(report.endingCount, 15);
  assert.equal(cm1LaRumeurQuiCourt.debateQuestions.length, 4);
});

test('cm1OmbreDeLaCour contains all 150 paragraphs with zero broken links', () => {
  assert.equal(cm1OmbreDeLaCour.totalParagraphs, 150);
  assert.equal(Object.keys(cm1OmbreDeLaCour.paragraphs).length, 150);

  for (let i = 1; i <= 150; i++) {
    const p = cm1OmbreDeLaCour.paragraphs[i];
    assert.ok(p, `Paragraph ${i} must exist`);
    assert.ok(p.text.length > 20, `Paragraph ${i} must have body text`);

    if (i <= 135) {
      assert.equal(p.choices.length, 3, `Paragraph ${i} must have 3 choices`);
      assert.ok(!p.isEnding, `Paragraph ${i} should not be an ending`);
    } else {
      assert.equal(p.isEnding, true, `Paragraph ${i} must be an ending`);
      assert.ok(p.ending, `Paragraph ${i} must have ending metadata`);
      assert.ok(p.ending.pedagogicalMessage.length > 10, `Paragraph ${i} must have pedagogical message`);
      if (i <= 140) assert.equal(p.ending.category, 'A');
      else if (i <= 145) assert.equal(p.ending.category, 'B');
      else assert.equal(p.ending.category, 'C');
    }
  }

  const report = validateBookGraph(cm1OmbreDeLaCour.paragraphs);
  assert.equal(report.brokenLinks.length, 0);
  assert.equal(report.endingCount, 15);
  assert.equal(cm1OmbreDeLaCour.debateQuestions.length, 4);
});

test('quatriemeGroupePrive contains all 150 paragraphs, 15 endings, and zero broken links', () => {
  assert.equal(quatriemeGroupePrive.grade, '4ème');
  assert.equal(quatriemeGroupePrive.section, 'college');
  assert.equal(quatriemeGroupePrive.title, 'Le Groupe Privé');
  assert.equal(quatriemeGroupePrive.totalParagraphs, 150);
  assert.equal(Object.keys(quatriemeGroupePrive.paragraphs).length, 150);
  assert.equal(quatriemeGroupePrive.introduction.length, 4);

  for (let i = 1; i <= 150; i++) {
    const p = quatriemeGroupePrive.paragraphs[i];
    assert.ok(p, `4ème Paragraph ${i} must exist`);
    assert.ok(p.text.length > 20, `4ème Paragraph ${i} must have body text`);

    if (i <= 135) {
      assert.equal(p.choices.length, 3, `4ème Paragraph ${i} must have 3 choices`);
      assert.ok(!p.isEnding, `4ème Paragraph ${i} should not be an ending`);
    } else {
      assert.equal(p.isEnding, true, `4ème Paragraph ${i} must be an ending`);
      assert.ok(p.ending, `4ème Paragraph ${i} must have ending metadata`);
      assert.ok(p.ending.pedagogicalMessage.length > 10, `4ème Paragraph ${i} must have pedagogical message`);
      if (i <= 140) assert.equal(p.ending.category, 'A');
      else if (i <= 145) assert.equal(p.ending.category, 'B');
      else assert.equal(p.ending.category, 'C');
    }
  }

  const report = validateBookGraph(quatriemeGroupePrive.paragraphs);
  assert.equal(report.brokenLinks.length, 0);
  assert.equal(report.endingCount, 15);
  assert.equal(quatriemeGroupePrive.debateQuestions.length, 4);
});

test('parseLDVELHDocument parses markdown bold format (**1** and rends-toi au **2**)', () => {
  const sample = `
Le Défi du Collège
Un livre interactif de 6ème
Comment jouer à ce livre ?
Lis chaque paragraphe puis clique sur ton choix.
L'Histoire
Tu arrives en 6ème et un groupe se moque du sac d'un camarade.

**1**
Dans la cour du collège, Lucas reste seul près du mur.
- Si tu vas lui parler, rends-toi au **2**.
- Si tu détournes le regard, rends-toi au **3**.

**2**
Lucas sourit et vous devenez vite amis.
FIN C : La solidarité (Fin positive)
Message pédagogique : Un geste simple peut briser l'isolement.

**3**
Lucas reste seul toute la semaine.
FIN A : L'inaction (Fin négative)
Message pédagogique : Le silence encourage l'exclusion.

Pour en discuter en classe
* 1. Pourquoi est-il difficile de réagir devant un groupe ?
* 2. Comment accueillir un nouvel élève ?
`;

  const { book, report } = parseLDVELHDocument(sample, { grade: '6ème' });
  assert.equal(book.title, 'Le Défi du Collège');
  assert.equal(book.grade, '6ème');
  assert.equal(book.section, 'college');
  assert.equal(report.totalParagraphs, 3);
  assert.equal(report.brokenLinks.length, 0);
  assert.equal(report.endingCount, 2);
  assert.equal(book.paragraphs[1].choices.length, 2);
  assert.equal(book.paragraphs[1].choices[0].target, 2);
  assert.equal(book.paragraphs[2].ending?.category, 'C');
  assert.equal(book.paragraphs[3].ending?.category, 'A');
  assert.equal(book.debateQuestions.length, 2);
});

test('parseLDVELHDocument detects broken links cleanly', () => {
  const brokenSample = `
Test Liens Cassés

1
Début de l'histoire.
* Aller au 99, rends-toi au 99.
`;
  const { report } = parseLDVELHDocument(brokenSample);
  assert.equal(report.brokenLinks.length, 1);
  assert.equal(report.brokenLinks[0].from, 1);
  assert.equal(report.brokenLinks[0].target, 99);
});
