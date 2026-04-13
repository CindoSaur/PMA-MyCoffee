let products = [
  {
    id: 1,
    name: "Sunrise Blend",
    desc: "Orange, carrot & ginger cold-press. A vibrant morning kick packed with vitamin C and anti-inflammatory ginger. The perfect way to start your day with energy and clarity.",
    price: 6.5,
    img: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=600&q=80",
    tags: ["juice", "vitamin-c", "ginger"],
    cat: "juice",
    feat: false,
  },
  {
    id: 2,
    name: "Green Detox",
    desc: "Spinach, cucumber, apple & lemon. Our bestselling cleanse blend — light, refreshing and deeply nourishing. Zero sugar added. Loved by over 3,000 customers daily.",
    price: 7.0,
    img: "https://i.pinimg.com/736x/dc/67/4d/dc674d79ea8be1c0eac3e26d036badc9.jpg",
    tags: ["detox", "no sugar", "bestseller"],
    cat: "detox",
    feat: true,
  },
  {
    id: 3,
    name: "Berry Boost",
    desc: "Strawberry, blueberry & chia. Antioxidant-rich and naturally sweet — bursting with flavour. Great as a post-workout recovery drink.",
    price: 6.5,
    img: "https://i.pinimg.com/736x/57/85/62/5785628a0589fc5d4642191eabfa1897.jpg",
    tags: ["smoothie", "antioxidant", "chia"],
    cat: "smoothie",
    feat: false,
  },
  {
    id: 4,
    name: "Calm Tea",
    desc: "Chamomile, lavender & raw honey. Wind down with this soothing herbal blend, served chilled over ice. Perfect for evenings or any time you need to decompress.",
    price: 5.0,
    img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80",
    tags: ["tea", "caffeine-free", "calming"],
    cat: "tea",
    feat: false,
  },
  {
    id: 5,
    name: "Mango Turmeric",
    desc: "Mango, turmeric, black pepper & coconut water. Anti-inflammatory powerhouse with a tropical twist. The black pepper activates curcumin for maximum benefit.",
    price: 7.5,
    img: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&q=80",
    tags: ["juice", "anti-inflammatory", "tropical"],
    cat: "juice",
    feat: false,
  },
  {
    id: 6,
    name: "Pineapple Mint",
    desc: "Pineapple, fresh mint & coconut water. Refreshing, digestive-friendly and perfect for hot afternoons. Naturally high in bromelain for gut health.",
    price: 6.0,
    img: "https://i.pinimg.com/736x/c3/6d/c6/c36dc6f1ab564db5e718d64c9d339134.jpg",
    tags: ["juice", "digestive", "refreshing"],
    cat: "juice",
    feat: false,
  },
  {
    id: 7,
    name: "Cacao Almond",
    desc: "Raw cacao, almond milk, banana & dates. A rich, satisfying smoothie that tastes like dessert but fuels like a meal. High in magnesium and natural energy.",
    price: 8.0,
    img: "https://i.pinimg.com/736x/63/6c/07/636c07b90ea93363bfe8fb948a99e55e.jpg",
    tags: ["smoothie", "protein", "cacao"],
    cat: "smoothie",
    feat: false,
  },
  {
    id: 8,
    name: "Lemongrass Ginger",
    desc: "Lemongrass, ginger, honey & lime. A warming herbal brew served over ice — cleansing and deeply aromatic. Excellent for digestion and immunity support.",
    price: 5.5,
    img: "https://i.pinimg.com/736x/0f/a8/1d/0fa81d87fa393328eb883a8aea6e17a6.jpg",
    tags: ["tea", "warming", "aromatic"],
    cat: "tea",
    feat: false,
  },
  {
    id: 9,
    name: "Watermelon Lime",
    desc: "Fresh watermelon, lime juice & sea salt. Hydration in a bottle — cool, crisp and naturally sweet. Your go-to summer refresher packed with electrolytes.",
    price: 5.5,
    img: "https://i.pinimg.com/736x/d2/7e/c8/d27ec878f2929eb474a3f588481c5cdf.jpg",
    tags: ["juice", "hydrating", "summer"],
    cat: "juice",
    feat: false,
  },
  {
    id: 10,
    name: "Avocado Banana",
    desc: "Creamy avocado, banana, oat milk & honey. A filling, nutrient-dense smoothie with healthy fats and slow-release carbs. Perfect meal replacement or workout fuel.",
    price: 8.5,
    img: "https://i.pinimg.com/736x/cd/86/90/cd8690dd32dba2382e46fba715dfb62d.jpg",
    tags: ["smoothie", "healthy fats", "filling"],
    cat: "smoothie",
    feat: false,
  },
  {
    id: 11,
    name: "Hibiscus Cooler",
    desc: "Hibiscus flowers, rose water & cardamom served chilled. A floral, tangy brew that's gorgeous and deeply hydrating. Rich in antioxidants and vitamin C.",
    price: 5.0,
    img: "https://i.pinimg.com/1200x/0d/49/3c/0d493cb062f6448f98e014de1eeccbd8.jpg",
    tags: ["tea", "floral", "vitamin-c"],
    cat: "tea",
    feat: false,
  },
  {
    id: 12,
    name: "Celery Citrus",
    desc: "Celery, green apple, lemon & ginger. The viral cleanse blend with real results — reduces bloating, supports gut health and boosts energy levels. 100% raw pressed.",
    price: 7.0,
    img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&q=80",
    tags: ["detox", "celery", "gut health"],
    cat: "detox",
    feat: false,
  },
  {
    id: 13,
    name: "Dragon Fruit Glow",
    desc: "Dragon fruit, coconut water & lime. A stunning pink blend that's as beautiful as it is nutritious. Rich in iron, magnesium and skin-loving antioxidants.",
    price: 8.0,
    img: "https://i.pinimg.com/736x/b5/bc/fc/b5bcfc58aaa8da3d434ef6b44e7173b2.jpg",
    tags: ["juice", "superfood", "glow"],
    cat: "juice",
    feat: false,
  },
  {
    id: 14,
    name: "Peanut Butter Oat",
    desc: "Natural peanut butter, oats, banana & almond milk. The ultimate gym-friendly smoothie — protein-rich, slow digesting and insanely delicious. 22g protein per serve.",
    price: 9.0,
    img: "https://i.pinimg.com/736x/ae/7f/1a/ae7f1a0cd52c4d9849a36902ae35ac8b.jpg",
    tags: ["smoothie", "high protein", "gym"],
    cat: "smoothie",
    feat: false,
  },
  {
    id: 15,
    name: "Beet Warrior",
    desc: "Beetroot, apple, carrot & ginger. Known to boost athletic stamina — our most popular pre-workout drink. Natural nitrates improve oxygen flow to muscles.",
    price: 7.5,
    img: "https://i.pinimg.com/1200x/34/36/80/343680a3df644ec646cad537a6424eee.jpg",
    tags: ["juice", "pre-workout", "beet"],
    cat: "juice",
    feat: false,
  },
  {
    id: 16,
    name: "Jasmine Green",
    desc: "Cold-brewed jasmine green tea with a hint of lychee. Delicate, fragrant and perfectly balanced — not too sweet, not too bitter. Naturally caffeinated.",
    price: 5.5,
    img: "https://i.pinimg.com/736x/83/bf/b5/83bfb5668177fbc7e2660a08c80a25ee.jpg",
    tags: ["tea", "jasmine", "lychee"],
    cat: "tea",
    feat: false,
  },
  {
    id: 17,
    name: "Triple Citrus",
    desc: "Orange, grapefruit & blood orange pressed together. A zesty explosion of vitamin C — immune-boosting and bright. The best all-rounder in our entire menu.",
    price: 6.5,
    img: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&q=80",
    tags: ["juice", "citrus", "immune"],
    cat: "juice",
    feat: false,
  },
  {
    id: 18,
    name: "Coconut Matcha",
    desc: "Ceremonial grade matcha, coconut milk & a touch of vanilla. A creamy, earthy latte served cold — your coffee alternative that supports focus and calm together.",
    price: 8.5,
    img: "https://i.pinimg.com/736x/ad/3f/41/ad3f4106c41ab654cd55f01eb7b28c54.jpg",
    tags: ["smoothie", "matcha", "focus"],
    cat: "smoothie",
    feat: false,
  },
  {
    id: 19,
    name: "Liver Cleanse",
    desc: "Dandelion root, burdock, apple & lemon. Our most powerful detox blend — formulated with traditional herbal medicine principles. Feel lighter within 48 hours.",
    price: 7.5,
    img: "https://i.pinimg.com/1200x/56/9f/a0/569fa0f6be45d9d9022c2ceb54c72800.jpg",
    tags: ["detox", "liver", "herbal"],
    cat: "detox",
    feat: false,
  },
  {
    id: 20,
    name: "Passion Ginger",
    desc: "Passionfruit, pineapple & fresh ginger cold-pressed. A tropical-tangy combination with a warming ginger finish. Great for immunity and digestive health.",
    price: 7.0,
    img: "https://images.unsplash.com/photo-1546173159-315724a31696?w=600&q=80",
    tags: ["juice", "tropical", "ginger"],
    cat: "juice",
    feat: false,
  },
  {
    id: 21,
    name: "Mint Chlorophyll",
    desc: "Liquid chlorophyll, cucumber, mint & lemon. The ultimate internal cleanser — alkalising, deodorising and deeply detoxifying. Clear skin starts from within.",
    price: 8.0,
    img: "https://i.pinimg.com/736x/04/aa/c2/04aac279e5db0552667516a355a62d89.jpg",
    tags: ["detox", "chlorophyll", "skin"],
    cat: "detox",
    feat: false,
  },
  {
    id: 22,
    name: "Mango Lassi",
    desc: "Fresh Mekong mango, yoghurt & cardamom. A creamy South Asian classic, reborn as a cold-pressed wellness drink. Probiotic-rich for gut microbiome support.",
    price: 7.5,
    img: "https://i.pinimg.com/1200x/a7/c3/74/a7c374b66ff0139c459fddf680ef818a.jpg",
    tags: ["smoothie", "probiotic", "mango"],
    cat: "smoothie",
    feat: false,
  },
    {
    id: 22,
    name: "Apple Juice",
    desc: "Fresh apple juice, rich in vitamin C and antioxidants. A refreshing and healthy choice for a quick energy boost.",
    price: 5.5,
    img: "https://i.pinimg.com/1200x/a7/c3/74/a7c374b66ff0139c459fddf680ef818a.jpg",
    tags: ["juice", "vitamin-c", "antioxidants"],
    cat: "juice",
    feat: false,
  },

];

