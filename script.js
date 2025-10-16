/* JS */
const servicesData = {
  // ... (بقية مصفوفة الخدمات لم تتغير - الروابط المباشرة ممتازة)
    // ...
    medical: [
        // ... (البيانات كما هي)
    ],
    commercial: [
        // ... (البيانات كما هي)
    ],
    educational: [
        // ... (البيانات كما هي)
    ]
};

// DOM refs
const grid = document.getElementById('cards-grid');
const tabs = document.querySelectorAll('.tab');

// render function
function renderCategory(cat){
  grid.innerHTML = ''; // clear
  const list = servicesData[cat] || [];
  list.forEach(item => {
    const card = document.createElement('article');
    card.className = 'card';
    // 🛠️ تم تبسيط وتأكيد بناء البطاقة لمنع التكرار والتداخل
    card.innerHTML = `
      <div class="img-wrap">
        <img src="${item.img}" alt="${item.title}" loading="lazy"
          onerror="this.closest('.img-wrap').innerHTML='<div style=\\"padding:24px;color:#bdbdd0\\">صورة غير متاحة</div>'">
      </div>
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
      <a class="cta" href="https://wa.me/201006404614?text=${encodeURIComponent(item.title)}" 
         target="_blank" rel="noopener">اطلب استشارة عبر واتساب</a>
    `;
    grid.appendChild(card);
  });
}

// tabs events
tabs.forEach(t => {
  t.addEventListener('click', (e) => {
    tabs.forEach(x=>x.classList.remove('active'));
    t.classList.add('active');
    const cat = t.dataset.cat || t.getAttribute('data-cat');
    renderCategory(cat);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// init
renderCategory('medical');