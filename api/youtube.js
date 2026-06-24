export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  const { channel } = req.query;
  if (!channel) return res.status(400).json({ error: 'channel required' });

  const CHANNELS = {
    motogp: 'UCgyQ6OF3MBe9eENjWMTuE_w',
    wsbk:   'UCpAMDSvBQWX7_VEMfpB1Wtw',
    f1:     'UCB_qr75-ydFVKSF9Dmo6izg'
  };

  const channelId = CHANNELS[channel];
  if (!channelId) return res.status(400).json({ error: 'invalid channel' });

  const API_KEY = 'AIzaSyCk0fgTroD9nqt0cJOoP5Wm-rlhUDvRU1Q';
  const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}&part=snippet&order=date&type=video&maxResults=12`;

  try {
    const r = await fetch(url);
    if (!r.ok) return res.status(r.status).json({ error: `YouTube API: ${r.status}` });
    const data = await r.json();
    res.setHeader('Cache-Control', 's-maxage=1800, stale-while-revalidate=300');
    return res.status(200).json(data);
  } catch(e) {
    return res.status(500).json({ error: e.message });
  }
}
