// Fonction serveur Vercel — vérifie l'avancement d'une génération MusicGPT.
// Appelée par le frontend avec ?task_id=...

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Méthode non autorisée' });
    return;
  }

  const apiKey = process.env.MUSICGPT_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: "Clé API manquante côté serveur (MUSICGPT_API_KEY non configurée sur Vercel)" });
    return;
  }

  const { task_id } = req.query;
  if (!task_id) {
    res.status(400).json({ error: 'task_id manquant' });
    return;
  }

  try {
    const url = `https://api.musicgpt.com/api/public/v1/byId?conversionType=MUSIC_AI&task_id=${encodeURIComponent(task_id)}`;
    const response = await fetch(url, {
      headers: { Authorization: apiKey },
    });
    const data = await response.json();

    if (!response.ok) {
      res.status(response.status).json({ error: data.message || 'Échec de la vérification du statut' });
      return;
    }

    // On normalise la réponse pour le frontend : status + audio_url quand c'est prêt.
    res.status(200).json({
      status: data.status || data.conversion_status || 'PENDING',
      audio_url: data.conversion_path || data.audio_url || null,
      lyrics: data.lyrics || null,
      title: data.title || null,
      raw: data,
    });
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur pendant la vérification', detail: String(err) });
  }
}
