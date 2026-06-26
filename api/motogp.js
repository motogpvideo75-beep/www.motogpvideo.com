// MotoGP resmi public API proxy (pulselive)
// Canlı timing + sonuçlar + seanslar - tamamen ücretsiz, resmi veri

const BASE = 'https://api.motogp.pulselive.com/motogp/v1/results';
const LIVE = 'https://api.motogp.pulselive.com/motogp/v1/timing-gateway/livetiming-lite';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  const { type, season, event, category, session } = req.query;

  let url;
  let cacheTime = 300;

  switch (type) {
    case 'livetiming':
      url = LIVE;
      cacheTime = 0; // canlı, cache yok
      break;
    case 'seasons':
      url = `${BASE}/seasons`;
      cacheTime = 86400;
      break;
    case 'events':
      // season uuid gerekli
      url = `${BASE}/events?seasonUuid=${season}&isFinished=true`;
      cacheTime = 3600;
      break;
    case 'categories':
      // event uuid gerekli
      url = `${BASE}/categories?eventUuid=${event}`;
      cacheTime = 3600;
      break;
    case 'sessions':
      // event + category uuid gerekli
      url = `${BASE}/sessions?eventUuid=${event}&categoryUuid=${category}`;
      cacheTime = 600;
      break;
    case 'classification':
      // session id gerekli - tur zamanları dahil sonuçlar
      url = `${BASE}/session/${session}/classification?test=false`;
      cacheTime = 60;
      break;
    default:
      return res.status(400).json({ error: 'Geçersiz type. Kullanım: livetiming, seasons, events, categories, sessions, classification' });
  }

  try {
    const r = await fetch(url, {
      headers: { 'Accept': 'application/json', 'User-Agent': 'Mozilla/5.0' }
    });
    if (!r.ok) return res.status(r.status).json({ error: `MotoGP API: ${r.status}` });
    const data = await r.json();
    if (cacheTime > 0) {
      res.setHeader('Cache-Control', `s-maxage=${cacheTime}, stale-while-revalidate=30`);
    } else {
      res.setHeader('Cache-Control', 'no-store');
    }
    return res.status(200).json(data);
  } catch(e) {
    return res.status(500).json({ error: e.message });
  }
}
