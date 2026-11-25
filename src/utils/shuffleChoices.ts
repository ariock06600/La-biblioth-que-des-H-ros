/**
 * Unbiased Fisher–Yates shuffle utility for LDVELH choices.
 * Ensures every student / reading session sees choices in an unpredictable order,
 * and guarantees that revisiting or restarting a paragraph never repeats the
 * immediately preceding button order (for lists of 2+ choices).
 */

function defaultRandom(): number {
  if (typeof globalThis !== 'undefined' && globalThis.crypto?.getRandomValues) {
    const buf = new Uint32Array(1);
    globalThis.crypto.getRandomValues(buf);
    return buf[0] / 0x100000000;
  }
  return Math.random();
}

function sameOrderByKey<T>(
  a: readonly T[],
  b: readonly T[],
  getKey: (item: T) => string | number
): boolean {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (getKey(a[i]) !== getKey(b[i])) return false;
  }
  return true;
}

export function shuffleChoices<T>(
  items: readonly T[],
  options?: {
    previousOrder?: readonly T[];
    getKey?: (item: T) => string | number;
    rng?: () => number;
  }
): T[] {
  if (items.length <= 1) {
    return [...items];
  }

  const rng = options?.rng ?? defaultRandom;
  const getKey = options?.getKey ?? ((item: T) => String(item));
  const previousOrder = options?.previousOrder;

  const drawPermutation = (): T[] => {
    const arr = [...items];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  let result = drawPermutation();

  // If a previous order exists for this paragraph, retry up to 8 times to avoid repeating it
  if (previousOrder && previousOrder.length === items.length) {
    let attempts = 0;
    while (sameOrderByKey(result, previousOrder, getKey) && attempts < 8) {
      result = drawPermutation();
      attempts++;
    }

    // Deterministic fallback if RNG repeatedly produced the exact same sequence
    if (sameOrderByKey(result, previousOrder, getKey)) {
      const first = result.shift()!;
      result.push(first);
    }
  }

  return result;
}
