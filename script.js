/* ============================================================
   PARITEK-UGANDA — script.js
   ------------------------------------------------------------
   KEEPING THIS SITE CURRENT
   Products below are examples from the shop's PUBLIC listings
   (Jiji.ug store + TikTok posts). Stock and prices change, so
   the site tells visitors to confirm by phone / WhatsApp.

   TO UPDATE PRODUCTS: edit the `products` array below.
     name     – listing title (as publicly listed)
     price    – listed price, e.g. "USh 590,000"
     cond     – condition badge, e.g. "As listed" / "Brand new"
     desc     – short factual description
     source   – where the listing was seen (+ date if known)
     img      – product category image URL
     wa       – pre-filled WhatsApp message for this product
   ============================================================ */

/* ---------- Contact configuration ---------- */
const SHOP = {
  phoneDisplay: '+256 706 417889',
  phoneTel: 'tel:+256706417889',
  whatsapp: 'https://wa.me/256706417889'
};

/* ---------- Product listings (edit here) ---------- */
const products = [
  {
    name: 'PlayStation 5 console bundle',
    price: 'USh 590,000',
    cond: 'As listed',
    desc: 'PS5 console bundle with 5 games, as offered in the shop\u2019s recent public post.',
    source: 'Seen in PARITEK\u2019s TikTok shop post',
    img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/77e81080b453.jpg',
    wa: 'Hello PARITEK-UGANDA, I saw the PS5 console bundle (USh 590,000) on your website. Is it still available?'
  },
  {
    name: 'PS4 Pro full set \u2014 20 games',
    price: 'USh 1,200,000',
    cond: 'As listed',
    desc: 'PS4 Pro full set with 20 games and two controllers, per the shop\u2019s public post.',
    source: 'Seen in PARITEK\u2019s TikTok shop post (Aug 2026)',
    img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/79061c7df347.jpg',
    wa: 'Hello PARITEK-UGANDA, I saw the PS4 Pro full set (20 games, USh 1,200,000) on your website. Is it still available?'
  },
  {
    name: 'PlayStation 4 bundle \u2014 10\u201314 games',
    price: 'USh 750,000',
    cond: 'As listed',
    desc: 'PS4 console bundle with 10\u201314 games, as advertised for the Em Plaza shop.',
    source: 'Seen in PARITEK\u2019s TikTok shop post',
    img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/22bfe83edcdb.jpeg',
    wa: 'Hello PARITEK-UGANDA, I saw the PS4 bundle with 10\u201314 games (USh 750,000) on your website. Is it still available?'
  },
  {
    name: 'Xbox One console',
    price: 'USh 550,000',
    cond: 'As listed',
    desc: 'Per the listing: includes the Xbox One console, one wireless controller and an HDMI cable.',
    source: 'Jiji.ug listing \u00b7 PARITEK-UGANDA store',
    img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/4bcadbdc59fe.jpeg',
    wa: 'Hello PARITEK-UGANDA, I saw the Xbox One console (USh 550,000) on your website. Is it still available?'
  },
  {
    name: 'Xbox Elite Series 2 controller',
    price: 'USh 700,000',
    cond: 'As listed',
    desc: 'Microsoft Xbox Elite Series 2 wireless controller, listed on the shop\u2019s Jiji store.',
    source: 'Jiji.ug listing \u00b7 PARITEK-UGANDA store',
    img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/92818b71fbcb.jpeg',
    wa: 'Hello PARITEK-UGANDA, I saw the Xbox Elite Series 2 controller (USh 700,000) on your website. Is it still available?'
  },
  {
    name: 'Call of Duty: Black Ops 6 (PS4)',
    price: 'USh 200,000',
    cond: 'As listed',
    desc: 'Call of Duty: Black Ops 6 for PlayStation 4, listed on the shop\u2019s Jiji store.',
    source: 'Jiji.ug listing \u00b7 Nov 2025',
    img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/bb184af3c5b8.png',
    wa: 'Hello PARITEK-UGANDA, I saw Call of Duty: Black Ops 6 for PS4 (USh 200,000) on your website. Is it still available?'
  },
  {
    name: 'FIFA 23 (PlayStation 4)',
    price: 'USh 70,000',
    cond: 'As listed',
    desc: 'FIFA 23 for PlayStation 4, listed on the shop\u2019s Jiji store.',
    source: 'Jiji.ug listing \u00b7 PARITEK-UGANDA store',
    img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/b3c80102ea1d.jpg',
    wa: 'Hello PARITEK-UGANDA, I saw FIFA 23 for PS4 (USh 70,000) on your website. Is it still available?'
  },
  {
    name: 'Retro game stick \u2014 built-in games',
    price: 'USh 150,000',
    cond: 'As listed',
    desc: 'Retro gaming console with wireless controllers and built-in classic games, shown in a shop post.',
    source: 'Seen in PARITEK\u2019s TikTok shop post (Apr 2026)',
    img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/3101b35ab023.jpg',
    wa: 'Hello PARITEK-UGANDA, I saw the retro game stick (USh 150,000) on your website. Is it still available?'
  }
];

/* ---------- Render products ---------- */
const grid = document.getElementById('product-grid');

if (grid) {
  grid.innerHTML = products.map((p) => `
    <article class="product-card">
      <div class="product-media">
        <img src="${p.img}" alt="${p.name} \u2014 product category image" loading="lazy">
        <span class="media-tag">Category image</span>
        <span class="condition-badge">${p.cond}</span>
      </div>
      <div class="product-body">
        <h3>${p.name}</h3>
        <p class="product-desc">${p.desc}</p>
        <div class="product-price-row">
          <span class="product-price">${p.price}</span>
          <span class="price-note">listed price</span>
        </div>
        <p class="product-source">${p.source}</p>
        <a class="product-cta" href="${SHOP.whatsapp}?text=${encodeURIComponent(p.wa)}" target="_blank" rel="noreferrer">
          <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z"/><path d="M8.6 7.8c.2-.5.4-.5.7-.5h.6c.2 0 .4 0 .6.5s.7 1.7.7 1.8c.1.1.1.3 0 .5l-.4.6c-.2.2-.3.4-.1.7.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.7-.1l.7-.8c.2-.3.4-.2.7-.1l1.7.8c.3.1.5.2.5.3a1.5 1.5 0 0 1-.1.9 2.4 2.4 0 0 1-1.6 1.4 3.7 3.7 0 0 1-2.4-.3 11 11 0 0 1-4.6-3.9 7.4 7.4 0 0 1-1.6-3.4 3 3 0 0 1 .6-2z"/></svg>
          Contact to buy
        </a>
      </div>
    </article>
  `).join('');
}

/* ---------- Mobile navigation ---------- */
const toggle = document.getElementById('menu-toggle');

if (toggle) {
  toggle.addEventListener('click', () => {
    const open = document.body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  document.querySelectorAll('.main-nav a').forEach((link) => {
    link.addEventListener('click', () => {
      document.body.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ---------- Header shadow on scroll ---------- */
const header = document.querySelector('.site-header');

const onScroll = () => {
  if (header) header.classList.toggle('is-scrolled', window.scrollY > 8);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ---------- Logo fallback (if logo.png is missing) ---------- */
document.querySelectorAll('img.brand-logo').forEach((img) => {
  if (img.complete && img.naturalWidth === 0) {
    document.body.classList.add('logo-missing');
  }
});

/* ---------- Footer year ---------- */
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
