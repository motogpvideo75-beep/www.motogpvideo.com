/* ===== MGV app.js — Optimized: langData lazy-loaded per language ===== */

// Language data cache — only the active language is loaded
const langData = {};
let _langLoadPromises = {};

/**
 * Load a language JSON file. Returns cached data if already loaded.
 * @param {string} lang - Language code (tr, en, de, etc.)
 * @returns {Promise<object>} Language data object
 */
function loadLang(lang) {
    if (langData[lang]) return Promise.resolve(langData[lang]);
    if (_langLoadPromises[lang]) return _langLoadPromises[lang];
    _langLoadPromises[lang] = fetch('/lang/' + lang + '.json')
        .then(function(r) { return r.json(); })
        .then(function(data) {
            langData[lang] = data;
            delete _langLoadPromises[lang];
            return data;
        })
        .catch(function(err) {
            console.warn('Lang load failed:', lang, err);
            delete _langLoadPromises[lang];
            // Fallback to Turkish if available
            if (lang !== 'tr' && langData['tr']) return langData['tr'];
            return null;
        });
    return _langLoadPromises[lang];
}

        const navLabels = {
            tr:{takvim:"📅 Takvim",puan:"🏆 Puan",canli:"📺 Yayın Rehberi",readBtn:"OKU",newsLoaded:"{n} haber yüklendi",footerPrivacy:"🔒 Gizlilik & KVKK",footerCookie:"🍪 Çerez Politikası",footerContact:"✉️ İletişim"},
            en:{takvim:"📅 Calendar",puan:"🏆 Standings",canli:"📺 Broadcast Guide",readBtn:"READ",newsLoaded:"{n} news loaded",footerPrivacy:"🔒 Privacy Policy",footerCookie:"🍪 Cookie Policy",footerContact:"✉️ Contact"},
            de:{takvim:"📅 Kalender",puan:"🏆 Punkte",canli:"📺 Sendeführer",readBtn:"LESEN",newsLoaded:"{n} Nachrichten geladen",footerPrivacy:"🔒 Datenschutz",footerCookie:"🍪 Cookie-Richtlinie",footerContact:"✉️ Kontakt"},
            fr:{takvim:"📅 Calendrier",puan:"🏆 Classement",canli:"📺 Guide TV",readBtn:"LIRE",newsLoaded:"{n} actualités chargées",footerPrivacy:"🔒 Confidentialité",footerCookie:"🍪 Politique de cookies",footerContact:"✉️ Contact"},
            ja:{takvim:"📅 カレンダー",puan:"🏆 ポイント",canli:"📺 放送ガイド",readBtn:"読む",newsLoaded:"{n}件のニュースを読み込みました",footerPrivacy:"🔒 プライバシーポリシー",footerCookie:"🍪 クッキーポリシー",footerContact:"✉️ お問い合わせ"},
            es:{takvim:"📅 Calendario",puan:"🏆 Puntos",canli:"📺 Guía de Emisión",readBtn:"LEER",newsLoaded:"{n} noticias cargadas",footerPrivacy:"🔒 Privacidad",footerCookie:"🍪 Política de cookies",footerContact:"✉️ Contacto"},
            it:{takvim:"📅 Calendario",puan:"🏆 Punti",canli:"📺 Guida TV",readBtn:"LEGGI",newsLoaded:"{n} notizie caricate",footerPrivacy:"🔒 Privacy",footerCookie:"🍪 Politica dei cookie",footerContact:"✉️ Contatto"},
            pt:{takvim:"📅 Calendário",puan:"🏆 Pontos",canli:"📺 Guia de Transmissão",readBtn:"LER",newsLoaded:"{n} notícias carregadas",footerPrivacy:"🔒 Privacidade",footerCookie:"🍪 Política de Cookies",footerContact:"✉️ Contato"},
            id:{takvim:"📅 Kalender",puan:"🏆 Poin",canli:"📺 Panduan Siaran",readBtn:"BACA",newsLoaded:"{n} berita dimuat",footerPrivacy:"🔒 Privasi",footerCookie:"🍪 Kebijakan Cookie",footerContact:"✉️ Kontak"},
            ar:{takvim:"📅 التقويم",puan:"🏆 الترتيب",canli:"📺 دليل البث",readBtn:"اقرأ",newsLoaded:"تم تحميل {n} خبر",footerPrivacy:"🔒 الخصوصية",footerCookie:"🍪 سياسة ملفات تعريف الارتباط",footerContact:"✉️ اتصل بنا"}
        };

        function applyUiLabels(lang) {
            const nl = navLabels[lang] || navLabels['tr'];
            const nt = document.getElementById('nav-takvim'); if(nt) nt.innerHTML = nl.takvim;
            const np = document.getElementById('nav-puan'); if(np) np.innerHTML = nl.puan;
            const nc = document.getElementById('nav-canli'); if(nc) nc.innerHTML = nl.canli;
            const fp = document.getElementById('footer-privacy'); if(fp) fp.innerHTML = nl.footerPrivacy;
            const fc = document.getElementById('footer-cookie'); if(fc) fc.innerHTML = nl.footerCookie;
            const fct = document.getElementById('footer-contact'); if(fct) fct.innerHTML = nl.footerContact;
        }

        function applyTtTranslations(d) {
            if (!d.tt) return;
            const tt = d.tt;
            const ttMap = {
                "tt-hero-title": tt.heroTitle,
                "tt-hero-desc": tt.heroDesc,
                "tt-card-course-title": tt.cardCourseTitle,
                "tt-card-course-value": tt.cardCourseValue,
                "tt-card-date-title": tt.cardDateTitle,
                "tt-card-date-value": tt.cardDateValue,
                "tt-card-rider-title": tt.cardRiderTitle,
                "tt-card-rider-value": tt.cardRiderValue,
                "tt-card-location-title": tt.cardLocationTitle,
                "tt-card-location-value": tt.cardLocationValue,
                "tt-links-title": tt.linksTitle,
                "tt-link-site": tt.linkSite,
                "tt-link-site-btn": tt.linkSiteBtn,
                "tt-link-news": tt.linkNews,
                "tt-link-news-btn": tt.linkNewsBtn,
                "tt-link-plus": tt.linkPlus,
                "tt-link-plus-btn": tt.linkPlusBtn,
                "tt-link-live": tt.linkLive,
                "tt-link-live-btn": tt.linkLiveBtn,
                "tt-link-classic": tt.linkClassic,
                "tt-link-classic-btn": tt.linkClassicBtn,
                "tt-link-linktree": tt.linkLinktree,
                "tt-link-linktree-btn": tt.linkLinktreeBtn,
                "tt-social-title": tt.socialTitle,
                "tt-disclaimer": tt.disclaimer
            };
            Object.entries(ttMap).forEach(([id, txt]) => { const el = document.getElementById(id); if (el && txt) el.innerText = txt; });
        }

        function switchLang(lang) {
            loadLang(lang).then(function(d) {
                if (!d) return;
            document.querySelectorAll(".lang-btn").forEach(btn => btn.classList.remove("active"));
            document.querySelectorAll(".lang-btn").forEach(btn => { if(btn.textContent.includes(lang.toUpperCase())) btn.classList.add("active"); });
            
            document.title = d.heroTitle + " | motogpvideo.com";
            const __metaDesc = document.querySelector('meta[name="description"]'); if (__metaDesc) __metaDesc.setAttribute('content', d.heroDesc);
            const __ogTitle = document.querySelector('meta[property="og:title"]'); if (__ogTitle) __ogTitle.setAttribute('content', d.heroTitle);
            const __ogDesc = document.querySelector('meta[property="og:description"]'); if (__ogDesc) __ogDesc.setAttribute('content', d.heroDesc);
            const mt = document.getElementById("main-title"); if (mt) mt.innerText = d.title;
            const tl = document.getElementById("ticker-label"); if (tl) tl.innerText = d.label;
            const tn = document.getElementById("ticker-news"); if (tn) tn.innerText = d.news;
            const pi = document.getElementById("pilot-info"); if (pi) pi.innerText = d.pilots;
            const cdl = document.getElementById("cd-label-text"); if (cdl) cdl.innerText = d.cdLabel;
            const lp = document.getElementById("live-pill-text"); if (lp) lp.innerText = d.live;
            document.getElementById("sb-sec1").innerText = d.sidebar.sec1;
            document.getElementById("sb-canli").innerText = d.sidebar.canli;
            document.getElementById("sb-tv").innerText = d.sidebar.tv;
            document.getElementById("sb-platform").innerText = d.sidebar.platform;
            document.getElementById("sb-sec2").innerText = d.sidebar.sec2;
            const sbSponsor = document.getElementById("sb-sponsor"); if(sbSponsor) sbSponsor.innerText = d.sidebar.sponsor || "Resmi Sponsorlar";
            document.getElementById("sb-markalar").innerText = d.sidebar.markalar;
            document.getElementById("sb-ekipman").innerText = d.sidebar.ekipman;
            document.getElementById("sb-lastik").innerText = d.sidebar.lastik;
            document.getElementById("sb-sec3").innerText = d.sidebar.sec3;
            document.getElementById("sb-takvim").innerText = d.sidebar.takvim;
            var sbSon = document.getElementById("sb-sonuclar"); if(sbSon && d.sidebar.sonuclar) sbSon.innerText = d.sidebar.sonuclar;
            document.getElementById("sb-biniciler").innerText = d.sidebar.biniciler;
            const sbTt = document.getElementById("sb-tt"); if (sbTt) sbTt.innerText = d.sidebar.tt;
            document.getElementById("sb-haberler").innerText = d.sidebar.haberler;
            document.getElementById("sb-global").innerText = d.sidebar.global;
            document.getElementById("sb-mission").innerText = d.sidebar.mission;
            document.getElementById("sb-mission-text").innerText = d.sidebar.missionText;
            document.getElementById("sb-mission-link").innerText = d.sidebar.missionLink;
            const navLinks = document.querySelectorAll(".topnav-link");
            d.nav.forEach((txt, i) => { if (navLinks[i]) navLinks[i].innerText = txt; });
            const st = d.secTitles;
            const map = { "st-canli":st.canli,"st-tv":st.tv,"st-platform":st.platform,"st-sponsor":st.sponsor || "🏆 Resmi Sponsorlar & Ortaklar","st-markalar":st.markalar,"st-ekipman":st.ekipman,"st-lastik":st.lastik,"st-takvim":st.takvim,"st-biniciler":st.biniciler,"st-haberler":st.haberler,"st-global":st.global };
            Object.entries(map).forEach(([id, txt]) => { const el = document.getElementById(id); if (el) el.innerText = txt; });
            const tabs = document.querySelectorAll(".rss-tab");
            d.rssTabs.forEach((txt, i) => { if (tabs[i]) tabs[i].innerText = txt; });
            const footer = document.querySelector("footer"); if (footer) { const fd = footer.querySelector("#footer-text"); if(fd) fd.innerText = d.footer; }
            const trt = document.getElementById("tv-race-channels-title"); if (trt && d.tvRaceTitle) trt.innerText = d.tvRaceTitle;
            const wct = document.getElementById("wc-title"); if (wct && d.worldCupTitle) wct.innerText = d.worldCupTitle;
            document.querySelectorAll(".btn-git").forEach(el => { if (d.btnGit) el.innerText = d.btnGit; });
            const trTitle = d.turkRiders || "TÜRK SÜRÜCÜLER";
            document.querySelectorAll(".turk-surucular-title").forEach(el => { el.innerText = "🇹🇷 " + trTitle; });
            if(d.sidebar) {
                const sbGaleri = document.getElementById("sb-galeri"); if(sbGaleri && d.sidebar.galeri) sbGaleri.innerText = d.sidebar.galeri;
                const sbResmi = document.getElementById("sb-resmi"); if(sbResmi && d.sidebar.resmi) sbResmi.innerText = d.sidebar.resmi;
                const sbIletisim = document.getElementById("sb-iletisim"); if(sbIletisim && d.sidebar.iletisim) sbIletisim.innerText = d.sidebar.iletisim;
                const sbPlatform = document.getElementById("sb-platform"); if(sbPlatform && d.sidebar.platform) sbPlatform.innerText = d.sidebar.platform;
                const sbSec1 = document.getElementById("sb-sec1"); if(sbSec1 && d.sidebar.sec1) sbSec1.innerText = d.sidebar.sec1;
                const sbMission = document.getElementById("sb-mission"); if(sbMission && d.sidebar.mission) sbMission.innerText = d.sidebar.mission;
            } else {
                const sbGaleri = document.getElementById("sb-galeri"); if(sbGaleri && d.galeri) sbGaleri.innerText = d.galeri;
                const sbResmi = document.getElementById("sb-resmi"); if(sbResmi && d.resmi) sbResmi.innerText = d.resmi;
                const sbIletisim = document.getElementById("sb-iletisim"); if(sbIletisim && d.iletisim) sbIletisim.innerText = d.iletisim;
                const sbPlatform = document.getElementById("sb-platform"); if(sbPlatform && d.platform) sbPlatform.innerText = d.platform;
                const sbSec1 = document.getElementById("sb-sec1"); if(sbSec1 && d.sec1) sbSec1.innerText = d.sec1;
                const sbMission = document.getElementById("sb-mission"); if(sbMission && d.mission) sbMission.innerText = d.mission;
            }
            document.querySelectorAll(".channel-badge").forEach(el => { if(d.officialBadge) el.innerText = "✔ " + d.officialBadge; });
            document.querySelectorAll(".ch-label").forEach(el => { if(d.watchBtn) el.innerText = d.watchBtn; });
            buildBrandGrid();
            if (d.chBtn) { document.querySelectorAll(".ch-label").forEach(el => el.innerText = d.chBtn); }
            if (d.countryNames) { document.querySelectorAll(".flag[data-key]").forEach(el => { const k = el.getAttribute("data-key"); if (d.countryNames[k]) el.innerText = d.countryNames[k]; }); }
            const ht = document.getElementById("hero-title"); if (ht && d.heroTitle) ht.innerText = d.heroTitle;
            const hd = document.getElementById("hero-desc"); if (hd && d.heroDesc) hd.innerText = d.heroDesc;
            const ab = document.getElementById("app-banner"); if (ab && d.appBanner) ab.innerText = d.appBanner;
            if (d.platform) {
                const ids = ["title","p1","p2","p3","p4","p5","p6","disc"];
                ids.forEach(k => { const el = document.getElementById("plat-"+k); if (el) el.innerHTML = d.platform[k]; });
            }
            applyTtTranslations(d);
            document.documentElement.lang = lang;
            document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";
            if(typeof buildBrandGrid === "function") buildBrandGrid();
            // Ekstra nav linkleri ve footer çevirileri
            applyUiLabels(lang);
            // Disclaimer güncelle
            document.querySelectorAll('#legal-disclaimer span').forEach(s => s.style.display = 'none');
            const discEl = document.querySelector('.disc-' + lang);
            if (discEl) discEl.style.display = 'inline';
            else { const tr2 = document.querySelector('.disc-tr'); if(tr2) tr2.style.display='inline'; }
            document.querySelectorAll('#broadcast-guide span').forEach(s => s.style.display = 'none');
            const bgEl = document.querySelector('.bg-guide-' + lang);
            if (bgEl) bgEl.style.display = 'inline';
            else { const bgTr = document.querySelector('.bg-guide-tr'); if(bgTr) bgTr.style.display='inline'; }
            document.querySelectorAll('#ekipman-guide span').forEach(s => s.style.display = 'none');
            const eqEl = document.querySelector('.eq-guide-' + lang);
            if (eqEl) eqEl.style.display = 'inline';
            else { const eqTr = document.querySelector('.eq-guide-tr'); if(eqTr) eqTr.style.display='inline'; }
            document.querySelectorAll('#lastik-guide span').forEach(s => s.style.display = 'none');
            const ltEl = document.querySelector('.lt-guide-' + lang);
            if (ltEl) ltEl.style.display = 'inline';
            else { const ltTr = document.querySelector('.lt-guide-tr'); if(ltTr) ltTr.style.display='inline'; }
        
            });
        }

        function showSection(id) {
            document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
            document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));
            document.getElementById(id).classList.add("active");
            event.target.closest(".nav-item").classList.add("active");
            if (window.innerWidth <= 768) closeSidebar();
            if (id === "sec-haberler") {
                const activeTab = document.querySelector(".rss-tab[data-feed].active");
                if (activeTab && document.getElementById("news-grid").querySelector(".skeleton")) loadRSS(activeTab);
            }
            if (id === "sec-videolar") {
                const grid = document.getElementById("video-grid");
                const firstBtn = document.querySelector("#video-tabs .cat-tab");
                if (grid && firstBtn && grid.children.length <= 1) {
                    loadVideos("motogp", firstBtn);
                }
            }
        }

        function toggleSidebar() { document.getElementById("sidebar").classList.toggle("open"); document.getElementById("overlay").classList.toggle("show"); }
        function closeSidebar() { document.getElementById("sidebar").classList.remove("open"); document.getElementById("overlay").classList.remove("show"); }

        function toggleLangMenu() {
            const menu = document.getElementById("lang-menu");
            menu.style.display = menu.style.display === "none" ? "block" : "none";
        }

        function selectLang(lang, flag, name) {
            document.getElementById("lang-menu").style.display = "none";
            document.getElementById("lang-current-name").textContent = flag + " " + name;
            try { localStorage.setItem("userLangChoice", lang); } catch(e) {}
            switchLang(lang);
        }

        document.addEventListener("click", function(e) {
            const btn = document.getElementById("lang-dropdown-btn");
            const menu = document.getElementById("lang-menu");
            if (btn && menu && !btn.contains(e.target) && !menu.contains(e.target)) {
                menu.style.display = "none";
            }
        });

        // ---- Site İçi Arama ----
        const searchIndex = [
            { icon:"📺", title:"Motor Sporları Bilgi", desc:"Canlı yayın bilgileri", section:"sec-canli", keys:["canlı","yayın","live","broadcast","information","motorsport"] },
            { icon:"🌍", title:"TV Kanalları", desc:"Ülkeye göre TV kanalları", section:"sec-tv", keys:["tv","kanal","channel","television","fox","espn","eurosport","sky","dazn","tnt"] },
            { icon:"🌐", title:"Özel Platformlar", desc:"Streaming platformları", section:"sec-platform", keys:["platform","stream","özel","special","motogp.com","worldsbk"] },
            { icon:"🏍", title:"Marka Ansiklopedisi", desc:"Honda, Yamaha, Ducati, KTM...", section:"sec-markalar", keys:["marka","brand","honda","yamaha","ducati","ktm","aprilia","suzuki","bmw","kawasaki"] },
            { icon:"⛑️", title:"Kask & Tulum Markaları", desc:"AGV, Shoei, Arai, Alpinestars, Dainese...", section:"sec-ekipman", keys:["kask","tulum","ekipman","helmet","agv","shoei","arai","alpinestars","dainese","spidi","eldiven","bot","koruma","ktm","nolan","x-lite","schuberth","bell","icon","held","klim","furygan"] },
            { icon:"🛞", title:"Lastik Markaları", desc:"Michelin, Pirelli, Bridgestone, Dunlop, Anlas...", section:"sec-lastik", keys:["lastik","tire","tyre","michelin","pirelli","bridgestone","dunlop","metzeler","continental","avon","mitas","anlas"] },
            { icon:"📅", title:"2026 Takvimi", desc:"MotoGP, WorldSBK, Formula 1 takvimi", section:"sec-takvim", keys:["takvim","calendar","2026","grand prix","schedule","race","yarış"] },
            { icon:"🏆", title:"Biniciler & Takımlar", desc:"Sürücüler ve takım kadroları", section:"sec-biniciler", keys:["binici","sürücü","rider","team","takım","toprak","marc","bagnaia","quartararo","zarco","martin","wspb","sportbike","worldspb","wssp","supersport","wwcr"] },
            { icon:"🇮🇲", title:"Isle of Man TT", desc:"1907'den beri efsanevi yol yarışı", section:"sec-tt", keys:["isle of man","tt","man adası","mountain course","snaefell","tourist trophy","dunlop","hickman","tt races"] },
            { icon:"🏆", title:"Resmi Sponsorlar", desc:"Qatar Airways, Tissot, Michelin, Pirelli, Brembo, DHL...", section:"sec-sponsor", keys:["sponsor","tissot","michelin","pirelli","brembo","dhl","qatar","motul","bmw m","estrella","acerbis","subaru","prosecco","pata"] },
            { icon:"📰", title:"Haberler", desc:"Son dakika haberleri", section:"sec-haberler", keys:["haber","news","son","latest","breaking"] },
            { icon:"🌍", title:"FIFA Dünya Kupası 2026", desc:"Resmi yayın kanalları - ülkeye göre", section:"sec-haberler", keys:["dünya kupası","world cup","fifa","2026","futbol","football","soccer","mundial","coupe du monde","trt","fox sports","bbc","telemundo"] },
            { icon:"⚡", title:"Global Hit Sporlar", desc:"Formula 1, NBA, Şampiyonlar Ligi", section:"sec-global", keys:["global","formula","f1","nba","uefa","şampiyonlar","champions"] },
            { icon:"🖼️", title:"Galeri", desc:"Pist fotoğrafları", section:"sec-galeri", keys:["galeri","gallery","pist","circuit","fotoğraf","photo"] },
            { icon:"🇹🇷", title:"Türk Sürücüler", desc:"Toprak, Bahattin, Can Öncü, Deniz Öncü", section:"sec-canli", keys:["türk","turkish","toprak","bahattin","can öncü","deniz","sofuoğlu","razgatlıoğlu","türkiye","istanbul"] },
        ];

        function openSearch() {
            document.getElementById("search-overlay").classList.add("open");
            setTimeout(() => document.getElementById("search-input").focus(), 50);
            doSearch("");
        }

        function closeSearch() {
            document.getElementById("search-overlay").classList.remove("open");
            document.getElementById("search-input").value = "";
            document.getElementById("search-results").innerHTML = "";
        }

        function closeSearchOnBg(e) {
            if (e.target === document.getElementById("search-overlay")) closeSearch();
        }

        function searchKey(e) {
            if (e.key === "Escape") closeSearch();
        }

        function doSearch(q) {
            const res = document.getElementById("search-results");
            q = q.trim().toLowerCase();
            let matches = q === "" ? searchIndex : searchIndex.filter(item =>
                item.title.toLowerCase().includes(q) ||
                item.desc.toLowerCase().includes(q) ||
                item.keys.some(k => k.includes(q) || q.includes(k))
            );
            if (matches.length === 0) {
                res.innerHTML = '<div id="search-empty">Sonuç bulunamadı.</div>';
                return;
            }
            res.innerHTML = matches.map(item => `
                <div class="search-item" onclick="goToSection('${item.section}')">
                    <div class="s-icon">${item.icon}</div>
                    <div><div class="s-title">${item.title}</div><div class="s-desc">${item.desc}</div></div>
                </div>
            `).join("");
        }

        function goToSection(sectionId) {
            closeSearch();
            showSection(sectionId);
            const el = document.getElementById(sectionId);
            if (el) { el.scrollIntoView({behavior:"smooth", block:"start"}); }
        }

        document.addEventListener("keydown", function(e) {
            if ((e.key === "/" || (e.key === "k" && (e.ctrlKey || e.metaKey))) && document.activeElement.tagName !== "INPUT") {
                e.preventDefault();
                openSearch();
            }
        });

        const cdLabels = {
            tr:{g:"G",s:"S",d:"D",sn:"SN"}, en:{g:"D",s:"H",d:"M",sn:"S"}, de:{g:"T",s:"Std",d:"Min",sn:"Sek"},
            fr:{g:"J",s:"H",d:"M",sn:"S"}, ja:{g:"\u65e5",s:"\u6642",d:"\u5206",sn:"\u79d2"}, es:{g:"D",s:"H",d:"M",sn:"S"},
            it:{g:"G",s:"O",d:"M",sn:"S"}, pt:{g:"D",s:"H",d:"M",sn:"S"}, ar:{g:"\u064a",s:"\u0633",d:"\u062f",sn:"\u062b"}, id:{g:"H",s:"J",d:"M",sn:"D"}
        };
        const venueWordMap = {
            en:{"Hollanda":"Netherlands","Almanya":"Germany","Britanya":"Britain","Avusturya":"Austria","Japonya":"Japan","Endonezya":"Indonesia","Avustralya":"Australia","Malezya":"Malaysia","Portekiz":"Portugal","Fransa":"France","\u0130talya":"Italy","\u0130spanya":"Spain","Kanada":"Canada","Bel\u00e7ika":"Belgium","Macaristan":"Hungary","Singapur":"Singapore","ABD":"USA","Meksika":"Mexico","Brezilya":"Brazil","Katar":"Qatar","Abu Dabi":"Abu Dhabi"},
            de:{"Hollanda":"Niederlande","Almanya":"Deutschland","Britanya":"Gro\u00dfbritannien","Avusturya":"\u00d6sterreich","Japonya":"Japan","Endonezya":"Indonesien","Avustralya":"Australien","Malezya":"Malaysia","Portekiz":"Portugal","Fransa":"Frankreich","\u0130talya":"Italien","\u0130spanya":"Spanien","Kanada":"Kanada","Bel\u00e7ika":"Belgien","Macaristan":"Ungarn","Singapur":"Singapur","ABD":"USA","Meksika":"Mexiko","Brezilya":"Brasilien","Katar":"Katar","Abu Dabi":"Abu Dhabi"},
            fr:{"Hollanda":"Pays-Bas","Almanya":"Allemagne","Britanya":"Grande-Bretagne","Avusturya":"Autriche","Japonya":"Japon","Endonezya":"Indon\u00e9sie","Avustralya":"Australie","Malezya":"Malaisie","Portekiz":"Portugal","Fransa":"France","\u0130talya":"Italie","\u0130spanya":"Espagne","Kanada":"Canada","Bel\u00e7ika":"Belgique","Macaristan":"Hongrie","Singapur":"Singapour","ABD":"\u00c9tats-Unis","Meksika":"Mexique","Brezilya":"Br\u00e9sil","Katar":"Qatar","Abu Dabi":"Abu Dhabi"},
            ja:{"Hollanda":"\u30aa\u30e9\u30f3\u30c0","Almanya":"\u30c9\u30a4\u30c4","Britanya":"\u30a4\u30ae\u30ea\u30b9","Avusturya":"\u30aa\u30fc\u30b9\u30c8\u30ea\u30a2","Japonya":"\u65e5\u672c","Endonezya":"\u30a4\u30f3\u30c9\u30cd\u30b7\u30a2","Avustralya":"\u30aa\u30fc\u30b9\u30c8\u30e9\u30ea\u30a2","Malezya":"\u30de\u30ec\u30fc\u30b7\u30a2","Portekiz":"\u30dd\u30eb\u30c8\u30ac\u30eb","Fransa":"\u30d5\u30e9\u30f3\u30b9","\u0130talya":"\u30a4\u30bf\u30ea\u30a2","\u0130spanya":"\u30b9\u30da\u30a4\u30f3","Kanada":"\u30ab\u30ca\u30c0","Bel\u00e7ika":"\u30d9\u30eb\u30ae\u30fc","Macaristan":"\u30cf\u30f3\u30ac\u30ea\u30fc","Singapur":"\u30b7\u30f3\u30ac\u30dd\u30fc\u30eb","ABD":"\u30a2\u30e1\u30ea\u30ab","Meksika":"\u30e1\u30ad\u30b7\u30b3","Brezilya":"\u30d6\u30e9\u30b8\u30eb","Katar":"\u30ab\u30bf\u30fc\u30eb","Abu Dabi":"\u30a2\u30d6\u30c0\u30d3"},
            es:{"Hollanda":"Pa\u00edses Bajos","Almanya":"Alemania","Britanya":"Gran Breta\u00f1a","Avusturya":"Austria","Japonya":"Jap\u00f3n","Endonezya":"Indonesia","Avustralya":"Australia","Malezya":"Malasia","Portekiz":"Portugal","Fransa":"Francia","\u0130talya":"Italia","\u0130spanya":"Espa\u00f1a","Kanada":"Canad\u00e1","Bel\u00e7ika":"B\u00e9lgica","Macaristan":"Hungr\u00eda","Singapur":"Singapur","ABD":"EE.UU.","Meksika":"M\u00e9xico","Brezilya":"Brasil","Katar":"Catar"},
            it:{"Hollanda":"Paesi Bassi","Almanya":"Germania","Britanya":"Gran Bretagna","Avusturya":"Austria","Japonya":"Giappone","Endonezya":"Indonesia","Avustralya":"Australia","Malezya":"Malesia","Portekiz":"Portogallo","Fransa":"Francia","\u0130talya":"Italia","\u0130spanya":"Spagna","Kanada":"Canada","Bel\u00e7ika":"Belgio","Macaristan":"Ungheria","Singapur":"Singapore","ABD":"USA","Meksika":"Messico","Brezilya":"Brasile","Katar":"Qatar"},
            pt:{"Hollanda":"Pa\u00edses Baixos","Almanya":"Alemanha","Britanya":"Gr\u00e3-Bretanha","Avusturya":"\u00c1ustria","Japonya":"Jap\u00e3o","Endonezya":"Indon\u00e9sia","Avustralya":"Austr\u00e1lia","Malezya":"Mal\u00e1sia","Portekiz":"Portugal","Fransa":"Fran\u00e7a","\u0130talya":"It\u00e1lia","\u0130spanya":"Espanha","Kanada":"Canad\u00e1","Bel\u00e7ika":"B\u00e9lgica","Macaristan":"Hungria","Singapur":"Singapura","ABD":"EUA","Meksika":"M\u00e9xico","Brezilya":"Brasil","Katar":"Catar"},
            ar:{"Hollanda":"\u0647\u0648\u0644\u0646\u062f\u0627","Almanya":"\u0623\u0644\u0645\u0627\u0646\u064a\u0627","Britanya":"\u0628\u0631\u064a\u0637\u0627\u0646\u064a\u0627","Avusturya":"\u0627\u0644\u0646\u0645\u0633\u0627","Japonya":"\u0627\u0644\u064a\u0627\u0628\u0627\u0646","Endonezya":"\u0625\u0646\u062f\u0648\u0646\u064a\u0633\u064a\u0627","Avustralya":"\u0623\u0633\u062a\u0631\u0627\u0644\u064a\u0627","Malezya":"\u0645\u0627\u0644\u064a\u0632\u064a\u0627","Portekiz":"\u0627\u0644\u0628\u0631\u062a\u063a\u0627\u0644","Fransa":"\u0641\u0631\u0646\u0633\u0627","\u0130talya":"\u0625\u064a\u0637\u0627\u0644\u064a\u0627","\u0130spanya":"\u0625\u0633\u0628\u0627\u0646\u064a\u0627","Kanada":"\u0643\u0646\u062f\u0627","Bel\u00e7ika":"\u0628\u0644\u062c\u064a\u0643\u0627","Macaristan":"\u0627\u0644\u0645\u062c\u0631","Singapur":"\u0633\u0646\u063a\u0627\u0641\u0648\u0631\u0629","ABD":"\u0627\u0644\u0648\u0644\u0627\u064a\u0627\u062a \u0627\u0644\u0645\u062a\u062d\u062f\u0629","Meksika":"\u0627\u0644\u0645\u0643\u0633\u064a\u0643","Brezilya":"\u0627\u0644\u0628\u0631\u0627\u0632\u064a\u0644","Katar":"\u0642\u0637\u0631"},
            id:{"Hollanda":"Belanda","Almanya":"Jerman","Britanya":"Inggris","Avusturya":"Austria","Japonya":"Jepang","Endonezya":"Indonesia","Avustralya":"Australia","Malezya":"Malaysia","Portekiz":"Portugal","Fransa":"Prancis","\u0130talya":"Italia","\u0130spanya":"Spanyol","Kanada":"Kanada","Bel\u00e7ika":"Belgia","Macaristan":"Hungaria","Singapur":"Singapura","ABD":"AS","Meksika":"Meksiko","Brezilya":"Brasil","Katar":"Qatar"}
        };
        function translateVenue(venue, lang){
            if(lang === "tr" || !venueWordMap[lang]) return venue;
            let result = venue;
            Object.entries(venueWordMap[lang]).forEach(([trWord, translated]) => {
                if(result.indexOf(trWord) !== -1) result = result.split(trWord).join(translated);
            });
            return result;
        }
        const raceCalendars = {
            motogp: [
                {venue:"Hollanda (Assen)", date:"2026-06-28T14:00:00"},
                {venue:"Almanya (Sachsenring)", date:"2026-07-12T13:00:00"},
                {venue:"Britanya (Silverstone)", date:"2026-08-09T16:00:00"},
                {venue:"Aragón (MotorLand)", date:"2026-08-30T15:00:00"},
                {venue:"San Marino (Misano)", date:"2026-09-13T15:00:00"},
                {venue:"Avusturya (Red Bull Ring)", date:"2026-09-20T15:00:00"},
                {venue:"Japonya (Motegi)", date:"2026-10-04T09:00:00"},
                {venue:"Endonezya (Mandalika)", date:"2026-10-11T10:00:00"},
                {venue:"Avustralya (Phillip Island)", date:"2026-10-25T07:00:00"},
                {venue:"Malezya (Sepang)", date:"2026-11-01T10:00:00"},
                {venue:"Portekiz (Algarve)", date:"2026-11-15T15:00:00"},
                {venue:"Valencia (Ricardo Tormo)", date:"2026-11-22T15:00:00"}
            ],
            wsbk: [
                {venue:"San Marino (Misano)", date:"2026-06-14T23:59:00"},
                {venue:"Britanya (Donington)", date:"2026-07-12T13:00:00"},
                {venue:"Fransa (Magny-Cours)", date:"2026-09-06T15:00:00"},
                {venue:"İtalya (Cremona)", date:"2026-09-27T15:00:00"},
                {venue:"Portekiz (Estoril)", date:"2026-10-11T15:00:00"},
                {venue:"İspanya (Jerez)", date:"2026-10-18T15:00:00"}
            ],
            f1: [
                {venue:"Kanada GP", date:"2026-06-15T23:59:00"},
                {venue:"Avusturya GP", date:"2026-06-29T23:59:00"},
                {venue:"Britanya GP", date:"2026-07-06T15:00:00"},
                {venue:"Belçika GP", date:"2026-07-27T16:00:00"},
                {venue:"Macaristan GP", date:"2026-08-03T16:00:00"},
                {venue:"Hollanda GP", date:"2026-08-31T16:00:00"},
                {venue:"İtalya GP (Monza)", date:"2026-09-07T16:00:00"},
                {venue:"Singapur GP", date:"2026-09-21T15:00:00"},
                {venue:"ABD GP (Austin)", date:"2026-10-19T21:00:00"},
                {venue:"Meksika GP", date:"2026-10-26T22:00:00"},
                {venue:"Brezilya GP", date:"2026-11-09T20:00:00"},
                {venue:"Las Vegas GP", date:"2026-11-22T08:00:00"},
                {venue:"Katar GP", date:"2026-11-29T18:00:00"},
                {venue:"Abu Dabi GP", date:"2026-12-06T16:00:00"}
            ]
        };

        function nextRace(list) {
            const now = new Date();
            for (const r of list) { if (new Date(r.date) > now) return r; }
            return list[list.length - 1];
        }

        function startMultiCountdown() {
            const series = {
                mg: raceCalendars.motogp,
                sbk: raceCalendars.wsbk,
                f1: raceCalendars.f1
            };
            function tick() {
                const now = new Date();
                const curLang = document.documentElement.lang || "tr";
                const lbl = cdLabels[curLang] || cdLabels.tr;
                Object.entries(series).forEach(([prefix, list]) => {
                    const race = nextRace(list);
                    const diff = new Date(race.date) - now;
                    const venueEl = document.getElementById(prefix + "-venue");
                    if (venueEl) venueEl.textContent = translateVenue(race.venue, curLang);
                    const d = Math.max(diff, 0);
                    const gun = String(Math.floor(d/86400000)).padStart(2,"0");
                    const saat = String(Math.floor((d%86400000)/3600000)).padStart(2,"0");
                    const dak = String(Math.floor((d%3600000)/60000)).padStart(2,"0");
                    const sn = String(Math.floor((d%60000)/1000)).padStart(2,"0");
                    const gunEl = document.getElementById(prefix + "-gun"); if (gunEl) gunEl.textContent = gun;
                    const saatEl = document.getElementById(prefix + "-saat"); if (saatEl) saatEl.textContent = saat;
                    const dakEl = document.getElementById(prefix + "-dak"); if (dakEl) dakEl.textContent = dak;
                    const snEl = document.getElementById(prefix + "-saniye"); if (snEl) snEl.textContent = sn;
                    const gLbl = document.getElementById(prefix + "-gtxt-g"); if (gLbl) gLbl.textContent = lbl.g;
                    const sLbl = document.getElementById(prefix + "-gtxt-s"); if (sLbl) sLbl.textContent = lbl.s;
                    const dLbl = document.getElementById(prefix + "-gtxt-d"); if (dLbl) dLbl.textContent = lbl.d;
                    const snLbl = document.getElementById(prefix + "-gtxt-sn"); if (snLbl) snLbl.textContent = lbl.sn;
                });
            }
            tick(); setInterval(tick, 1000);
        }

        function startCountdown() {
            startMultiCountdown();
        }

        const brands = [
            { name:"Honda", logo:"🔴", country:"🇯🇵 Japonya", founded:"1959", championships:16, riders:"Mick Doohan (5), Valentino Rossi (1), Marc Márquez (6)", history:"Honda is the most successful manufacturer in MotoGP history. From the RC211V to the RC213V, Honda has claimed 16 constructor championships in the premier class.", url:"https://www.motogp.com/en/teams/Honda" },
            { name:"Yamaha", logo:"🔵", country:"🇯🇵 Japonya", founded:"1961", championships:9, riders:"Valentino Rossi (4), Jorge Lorenzo (3), Fabio Quartararo (1)", history:"Yamaha entered Grand Prix racing in 1961. The YZR-M1 became legendary for its flexible power delivery and rider-friendly characteristics.", url:"https://www.motogp.com/en/teams/Yamaha" },
            { name:"Ducati", logo:"🏆", country:"🇮🇹 İtalya", founded:"2003", championships:5, riders:"Casey Stoner (1), Francesco Bagnaia (2), Jorge Martín (1)", history:"Ducati is where Italian passion meets engineering excellence. The most dominant manufacturer in recent years, winning consecutive titles from 2022 to 2024.", url:"https://www.ducati.com/global/en/racing/motogp" },
            { name:"KTM", logo:"🟠", country:"🇦🇹 Avusturya", founded:"2017", championships:0, riders:"Brad Binder, Jack Miller, Pedro Acosta", history:"KTM entered MotoGP in 2017. The RC16, with its aggressive power character, quickly became a competitive force in the premier class.", url:"https://www.ktm.com/en/motorsport/motogp.html" },
            { name:"Aprilia", logo:"⚡", country:"🇮🇹 İtalya", founded:"2015", championships:0, riders:"Aleix Espargaró, Maverick Viñales, Marco Bezzecchi", history:"Aprilia made a strong return to modern MotoGP with the RS-GP. As of 2026, they are firmly in the championship battle.", url:"https://www.aprilia.com/en_EN/racing/motogp/" },
            { name:"Suzuki", logo:"🔷", country:"🇯🇵 Japonya", founded:"1974", championships:3, riders:"Barry Sheene (2), Kenny Roberts Jr. (1), Joan Mir (1)", history:"Suzuki withdrew from MotoGP in 2022. Their greatest recent achievement was Joan Mir's unexpected championship title in 2020 with the GSX-RR.", url:"https://www.suzuki-racing.com" },
            { name:"Pramac Racing", logo:"🏁", country:"🇮🇹 İtalya (Yamaha uydu)", founded:"2002", championships:0, riders:"Jorge Martín, Franco Morbidelli, Toprak Razgatlıoğlu", history:"Pramac opened a new chapter with Yamaha from 2025. Toprak Razgatlıoğlu is among the riders competing for the team.", url:"https://www.pramacracing.com" },
            { name:"Gresini Racing", logo:"🌀", country:"🇮🇹 İtalya", founded:"1997", championships:0, riders:"Alex Márquez, Enea Bastianini", history:"A long-standing independent team founded by Fausto Gresini. Enea Bastianini claimed 4 victories for the team in 2022.", url:"https://www.gresiniracing.com/en/" },
            { name:"BMW Motorrad", logo:"🔵", country:"🇩🇪 Almanya", founded:"2019", championships:3, riders:"Toprak Razgatlıoğlu (3), Michael van der Mark, Danilo Petrucci", history:"BMW returned to WorldSBK in 2019. The M1000RR became a serious contender from 2023 onwards, winning the 2024 and 2025 championships with Toprak Razgatlıoğlu.", url:"https://www.bmw-motorrad.com/en/racing/worldsbk.html" },
            { name:"Kawasaki / Bimota", logo:"🟩", country:"🇯🇵 Japonya / 🇮🇹 İtalya", founded:"2000", championships:6, riders:"Jonathan Rea (6), Alex Lowes, Axel Bassani", history:"Kawasaki is one of the most successful brands in WorldSBK history. They won 6 consecutive championships with Jonathan Rea from 2015 to 2020, and opened a new chapter with Bimota in 2025.", url:"https://www.kawasaki.com/en-us/motorsports/racing/worldsbk" },
            { name:"Honda HRC (WorldSBK)", logo:"🔴", country:"🇯🇵 Japonya", founded:"2020", championships:0, riders:"Jonathan Rea, Iker Lecuona, Xavi Vierge, Jake Dixon", history:"Honda competes in WorldSBK with the CBR1000RR-R. Returning to the grid with full HRC factory support, Honda lined up with a strong rider roster in 2026.", url:"https://www.worldsbk.com/en/teams/hrc" },
            { name:"VR46 Racing", logo:"🌟", country:"🇮🇹 İtalya", founded:"2022", championships:0, riders:"Fabio Di Giannantonio, Franco Morbidelli", history:"The team founded by Valentino Rossi. VR46 entered MotoGP in 2022 and quickly became a competitive force working with Ducati.", url:"https://www.vr46.it" },
            { name:"Trackhouse Racing", logo:"🏴", country:"🇺🇸 ABD", founded:"2023", championships:0, riders:"Raul Fernandez, Ai Ogura", history:"US-based Trackhouse entered MotoGP in partnership with Aprilia. Since 2023, they have steadily grown and consolidated their position on the grid.", url:"https://www.trackhousemotogp.com" },
            { name:"LCR Honda", logo:"🔶", country:"🇲🇨 Monako", founded:"2006", championships:0, riders:"Johann Zarco, Diogo Moreira", history:"An independent team founded by Lucio Cecchinello. LCR's long-standing partnership with Honda HRC has opened the MotoGP door for many talented riders.", url:"https://www.motogp.com/en/teams/LCR+Honda+IDEMITSU" },
            { name:"Barni Spark Racing", logo:"⚡", country:"🇮🇹 İtalya", founded:"2004", championships:0, riders:"Alvaro Bautista", history:"A well-established independent WorldSBK team founded by Marco Barnabo. Racing with the Ducati Panigale V4R, the team lined up with Alvaro Bautista in 2026.", url:"https://www.worldsbk.com/en/teams/barni" }
        ];

        const allRiders = {
            motogp: {
                label:"🏁 MotoGP 2026", color:"#e8001d",
                list:[
                    {num:5,  name:"Johann Zarco",          flag:"🇫🇷", country:"Fransa",       team:"CASTROL Honda LCR",               bike:"Honda"},
                    {num:7,  name:"Toprak Razgatlıoğlu",   flag:"🇹🇷", country:"Türkiye",      team:"Prima Pramac Yamaha MotoGP",      bike:"Yamaha", featured:true},
                    {num:10, name:"Luca Marini",            flag:"🇮🇹", country:"İtalya",       team:"Honda HRC Castrol",               bike:"Honda"},
                    {num:11, name:"Diogo Moreira",          flag:"🇧🇷", country:"Brezilya",     team:"Pro Honda LCR",                   bike:"Honda"},
                    {num:12, name:"Maverick Viñales",       flag:"🇪🇸", country:"İspanya",      team:"Red Bull KTM Tech3",              bike:"KTM"},
                    {num:20, name:"Fabio Quartararo",       flag:"🇫🇷", country:"Fransa",       team:"Monster Energy Yamaha MotoGP",    bike:"Yamaha"},
                    {num:21, name:"Franco Morbidelli",      flag:"🇮🇹", country:"İtalya",       team:"Pertamina Enduro VR46 Racing",    bike:"Ducati"},
                    {num:23, name:"Enea Bastianini",        flag:"🇮🇹", country:"İtalya",       team:"Red Bull KTM Tech3",              bike:"KTM"},
                    {num:25, name:"Raul Fernandez",         flag:"🇪🇸", country:"İspanya",      team:"Trackhouse MotoGP Team",          bike:"Aprilia"},
                    {num:33, name:"Brad Binder",            flag:"🇿🇦", country:"Güney Afrika", team:"Red Bull KTM Factory Racing",     bike:"KTM"},
                    {num:36, name:"Joan Mir",               flag:"🇪🇸", country:"İspanya",      team:"Honda HRC Castrol",               bike:"Honda"},
                    {num:37, name:"Pedro Acosta",           flag:"🇪🇸", country:"İspanya",      team:"Red Bull KTM Factory Racing",     bike:"KTM"},
                    {num:42, name:"Alex Rins",              flag:"🇪🇸", country:"İspanya",      team:"Monster Energy Yamaha MotoGP",    bike:"Yamaha"},
                    {num:43, name:"Jack Miller",            flag:"🇦🇺", country:"Avustralya",   team:"Prima Pramac Yamaha MotoGP",      bike:"Yamaha"},
                    {num:49, name:"Fabio Di Giannantonio",  flag:"🇮🇹", country:"İtalya",       team:"Pertamina Enduro VR46 Racing",    bike:"Ducati"},
                    {num:54, name:"Fermin Aldeguer",        flag:"🇪🇸", country:"İspanya",      team:"BK8 Gresini Racing MotoGP",       bike:"Ducati"},
                    {num:63, name:"Francesco Bagnaia",      flag:"🇮🇹", country:"İtalya",       team:"Ducati Lenovo Team",              bike:"Ducati"},
                    {num:72, name:"Marco Bezzecchi",        flag:"🇮🇹", country:"İtalya",       team:"Aprilia Racing",                  bike:"Aprilia"},
                    {num:73, name:"Alex Marquez",           flag:"🇪🇸", country:"İspanya",      team:"BK8 Gresini Racing MotoGP",       bike:"Ducati"},
                    {num:79, name:"Ai Ogura",               flag:"🇯🇵", country:"Japonya",      team:"Trackhouse MotoGP Team",          bike:"Aprilia"},
                    {num:89, name:"Jorge Martin",           flag:"🇪🇸", country:"İspanya",      team:"Aprilia Racing",                  bike:"Aprilia"},
                    {num:93, name:"Marc Marquez",           flag:"🇪🇸", country:"İspanya",      team:"Ducati Lenovo Team",              bike:"Ducati"}
                ]
            },
            moto2: {
                label:"🔵 Moto2 2026", color:"#0099ff",
                list:[
                    {num:3,  name:"Sergio Garcia",              flag:"🇪🇸", country:"İspanya",    team:"ITALJET Gresini Moto2",              bike:"Moto2"},
                    {num:4,  name:"Ivan Ortola",                flag:"🇪🇸", country:"İspanya",    team:"QJMOTOR Exocom MSI",                 bike:"Moto2"},
                    {num:7,  name:"Barry Baltus",               flag:"🇧🇪", country:"Belçika",    team:"REDS Fantic Racing",                 bike:"Moto2"},
                    {num:9,  name:"Jorge Navarro",              flag:"🇪🇸", country:"İspanya",    team:"KLINT Yarış Takımı",                 bike:"Moto2"},
                    {num:11, name:"Alex Escrig",                flag:"🇪🇸", country:"İspanya",    team:"KLINT Yarış Takımı",                 bike:"Moto2"},
                    {num:12, name:"Filip Salac",                flag:"🇨🇿", country:"Çekya",      team:"OnlyFans American Racing",           bike:"Moto2"},
                    {num:13, name:"Celestino Vietti",           flag:"🇮🇹", country:"İtalya",     team:"MB Conveyors SpeedRS",               bike:"Moto2"},
                    {num:14, name:"Tony Arbolino",              flag:"🇮🇹", country:"İtalya",     team:"REDS Fantic Racing",                 bike:"Moto2"},
                    {num:16, name:"Joe Roberts",                flag:"🇺🇸", country:"ABD",        team:"OnlyFans American Racing",           bike:"Moto2"},
                    {num:17, name:"Daniel Muñoz",               flag:"🇪🇸", country:"İspanya",    team:"Italtrans Racing",                   bike:"Moto2"},
                    {num:18, name:"Manuel Gonzalez",            flag:"🇪🇸", country:"İspanya",    team:"Liqui Moly Dynavolt Intact GP",      bike:"Moto2"},
                    {num:21, name:"Alonso Lopez",               flag:"🇪🇸", country:"İspanya",    team:"ITALJET Gresini Moto2",              bike:"Moto2"},
                    {num:28, name:"Izan Guevara",               flag:"🇪🇸", country:"İspanya",    team:"BLU CRU Pramac Yamaha Moto2",        bike:"Moto2"},
                    {num:32, name:"Luca Lunetta",               flag:"🇮🇹", country:"İtalya",     team:"MB Conveyors SpeedRS",               bike:"Moto2"},
                    {num:36, name:"Angel Piqueras",             flag:"🇪🇸", country:"İspanya",    team:"QJMOTOR Exocom MSI",                 bike:"Moto2"},
                    {num:44, name:"Aron Canet",                 flag:"🇪🇸", country:"İspanya",    team:"ELF Marc VDS Racing",                bike:"Moto2"},
                    {num:53, name:"Deniz Öncü",                 flag:"🇹🇷", country:"Türkiye",    team:"ELF Marc VDS Racing",                bike:"Moto2", featured:true},
                    {num:54, name:"Alberto Ferrandez",          flag:"🇪🇸", country:"İspanya",    team:"BLU CRU Pramac Yamaha Moto2",        bike:"Moto2"},
                    {num:64, name:"Mario Suryo Aji",            flag:"🇮🇩", country:"Endonezya",  team:"Idemitsu Honda Asia",                bike:"Moto2"},
                    {num:71, name:"Ayumu Sasaki",               flag:"🇯🇵", country:"Japonya",    team:"Momoven Idrofoglia RW",               bike:"Moto2"},
                    {num:72, name:"Taiyo Furusato",             flag:"🇯🇵", country:"Japonya",    team:"Idemitsu Honda Asia",                bike:"Moto2"},
                    {num:80, name:"David Alonso",               flag:"🇨🇴", country:"Kolombiya",  team:"CFMOTO Inde Aspar",                  bike:"Moto2"},
                    {num:81, name:"Senna Agius",                flag:"🇦🇺", country:"Avustralya", team:"LIQUI MOLY Dynavolt Intact GP",      bike:"Moto2"},
                    {num:84, name:"Zonta Van Den Goorbergh",    flag:"🇳🇱", country:"Hollanda",   team:"Momoven Idrofoglia RW",               bike:"Moto2"},
                    {num:95, name:"Collin Veijer",              flag:"🇳🇱", country:"Hollanda",   team:"Red Bull KTM Ajo",                   bike:"Moto2"},
                    {num:96, name:"Daniel Holgado",             flag:"🇪🇸", country:"İspanya",    team:"CFMOTO Inde Aspar",                  bike:"Moto2"},
                    {num:98, name:"Jose Antonio Rueda",         flag:"🇪🇸", country:"İspanya",    team:"Red Bull KTM Ajo",                   bike:"Moto2"},
                    {num:99, name:"Adrian Huertas",             flag:"🇪🇸", country:"İspanya",    team:"Italtrans Racing",                   bike:"Moto2"}
                ]
            },
            moto3: {
                label:"🟢 Moto3 2026", color:"#00cc66",
                list:[
                    {num:5,  name:"Leo Rammerstorfer",  flag:"🇦🇹", country:"Avusturya",      team:"SIC58 Squadra Corse",               bike:"Moto3"},
                    {num:6,  name:"Ryusei Yamanaka",    flag:"🇯🇵", country:"Japonya",        team:"AEON Credit MT Helmets MSI",        bike:"Moto3"},
                    {num:8,  name:"Eddie O'Shea",       flag:"🇬🇧", country:"Birleşik Krallık",team:"GRYD Racing",                      bike:"Moto3"},
                    {num:9,  name:"Veda Pratama",       flag:"🇮🇩", country:"Endonezya",      team:"Honda Asia Team",                   bike:"Moto3"},
                    {num:10, name:"Nicola Carraro",     flag:"🇮🇹", country:"İtalya",         team:"Rivacold Sniper Team",              bike:"Moto3"},
                    {num:11, name:"Adrian Cruces",      flag:"🇪🇸", country:"İspanya",        team:"CIP Green Energy",                  bike:"Moto3"},
                    {num:13, name:"Hakim Danish",       flag:"🇲🇾", country:"Malezya",        team:"AEON Credit MT Helmets MSI",        bike:"Moto3"},
                    {num:14, name:"Cormac Buchanan",    flag:"🇳🇿", country:"Yeni Zelanda",   team:"CODE Motorsports",                  bike:"Moto3"},
                    {num:18, name:"Matteo Bertelle",    flag:"🇮🇹", country:"İtalya",         team:"LEVELUP MTA",                       bike:"Moto3"},
                    {num:19, name:"Scott Ogden",        flag:"🇬🇧", country:"Birleşik Krallık",team:"CIP Green Energy",                 bike:"Moto3"},
                    {num:21, name:"Ruche Moodley",      flag:"🇿🇦", country:"Güney Afrika",   team:"CODE Motorsports",                  bike:"Moto3"},
                    {num:22, name:"David Almansa",      flag:"🇪🇸", country:"İspanya",        team:"Liqui Moly Dynavolt Intact GP",     bike:"Moto3"},
                    {num:27, name:"Rico Salmela",       flag:"🇫🇮", country:"Finlandiya",     team:"Red Bull KTM Tech3",                bike:"Moto3"},
                    {num:28, name:"Maximo Quiles",      flag:"🇪🇸", country:"İspanya",        team:"CFMOTO Gaviota Aspar",              bike:"Moto3"},
                    {num:31, name:"Adrian Fernandez",   flag:"🇪🇸", country:"İspanya",        team:"Leopard Racing",                    bike:"Moto3"},
                    {num:32, name:"Zen Mitani",         flag:"🇯🇵", country:"Japonya",        team:"Honda Asia Team",                   bike:"Moto3"},
                    {num:51, name:"Brian Uriarte",      flag:"🇪🇸", country:"İspanya",        team:"Red Bull KTM Ajo",                  bike:"Moto3"},
                    {num:54, name:"Jesus Rios",         flag:"🇪🇸", country:"İspanya",        team:"Rivacold Sniper Team",              bike:"Moto3"},
                    {num:64, name:"David Muñoz",        flag:"🇪🇸", country:"İspanya",        team:"Liqui Moly Dynavolt Intact GP",     bike:"Moto3"},
                    {num:66, name:"Joel Kelso",         flag:"🇦🇺", country:"Avustralya",     team:"GRYD Racing",                       bike:"Moto3"},
                    {num:67, name:"Casey O'Gorman",     flag:"🇮🇪", country:"İrlanda",        team:"SIC58 Squadra Corse",               bike:"Moto3"},
                    {num:73, name:"Valentin Perrone",   flag:"🇦🇷", country:"Arjantin",       team:"Red Bull KTM Tech3",                bike:"Moto3"},
                    {num:78, name:"Joel Esteban",       flag:"🇪🇸", country:"İspanya",        team:"LEVELUP MTA",                       bike:"Moto3"},
                    {num:83, name:"Alvaro Carpe",       flag:"🇪🇸", country:"İspanya",        team:"Red Bull KTM Ajo",                  bike:"Moto3"}
                ]
            },
            wsbk: {
                label:"🏆 WorldSBK 2026", color:"#0066cc",
                list:[
                    {num:5,  name:"Yari Montella",      flag:"🇮🇹", country:"İtalya",          team:"Aprilia Racing",                    bike:"Aprilia"},
                    {num:7,  name:"Iker Lecuona",       flag:"🇪🇸", country:"İspanya",         team:"Aruba.it Racing Ducati",            bike:"Ducati"},
                    {num:9,  name:"Danilo Petrucci",    flag:"🇮🇹", country:"İtalya",          team:"ROKiT BMW Motorrad WorldSBK",       bike:"BMW"},
                    {num:11, name:"Nicolo Bulega",      flag:"🇮🇹", country:"İtalya",          team:"Aruba.it Racing Ducati",            bike:"Ducati"},
                    {num:13, name:"Mattia Rato",        flag:"🇮🇹", country:"İtalya",          team:"Motox Racing WorldSBK",             bike:"Yamaha"},
                    {num:14, name:"Sam Lowes",          flag:"🇬🇧", country:"Birleşik Krallık", team:"ELF Marc VDS Racing",              bike:"Ducati"},
                    {num:17, name:"Ryan Vickers",       flag:"🇬🇧", country:"Birleşik Krallık", team:"Honda HRC",                       bike:"Honda"},
                    {num:19, name:"Alvaro Bautista",    flag:"🇪🇸", country:"İspanya",         team:"Barni Spark Racing",               bike:"Ducati"},
                    {num:22, name:"Alex Lowes",         flag:"🇬🇧", country:"Birleşik Krallık", team:"Kawasaki by Bimota",              bike:"Bimota"},
                    {num:31, name:"Garrett Gerloff",    flag:"🇺🇸", country:"ABD",             team:"Kawasaki WorldSBK",                bike:"Kawasaki"},
                    {num:34, name:"Lorenzo Baldassarri",flag:"🇮🇹", country:"İtalya",          team:"Goeleven Team",                    bike:"Ducati"},
                    {num:35, name:"Somkiat Chantra",    flag:"🇹🇭", country:"Tayland",         team:"Honda HRC",                        bike:"Honda"},
                    {num:38, name:"Hannes Soomer",      flag:"🇪🇪", country:"Estonya",         team:"ROKiT BMW Motorrad WorldSBK",       bike:"BMW"},
                    {num:45, name:"Tetsuta Nagashima",  flag:"🇯🇵", country:"Japonya",         team:"Honda HRC",                        bike:"Honda"},
                    {num:46, name:"Thomas Bridewell",   flag:"🇬🇧", country:"Birleşik Krallık", team:"Superbike Advocates",             bike:"Honda"},
                    {num:47, name:"Axel Bassani",       flag:"🇮🇹", country:"İtalya",          team:"Kawasaki by Bimota",               bike:"Bimota"},
                    {num:54, name:"Bahattin Sofuoğlu",  flag:"🇹🇷", country:"Türkiye",         team:"Motox Racing WorldSBK",            bike:"Yamaha", featured:true},
                    {num:55, name:"Andrea Locatelli",   flag:"🇮🇹", country:"İtalya",          team:"Pata Maxus Yamaha",                bike:"Yamaha"},
                    {num:60, name:"Michael van der Mark",flag:"🇳🇱", country:"Hollanda",       team:"ROKiT BMW Motorrad WorldSBK",      bike:"BMW"},
                    {num:62, name:"Stefano Manzi",      flag:"🇮🇹", country:"İtalya",          team:"GYTR GRT Yamaha WorldSBK",         bike:"Yamaha"},
                    {num:65, name:"Jonathan Rea",       flag:"🇬🇧", country:"Birleşik Krallık", team:"Honda HRC",                      bike:"Honda"},
                    {num:67, name:"Alberto Surra",      flag:"🇮🇹", country:"İtalya",          team:"Motocorsa Racing",                 bike:"Ducati"},
                    {num:87, name:"Remy Gardner",       flag:"🇦🇺", country:"Avustralya",      team:"GYTR GRT Yamaha WorldSBK",         bike:"Yamaha"},
                    {num:88, name:"Miguel Oliveira",    flag:"🇵🇹", country:"Portekiz",        team:"ROKiT BMW Motorrad WorldSBK",      bike:"BMW"},
                    {num:95, name:"Tarran Mackenzie",   flag:"🇬🇧", country:"Birleşik Krallık", team:"MGM Optical Express Racing",      bike:"Ducati"},
                    {num:96, name:"Jake Dixon",         flag:"🇬🇧", country:"Birleşik Krallık", team:"Honda HRC",                      bike:"Honda"},
                    {num:97, name:"Xavi Vierge",        flag:"🇪🇸", country:"İspanya",         team:"Pata Maxus Yamaha",               bike:"Yamaha"}
                ]
            },
            wssp: {
                label:"⚡ Dünya SSP 2026", color:"#ff6600",
                list:[
                    {num:3,  name:"Raffaele De Rosa",   flag:"🇮🇹", country:"İtalya",   team:"QJMOTOR Fabrika Yarışları",    bike:"SSP"},
                    {num:5,  name:"Jaume Masia",        flag:"🇪🇸", country:"İspanya",  team:"Orelac Racing Verdnatura",     bike:"SSP"},
                    {num:6,  name:"Corentin Perolari",  flag:"🇫🇷", country:"Fransa",   team:"Honda Racing World SSP",       bike:"SSP"},
                    {num:7,  name:"Filippo Farioli",    flag:"🇮🇹", country:"İtalya",   team:"VFT Racing Yamaha",            bike:"SSP"},
                    {num:10, name:"Leonardo Taccini",   flag:"🇮🇹", country:"İtalya",   team:"Ecosantagata Althea Racing",   bike:"SSP"},
                    {num:11, name:"Matteo Ferrari",     flag:"🇮🇹", country:"İtalya",   team:"WRP Racing",                   bike:"SSP"},
                    {num:16, name:"Alessandro Zaccone", flag:"🇮🇹", country:"İtalya",   team:"Ecosantagata Althea Racing",   bike:"SSP"},
                    {num:22, name:"Ana Carrasco",       flag:"🇪🇸", country:"İspanya",  team:"Honda Racing World SSP",       bike:"SSP"},
                    {num:24, name:"Marcos Ramirez",     flag:"🇪🇸", country:"İspanya",  team:"QJMOTOR Fabrika Yarışları",    bike:"SSP"},
                    {num:31, name:"Yuki Okamoto",       flag:"🇯🇵", country:"Japonya",  team:"Pata Yamaha Ten Kate",          bike:"SSP"},
                    {num:32, name:"Oli Bayliss",        flag:"🇦🇺", country:"Avustralya",team:"PTR Triumph Factory",          bike:"SSP"},
                    {num:37, name:"Roberto Garcia",     flag:"🇪🇸", country:"İspanya",  team:"GMT94 Yamaha",                 bike:"SSP"},
                    {num:40, name:"Mattia Casadei",     flag:"🇮🇹", country:"İtalya",   team:"D34G WorldSSP Racing",         bike:"SSP"},
                    {num:52, name:"Jeremy Alcoba",      flag:"🇪🇸", country:"İspanya",  team:"Kawasaki WorldSSP",            bike:"SSP"},
                    {num:54, name:"Riccardo Rossi",     flag:"🇮🇹", country:"İtalya",   team:"Renzi Corse",                  bike:"SSP"},
                    {num:61, name:"Can Öncü",           flag:"🇹🇷", country:"Türkiye",  team:"Pata Yamaha Ten Kate",          bike:"SSP", featured:true},
                    {num:64, name:"Federico Caricasulo",flag:"🇮🇹", country:"İtalya",   team:"Evan Bros EASTOC ZXMOTO",      bike:"SSP"},
                    {num:65, name:"Philipp Oettl",      flag:"🇩🇪", country:"Almanya",  team:"Feel Racing WorldSSP",         bike:"SSP"},
                    {num:69, name:"Tom Booth-Amos",     flag:"🇬🇧", country:"Birleşik Krallık",team:"PTR Triumph Factory",   bike:"SSP"},
                    {num:77, name:"Dominique Aegerter", flag:"🇨🇭", country:"İsviçre",  team:"Kawasaki WorldSSP",            bike:"SSP"},
                    {num:94, name:"Lucas Mahias",       flag:"🇫🇷", country:"Fransa",   team:"GMT94 Yamaha",                 bike:"SSP"}
                ]
            },
            wwcr: {
                label:"👩 Dünya WCR 2026", color:"#cc44aa",
                list:[
                    {num:6,  name:"Maria Herrera",      flag:"🇪🇸", country:"İspanya",  team:"Terra Vita GRT Yamaha WorldWCR",  bike:"WCR"},
                    {num:8,  name:"Tayla Relph",        flag:"🇦🇺", country:"Avustralya",team:"Full Gas Racing",                bike:"WCR"},
                    {num:11, name:"Yvonne Cerpa",       flag:"🇪🇸", country:"İspanya",  team:"MotosCerpa Gradara Corse",        bike:"WCR"},
                    {num:14, name:"Mallory Dobbs",      flag:"🇺🇸", country:"ABD",      team:"YVS Sabadell Diva Racing",        bike:"WCR"},
                    {num:15, name:"Chloe Jones",        flag:"🇬🇧", country:"Birleşik Krallık",team:"Monster Energy Crescent Yamaha",bike:"WCR"},
                    {num:16, name:"Lucy Michel",        flag:"🇩🇪", country:"Almanya",  team:"TSL Racing",                      bike:"WCR"},
                    {num:20, name:"Natalia Rivera",     flag:"🇪🇸", country:"İspanya",  team:"Terra Vita GRT Yamaha WorldWCR",  bike:"WCR"},
                    {num:22, name:"Martina Guarino",    flag:"🇮🇹", country:"İtalya",   team:"Prata Motorsport",                bike:"WCR"},
                    {num:36, name:"Beatriz Neila",      flag:"🇪🇸", country:"İspanya",  team:"Ampito Crescent Yamaha",          bike:"WCR"},
                    {num:41, name:"Arianna Barale",     flag:"🇮🇹", country:"İtalya",   team:"Hadden Racing Team",              bike:"WCR"},
                    {num:44, name:"Patrycja Sowa",      flag:"🇵🇱", country:"Polonya",  team:"Trasimeno Team",                  bike:"WCR"},
                    {num:58, name:"Paola Ramos",        flag:"🇪🇸", country:"İspanya",  team:"Klint Racing Team",               bike:"WCR"},
                    {num:64, name:"Sara Sanchez",       flag:"🇪🇸", country:"İspanya",  team:"Hadden Racing Team",              bike:"WCR"},
                    {num:83, name:"Astrid Madrigal",    flag:"🇲🇽", country:"Meksika",  team:"Pons Italika Racing FIMLA",       bike:"WCR"},
                    {num:88, name:"Denise Dal Zotto",   flag:"🇮🇹", country:"İtalya",   team:"PATA AG Motorsport Italia",       bike:"WCR"},
                    {num:94, name:"Lucie Boudesseul",   flag:"🇫🇷", country:"Fransa",   team:"GMT94 Yamaha",                    bike:"WCR"},
                    {num:96, name:"Roberta Ponziani",   flag:"🇮🇹", country:"İtalya",   team:"Klint Racing Team",               bike:"WCR"}
                ]
            },
            f1: {
                label:"🚀 Formula 1 2026", color:"#e10600",
                list:[
                    {num:1,  name:"Max Verstappen",     flag:"🇳🇱", country:"Hollanda",         team:"Red Bull Racing",   bike:"F1"},
                    {num:4,  name:"Lando Norris",       flag:"🇬🇧", country:"Birleşik Krallık",  team:"McLaren",           bike:"F1"},
                    {num:6,  name:"Isack Hadjar",       flag:"🇫🇷", country:"Fransa",            team:"Red Bull Racing",   bike:"F1"},
                    {num:10, name:"Pierre Gasly",       flag:"🇫🇷", country:"Fransa",            team:"Alpine",            bike:"F1"},
                    {num:12, name:"Kimi Antonelli",     flag:"🇮🇹", country:"İtalya",            team:"Mercedes",          bike:"F1"},
                    {num:14, name:"Fernando Alonso",    flag:"🇪🇸", country:"İspanya",           team:"Aston Martin",      bike:"F1"},
                    {num:16, name:"Charles Leclerc",    flag:"🇲🇨", country:"Monako",            team:"Ferrari",           bike:"F1"},
                    {num:18, name:"Lance Stroll",       flag:"🇨🇦", country:"Kanada",            team:"Aston Martin",      bike:"F1"},
                    {num:23, name:"Alexander Albon",    flag:"🇹🇭", country:"Tayland",           team:"Williams",          bike:"F1"},
                    {num:26, name:"Gabriel Bortoleto",  flag:"🇧🇷", country:"Brezilya",          team:"Audi",              bike:"F1"},
                    {num:27, name:"Nico Hulkenberg",    flag:"🇩🇪", country:"Almanya",           team:"Audi",              bike:"F1"},
                    {num:31, name:"Esteban Ocon",       flag:"🇫🇷", country:"Fransa",            team:"Haas F1 Team",      bike:"F1"},
                    {num:38, name:"Oliver Bearman",     flag:"🇬🇧", country:"Birleşik Krallık",  team:"Haas F1 Team",      bike:"F1"},
                    {num:44, name:"Lewis Hamilton",     flag:"🇬🇧", country:"Birleşik Krallık",  team:"Ferrari",           bike:"F1"},
                    {num:47, name:"Franco Colapinto",   flag:"🇦🇷", country:"Arjantin",          team:"Alpine",            bike:"F1"},
                    {num:55, name:"Carlos Sainz",       flag:"🇪🇸", country:"İspanya",           team:"Williams",          bike:"F1"},
                    {num:61, name:"Liam Lawson",        flag:"🇳🇿", country:"Yeni Zelanda",      team:"Racing Bulls",      bike:"F1"},
                    {num:63, name:"George Russell",     flag:"🇬🇧", country:"Birleşik Krallık",  team:"Mercedes",          bike:"F1"},
                    {num:64, name:"Arvid Lindblad",     flag:"🇸🇪", country:"İsveç",             team:"Racing Bulls",      bike:"F1"},
                    {num:77, name:"Valtteri Bottas",    flag:"🇫🇮", country:"Finlandiya",        team:"Cadillac",          bike:"F1"},
                    {num:81, name:"Oscar Piastri",      flag:"🇦🇺", country:"Avustralya",        team:"McLaren",           bike:"F1"},
                    {num:87, name:"Sergio Perez",       flag:"🇲🇽", country:"Meksika",           team:"Cadillac",          bike:"F1"}
                ]
            },
            wec: {
                label:"🏆 WEC 2026 - LMGT3", color:"#0a3d62",
                list:[
                    {num:91, name:"Ayhancan Güven", flag:"🇹🇷", country:"Türkiye", team:"Manthey DK Engineering (Porsche 911 GT3 R)", bike:"WEC", featured:true},
                    {num:91, name:"James Cottingham", flag:"🇬🇧", country:"İngiltere", team:"Manthey DK Engineering (Porsche 911 GT3 R)", bike:"WEC"},
                    {num:91, name:"Timur Boguslavskiy", flag:"🇷🇺", country:"Rusya", team:"Manthey DK Engineering (Porsche 911 GT3 R)", bike:"WEC"},
                    {num:92, name:"Richard Lietz", flag:"🇦🇹", country:"Avusturya", team:"The Bend Manthey (Porsche 911 GT3 R)", bike:"WEC"},
                    {num:92, name:"Riccardo Pera", flag:"🇮🇹", country:"İtalya", team:"The Bend Manthey (Porsche 911 GT3 R)", bike:"WEC"},
                    {num:92, name:"Yasser Shahin", flag:"🇦🇺", country:"Avustralya", team:"The Bend Manthey (Porsche 911 GT3 R)", bike:"WEC"},
                    {num:10, name:"Antares Au", flag:"🇭🇰", country:"Hong Kong", team:"Garage 59 (McLaren 720S LMGT3 Evo)", bike:"WEC"},
                    {num:10, name:"Thomas Fleming", flag:"🇬🇧", country:"İngiltere", team:"Garage 59 (McLaren 720S LMGT3 Evo)", bike:"WEC"},
                    {num:10, name:"Marvin Kirchhöfer", flag:"🇩🇪", country:"Almanya", team:"Garage 59 (McLaren 720S LMGT3 Evo)", bike:"WEC"},
                    {num:58, name:"Alexander West", flag:"🇸🇪", country:"İsveç", team:"Garage 59 (McLaren 720S LMGT3 Evo)", bike:"WEC"},
                    {num:58, name:"Finn Gehrsitz", flag:"🇩🇪", country:"Almanya", team:"Garage 59 (McLaren 720S LMGT3 Evo)", bike:"WEC"},
                    {num:58, name:"Benji Goethe", flag:"🇩🇪", country:"Almanya", team:"Garage 59 (McLaren 720S LMGT3 Evo)", bike:"WEC"},
                    {num:21, name:"François Hériau", flag:"🇫🇷", country:"Fransa", team:"Vista AF Corse (Ferrari 296 LMGT3 Evo)", bike:"WEC"},
                    {num:21, name:"Simon Mann", flag:"🇺🇸", country:"ABD", team:"Vista AF Corse (Ferrari 296 LMGT3 Evo)", bike:"WEC"},
                    {num:21, name:"Alessio Rovera", flag:"🇮🇹", country:"İtalya", team:"Vista AF Corse (Ferrari 296 LMGT3 Evo)", bike:"WEC"},
                    {num:54, name:"Vista AF Corse Ekibi", flag:"🇮🇹", country:"İtalya", team:"Vista AF Corse (Ferrari 296 LMGT3 Evo)", bike:"WEC"},
                    {num:23, name:"Gray Newell", flag:"🇺🇸", country:"ABD", team:"Heart of Racing (Aston Martin Vantage AMR LMGT3)", bike:"WEC"},
                    {num:27, name:"Ian James", flag:"🇺🇸", country:"ABD", team:"Heart of Racing (Aston Martin Vantage AMR LMGT3)", bike:"WEC"},
                    {num:32, name:"Darren Leung", flag:"🇬🇧", country:"İngiltere", team:"Team WRT (BMW M4 LMGT3 Evo)", bike:"WEC"},
                    {num:69, name:"Anthony McIntosh", flag:"🇺🇸", country:"ABD", team:"Team WRT (BMW M4 LMGT3 Evo)", bike:"WEC"},
                    {num:33, name:"Nicky Catsburg", flag:"🇳🇱", country:"Hollanda", team:"TF Sport (Corvette Z06 LMGT3.R)", bike:"WEC"},
                    {num:2, name:"Prince Jefri Ibrahim", flag:"🇧🇳", country:"Brunei", team:"TF Sport (Corvette Z06 LMGT3.R)", bike:"WEC"},
                    {num:2, name:"Lorcan Hanafin", flag:"🇮🇪", country:"İrlanda", team:"TF Sport (Corvette Z06 LMGT3.R)", bike:"WEC"},
                    {num:2, name:"Ben Green", flag:"🇬🇧", country:"İngiltere", team:"TF Sport (Corvette Z06 LMGT3.R)", bike:"WEC"},
                    {num:34, name:"Charlie Eastwood", flag:"🇮🇪", country:"İrlanda", team:"Racing Team Turkey by TF (Corvette Z06 LMGT3.R) 🇹🇷", bike:"WEC", featured:true},
                    {num:78, name:"Esteban Masson", flag:"🇫🇷", country:"Fransa", team:"Akkodis ASP (Lexus RC F GT3)", bike:"WEC"},
                    {num:24, name:"Cem Bölükbaşı", flag:"🇹🇷", country:"Türkiye", team:"Vector Sport (ELMS LMP2, Oreca 07-Gibson)", bike:"WEC", featured:true}
                ]
            },
            wspb: {
                label:"🆕 WorldSPB 2026 (İlk Sezon)", color:"#9933cc",
                list:[
                    {num:6,  name:"Jeffrey Buis",        flag:"🇳🇱", country:"Hollanda",   team:"Track & Trades Wixx Racing", bike:"Suzuki"},
                    {num:7,  name:"Beñat Fernández",      flag:"🇪🇸", country:"İspanya",    team:"Kove Racing Team",           bike:"Kove"},
                    {num:11, name:"Mattia Sorrenti",      flag:"🇮🇹", country:"İtalya",     team:"Revo-M2",                    bike:"Aprilia"},
                    {num:16, name:"Álvaro Fuertes",       flag:"🇪🇸", country:"İspanya",    team:"Deza-Box 77 Racing Team",    bike:"Kawasaki"},
                    {num:34, name:"Xavi Artigas",         flag:"🇪🇸", country:"İspanya",    team:"MTM Kawasaki",               bike:"Kawasaki"},
                    {num:38, name:"David Salvador",       flag:"🇪🇸", country:"İspanya",    team:"Team ProDina Kawasaki XCI",  bike:"Kawasaki"},
                    {num:39, name:"Juan Risueño",         flag:"🇪🇸", country:"İspanya",    team:"Pons Motosport Italika",     bike:"Kawasaki"},
                    {num:47, name:"Antonio Torres",       flag:"🇪🇸", country:"İspanya",    team:"Team ProDina Kawasaki XCI",  bike:"Kawasaki"},
                    {num:71, name:"Loris Veneman",        flag:"🇳🇱", country:"Hollanda",   team:"MTM Kawasaki",               bike:"Kawasaki"},
                    {num:77, name:"José Osuna",           flag:"🇪🇸", country:"İspanya",    team:"Deza-Box 77 Racing Team",    bike:"Kawasaki"},
                    {num:98, name:"Thomas Benetti",       flag:"🇮🇹", country:"İtalya",     team:"MMR",                        bike:"Aprilia"},
                    {num:5,  name:"Kas Beekmans",         flag:"🇳🇱", country:"Hollanda",   team:"VLR Racing Team",            bike:"Suzuki"},
                    {num:13, name:"Harrison Dessoy",      flag:"🇬🇧", country:"İngiltere",  team:"PHR Performance",            bike:"Triumph"},
                    {num:22, name:"Fenton Seabright",     flag:"🇬🇧", country:"İngiltere",  team:"PHR Performance",            bike:"Triumph"},
                    {num:9,  name:"Marco Gaggi",          flag:"🇮🇹", country:"İtalya",     team:"Team BrCorse",               bike:"Yamaha"},
                    {num:18, name:"Carter Thompson",      flag:"🇦🇺", country:"Avustralya", team:"Team BrCorse",               bike:"Yamaha"},
                    {num:99, name:"Alessandro Di Persio", flag:"🇮🇹", country:"İtalya",     team:"ARCO Yamaha MotoR University",bike:"Yamaha"}
                ]
            }
        };
    

