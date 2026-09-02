// Fonction serveur Vercel — la clé API MusicGPT reste ici, jamais dans le frontend.
// Configuration requise sur Vercel : Project Settings -> Environment Variables
//   MUSICGPT_API_KEY = <ta clé API MusicGPT>

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Méthode non autorisée' });
    return;
  }

  const apiKey = process.env.MUSICGPT_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: "Clé API manquante côté serveur (MUSICGPT_API_KEY non configurée sur Vercel)" });
    return;
  }

  try {
    const { prompt, music_style, lyrics, voice_id, make_instrumental } = req.body || {};

    if (!prompt || typeof prompt !== 'string' || prompt.trim().length === 0) {
      res.status(400).json({ error: 'Le champ "prompt" (description) est requis.' });
      return;
    }

    const payload = {
      prompt: prompt.slice(0, 280),
    };
    if (music_style) payload.music_style = music_style;
    if (lyrics) payload.lyrics = lyrics;
    if (voice_id) payload.voice_id = voice_id;
    if (typeof make_instrumental === 'boolean') payload.make_instrumental = make_instrumental;

    const response = await fetch('https://api.musicgpt.com/api/public/v1/MusicAI', {
      method: 'POST',
      headers: {
        Authorization: apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok || data.success === false) {
      res.status(response.status || 502).json({ error: data.message || data.error || 'Échec de la génération MusicGPT' });
      return;
    }

    // On renvoie uniquement ce dont le frontend a besoin pour suivre la progression.
    res.status(200).json({
      task_id: data.task_id,
      conversion_id: data.conversion_id,
      eta: data.eta,
    });
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur pendant la génération', detail: String(err) });
  }
}
