export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  const { channel } = req.query;
  if (!channel) return res.status(400).json({ error: 'channel required' });

  const API_KEY = 'AIzaSyCk0fgTroD9nqt0cJOoP5Wm-rlhUDvRU1Q';

  // YouTube handle'larından channel ID al, sonra videoları çek
  const HANDLES = {
    motogp: 'motogp',
    wsbk:   'WorldSBK',
    f1:     'Formula1'
  };

  const handle = HANDLES[channel];
  if (!handle) return res.status(400).json({ error: 'invalid channel' });

  try {
    // Önce handle'dan channel bilgilerini al
    const chUrl = `https://www.googleapis.com/youtube/v3/channels?key=${API_KEY}&forHandle=${handle}&part=id,snippet&maxResults=1`;
    const chRes = await fetch(chUrl);
    const chData = await chRes.json();

    if (!chData.items || chData.items.length === 0) {
      return res.status(404).json({ error: `Channel not found for handle: ${handle}`, raw: chData });
    }

    const channelId = chData.items[0].id;

    // Sonra videoları çek
    const vidUrl = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}&part=snippet&order=date&type=video&maxResults=12`;
    const vidRes = await fetch(vidUrl);
    const vidData = await vidRes.json();

    res.setHeader('Cache-Control', 's-maxage=1800, stale-while-revalidate=300');
    return res.status(200).json(vidData);
  } catch(e) {
    return res.status(500).json({ error: e.message });
  }
}
