import type { SceneAnalysis } from './sceneAnalyzer';

/**
 * Optional server-side illustration hook for Gemini / Imagen generation.
 * On static hosts (like GitHub Pages) or when no backend illustration route
 * is deployed, this returns null cleanly so the built-in vector SVG engine
 * renders immediately with zero broken images.
 */
export async function fetchOptionalAiIllustration(
  paragraphId: number,
  analysis: SceneAnalysis,
  signal?: AbortSignal
): Promise<string | null> {
  const endpoint = import.meta.env.VITE_ILLUSTRATION_ENDPOINT as string | undefined;
  if (!endpoint) {
    return null;
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        paragraphId,
        prompt: analysis.promptDescription,
        location: analysis.location,
        mood: analysis.mood,
      }),
      signal,
    });

    if (!response.ok) {
      return null;
    }

    const payload = (await response.json()) as { imageUrl?: string };
    return typeof payload.imageUrl === 'string' && payload.imageUrl.length > 0
      ? payload.imageUrl
      : null;
  } catch {
    return null;
  }
}