/* ===== MGV app.js — index inline bloklarından taşındı ===== */

    function topNav(sectionId, el) {
        document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
        document.getElementById(sectionId).classList.add("active");
        document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));
        document.querySelectorAll(".topnav-link").forEach(n => n.classList.remove("active"));
        el.classList.add("active");
    }


    var rSocials = {
        "Marc Marquez":{"ig":"marcmarquez93","tw":"marcmarquez93"},
        "Alex Marquez":{"ig":"alex_marquez73","tw":"alexmarquez73"},
        "Francesco Bagnaia":{"ig":"pecco_bagnaia","tw":"PeccoBagnaia"},
        "Jorge Martin":{"ig":"jorgemartinofficial","tw":"88jorgemartin"},
        "Fabio Quartararo":{"ig":"fabioquartararo20","tw":"FabioQ20"},
        "Brad Binder":{"ig":"bradbinder33","tw":"BradBinder_33"},
        "Jack Miller":{"ig":"jackmiller_43","tw":"jackmiller_43"},
        "Marco Bezzecchi":{"ig":"marcobezzecchi72","tw":"bez_marco72"},
        "Johann Zarco":{"ig":"johannzarco5","tw":"johannzarco"},
        "Luca Marini":{"ig":"lucamarini10","tw":"LucaMarini_10"},
        "Alex Rins":{"ig":"alexrins42","tw":"Rins42"},
        "Miguel Oliveira":{"ig":"migueloliveira88","tw":"Migueloliveira88"},
        "Enea Bastianini":{"ig":"eneabastianini23","tw":"eneabastianini"},
        "Maverick Viñales":{"ig":"maverick12official","tw":"maverick12vr"},
        "Ai Ogura":{"ig":"ai_ogura79","tw":"aiogura79"},
        "Pedro Acosta":{"ig":"pedro_acosta37","tw":"37PedroAcosta"},
        "Joan Mir":{"ig":"joanmirofficial36","tw":"JoanMirOfficial"},
        "Franco Morbidelli":{"ig":"francomorbidelli21","tw":"FrankyMorbido12"},
        "Fabio Di Giannantonio":{"ig":"fabiodigiannan49","tw":"FabioFog49"},
        "Fermin Aldeguer":{"ig":"fermin_aldeguer54","tw":"FerminAldeguer"},
        "Raul Fernandez":{"ig":"raulfernandez25","tw":"Raul_Fernandez25"},
        "Augusto Fernandez":{"ig":"augustofernandez37","tw":"37augusto"},
        "Diogo Moreira":{"ig":"diogomoreira11","tw":"diogo_moreira"},
        "Toprak Razgatlıoğlu":{"ig":"toprakrazgatlioglu7","tw":"toprak_TR54"},
        "Nicolo Bulega":{"ig":"nicolobulega11","tw":"NicoloBulega"},
        "Alvaro Bautista":{"ig":"alvarobautista19","tw":"19Bautista"},
        "Jonathan Rea":{"ig":"jonathanrea65","tw":"JonathanRea"},
        "Alex Lowes":{"ig":"alexlowes22","tw":"alexlowes22"},
        "Iker Lecuona":{"ig":"ikerlecuona","tw":"IkerLecuona"},
        "Garrett Gerloff":{"ig":"garrettgerloff","tw":"GarrettGerloff"},
        "Andrea Locatelli":{"ig":"andrealocatelli55","tw":"AndyLocatelli"},
        "Yari Montella":{"ig":"yarimontella","tw":"YariMontella"},
        "Michael van der Mark":{"ig":"michaelvandermark67","tw":"mvdmark67"},
        "Axel Bassani":{"ig":"axel_bassani47","tw":"AxelBassani47"},
        "Dominique Aegerter":{"ig":"dominique_aegerter","tw":"Domaegerter77"},
        "Philipp Oettl":{"ig":"philippoettl","tw":"PhilippOettl"},
        "Scott Ogden":{"ig":"scottogden16","tw":"ScottOgden16"},
        "Xavi Vierge":{"ig":"xavivierge97","tw":"XaviVierge97"},
        "Sam Lowes":{"ig":"samlowes22","tw":"SamLowes_22"},
        "Ana Carrasco":{"ig":"anacarrasco9","tw":"AnaCarrasco_9"},
        "Danilo Petrucci":{"ig":"danipetrucci9","tw":"Petrux9"},
        "Remy Gardner":{"ig":"remygardner87","tw":"RemyGardner87"},
        "Marcos Ramirez":{"ig":"marcosramirez12","tw":"marcosramirez"},
        "Somkiat Chantra":{"ig":"somkiatchantra35","tw":"SomkiatChantra"},
        "Thomas Bridewell":{"ig":"tommy_bridewell","tw":"TommyBridewell"},
        "Tarran Mackenzie":{"ig":"tarranmackenzie95","tw":"tarranmac95"},
        "Raffaele De Rosa":{"ig":"raffaderosaracing","tw":"raffa_derosa"},
        "Oliver Bearman":{"ig":"ollybearman","tw":"OllyBearman"},
        "Bahattin Sofuğlu":{"ig":"bahattinsofuoglu","tw":"BSofuoglu54"},
        "Can Öncü":{"ig":"canoncu61","tw":"canoncu61"},
        "Deniz Öncü":{"ig":"deniz_oncu53","tw":"DenizOncu53"},
        "Ayhancan Güven":{"ig":"ayhancan.guven","tw":"AyhancanGuven"},
        "Cem Bölükbaşı":{"ig":"cembolukbasi","tw":"CemBolukbasi"},
        "Celestino Vietti":{"ig":"celestinovietti13","tw":"CelestinoViett1"},
        "Aron Canet":{"ig":"aroncanet44","tw":"aroncanet44"},
        "Tony Arbolino":{"ig":"tonyarbolino14","tw":"TonyArbolino14"},
        "Joe Roberts":{"ig":"joerobertsracing","tw":"JoeRobertsRaci1"},
        "Alonso Lopez":{"ig":"alonsolopez21","tw":"AloLo_21"},
        "Izan Guevara":{"ig":"izanguevara28","tw":"IzanGuevara28"},
        "Filip Salac":{"ig":"filipsalac12","tw":"FilipSalac12"},
        "Manuel Gonzalez":{"ig":"manuelmoto18","tw":"Manuel_moto18"},
        "Sergio Garcia":{"ig":"sergiogarcia3","tw":"SergioGarcia_3"},
        "Jake Dixon":{"ig":"jake_dixon96","tw":"JakeDixon96"},
        "Barry Baltus":{"ig":"barry_baltus","tw":"BarryBaltus"},
        "Collin Veijer":{"ig":"collinveijer95","tw":"CollinVeijer"},
        "Senna Agius":{"ig":"senna_agius81","tw":"SennaAgius"},
        "Daniel Holgado":{"ig":"danielholgado96","tw":"DanielHolgado96"},
        "Zonta Van Den Goorbergh":{"ig":"zonta_vdg","tw":"ZontaVDG"},
        "David Alonso":{"ig":"davidalonso80","tw":"DavidAlonso80"},
        "Ivan Ortola":{"ig":"ivanortola","tw":"IvanOrtola"},
        "Joel Kelso":{"ig":"joel_kelso51","tw":"JoelKelso51"},
        "Ayumu Sasaki":{"ig":"ayumusasaki71","tw":"ayumusasaki71"},
        "Jaume Masia":{"ig":"jaumemasia5","tw":"JaumeMasia"},
        "Jeremy Alcoba":{"ig":"jeremy_alcoba","tw":"JeremyAlcoba"},
        "Xavi Artigas":{"ig":"xaviartigas","tw":"XaviArtigas"},
        "Ryusei Yamanaka":{"ig":"ryusei_yamanaka6","tw":"RyuseiYamanaka"},
        "Angel Piqueras":{"ig":"angelpiqueras","tw":"AngelPiqueras"},
        "Joel Esteban":{"ig":"joel_esteban50","tw":"JoelEsteban50"},
        "Adrian Fernandez":{"ig":"adrianfernandez98","tw":"AFernandez_98"},
        "Maximo Quiles":{"ig":"maximoquiles","tw":"MaximoQuiles"},
        "Jose Antonio Rueda":{"ig":"joseantonio_rueda","tw":"JAntRueda"},
        "Taiyo Furusato":{"ig":"taiyo_furusato72","tw":"TaiyoFurusato"},
        "Leonardo Taccini":{"ig":"leonardotaccini","tw":"LeoTaccini"},
        "Filippo Farioli":{"ig":"filippofarioli","tw":"FilippoFarioli"},
        "Mario Suryo Aji":{"ig":"mariosuryoaji","tw":"MarioSuryoAji"},
        "Veda Pratama":{"ig":"vedapratama9","tw":"VedaPratama"},
        "Hakim Danish":{"ig":"hakimdanish95","tw":"HakimDanish95"},
        "Nicola Carraro":{"ig":"nicola_carraro10","tw":"NicolaCarraro"},
        "Luca Lunetta":{"ig":"luca_lunetta58","tw":"LucaLunetta58"},
        "Brian Uriarte":{"ig":"brianuriarte35","tw":"BrianUriarte"},
        "Antonio Torres":{"ig":"antoniomtorres","tw":"AntonioMTorres"},
        "Ricardo Rossi":{"ig":"riccardorossi","tw":"RiccardoRossi"},
        "Max Verstappen":{"ig":"maxverstappen1","tw":"Max33Verstappen"},
        "Lewis Hamilton":{"ig":"lewishamilton","tw":"LewisHamilton"},
        "Charles Leclerc":{"ig":"charles_leclerc","tw":"Charles_Leclerc"},
        "Carlos Sainz":{"ig":"carlossainz55","tw":"Carlossainz55"},
        "Lando Norris":{"ig":"landonorris","tw":"LandoNorris"},
        "Oscar Piastri":{"ig":"oscarpiastri","tw":"OscarPiastri"},
        "George Russell":{"ig":"george_russell63","tw":"GeorgeRussell63"},
        "Fernando Alonso":{"ig":"fernandoalo_oficial","tw":"alo_oficial"},
        "Lance Stroll":{"ig":"lancestroll","tw":"LanceStroll"},
        "Valtteri Bottas":{"ig":"valtteribottas","tw":"ValtteriBottas"},
        "Esteban Ocon":{"ig":"esteban_ocon","tw":"EstOcon"},
        "Pierre Gasly":{"ig":"pierregasly","tw":"PierreGASLY"},
        "Nico Hulkenberg":{"ig":"hulkhulkenberg","tw":"HulkHulkenberg"},
        "Sergio Perez":{"ig":"schecoperez","tw":"SChecoPerez"},
        "Alexander Albon":{"ig":"alex_albon","tw":"AlexAlbon"},
        "Liam Lawson":{"ig":"liamlawson30","tw":"LiamLawson30"},
        "Kimi Antonelli":{"ig":"kimiantonelli12","tw":"KimiAntonelli"},
        "Isack Hadjar":{"ig":"isackhadjar","tw":"IsackHadjar"},
        "Gabriel Bortoleto":{"ig":"gabibortoleto","tw":"GabiBortoleto"},
        "Franco Colapinto":{"ig":"francocolapinto","tw":"FranColapinto"},
        "Arvid Lindblad":{"ig":"arvidlindblad","tw":"ArviiLindblad"},
        "Frederic Makowiecki":{"ig":"fmako","tw":"FredMako"},
        "Nicklas Nielsen":{"ig":"nicklasnielsen","tw":"NicklasNielsen"},
        "Alessandro Pier Guidi":{"ig":"alessandropierguidi","tw":"APierGuidi"},
        "Antonio Fuoco":{"ig":"fuoco_antonio","tw":"fuoco_antonio"},
        "Yasser Shahin":{"ig":"yassershahin","tw":"YasserShahin"},
        "Adrian Cruces":{"ig":"adriancruces11","tw":"AdrianCruces11"},
        "Adrian Huertas":{"ig":"adrianhuertas24","tw":"AdrianHuertas24"},
        "Leo Rammerstorfer":{"ig":"leorammerstorfer","tw":"LeoRammerstorfer"},
        "Ryusei Yamanaka":{"ig":"ryusei_yamanaka6","tw":"RyuseiYamanaka"},
        "Eddie O'Shea":{"ig":"eddieoshea8","tw":"EddieOShea8"},
        "Cormac Buchanan":{"ig":"cormacbuchanan","tw":"CormacBuchanan"},
        "Matteo Bertelle":{"ig":"matteobertelle18","tw":"MatteoBertelle"},
        "David Almansa":{"ig":"david_almansa","tw":"DavidAlmansa"},
        "Rico Salmela":{"ig":"ricosalmela27","tw":"RicoSalmela"},
        "Maximo Quiles":{"ig":"maximoquiles28","tw":"MaximoQuiles"},
        "Adrian Fernandez":{"ig":"adrianfernandez98","tw":"AFernandez_98"},
        "Zen Mitani":{"ig":"zen_mitani32","tw":"ZenMitani"},
        "Brian Uriarte":{"ig":"brianuriarte35","tw":"BrianUriarte"},
        "Jesus Rios":{"ig":"jesusrios54","tw":"JesusRios54"},
        "David Muñoz":{"ig":"davidmunoz64","tw":"DavidMunoz64"},
        "Joel Kelso":{"ig":"joel_kelso51","tw":"JoelKelso51"},
        "Casey O'Gorman":{"ig":"caseyogorman67","tw":"CaseyOGorman67"},
        "Yuki Okamoto":{"ig":"yuki_okamoto","tw":"YukiOkamoto"},
        "Nicola Carraro":{"ig":"nicola_carraro10","tw":"NicolaCarraro"},
        "Luca Lunetta":{"ig":"luca_lunetta58","tw":"LucaLunetta58"},
        "Antonio Torres":{"ig":"antoniomtorres","tw":"AntonioMTorres"},
        "Hakim Danish":{"ig":"hakimdanish95","tw":"HakimDanish95"},
        "Marco Gaggi":{"ig":"marcogaggi","tw":"MarcoGaggi"},
        "Taiyo Furusato":{"ig":"taiyo_furusato72","tw":"TaiyoFurusato"},
        "Filippo Farioli":{"ig":"filippofarioli7","tw":"FilippoFarioli"},
        "Leonardo Taccini":{"ig":"leonardotaccini","tw":"LeoTaccini"},
        "Veda Pratama":{"ig":"vedapratama9","tw":"VedaPratama"},
        "Mario Suryo Aji":{"ig":"mariosuryoaji","tw":"MarioSuryoAji"},
        "Alberto Ferrandez":{"ig":"albertoferrandez54","tw":"AlbertoFerrandez"},
        "Jorge Navarro":{"ig":"jorgenavarro9","tw":"JorgeNavarro9"},
        "Alex Escrig":{"ig":"alexescrig11","tw":"AlexEscrig"},
        "Daniel Muñoz":{"ig":"danielmunoz17","tw":"DanielMunoz17"},
        "Manuel Gonzalez":{"ig":"manuelmoto18","tw":"Manuel_moto18"},
        "Lorcan Hanafin":{"ig":"lorcanhanafin23","tw":"LorcanHanafin"},
        "Lorenzo Baldassarri":{"ig":"lorenzobaldassarri","tw":"LorenzoBaldass"},
        "Jeffrey Buis":{"ig":"jeffreybuis64","tw":"JeffreyBuis"},
        "Senna Agius":{"ig":"senna_agius81","tw":"SennaAgius"},
        "Jake Dixon":{"ig":"jake_dixon96","tw":"JakeDixon96"},
        "Jose Antonio Rueda":{"ig":"joseantonio_rueda98","tw":"JAntRueda"},
        "Lucas Mahias":{"ig":"lucasmahias","tw":"LucasMahias"},
        "Stefano Manzi":{"ig":"stefanomanzi29","tw":"StefanoManzi29"},
        "Federico Caricasulo":{"ig":"federicoca55","tw":"FedericoCaric"},
        "Barry Baltus":{"ig":"barry_baltus","tw":"BarryBaltus"},
        "Marcos Ramirez":{"ig":"marcosramirez12","tw":"MarcosRamirez"},
        "Alberto Surra":{"ig":"albertosurra","tw":"AlbertoSurra"},
        "Scott Ogden":{"ig":"scottogden16","tw":"ScottOgden16"},
        "Hannes Soomer":{"ig":"hannessoomer","tw":"HannesSoomer"},
        "Oli Bayliss":{"ig":"oliwbayliss","tw":"OliBayliss"},
        "Alexander West":{"ig":"alexanderwest","tw":"AlexanderWest"},
        "Nicky Catsburg":{"ig":"nickycatsburg","tw":"NickyCatsburg"},
        "Ryan Vickers":{"ig":"ryanvickers","tw":"RyanVickers"},
        "Tom Booth-Amos":{"ig":"tombooth_amos","tw":"TomBoothAmos"},
        "Raffaele De Rosa":{"ig":"raffaderosaracing","tw":"raffa_derosa"},
        "Xavi Vierge":{"ig":"xavivierge97","tw":"XaviVierge97"},
        "Tetsuta Nagashima":{"ig":"tetsuta_nagashima","tw":"TetsutaNagash"},
        "Ana Carrasco":{"ig":"anacarrasco9","tw":"AnaCarrasco_9"},
        "Maria Herrera":{"ig":"mariaherrera_6","tw":"MaHerrera_6"},
        "Beatriz Neila":{"ig":"beatrizneila18","tw":"BeatrizNeila"},
        "Sara Sanchez":{"ig":"sarasanchez_oficial","tw":"SaraSanchez"},
        "Richard Lietz":{"ig":"richardlietz","tw":"RichardLietz"},
        "Charlie Eastwood":{"ig":"charlieeastwood","tw":"CharlieEastwoo"},
        "Yasser Shahin":{"ig":"yassershahin","tw":"YasserShahin"},
        "Timur Boguslavskiy":{"ig":"timurboguslavskiy","tw":"TimurBogus"},
        "Riccardo Pera":{"ig":"riccardopera","tw":"RiccardoPera"},
        "Ben Green":{"ig":"bengreen_racing","tw":"BenGreenRacing"},
        "Mattia Casadei":{"ig":"mattiacasadei77","tw":"MattiaCasadei"},
        "David Salvador":{"ig":"davidsalvador38","tw":"DavidSalvador38"},
        "Corentin Perolari":{"ig":"corentinperolari","tw":"CPerolari"},
        "Alessio Rovera":{"ig":"alessiorovera","tw":"AlessioRovera"},
        "Alessandro Zaccone":{"ig":"alexanderzaccone","tw":"AlexZaccone"},
        "Francesco Ferruccio":{"ig":"francescoferruccio","tw":"FFerruccio"},
        "Esteban Masson":{"ig":"estebanmasson","tw":"EstebanMasson"},
        "Gray Newell":{"ig":"graynewell","tw":"GrayNewell"},
        "Bahattin Sofuğlu":{"ig":"bahattinsofuoglu","tw":"BSofuoglu54"},
        "Bahattin Sofuğlu":{"ig":"bahattinsofuoglu","tw":"BSofuoglu54"},
        "Alessandro Di Persio":{"ig":"alessandrodipersio","tw":"ADiPersio"},
        "Alessio Rovera":{"ig":"alessiorovera","tw":"AlessioRovera"},
        "Alessandro Zaccone":{"ig":"alexanderzaccone","tw":"AlexZaccone"},
        "Alvaro Carpe":{"ig":"alvarocarpe","tw":"AlvaroCarpe"},
        "Antares Au":{"ig":"antares_au","tw":"AntaresAu"},
        "Anthony McIntosh":{"ig":"anthonymcintosh","tw":"AMcIntosh"},
        "Arianna Barale":{"ig":"ariannabarale","tw":"ArianaBarale"},
        "Astrid Madrigal":{"ig":"astridmadrigal","tw":"AstridMadrigal"},
        "Benji Goethe":{"ig":"benjigoethe","tw":"BenjiGoethe"},
        "Beñat Fernández":{"ig":"benatfernandez","tw":"BenatFernandez"},
        "Carter Thompson":{"ig":"carterthompson","tw":"CarterThompson"},
        "Chloe Jones":{"ig":"chloejones_racing","tw":"ChloeJonesRace"},
        "Darren Leung":{"ig":"darrenleung","tw":"DarrenLeung"},
        "Denise Dal Zotto":{"ig":"denisedazotto","tw":"DeniseDalZotto"},
        "Fenton Seabright":{"ig":"fentonseabright","tw":"FentonSeabright"},
        "Finn Gehrsitz":{"ig":"finngehrsitz","tw":"FinnGehrsitz"},
        "François Hériau":{"ig":"francoisheriau","tw":"FHeriau"},
        "Harrison Dessoy":{"ig":"harrisondessoy","tw":"HarrisonDessoy"},
        "Ian James":{"ig":"ianjamesracing","tw":"IanJamesRacing"},
        "James Cottingham":{"ig":"jamescottingham","tw":"JCottingham"},
        "José Osuna":{"ig":"joseosuna","tw":"JoseOsuna"},
        "Juan Risueno":{"ig":"juanrisueno","tw":"JuanRisueno"},
        "Juan Riuseño":{"ig":"juanrisueno","tw":"JuanRisueno"},
        "Kas Beekmans":{"ig":"kasbeekmans","tw":"KasBeekmans"},
        "Loris Veneman":{"ig":"lorisveneman","tw":"LorisVeneman"},
        "Lucie Boudesseul":{"ig":"lucieboudesseul","tw":"LBoudesseul"},
        "Lucy Michel":{"ig":"lucymichel_racing","tw":"LucyMichelRace"},
        "Mallory Dobbs":{"ig":"mallorydobbs","tw":"MalloryDobbs"},
        "Martina Guarino":{"ig":"martinaguarino","tw":"MartinaGuarino"},
        "Marvin Kirchhöfer":{"ig":"marvinkirchhofer","tw":"MKirchhofer"},
        "Matteo Ferrari":{"ig":"matteoferrari","tw":"MatteoFerrari"},
        "Mattia Rato":{"ig":"mattiarato","tw":"MattiaRato"},
        "Mattia Sorrenti":{"ig":"mattiasorrenti","tw":"MattiaSorrenti"},
        "Natalia Rivera":{"ig":"nataliarivera","tw":"NataliaRivera"},
        "Paola Ramos":{"ig":"paolaramos_racing","tw":"PaolaRamos"},
        "Patrycja Sowa":{"ig":"patrycjasowa","tw":"PatrycjaSowa"},
        "Prince Jefri Ibrahim":{"ig":"princejefri","tw":"PrinceJefri"},
        "Riccardo Rossi":{"ig":"riccardorossi","tw":"RiccardoRossi"},
        "Roberta Ponziani":{"ig":"robertaponziani","tw":"RPonziani"},
        "Roberto Garcia":{"ig":"robertogarcia_racing","tw":"RobertoGarcia"},
        "Ruche Moodley":{"ig":"ruchemoodley","tw":"RucheMoodley"},
        "Simon Mann":{"ig":"simonmann_racing","tw":"SimonMann"},
        "Tayla Relph":{"ig":"taylarelph","tw":"TaylaRelph"},
        "Thomas Benetti":{"ig":"thomasbenetti","tw":"ThomasBenetti"},
        "Thomas Fleming":{"ig":"thomasfleming","tw":"ThomasFleming"},
        "Valentin Perrone":{"ig":"valentinperrone","tw":"ValentinPerrone"},
        "Yvonne Cerpa":{"ig":"yvonnecerpa","tw":"YvonneCerpa"},
        "Álvaro Fuertes":{"ig":"alvarofuertes","tw":"AlvaroFuertes"},
        "Vista AF Corse Ekibi":{"ig":"vistaaafcorse","tw":"VistaAFCorse"},
        "Frederic Makowiecki":{"ig":"fmako","tw":"FredMako"},
        "Nicklas Nielsen":{"ig":"nicklasnielsen","tw":"NicklasNielsen"},
        "Alessandro Pier Guidi":{"ig":"alessandropierguidi","tw":"APierGuidi"},
        "Antonio Fuoco":{"ig":"fuoco_antonio","tw":"fuoco_antonio"},
        "Robert Kubica":{"ig":"robert_kubica","tw":"RobertKubica"},
        "Yifei Ye":{"ig":"yifei_ye","tw":"YifeiYe"},
        "Sebastien Buemi":{"ig":"sebastienbuemi","tw":"SebastienmBuemi"},
        "Brendon Hartley":{"ig":"brendonhartley","tw":"BrendonHartley"},
        "Ryo Hirakawa":{"ig":"ryohirakawa","tw":"RyoHirakawa"},
        "Mike Conway":{"ig":"mikeconway","tw":"MikeConway10"},
        "Kamui Kobayashi":{"ig":"kamui_kobayashi","tw":"kamui_kobayashi"},
        "Jose Maria Lopez":{"ig":"pechito_lopez","tw":"PechitoLopez"},
        "Sebastien Ogier":{"ig":"sebastienogier","tw":"SebOgier"},
        "Nyck de Vries":{"ig":"nyckdevries","tw":"nyckdevries"},
        "Kevin Estre":{"ig":"kevinestre","tw":"KevinEstre"},
        "Laurens Vanthoor":{"ig":"laurensvanthoor","tw":"LaurensVanthoor"},
        "Andre Lotterer":{"ig":"andrelotterer","tw":"AndreLoLotterer"},
        "Neel Jani":{"ig":"neeljani","tw":"neeljani"},
        "Antonio Felix da Costa":{"ig":"felixdacosta","tw":"FelixDaCosta7"},
        "Will Stevens":{"ig":"willstevens","tw":"WillStevens94"},
        "James Calado":{"ig":"jamescalado","tw":"JamesCalado"},
        "Alessandro Balzan":{"ig":"alessandrobalzan","tw":"AlessandroB"},
        "Nick Tandy":{"ig":"nicktandy","tw":"NickTandy911"},
        "Harry Tincknell":{"ig":"harrytincknell","tw":"HarryTincknell"},
        "Jonathan Bomarito":{"ig":"jbomarito","tw":"JBomarito"},
        "Olivier Pla":{"ig":"olivierpla","tw":"OlivierPla"},
        "Richard Westbrook":{"ig":"richardwestbrook","tw":"RWestbrook23"},
        "Mikkel Jensen":{"ig":"mikkeljensen","tw":"MikkelJensen"},
        "Marco Sorensen":{"ig":"marcosorensen","tw":"MarcoSorensen"},
        "Nicki Thiim":{"ig":"nickithiim","tw":"NickiThiim"},
        "Maxime Martin":{"ig":"maximemartinracing","tw":"MaximeMartin69"},
        "Daniel Juncadella":{"ig":"danieljuncadella","tw":"DJuncadella"},
        "Clement Mateu":{"ig":"clementmateu","tw":"ClementMateu"},
        "Tijmen van der Helm":{"ig":"tijmenvanderhelm","tw":"TVDHelm"},
        "Mirko Bortolotti":{"ig":"mirkobortolotti","tw":"MirkoBortolotti"},
        "Andrea Caldarelli":{"ig":"andreacaldarelli","tw":"ACaldarelli"},
        "Dries Vanthoor":{"ig":"driesvanthoor","tw":"DriesVanthoor"},
        "Robin Frijns":{"ig":"robinfrijns","tw":"RobinFrijns"},
        "Kelvin van der Linde":{"ig":"kelvinvanderlinde","tw":"KelvinVDLinde"},
        "Maro Engel":{"ig":"maroengel","tw":"MaroEngel"},
        "Luca Stolz":{"ig":"lucastolz","tw":"LucaStolz1"},
        "Jules Gounon":{"ig":"julesgounon","tw":"JulesGounon"},
        "Daniel Ricciardo":{"ig":"danielricciardo","tw":"danielricciardo"},
        "Michael Dunlop":{"ig":"michaeldunlop_official","tw":"Michaeldunlop_"},
        "John McGuinness":{"ig":"johnmcguinness23","tw":"JohnMcGuinness23"},
        "Ian Hutchinson":{"ig":"ianhutchinson26","tw":"ianhutchinson26"},
        "Peter Hickman":{"ig":"peterhickman10","tw":"PeterHickman10"},
        "Dean Harrison":{"ig":"deanharrisonracing","tw":"DeanHarrison52"},
        "Davey Todd":{"ig":"daveytodd","tw":"DaveyTodd"},
        "Gary Johnson":{"ig":"garyjohnsonracing","tw":"GaryJohnsonTT"},
        "James Hillier":{"ig":"jameshillierracing","tw":"JamesHillier45"},
        "Josh Brookes":{"ig":"joshbrookes25","tw":"JoshBrookes_"},
        "Michael Evans":{"ig":"michaelevansracing","tw":"MichaelEvans"},
        "Jamie Coward":{"ig":"jamiecoward42","tw":"JamieCoward42"},
        "Mike Brown":{"ig":"mikebrown_racing","tw":"MikeBrownRacing"},
        "Conor Cummins":{"ig":"conorcummins","tw":"ConorCummins"},
        "Dominic Herbertson":{"ig":"dominicherbertson","tw":"DHerbertson"},
        "Michael Rutter":{"ig":"michaelrutter","tw":"MichaelRutter"},
        "Gary McCoy":{"ig":"garymccoy99","tw":"GaryMcCoy"},
        "Rhys Stephenson":{"ig":"rhysstephenson_racing","tw":"RhysStephenson"},
        "Caomhan Canny":{"ig":"caomhancanny","tw":"CaomhanCanny"},
        "Lewis Arrowsmith":{"ig":"lewisarrowsmith","tw":"LArrowsmith"},
        "Ryan Whitehall":{"ig":"ryanwhitehall_racing","tw":"RyanWhitehall"},
        "Ryan Crowe":{"ig":"ryancroweacing","tw":"RyanCrowe"},
        "Ben Birchall":{"ig":"benbirchall","tw":"BenBirchall"},
        "John Holden":{"ig":"johnholdenracing","tw":"JohnHolden"},
        "Tim Reeves":{"ig":"timreevesracing","tw":"TimReeves"}
    };

    function openRM(name,flag,team,bike,color) {
        document.getElementById('rmd-name').innerText = name;
        document.getElementById('rmd-flag').innerText = flag;
        document.getElementById('rmd-team').innerText = team;
        var b = document.getElementById('rmd-bike');
        b.innerText = bike; b.style.background = color+'99'; b.style.border = '1px solid '+color; b.style.color = '#fff';
        var s = rSocials[name] || {};
        var d = document.getElementById('rmd-socials');
        d.innerHTML = '';
        if (s.ig || s.tw) {
            document.getElementById('rmd-nosocial').style.display = 'none';
            d.style.display = 'flex';
            if (s.ig) d.innerHTML += '<a href="https://www.instagram.com/'+s.ig+'/" target="_blank" rel="noopener" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045);border-radius:10px;padding:10px 14px;text-decoration:none;color:white;font-weight:700;font-size:.85rem;">&#128247; Instagram &rarr; @'+s.ig+'</a>';
            if (s.tw) d.innerHTML += '<a href="https://twitter.com/'+s.tw+'" target="_blank" rel="noopener" style="display:flex;align-items:center;gap:10px;background:#000;border:1px solid #333;border-radius:10px;padding:10px 14px;text-decoration:none;color:white;font-weight:700;font-size:.85rem;">&#120143; Twitter &rarr; @'+s.tw+'</a>';
        } else {
            document.getElementById('rmd-nosocial').style.display = 'block';
            d.style.display = 'none';
        }
        document.getElementById('rider-modal').style.display = 'flex';
    }

    function closeRiderModal(e) {
        if (e.target.id === 'rider-modal') document.getElementById('rider-modal').style.display = 'none';
    }

    function buildBrandGrid() {
            const lang = document.documentElement.lang || 'tr';
            const ld = langData[lang] || {};
            const bl = ld && ld.brandLabels ? ld.brandLabels : {founded:"GP Girişi", champ:"Şampiyonluk", riders:"Öne Çıkan İsimler", site:"🌐 RESMİ SİTE"};
            const grid = document.getElementById("brand-grid");
            grid.innerHTML = "";
            brands.forEach(b => {
                grid.innerHTML += `<div class="brand-card">
                    <div class="brand-header"><div class="brand-logo-icon">${b.logo}</div><div><div class="brand-name">${b.name}</div><div class="brand-country">${b.country}</div></div></div>
                    <div class="brand-body">
                        <div class="brand-stats"><div><div class="stat-label">${bl.founded}</div><div class="stat-value">${b.founded}</div></div><div><div class="stat-label">${bl.champ}</div><div class="stat-value">${b.championships > 0 ? b.championships : "—"}</div></div></div>
                        <div class="brand-riders"><strong>${bl.riders}:</strong> ${b.riders}</div>
                        <div class="brand-history">${b.history}</div>
                        <a href="${b.url}" target="_blank" rel="noopener noreferrer" style="display:inline-block;margin-top:10px;background:var(--accent);color:white;padding:5px 14px;border-radius:4px;font-size:.65rem;font-weight:800;letter-spacing:1px;text-decoration:none;">${bl.site}</a>
                    </div>
                </div>`;
            });
        }
        buildBrandGrid();

        const bikeColors = {
        Ducati:"#cc0000", Yamaha:"#0055cc", KTM:"#e55a00", Honda:"#e8001d",
        Aprilia:"#1a1a6e", BMW:"#0066cc", Kawasaki:"#00aa00", Bimota:"#336600",
        Moto2:"#0099ff", Moto3:"#00cc66", SSP:"#ff6600", WCR:"#cc44aa", F1:"#e10600", WEC:"#0a3d62"
    };

    function buildRiderGrid(catKey) {
        const cat = allRiders[catKey];
        if (!cat) return "";
        const cards = cat.list.map(r => {
            const bc = bikeColors[r.bike] || "#334466";
            const grad = r.featured
                ? "background:linear-gradient(135deg,#1a0040 0%,#4a0066 55%,#cc0080 100%);"
                : `background:linear-gradient(135deg,#0d1220 0%,${bc}44 100%);`;
            return `<div class="rider-card${r.featured ? " featured" : ""}" data-rname="${r.name}" data-rflag="${r.flag}" data-rteam="${r.team}" data-rbike="${r.bike}" data-rcolor="${bc}" onclick="openRM(this.dataset.rname,this.dataset.rflag,this.dataset.rteam,this.dataset.rbike,this.dataset.rcolor)" style="cursor:pointer;">
                <div class="rider-card-top" style="${grad}">
                    <span class="rider-num-bg">${r.num}</span>
                    <span class="rider-num" style="color:${r.featured ? "#ff44cc" : "#fff"}">${r.num}</span>
                    <span class="rider-flag">${r.flag}</span>
                </div>
                <div class="rider-body">
                    <div class="rider-name">${r.name}</div>
                    <div class="rider-country">${r.country}</div>
                    <div class="rider-team" style="border-color:${bc}">${r.team}</div>
                    <span class="rider-bike" style="background:${bc}99;border:1px solid ${bc}">${r.bike}</span>
                </div>
            </div>`;
        }).join("");
        return `<div class="rider-cat-header" style="color:${cat.color}">${cat.label} <span style="font-size:.65rem;color:var(--muted);font-weight:400;margin-left:8px;">${cat.list.length} sürücü</span></div>
                <div class="rider-grid">${cards}</div>`;
    }

    function showCat(catKey, btn) {
        document.querySelectorAll(".cat-tab").forEach(b => { b.classList.remove("active"); b.style.background = ""; b.style.borderColor = ""; });
        btn.classList.add("active");
        const color = allRiders[catKey]?.color || "var(--accent)";
        btn.style.background = color; btn.style.borderColor = color;
        document.getElementById("rider-content").innerHTML = buildRiderGrid(catKey);
    }

    document.getElementById("rider-content").innerHTML = buildRiderGrid("motogp");

    function fmtDate(str) { if (!str) return ""; const d = new Date(str); if (isNaN(d)) return str; return d.toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric"}); }
    function stripHtml(html) { const t = document.createElement("div"); t.innerHTML = html||""; return t.textContent||""; }

    async function loadRSS(btn) {
        document.querySelectorAll(".rss-tab[data-feed]").forEach(t => t.classList.remove("active"));
        btn.classList.add("active");
        const statusEl = document.getElementById("rss-status");
        const gridEl = document.getElementById("news-grid");
        statusEl.innerHTML = '<div class="rss-spinner"></div> Haberler yükleniyor…';
        gridEl.innerHTML = Array(6).fill('<div class="news-card skeleton"></div>').join("");
        const feedGroups = {
            "MotoGP": ["https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.crash.net%2Frss%2Fmotogp","https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.motorsport.com%2Frss%2Fmoto-gp%2Fnews%2F"],
            "WorldSBK": ["https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.crash.net%2Frss%2Fwsbk","https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.motorsport.com%2Frss%2Fsbk%2Fnews%2F"],
            "Formula 1": ["https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.autosport.com%2Frss%2Ff1%2Fnews%2F","https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.motorsport.com%2Frss%2Ff1%2Fnews%2F"],
            "🏁 NASCAR": ["https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.motorsport.com%2Frss%2Fnascar-cup%2Fnews%2F","https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.foxsports.com%2Frss%2Fnascar"],
            "🏎️ DTM": ["https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.motorsport.com%2Frss%2Fdtm%2Fnews%2F","https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.autosport.com%2Frss%2Fdtm%2Fnews%2F"],
            "🌍 WRC": ["https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.motorsport.com%2Frss%2Fwrc%2Fnews%2F","https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.autosport.com%2Frss%2Fwrc%2Fnews%2F"]
        };
        const label = btn.innerText.trim();
        const feeds = feedGroups[label] || [btn.dataset.feed];
        let items = null;
        for (const url of feeds) {
            try { const res = await fetch(url); const data = await res.json(); if (data.items && data.items.length > 0) { items = data.items; break; } } catch(e) { continue; }
        }
        if (!items) { statusEl.innerHTML = "⚠ Haberler şu an yüklenemiyor."; return; }
        const curLang = document.documentElement.lang || "tr";
        const ui = (typeof navLabels !== "undefined" && (navLabels[curLang] || navLabels["tr"])) || {readBtn:"OKU", newsLoaded:"{n} haber yüklendi"};
        statusEl.innerHTML = `<span style="color:#8aaccc">${ui.newsLoaded.replace("{n}", Math.min(items.length,12))}</span>`;
        gridEl.innerHTML = items.slice(0,12).map(item => {
            const thumb = item.thumbnail || item.enclosure?.link || "";
            const cat = item.categories?.[0] || "Haber";
            const desc = stripHtml(item.description).slice(0,80).trim();
            return `<div class="news-card">${thumb ? `<img class="news-thumb" src="${thumb}" alt="" loading="lazy" onerror="this.remove()">` : ""}<div class="news-cat">${cat}</div><div class="news-title">${item.title}</div>${desc ? `<div style="font-size:.72rem;color:var(--muted);line-height:1.5">${desc}…</div>` : ""}<div class="news-footer"><span class="news-date">${fmtDate(item.pubDate)}</span><a href="${item.link}" target="_blank" rel="noopener noreferrer" class="btn" style="padding:5px 10px;font-size:.62rem;width:auto">${ui.readBtn}</a></div></div>`;
        }).join("");
    }

    function showTakvim(id, btn) {
        document.querySelectorAll("#takvim-tabs .cat-tab").forEach(b => { b.classList.remove("active"); b.style.background = ""; b.style.borderColor = ""; });
        btn.classList.add("active");
        const colors = {"motogp-takvim":"#e8001d","wsbk-takvim":"#0066cc","f1-takvim":"#e10600"};
        btn.style.background = colors[id] || "var(--accent)"; btn.style.borderColor = colors[id] || "var(--accent)";
        ["motogp-takvim","wsbk-takvim","f1-takvim"].forEach(i => document.getElementById(i).style.display = "none");
        document.getElementById(id).style.display = "block";
    }

    function showGaleri(id, btn) {
        ["g-motogp","g-wsbk","g-f1","g-wrc","g-wec","g-motoamerica","g-idm","g-mxgp"].forEach(i => { const el = document.getElementById(i); if(el) el.style.display = "none"; });
        document.getElementById(id).style.display = "block";
        btn.parentElement.querySelectorAll("button").forEach(b => { b.style.background="var(--card)"; b.style.borderColor="var(--border)"; b.style.color="#9aadcc"; });
        btn.style.background="#e8001d"; btn.style.borderColor="#e8001d"; btn.style.color="white";
    }

    window.addEventListener("DOMContentLoaded", startCountdown);
    window.addEventListener("DOMContentLoaded", function() {
        // URL'de ?lang= ile açıkça bir dil belirtilmişse (örn. Google sonuçları, paylaşılan link),
        // o seçim kullanıcının/arama motorunun isteğidir; IP tahminiyle ezilmemeli.
        var urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get("lang")) return;

        // Kullanıcı daha önce manuel olarak bir dil seçtiyse, o tercihi koru;
        // IP tabanlı otomatik algılama bu seçimi asla ezmesin.
        // Pre-loader tarafından navigator.language ile tahmin edilen dili de uygula
        try { var preLang = localStorage.getItem('_mgv_prelang'); if(preLang){ switchLangSilent(preLang); localStorage.removeItem('_mgv_prelang'); } } catch(e){}
        try {
            var savedLang = localStorage.getItem("userLangChoice");
            if (savedLang) {
                switchLangSilent(savedLang);
                var nameMapEarly = {tr:'Türkçe',en:'English',de:'Deutsch',fr:'Français',ja:'日本語',es:'Español',it:'Italiano',pt:'Português',id:'Indonesia',ar:'العربية'};
                var flagMapEarly = {tr:'🇹🇷',en:'🇬🇧',de:'🇩🇪',fr:'🇫🇷',ja:'🇯🇵',es:'🇪🇸',it:'🇮🇹',pt:'🇵🇹',id:'🇮🇩',ar:'🇸🇦'};
                var curNameEl = document.getElementById("lang-current-name");
                if (curNameEl && nameMapEarly[savedLang]) curNameEl.textContent = (flagMapEarly[savedLang]||'') + ' ' + nameMapEarly[savedLang];
                return;
            }
        } catch(e) {}

        const countryToLang = {
            // Türkçe
            TR: "tr",
            // Arapça
            SA:"ar", AE:"ar", QA:"ar", KW:"ar", BH:"ar", OM:"ar", EG:"ar", JO:"ar", LB:"ar",
            SY:"ar", IQ:"ar", YE:"ar", LY:"ar", TN:"ar", DZ:"ar", MA:"ar", SD:"ar", PS:"ar",
            MR:"ar", SO:"ar", DJ:"ar", KM:"ar",
            // Almanca
            DE:"de", AT:"de", LI:"de",
            // Fransızca
            FR:"fr", BE:"fr", LU:"fr", MC:"fr",
            // Japonca
            JP:"ja",
            // İspanyolca
            ES:"es", MX:"es", AR:"es", CO:"es", PE:"es", VE:"es", CL:"es", EC:"es", GT:"es",
            CU:"es", BO:"es", DO:"es", HN:"es", PY:"es", SV:"es", NI:"es", CR:"es", PA:"es",
            UY:"es", PR:"es", GQ:"es",
            // İtalyanca
            IT:"it", SM:"it", VA:"it",
            // Portekizce
            PT:"pt", BR:"pt", AO:"pt", MZ:"pt", CV:"pt", GW:"pt", ST:"pt", TL:"pt",
            // Endonezce
            ID:"id"
        };
        const supportedLangs = ["tr","en","de","fr","ja","es","it","pt","id","ar"];

        fetch("https://get.geojs.io/v1/ip/country.json")
            .then(r => r.json())
            .then(function(data) {
                try { if (localStorage.getItem("userLangChoice")) return; } catch(e) {}
                var code = data && data.country;
                var lang = (code && countryToLang[code]) || "en";
                if (supportedLangs.indexOf(lang) === -1) lang = "en";
                switchLangSilent(lang);
            })
            .catch(function() {
                try { if (localStorage.getItem("userLangChoice")) return; } catch(e) {}
                switchLangSilent("en");
            });
    });

    function switchLangSilent(lang) {
        loadLang(lang).then(function(d) {
            if (!d) return;
            document.querySelectorAll(".lang-btn").forEach(btn => { btn.classList.remove("active"); });
            document.querySelectorAll(".lang-btn").forEach(btn => { if (btn.textContent.includes(lang.toUpperCase())) btn.classList.add("active"); });

        
        
        /* SEO KORUMASI: Otomatik dil algılamada title/meta değişmez. Googlebot en-US
           olduğu için aksi halde İngilizce başlık dizine giriyor (GSC'de görüldü).
           Title/meta sadece kullanıcı bilinçli dil seçmişse (userLangChoice) güncellenir. */
        var __userChose = false; try { __userChose = !!localStorage.getItem("userLangChoice"); } catch(e) {}
        if (__userChose) {
            document.title = d.heroTitle + " | motogpvideo.com";
            const __metaDesc = document.querySelector('meta[name="description"]'); if (__metaDesc) __metaDesc.setAttribute('content', d.heroDesc);
            const __ogTitle = document.querySelector('meta[property="og:title"]'); if (__ogTitle) __ogTitle.setAttribute('content', d.heroTitle);
            const __ogDesc = document.querySelector('meta[property="og:description"]'); if (__ogDesc) __ogDesc.setAttribute('content', d.heroDesc);
        }
        const mt = document.getElementById("main-title"); if (mt) mt.innerText = d.title;
        const pi = document.getElementById("pilot-info"); if (pi) pi.innerText = d.pilots;
        const cdl = document.getElementById("cd-label-text"); if (cdl) cdl.innerText = d.cdLabel;
        document.getElementById("sb-sec1").innerText = d.sidebar.sec1;
        document.getElementById("sb-canli").innerText = d.sidebar.canli;
        document.getElementById("sb-tv").innerText = d.sidebar.tv;
        document.getElementById("sb-platform").innerText = d.sidebar.platform;
        document.getElementById("sb-sec2").innerText = d.sidebar.sec2;
        const sbSponsor = document.getElementById("sb-sponsor"); if(sbSponsor) sbSponsor.innerText = d.sidebar.sponsor || "Resmi Sponsorlar";
            document.getElementById("sb-markalar").innerText = d.sidebar.markalar;
            document.getElementById("sb-ekipman").innerText = d.sidebar.ekipman;
            document.getElementById("sb-lastik").innerText = d.sidebar.lastik;
        document.getElementById("sb-sec3").innerText = d.sidebar.sec3;
        document.getElementById("sb-takvim").innerText = d.sidebar.takvim;
        var sbSon2 = document.getElementById("sb-sonuclar"); if(sbSon2 && d.sidebar.sonuclar) sbSon2.innerText = d.sidebar.sonuclar;
        document.getElementById("sb-biniciler").innerText = d.sidebar.biniciler;
        const sbTt2 = document.getElementById("sb-tt"); if (sbTt2) sbTt2.innerText = d.sidebar.tt;
        document.getElementById("sb-haberler").innerText = d.sidebar.haberler;
        document.getElementById("sb-global").innerText = d.sidebar.global;
        document.getElementById("sb-mission").innerText = d.sidebar.mission;
        document.getElementById("sb-mission-text").innerText = d.sidebar.missionText;
        document.getElementById("sb-mission-link").innerText = d.sidebar.missionLink;
        const navLinks = document.querySelectorAll(".topnav-link");
        d.nav.forEach((txt, i) => { if (navLinks[i]) navLinks[i].innerText = txt; });
        const st = d.secTitles;
        const map = { "st-canli":st.canli,"st-tv":st.tv,"st-platform":st.platform,"st-sponsor":st.sponsor || "🏆 Resmi Sponsorlar & Ortaklar","st-markalar":st.markalar,"st-ekipman":st.ekipman,"st-lastik":st.lastik,"st-takvim":st.takvim,"st-biniciler":st.biniciler,"st-haberler":st.haberler,"st-global":st.global };
        Object.entries(map).forEach(([id, txt]) => { const el = document.getElementById(id); if (el) el.innerText = txt; });
        const tabs = document.querySelectorAll(".rss-tab");
        d.rssTabs.forEach((txt, i) => { if (tabs[i]) tabs[i].innerText = txt; });
        const footer = document.querySelector("footer"); if (footer) { const fd = footer.querySelector("#footer-text"); if(fd) fd.innerText = d.footer; }
        const trt2 = document.getElementById("tv-race-channels-title"); if (trt2 && d.tvRaceTitle) trt2.innerText = d.tvRaceTitle;
        const wct2 = document.getElementById("wc-title"); if (wct2 && d.worldCupTitle) wct2.innerText = d.worldCupTitle;
        document.querySelectorAll(".btn-git").forEach(el => { if (d.btnGit) el.innerText = d.btnGit; });
            const trTitle = d.turkRiders || "TÜRK SÜRÜCÜLER";
            document.querySelectorAll(".turk-surucular-title").forEach(el => { el.innerText = "🇹🇷 " + trTitle; });
            if(d.sidebar) {
                const sbGaleri = document.getElementById("sb-galeri"); if(sbGaleri && d.sidebar.galeri) sbGaleri.innerText = d.sidebar.galeri;
                const sbResmi = document.getElementById("sb-resmi"); if(sbResmi && d.sidebar.resmi) sbResmi.innerText = d.sidebar.resmi;
                const sbIletisim = document.getElementById("sb-iletisim"); if(sbIletisim && d.sidebar.iletisim) sbIletisim.innerText = d.sidebar.iletisim;
                const sbPlatform = document.getElementById("sb-platform"); if(sbPlatform && d.sidebar.platform) sbPlatform.innerText = d.sidebar.platform;
                const sbSec1 = document.getElementById("sb-sec1"); if(sbSec1 && d.sidebar.sec1) sbSec1.innerText = d.sidebar.sec1;
                const sbMission = document.getElementById("sb-mission"); if(sbMission && d.sidebar.mission) sbMission.innerText = d.sidebar.mission;
            } else {
                const sbGaleri = document.getElementById("sb-galeri"); if(sbGaleri && d.galeri) sbGaleri.innerText = d.galeri;
                const sbResmi = document.getElementById("sb-resmi"); if(sbResmi && d.resmi) sbResmi.innerText = d.resmi;
                const sbIletisim = document.getElementById("sb-iletisim"); if(sbIletisim && d.iletisim) sbIletisim.innerText = d.iletisim;
                const sbPlatform = document.getElementById("sb-platform"); if(sbPlatform && d.platform) sbPlatform.innerText = d.platform;
                const sbSec1 = document.getElementById("sb-sec1"); if(sbSec1 && d.sec1) sbSec1.innerText = d.sec1;
                const sbMission = document.getElementById("sb-mission"); if(sbMission && d.mission) sbMission.innerText = d.mission;
            }
            document.querySelectorAll(".channel-badge").forEach(el => { if(d.officialBadge) el.innerText = "✔ " + d.officialBadge; });
            document.querySelectorAll(".ch-label").forEach(el => { if(d.watchBtn) el.innerText = d.watchBtn; });
        buildBrandGrid();
        if (d.chBtn) { document.querySelectorAll(".ch-label").forEach(el => el.innerText = d.chBtn); }
        if (d.countryNames) { document.querySelectorAll(".flag[data-key]").forEach(el => { const k = el.getAttribute("data-key"); if (d.countryNames[k]) el.innerText = d.countryNames[k]; }); }
        const ht2 = document.getElementById("hero-title"); if (ht2 && d.heroTitle) ht2.innerText = d.heroTitle;
        const hd2 = document.getElementById("hero-desc"); if (hd2 && d.heroDesc) hd2.innerText = d.heroDesc;
        const ab2 = document.getElementById("app-banner"); if (ab2 && d.appBanner) ab2.innerText = d.appBanner;
        if (d.platform) { const ids = ["title","p1","p2","p3","p4","p5","p6","disc"]; ids.forEach(k => { const el = document.getElementById("plat-"+k); if (el) el.innerHTML = d.platform[k]; }); }
        applyTtTranslations(d);
        document.documentElement.lang = lang;
        document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";
        if(typeof buildBrandGrid === "function") buildBrandGrid();
        if(typeof applyUiLabels === "function") applyUiLabels(lang);
        document.querySelectorAll('#broadcast-guide span').forEach(s => s.style.display = 'none');
        const bgEl2 = document.querySelector('.bg-guide-' + lang);
        if (bgEl2) bgEl2.style.display = 'inline';
        else { const bgTr2 = document.querySelector('.bg-guide-tr'); if(bgTr2) bgTr2.style.display='inline'; }
        document.querySelectorAll('#ekipman-guide span').forEach(s => s.style.display = 'none');
        const eqEl2 = document.querySelector('.eq-guide-' + lang);
        if (eqEl2) eqEl2.style.display = 'inline';
        else { const eqTr2 = document.querySelector('.eq-guide-tr'); if(eqTr2) eqTr2.style.display='inline'; }
        document.querySelectorAll('#lastik-guide span').forEach(s => s.style.display = 'none');
        const ltEl2 = document.querySelector('.lt-guide-' + lang);
        if (ltEl2) ltEl2.style.display = 'inline';
        else { const ltTr2 = document.querySelector('.lt-guide-tr'); if(ltTr2) ltTr2.style.display='inline'; }
    
        });
    }

