/* ═══════════════════════════════════════════
   MYNTRA — script.js
   All interactivity: Carousel, Products,
   Cart, Wishlist, Search, Modal, Toast
═══════════════════════════════════════════ */

'use strict';

// ─── PRODUCT DATA ───────────────────────────
const PRODUCTS = [
  // Women
  { id: 1, brand: 'H&M', title: 'Floral Wrap Midi Dress', price: 1299, original: 2999, category: 'women', img: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80', desc: 'A breezy floral wrap dress perfect for summer days and evening outings alike. Crafted from lightweight viscose.', sizes: ['XS','S','M','L','XL'] },
  { id: 2, brand: 'Zara', title: 'Linen Blazer – Ivory', price: 2499, original: 4999, category: 'women', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80', desc: 'Structured ivory linen blazer with a relaxed fit. Style over anything from tailored trousers to denim.', sizes: ['XS','S','M','L'] },
  { id: 3, brand: 'Mango', title: 'Pleated Satin Skirt', price: 899, original: 1999, category: 'women', img: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80', desc: 'Elegant satin pleated midi skirt in a versatile neutral tone. Pairs perfectly with a tucked-in tee or blouse.', sizes: ['XS','S','M','L','XL'] },
  { id: 4, brand: 'Forever 21', title: 'Ribbed Crop Top', price: 399, original: 799, category: 'women', img: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?w=400&q=80', desc: 'Ultra-soft ribbed knit crop top. Available in a range of seasonal colours.', sizes: ['XS','S','M','L'] },
  { id: 5, brand: 'Levi\'s', title: 'High-Rise Straight Jeans', price: 1999, original: 3499, category: 'women', img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80', desc: 'Classic 501-inspired high-rise straight jeans with authentic washed denim and a clean silhouette.', sizes: ['26','28','30','32','34'] },
  { id: 6, brand: 'Tommy Hilfiger', title: 'Striped Polo Dress', price: 3299, original: 5499, category: 'women', img: 'https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?w=400&q=80', desc: 'Iconic Tommy stripes on a preppy polo-style mini dress. Effortlessly chic for any casual occasion.', sizes: ['XS','S','M','L','XL'] },
  // Men
  { id: 7, brand: 'Nike', title: 'Dri-FIT Training Tee', price: 999, original: 1799, category: 'men', img: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&q=80', desc: 'Performance Dri-FIT tee that wicks sweat away from your body to help you stay dry and comfortable.', sizes: ['S','M','L','XL','XXL'] },
  { id: 8, brand: 'Adidas', title: 'Classic Track Jacket', price: 2799, original: 4999, category: 'men', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80', desc: 'Retro-inspired track jacket with iconic three-stripe detailing. Lightweight and perfect for layering.', sizes: ['S','M','L','XL'] },
  { id: 9, brand: 'Levi\'s', title: '511 Slim Fit Jeans', price: 2299, original: 3999, category: 'men', img: 'https://images.unsplash.com/photo-1588099768531-a72d4a198538?w=400&q=80', desc: 'The iconic 511 slim — slightly below the waist with a slim fit from hip to ankle. Everyday essential.', sizes: ['30','32','34','36','38'] },
  { id: 10, brand: 'US Polo', title: 'Pique Polo Shirt', price: 1199, original: 2199, category: 'men', img: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&q=80', desc: 'Classic pique knit polo with the iconic horse emblem. Smart-casual perfection.', sizes: ['S','M','L','XL','XXL'] },
  { id: 11, brand: 'Puma', title: 'Future Rider Sneakers', price: 3999, original: 6499, category: 'footwear', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80', desc: 'Bold chunky sneakers inspired by archive running styles. Extra-thick sole for that elevated street look.', sizes: ['7','8','9','10','11','12'] },
  { id: 12, brand: 'Calvin Klein', title: 'Slim-Fit Chinos', price: 1799, original: 3499, category: 'men', img: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&q=80', desc: 'Tailored slim-fit chinos in stretch cotton. Versatile enough for desk-to-dinner transitions.', sizes: ['30','32','34','36'] },
  // Footwear
  { id: 13, brand: 'Nike', title: 'Air Max 270 React', price: 7999, original: 11999, category: 'footwear', img: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&q=80', desc: 'The first-ever Air unit engineered specifically for lifestyle footwear. Extreme comfort with iconic style.', sizes: ['6','7','8','9','10','11'] },
  { id: 14, brand: 'Adidas', title: 'Stan Smith Classics', price: 6499, original: 8999, category: 'footwear', img: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&q=80', desc: 'The timeless Stan Smith. Clean leather upper, perforated 3-Stripes — the original minimalist sneaker.', sizes: ['6','7','8','9','10','11','12'] },
  { id: 15, brand: 'Steve Madden', title: 'Block Heel Mules', price: 2299, original: 3999, category: 'footwear', img: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&q=80', desc: 'Effortlessly chic block-heel mules. Slip-on design with a comfortable footbed for all-day wear.', sizes: ['5','6','7','8','9'] },
  { id: 16, brand: 'Puma', title: 'RS-X Street Sneakers', price: 4499, original: 7499, category: 'footwear', img: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&q=80', desc: 'Chunky streetwear sneaker with RS running-system inspired cushioning and bold colour blocking.', sizes: ['6','7','8','9','10','11'] },
  // Kids
  { id: 17, brand: 'Mothercare', title: 'Dino Print Tee Set', price: 599, original: 1199, category: 'kids', img: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&q=80', desc: 'Fun dino-print cotton t-shirt set for little explorers. Super soft and machine washable.', sizes: ['2Y','3Y','4Y','5Y','6Y'] },
  { id: 18, brand: 'H&M Kids', title: 'Floral Frock', price: 799, original: 1599, category: 'kids', img: 'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=400&q=80', desc: 'Adorable floral cotton frock with smocking detail at the chest. Perfect for parties and playdates.', sizes: ['2Y','3Y','4Y','5Y','6Y','7Y'] },
  { id: 19, brand: 'Nike Kids', title: 'Air Zoom Shoes', price: 2999, original: 4499, category: 'kids', img: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400&q=80', desc: 'Lightweight and breathable kids\' sneakers with Velcro closure for easy on-off.', sizes: ['1','2','3','4','5'] },
  { id: 20, brand: 'Zara Kids', title: 'Cargo Shorts Set', price: 899, original: 1699, category: 'kids', img: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=400&q=80', desc: 'Comfortable cargo shorts with pockets and matching tee. Great for outdoor adventures.', sizes: ['4Y','5Y','6Y','7Y','8Y'] },
  // Accessories
  { id: 21, brand: 'Ray-Ban', title: 'Aviator Sunglasses', price: 4999, original: 7999, category: 'accessories', img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80', desc: 'Iconic aviator frames with polarized lenses. UV400 protection with a timeless gold frame.', sizes: ['One Size'] },
  { id: 22, brand: 'Fossil', title: 'Leather Tote Bag', price: 3799, original: 5999, category: 'accessories', img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80', desc: 'Spacious genuine leather tote with zip-top closure. Multiple interior pockets for organisation.', sizes: ['One Size'] },
  { id: 23, brand: 'Titan', title: 'Analog Watch – Rose Gold', price: 2999, original: 5499, category: 'accessories', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80', desc: 'Elegant rose-gold analog watch with a minimal dial and genuine leather strap.', sizes: ['One Size'] },
  { id: 24, brand: 'Accessorize', title: 'Layered Chain Necklace', price: 699, original: 1299, category: 'accessories', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80', desc: 'Delicate layered gold-tone chains with star and moon pendants. The perfect everyday jewellery.', sizes: ['One Size'] },
];

// ─── STATE ──────────────────────────────────
let cart = JSON.parse(localStorage.getItem('myntra_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('myntra_wishlist')) || [];
let visibleCount = 12;
let currentFilter = 'all';
let carouselIndex = 0;
let carouselTimer;
const TOTAL_SLIDES = 4;

// ─── HELPERS ────────────────────────────────
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

function saveCart() { localStorage.setItem('myntra_cart', JSON.stringify(cart)); }
function saveWishlist() { localStorage.setItem('myntra_wishlist', JSON.stringify(wishlist)); }

function showToast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2600);
}

function formatPrice(n) { return '₹' + n.toLocaleString('en-IN'); }
function calcDiscount(price, original) { return Math.round((1 - price / original) * 100); }

// ─── BADGE UPDATES ──────────────────────────
function updateBadges() {
  const totalItems = cart.reduce((s, i) => s + i.qty, 0);
  const wCount = wishlist.length;
  const cartBadge = $('#cartCount');
  const wBadge = $('#wishlistCount');
  cartBadge.textContent = totalItems;
  wBadge.textContent = wCount;
  cartBadge.classList.toggle('show', totalItems > 0);
  wBadge.classList.toggle('show', wCount > 0);
}

// ─── CAROUSEL ───────────────────────────────
function goToSlide(idx) {
  const track = $('#carouselTrack');
  carouselIndex = (idx + TOTAL_SLIDES) % TOTAL_SLIDES;
  track.style.transform = `translateX(-${carouselIndex * 100}%)`;
  $$('.dot').forEach((d, i) => d.classList.toggle('active', i === carouselIndex));
}

function startCarousel() {
  carouselTimer = setInterval(() => goToSlide(carouselIndex + 1), 4500);
}

function initCarousel() {
  $('#carouselNext').addEventListener('click', () => { goToSlide(carouselIndex + 1); resetTimer(); });
  $('#carouselPrev').addEventListener('click', () => { goToSlide(carouselIndex - 1); resetTimer(); });
  $$('.dot').forEach(d => d.addEventListener('click', () => { goToSlide(+d.dataset.index); resetTimer(); }));
  startCarousel();
}

function resetTimer() { clearInterval(carouselTimer); startCarousel(); }

// ─── PRODUCTS RENDER ────────────────────────
function getFilteredProducts() {
  return currentFilter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === currentFilter);
}

function renderProducts(reset = false) {
  if (reset) visibleCount = 12;
  const grid = $('#productsGrid');
  const filtered = getFilteredProducts();
  const visible = filtered.slice(0, visibleCount);

  grid.innerHTML = visible.map((p, i) => {
    const wishlisted = wishlist.includes(p.id);
    const disc = calcDiscount(p.price, p.original);
    return `
      <div class="product-card" data-id="${p.id}" style="animation-delay:${(i % 12) * 0.04}s">
        <div class="product-img-wrap">
          <img src="${p.img}" alt="${p.title}" loading="lazy" />
          <span class="discount-chip">${disc}% OFF</span>
          <div class="product-overlay">
            <button class="wishlist-icon-btn ${wishlisted ? 'wishlisted' : ''}" data-id="${p.id}" title="Wishlist">
              <i class="${wishlisted ? 'fas' : 'far'} fa-heart"></i> ${wishlisted ? 'Wishlisted' : 'Wishlist'}
            </button>
            <button class="add-bag-btn" data-id="${p.id}" title="Add to Bag">
              <i class="fa fa-shopping-bag"></i> Add to Bag
            </button>
          </div>
        </div>
        <div class="product-info">
          <div class="product-brand">${p.brand}</div>
          <div class="product-title">${p.title}</div>
          <div class="product-pricing">
            <span class="product-price">${formatPrice(p.price)}</span>
            <span class="product-original">${formatPrice(p.original)}</span>
            <span class="product-discount">(${disc}% off)</span>
          </div>
        </div>
      </div>`;
  }).join('');

  $('#loadMore').style.display = visibleCount >= filtered.length ? 'none' : 'inline-flex';
  attachProductEvents();
}

function attachProductEvents() {
  // Open modal on card click (not on button clicks)
  $$('.product-card').forEach(card => {
    card.addEventListener('click', e => {
      if (e.target.closest('.add-bag-btn') || e.target.closest('.wishlist-icon-btn')) return;
      openModal(+card.dataset.id);
    });
  });

  // Wishlist buttons in overlay
  $$('.wishlist-icon-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      toggleWishlist(+btn.dataset.id);
    });
  });

  // Add to bag buttons in overlay
  $$('.add-bag-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      addToCart(+btn.dataset.id);
    });
  });
}

// ─── FILTER ─────────────────────────────────
function initFilters() {
  $$('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderProducts(true);
    });
  });

  $('#loadMore').addEventListener('click', () => {
    visibleCount += 8;
    renderProducts();
  });
}

// ─── WISHLIST ───────────────────────────────
function toggleWishlist(id) {
  const idx = wishlist.indexOf(id);
  if (idx > -1) {
    wishlist.splice(idx, 1);
    showToast('Removed from Wishlist');
  } else {
    wishlist.push(id);
    showToast('❤️ Added to Wishlist!');
  }
  saveWishlist();
  updateBadges();
  // Re-render to update button state
  renderProducts();
}

// ─── CART ───────────────────────────────────
function addToCart(id, size = null) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  const key = `${id}-${size || 'default'}`;
  const existing = cart.find(i => i.key === key);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ key, id, size, qty: 1 });
  }
  saveCart();
  updateBadges();
  renderCart();
  showToast('🛍️ Added to Bag!');
}

function removeFromCart(key) {
  cart = cart.filter(i => i.key !== key);
  saveCart();
  updateBadges();
  renderCart();
}

function changeQty(key, delta) {
  const item = cart.find(i => i.key === key);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
  updateBadges();
  renderCart();
}

function renderCart() {
  const container = $('#cartItems');
  const footer = $('#cartFooter');
  const empty = $('#cartEmpty');

  if (cart.length === 0) {
    empty.style.display = 'flex';
    footer.style.display = 'none';
    return;
  }

  empty.style.display = 'none';
  footer.style.display = 'block';

  const itemsHTML = cart.map(item => {
    const p = PRODUCTS.find(pr => pr.id === item.id);
    if (!p) return '';
    return `
      <div class="cart-item" data-key="${item.key}">
        <img src="${p.img}" alt="${p.title}" class="cart-item-img" />
        <div class="cart-item-info">
          <div class="cart-item-brand">${p.brand}</div>
          <div class="cart-item-title">${p.title}</div>
          ${item.size && item.size !== 'default' ? `<div style="font-size:.75rem;color:var(--gray-400)">Size: ${item.size}</div>` : ''}
          <div class="cart-item-price">${formatPrice(p.price * item.qty)}</div>
          <div class="cart-item-actions">
            <button class="qty-btn" onclick="changeQty('${item.key}', -1)">−</button>
            <span class="qty-val">${item.qty}</span>
            <button class="qty-btn" onclick="changeQty('${item.key}', 1)">+</button>
            <button class="cart-item-remove" onclick="removeFromCart('${item.key}')"><i class="fa fa-trash-alt"></i> Remove</button>
          </div>
        </div>
      </div>`;
  }).join('');

  // Replace only item HTML, keep empty div
  container.innerHTML = `<div id="cartEmpty" style="display:none"></div>` + itemsHTML;

  const total = cart.reduce((sum, item) => {
    const p = PRODUCTS.find(pr => pr.id === item.id);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);
  $('#cartTotal').textContent = formatPrice(total);
}

function initCart() {
  const drawer = $('#cartDrawer');
  const overlay = $('#cartOverlay');

  $('#cartBtn').addEventListener('click', () => { drawer.classList.add('open'); overlay.classList.add('open'); });
  $('#cartClose').addEventListener('click', closeCart);
  overlay.addEventListener('click', closeCart);
  document.getElementById('cartShopNow')?.addEventListener('click', closeCart);
}

function closeCart() {
  $('#cartDrawer').classList.remove('open');
  $('#cartOverlay').classList.remove('open');
}

// ─── PRODUCT MODAL ──────────────────────────
function openModal(id) {
  const p = PRODUCTS.find(pr => pr.id === id);
  if (!p) return;
  const wishlisted = wishlist.includes(id);
  const disc = calcDiscount(p.price, p.original);
  let selectedSize = p.sizes[0];
  let qty = 1;

  $('#modalBody').innerHTML = `
    <div class="modal-img-wrap">
      <img src="${p.img}" alt="${p.title}" />
    </div>
    <div class="modal-details">
      <div class="modal-brand">${p.brand}</div>
      <h2 class="modal-title">${p.title}</h2>
      <p class="modal-desc">${p.desc}</p>
      <div class="modal-pricing">
        <span class="modal-price">${formatPrice(p.price)}</span>
        <span class="modal-original">${formatPrice(p.original)}</span>
        <span class="modal-discount">${disc}% off</span>
      </div>
      <div class="modal-section-label">Select Size</div>
      <div class="sizes-row">
        ${p.sizes.map((s, i) => `<button class="size-btn ${i === 0 ? 'selected' : ''}" data-size="${s}">${s}</button>`).join('')}
      </div>
      <div class="modal-section-label">Quantity</div>
      <div class="qty-row">
        <div class="qty-ctrl">
          <button id="modalQtyMinus">−</button>
          <span id="modalQtyVal">1</span>
          <button id="modalQtyPlus">+</button>
        </div>
      </div>
      <div class="modal-actions">
        <button class="btn-primary modal-add-cart" id="modalAddCart"><i class="fa fa-shopping-bag"></i> Add to Bag</button>
        <button class="btn-primary modal-wishlist" id="modalWishlist">
          <i class="${wishlisted ? 'fas' : 'far'} fa-heart"></i> ${wishlisted ? 'Wishlisted' : 'Wishlist'}
        </button>
      </div>
    </div>`;

  // Size selection
  $$('.size-btn', $('#modalBody')).forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.size-btn', $('#modalBody')).forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedSize = btn.dataset.size;
    });
  });

  // Quantity
  $('#modalQtyMinus').addEventListener('click', () => {
    qty = Math.max(1, qty - 1);
    $('#modalQtyVal').textContent = qty;
  });
  $('#modalQtyPlus').addEventListener('click', () => {
    qty++;
    $('#modalQtyVal').textContent = qty;
  });

  // Add to cart
  $('#modalAddCart').addEventListener('click', () => {
    for (let i = 0; i < qty; i++) addToCart(p.id, selectedSize);
    closeModal();
  });

  // Wishlist
  $('#modalWishlist').addEventListener('click', () => {
    toggleWishlist(p.id);
    const isW = wishlist.includes(p.id);
    $('#modalWishlist').innerHTML = `<i class="${isW ? 'fas' : 'far'} fa-heart"></i> ${isW ? 'Wishlisted' : 'Wishlist'}`;
  });

  $('#modalOverlay').classList.add('open');
  $('#productModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  $('#modalOverlay').classList.remove('open');
  $('#productModal').classList.remove('open');
  document.body.style.overflow = '';
}

function initModal() {
  $('#modalClose').addEventListener('click', closeModal);
  $('#modalOverlay').addEventListener('click', closeModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeModal(); closeCart(); } });
}

// ─── SEARCH ─────────────────────────────────
function initSearch() {
  const input = $('#searchInput');
  const results = $('#searchResults');
  const clear = $('#searchClear');

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    clear.classList.toggle('visible', q.length > 0);
    if (!q) { results.classList.remove('active'); return; }

    const matches = PRODUCTS.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );

    if (matches.length === 0) {
      results.innerHTML = `<div class="sr-empty">No results found for "<strong>${q}</strong>"</div>`;
    } else {
      results.innerHTML = `<div class="sr-grid">${matches.map(p => `
        <div class="sr-card" data-id="${p.id}">
          <img src="${p.img}" alt="${p.title}" />
          <div class="sr-card-info">
            <strong>${p.brand} – ${p.title}</strong>
            <span>${formatPrice(p.price)}</span>
          </div>
        </div>`).join('')}</div>`;

      $$('.sr-card', results).forEach(card => {
        card.addEventListener('click', () => {
          openModal(+card.dataset.id);
          results.classList.remove('active');
          input.value = '';
          clear.classList.remove('visible');
        });
      });
    }
    results.classList.add('active');
  });

  clear.addEventListener('click', () => {
    input.value = '';
    results.classList.remove('active');
    clear.classList.remove('visible');
    input.focus();
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('.search-wrap') && !e.target.closest('.search-results')) {
      results.classList.remove('active');
    }
  });
}

