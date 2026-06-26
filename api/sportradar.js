export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  const API_KEY = process.env.SPORTRADAR_KEY || 'pfySmetr5buVMbGz0yZyVryDQt8eu5IUHXa5Lrzo';
  const { type, stage, season } = req.query;

  let url;
  if (type === 'seasons') {
    url = `https://api.sportradar.com/motogp/trial/v2/en/seasons.json?api_key=${API_KEY}`;
  } else if (type === 'schedule' && season) {
    url = `https://api.sportradar.com/motogp/trial/v2/en/seasons/${season}/schedules.json?api_key=${API_KEY}`;
  } else if (type === 'summary' && stage) {
    url = `https://api.sportradar.com/motogp/trial/v2/en/sport_events/${stage}/summary.json?api_key=${API_KEY}`;
  } else if (type === 'results' && stage) {
    url = `https://api.sportradar.com/motogp/trial/v2/en/sport_events/${stage}/results.json?api_key=${API_KEY}`;
  } else if (type === 'timeline' && stage) {
    url = `https://api.sportradar.com/motogp/trial/v2/en/sport_events/${stage}/timeline.json?api_key=${API_KEY}`;
  } else {
    return res.status(400).json({ error: 'Geçersiz parametreler. type ve stage/season gerekli.' });
  }

  try {
    const r = await fetch(url);
    if (!r.ok) return res.status(r.status).json({ error: `Sportradar: ${r.status}` });
    const data = await r.json();
    const cacheTime = (type === 'results' || type === 'timeline') ? 30 : 3600;
    res.setHeader('Cache-Control', `s-maxage=${cacheTime}, stale-while-revalidate=10`);
    return res.status(200).json(data);
  } catch(e) {
    return res.status(500).json({ error: e.message });
  }
}
