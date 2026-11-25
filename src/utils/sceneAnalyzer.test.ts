import test from 'node:test';
import assert from 'node:assert/strict';
import { analyzeParagraphScene } from './sceneAnalyzer';
import { cm1OmbreDeLaCour } from '../data/cm1_ombre_de_la_cour';
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