// ─── MOBILE NAV ─────────────────────────────
function initMobileNav() {
  const hamburger = $('#hamburger');
  const nav = $('#mainNav');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
  });

  // Toggle mega menus on mobile
  $$('.has-mega .nav-link').forEach(link => {
    link.addEventListener('click', e => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        link.closest('.nav-item').classList.toggle('mega-open');
      }
    });
  });

  // Close nav on resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      hamburger.classList.remove('open');
      nav.classList.remove('open');
    }
  });
}

// ─── NEWSLETTER ─────────────────────────────
function initNewsletter() {
  $('#nlSubmit').addEventListener('click', () => {
    const email = $('#nlEmail').value.trim();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address.');
      return;
    }
    showToast('🎉 You\'re subscribed! Welcome to the club.');
    $('#nlEmail').value = '';
  });
}

// ─── HEADER SCROLL ──────────────────────────
function initHeaderScroll() {
  const header = $('#header');
  window.addEventListener('scroll', () => {
    header.style.boxShadow = window.scrollY > 10
      ? '0 2px 16px rgba(0,0,0,.1)'
      : '0 1px 0 var(--gray-200)';
  }, { passive: true });
}

// ─── SMOOTH ANCHOR ──────────────────────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ─── INIT ───────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  initCarousel();
  initFilters();
  initCart();
  initModal();
  initSearch();
  initMobileNav();
  initNewsletter();
  initHeaderScroll();
  initSmoothScroll();
  renderCart();
  updateBadges();

  // Cart shop now button (re-bind after renderCart)
  document.addEventListener('click', e => {
    if (e.target.id === 'cartShopNow') closeCart();
  });
});