// ── Sync products with admin localStorage ──────────────────────────────────
// If the admin has saved changes via products.html, use those.
// Otherwise seed localStorage with the default list so admin can manage them.
(function syncProducts() {
  const stored = localStorage.getItem('fm_products');
  if (stored) {
    try { products = JSON.parse(stored); } catch(e) {}
  } else {
    localStorage.setItem('fm_products', JSON.stringify(products));
  }
})();

const featData = {
  organic: {
    title: "Organic sourcing",
    img: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80",
    p1: "Every ingredient is sourced from certified organic farms within 50km of Ho Chi Minh City. We visit every farm personally before partnering, and conduct quarterly audits.",
    p2: "Our farmers use zero pesticides and are paid above market rates. We believe extraordinary drinks start with extraordinary growing.",
  },
  coldpress: {
    title: "Cold-pressed process",
    img: "https://images.unsplash.com/photo-1600718374662-0483d2b9da44?w=600&q=80",
    p1: "Cold-pressing uses a hydraulic press rather than spinning blades or heat. This preserves up to 5× more nutrients than centrifugal juicing, which destroys enzymes through oxidation.",
    p2: "No heat means enzymes, vitamins and minerals stay intact. The result is a juice that is genuinely good for you — not just marketed that way.",
  },
  eco: {
    title: "Eco packaging",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    p1: "All our bottles are 100% recyclable glass. Our bottle return program is simple — hand empties to the delivery rider and get 10% off your next order automatically.",
    p2: "Our packaging insulation uses recycled cork and is fully compostable. We are committed to zero-waste operations by 2027.",
  },
};

