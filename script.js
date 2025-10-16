/* JS */
// بيانات الخدمات ( export=view)
const servicesData = {
  medical: [
    {
      title: "🎨 هوية بصرية طبية",
      desc: "شعار وتصميم يعكس ثقة مرضاك ومصداقية عيادتك",
      img: "https://drive.google.com/uc?export=view&id=1NdwjM-X7xL-VjNSsfTzVPwJ0zYvQoSGQ"
    },
    {
      title: "🖨️ كروت وبروشورات طبية",
      desc: "كروت أعمال وبروشورات توعوية بجودة عالية",
      img: "https://drive.google.com/uc?export=view&id=1cU3w5NuKX0ePmKhYSGGgso0-Sy7JWN1z"
    },
    {
      title: "📱 إدارة السوشيال ميديا",
      desc: "حملات ومحتوى طبي يبني ثقة ويجذب مرضى جدد",
      img: "https://drive.google.com/uc?export=view&id=1RG4cvVHBm_KDQUGoGdGwAWoLtDJCLlr6"
    },
    {
      title: "🎬 فيديوهات توعوية",
      desc: "محتوى فيديو قصير يثقف جمهورك ويزيد التفاعل",
      img: "https://drive.google.com/uc?export=view&id=1JD73CfikixWtwQfeiw527pC8FZ73Q2Cx"
    },
    {
      title: "🪧 يافطات وبانرات",
      desc: "تصميم رول أب وبنرات يعزز حضورك المحلي",
      img: "https://drive.google.com/uc?export=view&id=1abDRFlgiEeSGkiLxCPpyZwhE7AOoZSV1"
    },
    {
      title: "📲 كود QR طبي",
      desc: "كود QR لحجز المواعيد ومشاركة بيانات العيادة بسهولة",
      img: "https://drive.google.com/uc?export=view&id=1F-eBSjUngZeWFA7GgAMBWtMqWNdYTH23"
    }
  ],
  commercial: [
    {
      title: "🎨 لوجو وهوية بصرية مميزة",
      desc: "هوية كاملة تميّز علامتك التجارية",
      img: "https://drive.google.com/uc?export=view&id=1NdwjM-X7xL-VjNSsfTzVPwJ0zYvQoSGQ"
    },
    {
      title: "📲 منيو إلكتروني QR Code",
      desc: "منيو عصري يسهل الطلب على عملائك",
      img: "https://drive.google.com/uc?export=view&id=1t7RTZNSe-b6yG-L6_C9MiRWNj1qhPhfC"
    },
    {
      title: "🖨️ مطبوعات المطاعم والمحلات",
      desc: "قوائم، فلايرات، مواد مطبوعة بجودة عالية",
      img: "https://drive.google.com/uc?export=view&id=16_MKJohsvAapM8FRhskisFaKa5soIZ_7"
    },
    {
      title: "🛍️ استيكر وشنط مطبوعة",
      desc: "منتجات مطبوعة ترفع قيمة البراند",
      img: "https://drive.google.com/uc?export=view&id=1RGAaCALlLY77pqb79NwTvmiELvYab83W"
    },
    {
      title: "🪧 رول أب ويافطات إعلانية",
      desc: "لافتات جذابة للمتاجر والمعارض",
      img: "https://drive.google.com/uc?export=view&id=1EFhqpwZ1ffwfYhVCR9rhJ8TDCkPUGQXW"
    },
    {
      title: "📱 إدارة السوشيال ميديا",
      desc: "محتوى تسويقي يعزز مبيعاتك",
      img: "https://drive.google.com/uc?export=view&id=1V_6h3FHhuGv-AK2GRpDIrjJ-j5DrGAjX"
    }
  ],
  educational: [
    {
      title: "🎨 هوية بصرية تعليمية",
      desc: "هوية تعكس تميز مؤسستك التعليمية",
      img: "https://drive.google.com/uc?export=view&id=1NdwjM-X7xL-VjNSsfTzVPwJ0zYvQoSGQ"
    },
    {
      title: "📚 كتابة مذكرات تعليمية",
      desc: "مذكرات رياضيات وكيمياء مبسطة وسهلة الفهم",
      img: "https://drive.google.com/uc?export=view&id=1mIrjGbtWDguLvRjvz5tFIniRbiJX3j8v"
    },
    {
      title: "🖨️ طباعة مذكرات",
      desc: "طباعة عالية الجودة بأسعار مناسبة للمدارس",
      img: "https://drive.google.com/uc?export=view&id=1myqFWWcxpSyXUD5hDciRrvel9IUcyEGQ"
    },
    {
      title: "💻 تحويل رقمي للنصوص",
      desc: "تحويل الكتابة اليدوية إلى Word أو PDF بدقة",
      img: "https://drive.google.com/uc?export=view&id=1dNAajNN-fc2PREobOAN7efkarccV8xZL"
    },
    {
      title: "❓ بنك أسئلة وإجابات",
      desc: "بنك أسئلة مع إجابات نموذجية لجميع المواد",
      img: "https://drive.google.com/uc?export=view&id=1fYgQGgSBWWyJTxkSf9ePsPEj0g6lMWV0"
    },
    {
      title: "📱 إدارة السوشيال ميديا",
      desc: "محتوى تعليمي جذاب لطلاب وأولياء الأمور",
      img: "https://drive.google.com/uc?export=view&id=12YSFnCEJioIXQZAw8A4zisaxYBKnR1bG"
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
      <div class="img-wrap"><img src="${item.img}" alt="${item.title}" loading="lazy" onerror="this.closest('.img-wrap').innerHTML = '<div style=\"padding:24px;color:#bdbdd0\">صورة غير متاحة</div>'"></div>
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
      <a class="cta" href="https://wa.me/201006404614?text=${encodeURIComponent(item.title)}" target="_blank" rel="noopener">اطلب استشارة عبر واتساب</a>
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
    // scroll a bit so section visible in editors that crop view
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// init
renderCategory('medical');
