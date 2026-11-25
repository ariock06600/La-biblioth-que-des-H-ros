import test from 'node:test';
import assert from 'node:assert/strict';
import { shuffleChoices } from './shuffleChoices';

test('shuffleChoices preserves all items without mutating the source array', () => {
  const original = [
    { text: 'Choix A', target: 4 },
    { text: 'Choix B', target: 7 },
    { text: 'Choix C', target: 12 },
  ];
  const snapshot = [...original];

  const shuffled = shuffleChoices(original, { getKey: (c) => `${c.target}:${c.text}` });
  assert.equal(shuffled.length, 3);
  assert.deepEqual(original, snapshot);
  assert.deepEqual(
    shuffled.map((c) => c.target).sort((a, b) => a - b),
    [4, 7, 12]
  );
});

test('shuffleChoices never repeats the immediately previous order for 2+ choices', () => {
  const items = [
    { text: 'Choix 1', target: 4 },
    { text: 'Choix 2', target: 7 },
    { text: 'Choix 3', target: 12 },
  ];

  // Even with a pathological constant RNG that always yields identity, fallback guarantees a different order
  const constantRng = () => 0.9999;
  const next = shuffleChoices(items, {
    previousOrder: items,
    getKey: (c) => `${c.target}:${c.text}`,
    rng: constantRng,
  });

  assert.notDeepEqual(
    next.map((c) => c.target),
    items.map((c) => c.target)
  );
});

test('shuffleChoices produces varied permutations across independent student sessions', () => {
  const items = [
    { text: 'Choix 1', target: 4 },
    { text: 'Choix 2', target: 7 },
    { text: 'Choix 3', target: 12 },
  ];

  const seenOrders = new Set<string>();
  for (let i = 0; i < 60; i++) {
    const order = shuffleChoices(items, { getKey: (c) => c.target })
      .map((c) => c.target)
      .join('-');
    seenOrders.add(order);
  }

  // With 3! = 6 permutations over 60 independent sessions, multiple distinct orders must appear
  assert.ok(seenOrders.size >= 4, `Expected varied orders, got only ${seenOrders.size}`);
});