let cart = {},
  currentCat = "all",
  pmQty = 1,
  pmId = null,
  checkoutStep = 1,
  selectedPay = "card",
  menuPage = 0;
const ITEMS_PER_PAGE = 10;

function showPage(n) {
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));
  document
    .querySelectorAll(".nav-btn")
    .forEach((b) => b.classList.remove("active"));
  document.getElementById("page-" + n).classList.add("active");
  const nb = document.getElementById("nav-" + n);
  if (nb) nb.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (n === "menu") {
    menuPage = 0;
    renderMenuProducts();
  }
}

function pCard(p) {
  return `<div class="pcard${p.feat ? " featured" : ""}" onclick="openPM(${
    p.id
  })">
    <div class="pcard-img-wrap"><img src="${p.img}" alt="${
    p.name
  }" loading="lazy">${
    p.feat
      ? '<div class="pcard-badge"><span class="mi" style="font-size:12px">star</span> Bestseller</div>'
      : ""
  }</div>
    <div class="pcard-body">
      <div class="pcard-name">${p.name}</div>
      <div class="pcard-desc">${p.desc.split(".")[0]}.</div>
      <div class="pcard-footer">
        <div class="pcard-price">$${p.price.toFixed(2)}</div>
        <button class="add-btn" id="qadd-${
          p.id
        }" onclick="event.stopPropagation();quickAdd(${
    p.id
  })"><span class="mi" style="font-size:20px;color:#fff">add</span></button>
      </div>
    </div>
  </div>`;
}

