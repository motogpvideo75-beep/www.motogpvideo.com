/* =====================================================================
 *  CANLI YAYIN OTOMATİK BULUCU — motogpvideo.com
 *  /api/youtube-live endpoint'ini çağırır, canlı yayınları gösterir
 *  Manuel eklenen videoları tekrar göstermez
 * ===================================================================== */
(function(){
  'use strict';
  var POLL = 5*60*1000;
  var API  = '/api/youtube-live';
  var BOX  = 'auto-live-streams';

  // Sayfadaki mevcut iframe'lerden video ID'lerini topla (tekrar gösterme)
  var manual = [];
  document.querySelectorAll('iframe[src*="youtube.com/embed/"]').forEach(function(f){
    var m = f.src.match(/embed\/([a-zA-Z0-9_-]{11})/);
    if(m) manual.push(m[1]);
  });

  function card(s){
    var d = document.createElement('div');
    d.style.cssText = 'background:#0d1220;border:1px solid #2a3142;border-radius:12px;overflow:hidden;min-width:280px;flex:1;max-width:480px;';
    var short = s.title.length > 42 ? s.title.substring(0,39)+'...' : s.title;
    var badge = s.trusted ? ' <span style="background:#00e67622;color:#00e676;font-size:.65rem;padding:1px 6px;border-radius:4px;font-weight:700;">RESMİ</span>' : '';
    d.innerHTML =
      '<div style="position:relative;aspect-ratio:16/9;background:#000;">' +
        '<iframe src="'+s.embedUrl+'" title="'+s.title.replace(/"/g,'&quot;')+'" allow="accelerometer;autoplay;encrypted-media;gyroscope;picture-in-picture" allowfullscreen loading="lazy" referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;inset:0;width:100%;height:100%;border:0;"></iframe>' +
      '</div>' +
      '<div style="padding:10px 13px;">' +
        '<div style="color:#fff;font-weight:800;font-size:.9rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">'+s.icon+' '+short+' <span style="color:#00e676;">CANLI</span></div>' +
        '<div style="color:#9aa4b2;font-size:.76rem;margin-top:3px;">'+s.displayName+' \u2713'+badge+'</div>' +
      '</div>';
    return d;
  }

  function render(data){
    var box = document.getElementById(BOX);
    if(!box) return;
    var streams = data.streams.filter(function(s){ return manual.indexOf(s.videoId) === -1; });
    if(!streams.length){ box.style.display='none'; return; }
    box.style.display = 'block';
    box.innerHTML =
      '<div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;font-weight:900;letter-spacing:.5px;font-size:.95rem;color:#fff;flex-wrap:wrap;">' +
        '<span style="display:inline-flex;align-items:center;gap:6px;background:#ff6600;color:#fff;padding:3px 11px;border-radius:20px;font-size:.72rem;">' +
          '<span style="width:8px;height:8px;border-radius:50%;background:#fff;animation:ytLiveBlink 1s infinite;"></span>OTOMATİK</span>' +
        '<span>Ke\u015Ffedilen Canl\u0131 Yay\u0131nlar</span>' +
        '<span style="color:#9aa4b2;font-size:.78rem;font-weight:400;">('+streams.length+' yay\u0131n)</span>' +
      '</div>';
    var grid = document.createElement('div');
    grid.style.cssText = 'display:flex;flex-wrap:wrap;gap:14px;';
    var t = streams.filter(function(s){return s.trusted;});
    var o = streams.filter(function(s){return !s.trusted;});
    t.concat(o).forEach(function(s){ grid.appendChild(card(s)); });
    box.appendChild(grid);
  }

  function poll(){
    fetch(API).then(function(r){return r.json();}).then(function(d){
      if(d.streams && d.streams.length) render(d);
      else { var b=document.getElementById(BOX); if(b) b.style.display='none'; }
    }).catch(function(e){ console.warn('[CanlıOto]',e); });
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',function(){poll();setInterval(poll,POLL);});
  else { poll(); setInterval(poll,POLL); }
})();