/* ===== MGV app.js — index inline bloklarından taşındı ===== */

const popupTexts = {
    tr: "Bu platform 2009 yılından bu yana bağımsız bir motor sporları bilgi ve yayın rehberi olarak hizmet vermektedir. Hiçbir zaman yetkisiz yayın yapılmamış, ticari kazanç elde edilmemiş ve ilgili kuruluşların haklarına saygı gösterilmiştir. Tüm haklar resmi kuruluşlara aittir.|MotoGP® ve WorldSBK® markaları Liberty Media / Dorna Sports S.L.'ye, Formula 1® markası Liberty Media Corporation'a aittir.",
    en: "This platform has been operating as an independent motorsports information and broadcast guide since 2009. No unauthorized broadcasts have ever been made, no commercial gain has been obtained, and the rights of all relevant organizations have always been respected. All rights belong to their respective official organizations.|MotoGP® and WorldSBK® are trademarks of Liberty Media / Dorna Sports S.L. Formula 1® is a trademark of Liberty Media Corporation.",
    de: "Diese Plattform ist seit 2009 als unabhängiger Motorsport-Informations- und Übertragungsführer tätig. Es wurden nie unbefugte Übertragungen durchgeführt, kein kommerzieller Gewinn erzielt und die Rechte aller relevanten Organisationen wurden stets respektiert.|MotoGP® und WorldSBK® sind Marken von Liberty Media / Dorna Sports S.L. Formula 1® ist eine Marke der Liberty Media Corporation.",
    fr: "Cette plateforme fonctionne comme un guide d'information et de diffusion motorsport indépendant depuis 2009. Aucune diffusion non autorisée n'a jamais été effectuée, aucun gain commercial n'a été obtenu et les droits de toutes les organisations concernées ont toujours été respectés.|MotoGP® et WorldSBK® sont des marques de Liberty Media / Dorna Sports S.L. Formula 1® est une marque de Liberty Media Corporation.",
    ja: "このプラットフォームは2009年から独立したモータースポーツ情報・放送ガイドとして運営されています。無断放送は一切行われておらず、商業的利益も得ておらず、関連組織の権利を常に尊重しています。|MotoGP®とWorldSBK®はLiberty Media / Dorna Sports S.L.の商標です。Formula 1®はLiberty Media Corporationの商標です。",
    es: "Esta plataforma opera como guía independiente de información y transmisión de deportes de motor desde 2009. Nunca se han realizado transmisiones no autorizadas, no se han obtenido ganancias comerciales y siempre se han respetado los derechos de todas las organizaciones pertinentes.|MotoGP® y WorldSBK® son marcas de Liberty Media / Dorna Sports S.L. Formula 1® es marca de Liberty Media Corporation.",
    it: "Questa piattaforma opera come guida indipendente di informazioni e trasmissioni di motorsport dal 2009. Non sono mai state effettuate trasmissioni non autorizzate, non sono stati ottenuti guadagni commerciali e i diritti di tutte le organizzazioni pertinenti sono sempre stati rispettati.|MotoGP® e WorldSBK® sono marchi di Liberty Media / Dorna Sports S.L. Formula 1® è un marchio di Liberty Media Corporation.",
    pt: "Esta plataforma opera como guia independente de informações e transmissão de desportos motorizados desde 2009. Nunca foram feitas transmissões não autorizadas, não foram obtidos ganhos comerciais e os direitos de todas as organizações relevantes foram sempre respeitados.|MotoGP® e WorldSBK® são marcas da Liberty Media / Dorna Sports S.L. Formula 1® é marca da Liberty Media Corporation.",
    id: "Platform ini telah beroperasi sebagai panduan informasi dan siaran motorsport independen sejak 2009. Tidak pernah ada siaran tidak resmi, tidak ada keuntungan komersial yang diperoleh, dan hak-hak semua organisasi terkait selalu dihormati.|MotoGP® dan WorldSBK® adalah merek dagang Liberty Media / Dorna Sports S.L. Formula 1® adalah merek dagang Liberty Media Corporation."
};
const popupBtns = {
    tr:"Anladım", en:"Got It", de:"Verstanden", fr:"Compris", ja:"了解", es:"Entendido", it:"Capito", pt:"Entendido", id:"Mengerti"
};
function closeWelcomePopup(){
    document.getElementById('welcome-popup').style.display='none';
    sessionStorage.setItem('popup_shown','1');
}
(function(){
    if(sessionStorage.getItem('popup_shown')) return;
    // Pre-loader veya localStorage'dan gelen dili kullan — en güvenilir kaynak
    var lang = document.documentElement.lang ||
               localStorage.getItem('userLangChoice') ||
               (navigator.language || 'en').split('-')[0];
    if(!popupTexts[lang]) lang = 'en';
    const parts = (popupTexts[lang]||popupTexts['tr']).split('|');
    document.getElementById('popup-text').innerHTML = parts[0] + (parts[1] ? '<br><span style="color:#e8001d;font-weight:700;margin-top:6px;display:inline-block">' + parts[1] + '</span>' : '');
    document.getElementById('popup-btn').innerText = popupBtns[lang] || 'OK';
    document.getElementById('welcome-popup').style.display='flex';
})();

