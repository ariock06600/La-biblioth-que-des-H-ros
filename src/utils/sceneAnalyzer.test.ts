import test from 'node:test';
import assert from 'node:assert/strict';
import { analyzeParagraphScene } from './sceneAnalyzer';
import { cm1OmbreDeLaCour } from '../data/cm1_ombre_de_la_cour';
import { cm1LaRumeurQuiCourt } from '../data/cm1_la_rumeur_qui_court';
import { cm1LeMysterieuxCasier } from '../data/cm1_le_mysterieux_casier';
import { cm1MissionRecreation } from '../data/cm1_mission_recreation';
import { quatriemeGroupePrive } from '../data/quatrieme_groupe_prive';

test('analyzeParagraphScene maps key CM1 story scenes accurately', () => {
  const p1 = analyzeParagraphScene(cm1OmbreDeLaCour.paragraphs[1]);
  assert.equal(p1.location, 'rang_entree');
  assert.equal(p1.mood, 'sad');
  assert.ok(p1.characters.includes('samy'));
  assert.ok(p1.characters.includes('hugo'));

  const p24 = analyzeParagraphScene(cm1OmbreDeLaCour.paragraphs[24]);
  assert.equal(p24.location, 'cour_recreation');
  assert.equal(p24.prop, 'billes');

  const p31 = analyzeParagraphScene(cm1OmbreDeLaCour.paragraphs[31]);
  assert.equal(p31.location, 'bureau_directeur');
  assert.ok(p31.characters.includes('directeur'));

  const p32 = analyzeParagraphScene(cm1OmbreDeLaCour.paragraphs[32]);
  assert.equal(p32.location, 'cantine');
  assert.equal(p32.prop, 'plateau_pai');

  const p41 = analyzeParagraphScene(cm1OmbreDeLaCour.paragraphs[41]);
  assert.equal(p41.location, 'parc_eps');

  const p94 = analyzeParagraphScene(cm1OmbreDeLaCour.paragraphs[94]);
  assert.equal(p94.location, 'conseil_eleves');

  const p109 = analyzeParagraphScene(cm1OmbreDeLaCour.paragraphs[109]);
  assert.equal(p109.location, 'fete_ecole');
  assert.equal(p109.prop, 'diplome');

  const p150 = analyzeParagraphScene(cm1OmbreDeLaCour.paragraphs[150]);
  assert.equal(p150.endingTone, 'positive');
  assert.equal(p150.mood, 'festive');
});

test('analyzeParagraphScene maps key CM1 La rumeur qui court scenes accurately', () => {
  const p1 = analyzeParagraphScene(cm1LaRumeurQuiCourt.paragraphs[1]);
  assert.equal(p1.location, 'rang_entree');
  assert.equal(p1.prop, 'cartes');
  assert.ok(p1.characters.includes('noe'));
  assert.ok(p1.characters.includes('leo'));

  const p3 = analyzeParagraphScene(cm1LaRumeurQuiCourt.paragraphs[3]);
  assert.equal(p3.prop, 'mot_plie');
  assert.ok(p3.characters.includes('sarah'));
  assert.ok(p3.characters.includes('m_moreau'));

  const p63 = analyzeParagraphScene(cm1LaRumeurQuiCourt.paragraphs[63]);
  assert.equal(p63.location, 'atelier_maquette');
  assert.equal(p63.prop, 'journal_classe');
  assert.ok(p63.characters.includes('m_moreau'));

  const p147 = analyzeParagraphScene(cm1LaRumeurQuiCourt.paragraphs[147]);
  assert.equal(p147.endingTone, 'positive');
  assert.equal(p147.mood, 'festive');
  assert.equal(p147.location, 'atelier_maquette');
});

test('analyzeParagraphScene maps key CM1 Le mystérieux casier scenes accurately', () => {
  const p1 = analyzeParagraphScene(cm1LeMysterieuxCasier.paragraphs[1]);
  assert.equal(p1.location, 'couloir_portemanteaux');
  assert.equal(p1.prop, 'mot_plie');
  assert.ok(p1.characters.includes('ines'));
  assert.ok(p1.characters.includes('leo'));

  const p9 = analyzeParagraphScene(cm1LeMysterieuxCasier.paragraphs[9]);
  assert.ok(p9.characters.includes('mme_girault'));
  assert.ok(p9.characters.includes('ines'));

  const p146 = analyzeParagraphScene(cm1LeMysterieuxCasier.paragraphs[146]);
  assert.equal(p146.endingTone, 'positive');
  assert.equal(p146.mood, 'festive');
  assert.ok(p146.characters.includes('maxime'));
  assert.ok(p146.characters.includes('mme_girault'));
});

test('analyzeParagraphScene maps key CM1 Mission : récréation scenes accurately', () => {
  const p1 = analyzeParagraphScene(cm1MissionRecreation.paragraphs[1]);
  assert.equal(p1.location, 'cour_recreation');
  assert.equal(p1.prop, 'ballon');
  assert.ok(p1.characters.includes('hugo'));
  assert.ok(p1.characters.includes('lina'));
  assert.ok(p1.characters.includes('sami'));
  assert.ok(p1.characters.includes('nathan'));

  const p94 = analyzeParagraphScene(cm1MissionRecreation.paragraphs[94]);
  assert.equal(p94.prop, 'charte_cour');
  assert.ok(p94.characters.includes('directeur'));

  const p146 = analyzeParagraphScene(cm1MissionRecreation.paragraphs[146]);
  assert.equal(p146.endingTone, 'positive');
  assert.equal(p146.mood, 'festive');
  assert.equal(p146.location, 'cour_recreation');
  assert.ok(p146.characters.includes('lina'));
  assert.ok(p146.characters.includes('sami'));
});

test('analyzeParagraphScene maps key 4ème Le Groupe Privé scenes accurately', () => {
  const p1 = analyzeParagraphScene(quatriemeGroupePrive.paragraphs[1]);
  assert.equal(p1.location, 'maison_soir');
  assert.equal(p1.prop, 'smartphone');
  assert.ok(p1.characters.includes('chloe'));
  assert.ok(p1.characters.includes('enzo'));

  const p9 = analyzeParagraphScene(quatriemeGroupePrive.paragraphs[9]);
  assert.equal(p9.location, 'bureau_cpe');
  assert.ok(p9.characters.includes('cpe'));

  const p73 = analyzeParagraphScene(quatriemeGroupePrive.paragraphs[73]);
  assert.equal(p73.location, 'salle_info');
  assert.equal(p73.prop, 'ordinateur');

  const p146 = analyzeParagraphScene(quatriemeGroupePrive.paragraphs[146]);
  assert.equal(p146.endingTone, 'positive');
  assert.equal(p146.mood, 'festive');
  assert.ok(p146.characters.includes('chloe'));
  assert.ok(p146.characters.includes('cpe'));
});
