export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  // Mevcut YouTube API key (youtube.js ile aynı)
  const API_KEY = process.env.YOUTUBE_API_KEY || 'AIzaSyCk0fgTroD9nqt0cJOoP5Wm-rlhUDvRU1Q';

  // ===================================================================
  //  GÜVENİLİR KANALLAR — Sadece bunlardan gelen yayınlar gösterilir
  // ===================================================================
  const TRUSTED = {
    'UC8pYaQzbBBXg9GIOHRvTmDQ': { n: 'MotoGP',                 c: 'motogp',   i: '\u{1F3CD}\uFE0F' },
    'UC8rador8CU-pTJ6p7WNiv6w': { n: 'Goodwood Road & Racing', c: 'goodwood', i: '\u{1F3CE}\uFE0F' },
    'UCB_qr75-ydFVKSF9s0ycmAw': { n: 'Formula 1',             c: 'f1',       i: '\u{1F3CE}\uFE0F' },
    'UCjl3GkVm-c3cce3nFa6fR7Q': { n: 'WorldSBK',              c: 'wsbk',     i: '\u{1F3CD}\uFE0F' },
    'UCwKq447rYMhSmQkuCKMruiA': { n: 'Motorsport.tv',          c: 'general',  i: '\u{1F3C1}' },
    'UCOk0MNEP-M04EJkJ-5qFRHw': { n: 'WorldSBK Official',     c: 'wsbk',     i: '\u{1F3CD}\uFE0F' },
    'UCuBpNwGpf7g_1P1KnCDxrAg': { n: 'ADAC Motorsport',       c: 'general',  i: '\u{1F69A}' },
  };

  try {
    const url = 'https://www.googleapis.com/youtube/v3/search'
      + '?part=snippet&type=video&eventType=live'
      + '&q=' + encodeURIComponent('MotoGP|motorsport|WorldSBK|Formula 1|Goodwood|ADAC|racing live')
      + '&maxResults=50&order=viewCount'
      + '&key=' + API_KEY;

    const r = await fetch(url);
    const data = await r.json();

    if (data.error) {
      return res.status(502).json({ error: data.error.message, streams: [] });
    }

    const trusted = [];
    const other = [];

    for (const item of (data.items || [])) {
      const chId = item.snippet.channelId;
      const s = {
        videoId:      item.id.videoId,
        title:        item.snippet.title,
        channelId:    chId,
        channelTitle: item.snippet.channelTitle,
        thumbnail:    (item.snippet.thumbnails?.high || item.snippet.thumbnails?.medium || {}).url || '',
        embedUrl:     'https://www.youtube.com/embed/' + item.id.videoId + '?autoplay=1&mute=1&rel=0&modestbranding=1&playsinline=1',
        watchUrl:     'https://www.youtube.com/watch?v=' + item.id.videoId,
      };

      if (TRUSTED[chId]) {
        s.trusted = true;
        s.category = TRUSTED[chId].c;
        s.icon = TRUSTED[chId].i;
        s.displayName = TRUSTED[chId].n;
        trusted.push(s);
      } else {
        s.trusted = false;
        s.category = 'other';
        s.icon = '\u{1F3C1}';
        s.displayName = item.snippet.channelTitle;
        other.push(s);
      }
    }

    // 15dk CDN cache — günlük ~96 çağrı = 9600 birim (ücretsiz limit: 10.000)
    res.setHeader('Cache-Control', 's-maxage=900, stale-while-revalidate=60');
    return res.status(200).json({
      timestamp: new Date().toISOString(),
      trustedCount: trusted.length,
      otherCount: other.length,
      streams: [...trusted, ...other.slice(0, 5)]
    });

  } catch (e) {
    return res.status(500).json({ error: e.message, streams: [] });
  }
}