/* ===== MGV app.js — index inline bloklarından taşındı ===== */

// ---- URL'deki ?lang= parametresine göre otomatik dil + SEO başlık/açıklama ayarı ----
(function(){
    var supportedLangs = ['tr','en','de','fr','ja','es','it','pt','id','ar'];
    var params = new URLSearchParams(window.location.search);
    var urlLang = params.get('lang');
    if(!urlLang || supportedLangs.indexOf(urlLang) === -1) return;

    function applySeoLang(lang){ loadLang(lang).then(function(d) {
        
        if(!d) return;
        if(d.title) document.title = d.title + ' | motogpvideo.com';
        if(d.heroDesc){
            var metaDesc = document.querySelector('meta[name="description"]');
            if(metaDesc) metaDesc.setAttribute('content', d.heroDesc);
            var ogDesc = document.querySelector('meta[property="og:description"]');
            if(ogDesc) ogDesc.setAttribute('content', d.heroDesc);
        }});
        if(d.heroTitle){
            var ogTitle = document.querySelector('meta[property="og:title"]');
            if(ogTitle) ogTitle.setAttribute('content', d.heroTitle);
        }
    }

    function init(){
        if(typeof switchLang === 'function') switchLang(urlLang);
        var dd = document.getElementById('lang-current-name');
        if(dd){
            var flagMap = {tr:'🇹🇷',en:'🇬🇧',de:'🇩🇪',fr:'🇫🇷',ja:'🇯🇵',es:'🇪🇸',it:'🇮🇹',pt:'🇵🇹',id:'🇮🇩',ar:'🇸🇦'};
            var nameMap = {tr:'Türkçe',en:'English',de:'Deutsch',fr:'Français',ja:'日本語',es:'Español',it:'Italiano',pt:'Português',id:'Indonesia',ar:'العربية'};
            dd.textContent = (flagMap[urlLang]||'') + ' ' + (nameMap[urlLang]||urlLang);
        }
    }

    if(document.readyState === 'loading'){
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

/* ===== MGV app.js — index inline bloklarından taşındı ===== */

// ===== RESMİ VİDEO PLAYER =====
const YT_API_KEY = 'AIzaSyCk0fgTroD9nqt0cJOoP5Wm-rlhUDvRU1Q';
const YT_CHANNELS = {
    motogp: 'UCgyQ6OF3MBe9eENjWMTuE_w',
    wsbk:   'UCpAMDSvBQWX7_VEMfpB1Wtw',
    f1:     'UCB_qr75-ydFVKSF9Dmo6izg'
};
// F1 embed engelliyor - sadece YouTube linki
const EMBED_BLOCKED = { f1: true };
let currentChannel = 'motogp';

async function loadVideos(channel, btn) {
    currentChannel = channel;
    document.querySelectorAll('#video-tabs .cat-tab').forEach(b => {
        b.style.background = 'var(--card)';
        b.style.borderColor = 'var(--border)';
        b.style.color = '#9aadcc';
    });
    btn.style.background = '#e8001d';
    btn.style.borderColor = '#e8001d';
    btn.style.color = '#fff';

    const grid = document.getElementById('video-grid');
    grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--muted);font-size:.85rem;">Yükleniyor...</div>';

    try {
        const channelId = YT_CHANNELS[channel];
        const url = `/api/youtube?channel=${channel}`;
        const res = await fetch(url);
        const data = await res.json();

        if (!data.items || data.items.length === 0) {
            grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--muted);">Video bulunamadı.</div>';
            return;
        }

        const embedBlocked = !!EMBED_BLOCKED[channel];

        grid.innerHTML = data.items.map(item => {
            const vid = item.id.videoId;
            const title = item.snippet.title;
            const thumb = item.snippet.thumbnails.medium?.url || item.snippet.thumbnails.default?.url;
            const published = new Date(item.snippet.publishedAt).toLocaleDateString('tr-TR');
            const clickAction = embedBlocked
                ? `window.open('https://www.youtube.com/watch?v=${vid}','_blank')`
                : `openVideoPopup('${vid}','${title.replace(/'/g,"&#39;")}')`;
            return `
            <div onclick="${clickAction}"
                 style="background:var(--card);border:1px solid var(--border);border-radius:10px;overflow:hidden;cursor:pointer;transition:transform .2s,border-color .2s;"
                 onmouseover="this.style.transform='translateY(-3px)';this.style.borderColor='var(--accent)'"
                 onmouseout="this.style.transform='';this.style.borderColor='var(--border)'">
                <div style="position:relative;">
                    <img src="${thumb}" alt="${title}" style="width:100%;display:block;aspect-ratio:16/9;object-fit:cover;">
                    <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;">
                        <div style="width:48px;height:48px;background:rgba(220,0,0,.85);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.2rem;">▶</div>
                    </div>
                    ${embedBlocked ? '<div style="position:absolute;top:8px;right:8px;background:rgba(0,0,0,.7);color:#fff;font-size:.6rem;padding:2px 6px;border-radius:4px;">YouTube&#39;da izle</div>' : ''}
                </div>
                <div style="padding:10px 12px;">
                    <div style="font-size:.78rem;font-weight:700;color:#fff;line-height:1.4;margin-bottom:6px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">${title}</div>
                    <div style="font-size:.7rem;color:var(--muted);">${published}</div>
                    <a href="https://www.youtube.com/watch?v=${vid}" target="_blank" rel="noopener noreferrer"
                       onclick="event.stopPropagation()"
                       style="display:inline-block;margin-top:8px;font-size:.68rem;color:#ff4444;text-decoration:none;font-weight:700;">
                        ▶ YouTube'da İzle →
                    </a>
                </div>
            </div>`;
        }).join('');
    } catch(e) {
        grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--muted);">Video yüklenemedi: ${e.message}</div>`;
    }
}

