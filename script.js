/* JS */
const servicesData = {
  medical: [
    {
      title: "🎨 هوية بصرية طبية",
      desc: "شعار وتصميم يعكس ثقة مرضاك ومصداقية عيادتك",
      img: "https://raw.githubusercontent.com/ShamyMedia/Shamy-Menu/main/images/medical%20brand%20identity%201200w%20x%20800h.jpg"
    },
    {
      title: "🖨️ كروت وبروشورات طبية",
      desc: "كروت أعمال وبروشورات توعوية بجودة عالية",
      img: "https://raw.githubusercontent.com/ShamyMedia/Shamy-Menu/main/images/medical%20prints%201200w%20x%20800h.jpg"
    },
    {
      title: "📱 إدارة السوشيال ميديا",
      desc: "حملات ومحتوى طبي يبني ثقة ويجذب مرضى جدد",
      img: "https://raw.githubusercontent.com/ShamyMedia/Shamy-Menu/main/images/medical%20social%20media%201200w%20x%20800h.jpg"
    },
    {
      title: "🎬 فيديوهات توعوية",
      desc: "محتوى فيديو قصير يثقف جمهورك ويزيد التفاعل",
      img: "https://raw.githubusercontent.com/ShamyMedia/Shamy-Menu/main/images/medical%20videos%201200w%20x%20800h.jpg"
    },
    {
      title: "🪧 يافطات وبانرات",
      desc: "تصميم رول أب وبنرات يعزز حضورك المحلي",
      img: "https://raw.githubusercontent.com/ShamyMedia/Shamy-Menu/main/images/medical%20banner%201200w%20x%20800h.jpg"
    },
    {
      title: "📲 كود QR طبي",
      desc: "كود QR لحجز المواعيد ومشاركة بيانات العيادة بسهولة",
      img: "https://raw.githubusercontent.com/ShamyMedia/Shamy-Menu/main/images/medical%20qr%20code%201200w%20x%20800h.jpg"
    }
  ],
  commercial: [
    {
      title: "🎨 لوجو وهوية بصرية مميزة",
      desc: "هوية كاملة تميّز علامتك التجارية",
      img: "https://raw.githubusercontent.com/ShamyMedia/Shamy-Menu/main/images/commerial%20brand%20identity%201200w%20x%20800h.jpg"
    },
    {
      title: "📲 منيو إلكتروني QR Code",
      desc: "منيو عصري يسهل الطلب على عملائك",
      img: "https://raw.githubusercontent.com/ShamyMedia/Shamy-Menu/main/images/commerial%20qr%20code%201200w%20x%20800h.jpg"
    },
    {
      title: "🖨️ مطبوعات المطاعم والمحلات",
      desc: "قوائم، فلايرات، مواد مطبوعة بجودة عالية",
      img: "https://raw.githubusercontent.com/ShamyMedia/Shamy-Menu/main/images/commerial%20prints%201200w%20x%20800h.jpg"
    },
    {
      title: "🛍️ استيكر وشنط مطبوعة",
      desc: "منتجات مطبوعة ترفع قيمة البراند",
      img: "https://raw.githubusercontent.com/ShamyMedia/Shamy-Menu/main/images/commerial%20sticker%201200w%20x%20800h.jpg"
    },
    {
      title: "🪧 رول أب ويافطات إعلانية",
      desc: "لافتات جذابة للمتاجر والمعارض",
      img: "https://raw.githubusercontent.com/ShamyMedia/Shamy-Menu/main/images/commerial%20banners%201200w%20x%20800h.jpg"
    },
    {
      title: "📱 إدارة السوشيال ميديا",
      desc: "محتوى تسويقي يعزز مبيعاتك",
      img: "https://raw.githubusercontent.com/ShamyMedia/Shamy-Menu/main/images/commerial%20social%20media%201200w%20x%20800h.jpg"
    }
  ],
  educational: [
    {
      title: "🎨 هوية بصرية تعليمية",
      desc: "هوية تعكس تميز مؤسستك التعليمية",
      img: "https://raw.githubusercontent.com/ShamyMedia/Shamy-Menu/main/images/education%20identity%201200w%20x%20800h.jpg"
    },
    {
      title: "📚 كتابة مذكرات تعليمية",
      desc: "مذكرات رياضيات وكيمياء مبسطة وسهلة الفهم",
      img: "https://raw.githubusercontent.com/ShamyMedia/Shamy-Menu/main/images/education%20write%20sheets.jpg"
    },
    {
      title: "🖨️ طباعة مذكرات",
      desc: "طباعة عالية الجودة بأسعار مناسبة للمدارس",
      img: "https://raw.githubusercontent.com/ShamyMedia/Shamy-Menu/main/images/education%20print%201200w%20x%20800h.jpg"
    },
    {
      title: "💻 تحويل رقمي للنصوص",
      desc: "تحويل الكتابة اليدوية إلى Word أو PDF بدقة",
      img: "https://raw.githubusercontent.com/ShamyMedia/Shamy-Menu/main/images/education%20handwrite%201200w%20x%20800h.jpg"
    },
    {
      title: "❓ بنك أسئلة وإجابات",
      desc: "بنك أسئلة مع إجابات نموذجية لجميع المواد",
      img: "https://raw.githubusercontent.com/ShamyMedia/Shamy-Menu/main/images/education%20exams%201200w%20x%20800h.jpg"
    },
    {
      title: "📱 إدارة السوشيال ميديا",
      desc: "محتوى تعليمي جذاب لطلاب وأولياء الأمور",
      img: "https://raw.githubusercontent.com/ShamyMedia/Shamy-Menu/main/images/education%20social%20media%201200w%20x%20800h.jpg"
    }
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
