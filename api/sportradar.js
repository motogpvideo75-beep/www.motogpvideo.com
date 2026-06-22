export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  
  const { stage } = req.query;
  if (!stage) return res.status(400).json({ error: 'stage required' });

  const API_KEY = process.env.SPORTRADAR_KEY || 'pfySmetr5buVMbGz0yZyVryDQt8eu5IUHXa5Lrzo';
  const url = `https://api.sportradar.com/motogp/trial/v2/en/sport_events/${stage}/summary.json?api_key=${API_KEY}`;

  try {
    const r = await fetch(url);
    if (!r.ok) return res.status(r.status).json({ error: `Sportradar: ${r.status}` });
    const data = await r.json();
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=600');
    return res.status(200).json(data);
  } catch(e) {
    return res.status(500).json({ error: e.message });
  }
}