function openVideoPopup(videoId, title) {
    const popup = document.getElementById('video-popup');
    const iframe = document.getElementById('video-iframe');
    const linkDiv = document.getElementById('video-popup-link');
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    linkDiv.innerHTML = `<a href="https://www.youtube.com/watch?v=${videoId}" target="_blank" rel="noopener noreferrer"
        style="background:rgba(255,0,0,.85);color:#fff;text-decoration:none;padding:8px 18px;border-radius:20px;font-size:.8rem;font-weight:700;">
        ▶ YouTube'da İzle
    </a>`;
    popup.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeVideoPopup(e) {
    if (e.target === document.getElementById('video-popup')) closeVideoPopupBtn();
}
function closeVideoPopupBtn() {
    document.getElementById('video-popup').style.display = 'none';
    document.getElementById('video-iframe').src = '';
    document.body.style.overflow = '';
}

// Video yükleme showSection içinde yapılıyor

// ====== ANA SAYFA OTOMATİK CANLI SIRALAMA ======
// Yarış seansı aktifken ana sayfanın en üstünde canlı sıralama gösterir.
// Seans bitince "son sonuç" olarak kalır, seans yoksa gizlenir.
(function(){
  const box = document.getElementById('home-live-timing');
  if(!box) return;
  let pollTimer = null;

  const FLAGS = {ITA:'🇮🇹',SPA:'🇪🇸',ESP:'🇪🇸',FRA:'🇫🇷',JPN:'🇯🇵',GBR:'🇬🇧',
    AUS:'🇦🇺',RSA:'🇿🇦',ZAF:'🇿🇦',TUR:'🇹🇷',BRA:'🇧🇷',GER:'🇩🇪',DEU:'🇩🇪',USA:'🇺🇸',
    POR:'🇵🇹',PRT:'🇵🇹',NED:'🇳🇱',NLD:'🇳🇱',AUT:'🇦🇹',THA:'🇹🇭',ARG:'🇦🇷',
    MYS:'🇲🇾',MAL:'🇲🇾',IDN:'🇮🇩',IND:'🇮🇩',CZE:'🇨🇿',HUN:'🇭🇺',COL:'🇨🇴'};
  function flag(c){ return FLAGS[c] || ''; }

  async function fetchLive(){
    try{
      const r = await fetch('/api/motogp?type=livetiming');
      if(!r.ok) return null;
      const txt = await r.text();
      if(!txt || txt.length < 5) return null;
      return JSON.parse(txt);
    }catch(e){ return null; }
  }

  function hide(){
    box.style.display = 'none';
    box.style.minHeight = '0';
    if(pollTimer){ clearInterval(pollTimer); pollTimer = null; }
  }

  function render(data){
    const head = (data && data.head) || {};
    const riders = (data && data.rider) || {};
    const keys = Object.keys(riders);
    if(!keys.length){ hide(); return; }

    const sessName = head.session_name || 'Seans';
    const circuit = head.circuit_name || '';
    const status = head.session_status_name || '';
    const isLive = status !== 'F';

    const sorted = keys.map(k=>riders[k]).sort((a,b)=>(a.order||99)-(b.order||99));
    const top = sorted.slice(0, 15); // ana sayfada ilk 15

    const badge = isLive
      ? '<span style="display:inline-flex;align-items:center;gap:6px;background:#e10600;color:#fff;font-weight:900;font-size:.72rem;padding:4px 12px;border-radius:20px;animation:titleBlink 1s infinite;">🔴 CANLI</span>'
      : '<span style="background:#27ae60;color:#fff;font-weight:900;font-size:.72rem;padding:4px 12px;border-radius:20px;">✅ TAMAMLANDI</span>';

    let html = `
      <div style="background:linear-gradient(135deg,#1a0505,#0d1220);border:2px solid #e10600;border-radius:14px;overflow:hidden;box-shadow:0 0 24px #e1060044;">
        <div style="padding:14px 18px;background:linear-gradient(90deg,#e10600 0%,#8b0000 100%);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">
          <div style="display:flex;align-items:center;gap:10px;">
            <span style="font-size:1.1rem;font-weight:900;color:#fff;letter-spacing:.5px;">🏁 CANLI SIRALAMA</span>
            ${badge}
          </div>
          <span style="font-size:.8rem;color:#ffd;font-weight:700;">${circuit} · ${sessName}</span>
        </div>
        <div style="background:#1a0808;border-bottom:1px solid #e1060033;padding:11px 18px;font-size:.85rem;color:#ffd9d9;line-height:1.5;text-align:center;">
          ℹ️ Tüm veriler resmî MotoGP kaynaklarından alınmıştır. Canlı yayını izlemek için resmî yayıncısı <strong style="color:#fff;">S Sport</strong>'u tercih ediniz.
        </div>
        <div style="overflow-x:auto;">
        <table style="width:100%;border-collapse:collapse;font-size:.82rem;">
          <thead>
            <tr style="background:#0d1220;color:#8aa;text-align:left;">
              <th style="padding:8px 10px;">#</th><th style="padding:8px 6px;">No</th>
              <th style="padding:8px 10px;">Sürücü</th><th style="padding:8px 6px;"></th>
              <th style="padding:8px 10px;">En İyi Tur</th><th style="padding:8px 10px;">Fark</th>
              <th style="padding:8px 10px;">Takım</th>
            </tr>
          </thead><tbody>`;

    top.forEach((rd,i)=>{
      const pos = rd.order || (i+1);
      const num = rd.rider_number || '';
      const name = rd.rider_shortname || rd.rider_surname || '-';
      const nat = rd.rider_nation || '';
      const isTurk = nat === 'TUR';
      const team = rd.team_name || '';
      const lap = rd.lap_time || '-';
      const gap = i===0 ? '–' : ('+' + (rd.gap_first || '?'));
      const pit = rd.on_pit === true;
      const rowBg = isTurk ? 'background:linear-gradient(90deg,#e1060033,transparent);border-left:3px solid #e10600;' : (i%2 ? 'background:#ffffff05;' : '');
      html += `<tr style="${rowBg}color:#fff;border-bottom:1px solid #ffffff0d;">
        <td style="padding:7px 10px;font-weight:900;color:${pos<=3?'#ffd700':'#fff'};">${pos}</td>
        <td style="padding:7px 6px;color:#888;">${num}</td>
        <td style="padding:7px 10px;font-weight:700;">${name}</td>
        <td style="padding:7px 6px;">${flag(nat)}</td>
        <td style="padding:7px 10px;font-family:monospace;color:#9fe;">${lap}</td>
        <td style="padding:7px 10px;font-family:monospace;color:#aaa;">${gap}</td>
        <td style="padding:7px 10px;color:#999;font-size:.75rem;">${team}${pit?' <span style="background:#ff9800;color:#000;font-size:.6rem;font-weight:900;padding:1px 5px;border-radius:3px;">PIT</span>':''}</td>
      </tr>`;
    });

    html += `</tbody></table></div>
        <div style="padding:10px 18px;background:#0d1220;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:6px;">
          <span style="font-size:.72rem;color:#777;">${isLive?'🔄 30 saniyede bir otomatik güncellenir':'Seans tamamlandı'} · Resmi MotoGP verisi</span>
          <a href="canli-yayin.html" style="font-size:.78rem;color:#ff6b6b;font-weight:700;text-decoration:none;">Tüm sıralama ve yayın rehberi →</a>
        </div>
      </div>`;

    box.innerHTML = html;
    box.style.display = 'block';

    if(isLive){
      if(!pollTimer) pollTimer = setInterval(loadAndRender, 30000);
    } else {
      if(pollTimer){ clearInterval(pollTimer); pollTimer = null; }
    }
  }

  async function loadAndRender(){
    const data = await fetchLive();
    if(data) render(data);
    else hide();
  }

  loadAndRender();
})();


/* CLS önleme: tüm dil değiştirme dinleyicileri çalıştıktan sonra gövdeyi göster.
   Bu dinleyici dosyanın SONUNDA kayıtlı olduğu için en son tetiklenir. */
window.addEventListener("DOMContentLoaded", function(){
    document.documentElement.classList.remove("lang-pending");
});