function renderHomeProducts() {
  const el = document.getElementById("home-products");
  if (el) {
    // Show featured first, then others; only in-stock items
    const available = products.filter(p => p.inStock !== false);
    const sorted = [...available.filter(p=>p.feat), ...available.filter(p=>!p.feat)];
    el.innerHTML = sorted.slice(0, 4).map(pCard).join("");
  }
}

function getFilteredProducts() {
  const q = (document.getElementById("search-input") || {}).value || "";
  let list = products.filter(
    (p) => p.inStock !== false && (currentCat === "all" || p.cat === currentCat),
  );
  if (q)
    list = list.filter(
      (p) =>
        p.name.toLowerCase().includes(q.toLowerCase()) ||
        p.desc.toLowerCase().includes(q.toLowerCase()),
    );
  return list;
}

function renderMenuProducts() {
  const el = document.getElementById("menu-products");
  const lmw = document.getElementById("load-more-wrap");
  if (!el) return;
  menuPage = 0;
  const list = getFilteredProducts();
  const toShow = list.slice(0, ITEMS_PER_PAGE);
  el.innerHTML = toShow.length
    ? toShow.map(pCard).join("")
    : '<p style="color:var(--text-light);padding:2rem 0;font-size:14px">No items match your search.</p>';
  if (lmw) {
    const rem = list.length - ITEMS_PER_PAGE;
    if (rem > 0) {
      lmw.style.display = "flex";
      document.getElementById("load-more-count").textContent = Math.min(
        rem,
        ITEMS_PER_PAGE,
      );
    } else lmw.style.display = "none";
  }
}

function loadMoreProducts() {
  menuPage++;
  const el = document.getElementById("menu-products");
  const lmw = document.getElementById("load-more-wrap");
  const list = getFilteredProducts();
  const start = menuPage * ITEMS_PER_PAGE;
  const toShow = list.slice(start, start + ITEMS_PER_PAGE);
  toShow.forEach((p) => {
    const tmp = document.createElement("div");
    tmp.innerHTML = pCard(p);
    const card = tmp.firstElementChild;
    card.style.animation = "pgIn 0.35s ease";
    el.appendChild(card);
  });
  const rem = list.length - (start + ITEMS_PER_PAGE);
  if (rem > 0)
    document.getElementById("load-more-count").textContent = Math.min(
      rem,
      ITEMS_PER_PAGE,
    );
  else if (lmw) lmw.style.display = "none";
}

function setCat(c) {
  currentCat = c;
  renderMenuProducts();
}
function setActiveTab(b) {
  document
    .querySelectorAll(".cat-tab")
    .forEach((t) => t.classList.remove("active"));
  b.classList.add("active");
}

function openPM(id) {
  const p = products.find((x) => x.id === id);
  pmId = id;
  pmQty = 1;
  const img = document.getElementById("pm-img");
  img.style.opacity = "0";
  img.src = p.img;
  img.onload = () => {
    img.style.transition = "opacity 0.4s ease";
    img.style.opacity = "1";
  };
  document.getElementById("pm-name").textContent = p.name;
  document.getElementById("pm-desc").textContent = p.desc;
  document.getElementById("pm-price").textContent = "$" + p.price.toFixed(2);
  document.getElementById("pm-qty").textContent = 1;
  const catMap = {
    juice: "Juice",
    smoothie: "Smoothie",
    tea: "Tea",
    detox: "Detox",
  };
  document.getElementById("pm-cat-chip").textContent = catMap[p.cat] || p.cat;
  document.getElementById("pm-tags").innerHTML = p.tags
    .map((t) => `<span class="modal-tag">${t}</span>`)
    .join("");
  const nutrMap = {
    juice: [
      { icon: "bolt", label: "Energy", val: "High" },
      { icon: "water_drop", label: "Hydration", val: "Excellent" },
      { icon: "science", label: "Vitamins", val: "Rich" },
    ],
    smoothie: [
      { icon: "fitness_center", label: "Protein", val: "Good" },
      { icon: "local_fire_department", label: "Calories", val: "Moderate" },
      { icon: "grain", label: "Fibre", val: "High" },
    ],
    tea: [
      { icon: "self_improvement", label: "Calm", val: "High" },
      { icon: "favorite", label: "Antioxidants", val: "Rich" },
      { icon: "spa", label: "Herbal", val: "Pure" },
    ],
    detox: [
      { icon: "recycling", label: "Cleanse", val: "Powerful" },
      { icon: "eco", label: "Natural", val: "100%" },
      { icon: "verified", label: "No Sugar", val: "Added" },
    ],
  };
  const nutr = nutrMap[p.cat] || nutrMap.juice;
  document.getElementById("pm-nutrition").innerHTML = nutr
    .map(
      (n) =>
        `<div class="pm-nutr-item"><span class="mi" style="font-size:20px;color:var(--green)">${n.icon}</span><div class="pm-nutr-label">${n.label}</div><div class="pm-nutr-val">${n.val}</div></div>`,
    )
    .join("");
  document.getElementById("product-modal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closePM() {
  document.getElementById("product-modal").classList.remove("open");
  document.body.style.overflow = "";
}

function pmQtyChange(d) {
  pmQty = Math.max(1, pmQty + d);
  document.getElementById("pm-qty").textContent = pmQty;
}

document.getElementById("pm-add-btn").onclick = function () {
  if (!pmId) return;
  addToCart(
    products.find((x) => x.id === pmId),
    pmQty,
  );
  closePM();
};

function closePMOnOv(e) {
  if (e.target === document.getElementById("product-modal")) closePM();
}

function quickAdd(id) {
  const p = products.find((x) => x.id === id);
  addToCart(p, 1);
  const b = document.getElementById("qadd-" + id);
  if (b) {
    b.classList.add("added-anim");
    setTimeout(() => b.classList.remove("added-anim"), 400);
  }
}

function addToCart(p, qty) {
  if (cart[p.id]) cart[p.id].qty += qty;
  else cart[p.id] = { product: p, qty };
  updateBadge();
  showToast(qty + "× " + p.name + " added to cart");
  renderCart();
}

function updateBadge() {
  const t = Object.values(cart).reduce((s, i) => s + i.qty, 0);
  const b = document.getElementById("cart-badge");
  b.textContent = t;
  b.classList.add("bump");
  setTimeout(() => b.classList.remove("bump"), 200);
}

function cartTotal() {
  return Object.values(cart).reduce((s, i) => s + i.product.price * i.qty, 0);
}

function renderCart() {
  const body = document.getElementById("cart-body"),
    ft = document.getElementById("cart-ft"),
    items = Object.values(cart);
  if (!items.length) {
    body.innerHTML = `<div class="cart-empty"><div class="cart-empty-ico"><span class="mi" style="font-size:36px;color:var(--green)">shopping_cart</span></div><p>Your cart is empty.<br>Add some items to get started.</p><button class="btn-hero" onclick="closeCart();showPage('menu')"><span class="mi" style="font-size:16px;color:#fff">menu_book</span> Browse menu</button></div>`;
    ft.style.display = "none";
  } else {
    body.innerHTML = items
      .map(
        (i) =>
          `<div class="cart-item"><img class="cart-item-img" src="${
            i.product.img
          }" alt="${
            i.product.name
          }"><div class="cart-item-info"><div class="cart-item-name">${
            i.product.name
          }</div><div class="cart-item-price">$${(
            i.product.price * i.qty
          ).toFixed(
            2,
          )}</div><div class="cart-item-qty"><button class="qty-btn" onclick="cartQty(${
            i.product.id
          },-1)">−</button><span class="qty-num">${
            i.qty
          }</span><button class="qty-btn" onclick="cartQty(${
            i.product.id
          },1)">+</button></div></div><button class="remove-btn" onclick="removeItem(${
            i.product.id
          })"><span class="mi" style="font-size:22px">delete_outline</span></button></div>`,
      )
      .join("");
    document.getElementById("cart-total").textContent =
      "$" + cartTotal().toFixed(2);
    ft.style.display = "block";
  }
}

function cartQty(id, d) {
  if (!cart[id]) return;
  cart[id].qty = Math.max(0, cart[id].qty + d);
  if (cart[id].qty === 0) delete cart[id];
  updateBadge();
  renderCart();
}

function removeItem(id) {
  delete cart[id];
  updateBadge();
  renderCart();
}
function openCart() {
  document.getElementById("cart-overlay").classList.add("open");
  renderCart();
}
function closeCart() {
  document.getElementById("cart-overlay").classList.remove("open");
}
function closeCartOnOverlay(e) {
  if (e.target === document.getElementById("cart-overlay")) closeCart();
}

function openFeatModal(k) {
  const d = featData[k];
  document.getElementById("fm-img").src = d.img;
  document.getElementById("fm-title").textContent = d.title;
  document.getElementById("fm-p1").textContent = d.p1;
  document.getElementById("fm-p2").textContent = d.p2;
  document.getElementById("feat-modal").classList.add("open");
}

function closeFMOnOv(e) {
  if (e.target === document.getElementById("feat-modal"))
    document.getElementById("feat-modal").classList.remove("open");
}

function openCheckout() {
  closeCart();
  checkoutStep = 1;
  selectedPay = "card";
  renderCoStep();
  document.getElementById("checkout-ov").classList.add("open");
}
function closeCheckout() {
  document.getElementById("checkout-ov").classList.remove("open");
}
function closeCOOnOv(e) {
  if (e.target === document.getElementById("checkout-ov")) closeCheckout();
}

function renderCoStep() {
  [1, 2, 3].forEach((i) => {
    const el = document.getElementById("cs-" + i);
    el.classList.remove("active", "done");
    if (i < checkoutStep) el.classList.add("done");
    else if (i === checkoutStep) el.classList.add("active");
  });
  const content = document.getElementById("co-content"),
    nav = document.getElementById("co-nav");
  if (checkoutStep === 1) {
    content.innerHTML = `<div class="co-content"><div class="form-group"><label class="form-label">Full name</label><input class="form-input" type="text" placeholder="Nguyen Van A"></div><div class="form-row"><div class="form-group"><label class="form-label">Phone</label><input class="form-input" type="tel" placeholder="0901 234 567"></div><div class="form-group"><label class="form-label">District</label><select class="form-input"><option>District 1</option><option>District 3</option><option>Bình Thạnh</option><option>Thủ Đức</option></select></div></div><div class="form-group"><label class="form-label">Street address</label><input class="form-input" type="text" placeholder="123 Đường ABC, Phường XYZ"></div><div class="form-group"><label class="form-label">Promo code</label><input class="form-input" type="text" placeholder="e.g. FRESHMARKET"></div></div>`;
    nav.innerHTML = `<span></span><button class="btn-next" onclick="goNext()">Payment <span class="mi" style="font-size:16px;color:#fff">arrow_forward</span></button>`;
  } else if (checkoutStep === 2) {
    content.innerHTML = `<div class="co-content"><p style="font-size:13px;color:var(--text-mid);margin-bottom:1rem">Select your payment method</p><div class="pay-grid"><div class="pay-opt${
      selectedPay === "card" ? " selected" : ""
    }" onclick="setPay('card')"><span class="mi">credit_card</span>Credit Card</div><div class="pay-opt${
      selectedPay === "momo" ? " selected" : ""
    }" onclick="setPay('momo')"><span class="mi">smartphone</span>MoMo</div><div class="pay-opt${
      selectedPay === "cash" ? " selected" : ""
    }" onclick="setPay('cash')"><span class="mi">payments</span>Cash on delivery</div></div>${
      selectedPay === "card"
        ? `<div class="form-group"><label class="form-label">Card number</label><input class="form-input" type="text" placeholder="1234  5678  9012  3456"></div><div class="form-row"><div class="form-group"><label class="form-label">Expiry</label><input class="form-input" type="text" placeholder="MM / YY"></div><div class="form-group"><label class="form-label">Security code</label><input class="form-input" type="text" placeholder="CVV"></div></div>`
        : selectedPay === "momo"
        ? `<div style="background:var(--bg2);border-radius:var(--radius-sm);padding:1.75rem;text-align:center"><span class="mi" style="font-size:40px;display:block;margin-bottom:12px;color:#ae2070">smartphone</span><p style="font-size:13px;color:var(--text-mid)">You will be redirected to MoMo to complete payment securely.</p></div>`
        : `<div style="background:var(--bg2);border-radius:var(--radius-sm);padding:1.75rem;text-align:center"><span class="mi" style="font-size:40px;display:block;margin-bottom:12px;color:var(--green)">payments</span><p style="font-size:13px;color:var(--text-mid)">Pay in cash when your order arrives. Our rider will carry change.</p></div>`
    }</div>`;
    nav.innerHTML = `<button class="btn-back" onclick="goBack()"><span class="mi" style="font-size:15px">arrow_back</span> Back</button><button class="btn-next" onclick="goNext()">Review order <span class="mi" style="font-size:16px;color:#fff">arrow_forward</span></button>`;
  } else if (checkoutStep === 3) {
    const items = Object.values(cart);
    content.innerHTML = `<div class="co-content"><div class="order-sum"><div class="order-sum-title">Order summary</div>${items
      .map(
        (i) =>
          `<div class="order-sum-item"><span>${i.qty}× ${
            i.product.name
          }</span><span>$${(i.product.price * i.qty).toFixed(2)}</span></div>`,
      )
      .join(
        "",
      )}<div class="order-sum-item"><span>Delivery</span><span style="color:var(--green);font-weight:500">Free</span></div><div class="order-sum-total"><span>Total</span><span>$${cartTotal().toFixed(
      2,
    )}</span></div></div><div class="delivery-est"><span class="mi" style="font-size:22px;color:var(--green);flex-shrink:0">schedule</span><span>Estimated delivery: <strong style="color:var(--text)">Today, before 6:00 PM</strong></span></div></div>`;
    nav.innerHTML = `<button class="btn-back" onclick="goBack()"><span class="mi" style="font-size:15px">arrow_back</span> Back</button><button class="btn-next" onclick="placeOrder()" style="background:var(--green-dark)"><span class="mi" style="font-size:16px;color:#fff">check_circle</span> Place Order</button>`;
  }
}

function setPay(t) {
  selectedPay = t;
  renderCoStep();
}
function goNext() {
  checkoutStep = Math.min(3, checkoutStep + 1);
  renderCoStep();
}
function goBack() {
  checkoutStep = Math.max(1, checkoutStep - 1);
  renderCoStep();
}

function placeOrder() {
  const n = "FM-" + Math.floor(Math.random() * 90000 + 10000);
  document.getElementById(
    "co-content",
  ).innerHTML = `<div class="success-screen"><div class="success-icon"><span class="mi" style="font-size:42px;color:var(--green)">check_circle</span></div><h2>Order confirmed!</h2><p>Thank you! We're preparing your fresh items right now and will deliver before 6:00 PM today.</p><div class="order-num">Order number: <strong>${n}</strong></div><button class="btn-hero" style="margin:0 auto" onclick="closeCheckout();cart={};updateBadge();renderCart()"><span class="mi" style="font-size:16px;color:#fff">home</span> Back to home</button></div>`;
  document.getElementById("co-steps").style.display = "none";
  document.getElementById("co-nav").style.display = "none";
}

function subscribeNewsletter() {
  const v = document.getElementById("nl-input").value.trim();
  if (!v || !v.includes("@")) {
    showToast("Please enter a valid email address");
    return;
  }
  document.getElementById("nl-input").value = "";
  showToast("Subscribed! Check your inbox for 15% off.");
}

let toastTmr;
function showToast(msg) {
  const t = document.getElementById("toast");
  document.getElementById("toast-msg").textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTmr);
  toastTmr = setTimeout(() => t.classList.remove("show"), 2800);
}

renderHomeProducts();


// ════════════════════════════════════════════
//  Session — show logged-in user in nav
// ════════════════════════════════════════════

const AUTH_SESSION_KEY = 'fm_session';

function getSession() {
  return JSON.parse(localStorage.getItem(AUTH_SESSION_KEY) || 'null');
}

function logout() {
  localStorage.removeItem(AUTH_SESSION_KEY);
  window.location.reload();
}

// Update the Login button → show name + logout once header is loaded
// Avatar color helper (same as dashboard)
const NAV_AVATAR_COLORS = ['#1d9e75','#ef9f27','#3b82f6','#8b5cf6','#ec4899','#f97316','#14b8a6'];
function navAvatarColor(email) {
  let h = 0;
  for (const c of email) h = (h * 31 + c.charCodeAt(0)) % NAV_AVATAR_COLORS.length;
  return NAV_AVATAR_COLORS[h];
}
function navInitials(name) {
  return name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
}

function applySessionToNav() {
  const session = getSession();

  // ── User dropdown label ──
  const loginLbl = document.getElementById('nav-login-label');
  if (loginLbl) {
    loginLbl.textContent = session ? session.name.split(' ')[0] : 'Login';
  }

  // ── Show correct guest vs logged-in menu ──
  const guestMenu    = document.getElementById('user-menu-guest');
  const loggedinMenu = document.getElementById('user-menu-loggedin');
  if (guestMenu && loggedinMenu) {
    if (session) {
      guestMenu.style.display    = 'none';
      loggedinMenu.style.display = 'flex';

      // Populate user info
      const av = document.getElementById('user-menu-avatar');
      if (av) {
        av.textContent        = navInitials(session.name);
        av.style.background   = navAvatarColor(session.email);
      }
      const nameEl  = document.getElementById('user-menu-name');
      const emailEl = document.getElementById('user-menu-email');
      const badge   = document.getElementById('user-menu-badge');
      if (nameEl)  nameEl.textContent  = session.name;
      if (emailEl) emailEl.textContent = session.email;
      if (badge) {
        badge.textContent  = session.role || 'customer';
        badge.className    = 'user-menu-badge ' + (session.role || 'customer');
      }

      // Show admin shortcut for admin/staff
      const adminLinks = document.getElementById('user-menu-admin-links');
      if (adminLinks && (session.role === 'admin' || session.role === 'staff')) {
        adminLinks.style.display = 'block';
      }
    } else {
      guestMenu.style.display    = 'flex';
      loggedinMenu.style.display = 'none';
    }
  }

  // ── Dashboard dropdown — show for admin / staff ──
  const dashWrap = document.getElementById('nav-dashboard-wrap');
  if (dashWrap && session && (session.role === 'admin' || session.role === 'staff')) {
    dashWrap.style.display = 'block';
  }

  // ── Toggle functions ──
  window.toggleDashMenu = function () {
    const menu    = document.getElementById('dash-menu');
    const chevron = document.getElementById('dash-chevron');
    const uMenu   = document.getElementById('user-menu-guest') || document.getElementById('user-menu-loggedin');
    // Close user menu if open
    const uWrap = document.getElementById('nav-user-wrap');
    if (uWrap) {
      uWrap.querySelectorAll('.nav-dropdown-menu').forEach(m => m.classList.remove('open'));
      const uc = document.getElementById('user-chevron');
      if (uc) uc.style.transform = 'rotate(0deg)';
    }
    if (!menu) return;
    const isOpen = menu.classList.toggle('open');
    if (chevron) chevron.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
  };

  window.toggleUserMenu = function () {
    // Close dash menu if open
    const dashMenu = document.getElementById('dash-menu');
    const dashChev = document.getElementById('dash-chevron');
    if (dashMenu) { dashMenu.classList.remove('open'); }
    if (dashChev) { dashChev.style.transform = 'rotate(0deg)'; }

    const session  = getSession();
    const menuId   = session ? 'user-menu-loggedin' : 'user-menu-guest';
    const menu     = document.getElementById(menuId);
    const chevron  = document.getElementById('user-chevron');
    if (!menu) return;
    const isOpen = menu.classList.toggle('open');
    if (chevron) chevron.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
  };

  window.confirmLogout = function () {
    if (confirm('Sign out of Fresh Market?')) logout();
  };

  // Close both dropdowns when clicking outside
  document.addEventListener('click', function (e) {
    const dashWrap = document.getElementById('nav-dashboard-wrap');
    const userWrap = document.getElementById('nav-user-wrap');

    if (dashWrap && !dashWrap.contains(e.target)) {
      const m = document.getElementById('dash-menu');
      const c = document.getElementById('dash-chevron');
      if (m) m.classList.remove('open');
      if (c) c.style.transform = 'rotate(0deg)';
    }
    if (userWrap && !userWrap.contains(e.target)) {
      userWrap.querySelectorAll('.nav-dropdown-menu').forEach(m => m.classList.remove('open'));
      const c = document.getElementById('user-chevron');
      if (c) c.style.transform = 'rotate(0deg)';
    }
  }, { capture: true });
}
