// ===== MOBILE MENU TOGGLE =====
const menuToggle = document.getElementById('menuToggle');
const nav = document.querySelector('nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuToggle.textContent = nav.classList.contains('active') ? '✕' : '☰';
  });

  // Tutup menu saat klik link navigasi
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      menuToggle.textContent = '☰';
    });
  });
}

// ===== ACTIVE NAV LINK (highlight halaman aktif) =====
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('nav a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage) {
    link.classList.add('active');
  }
});

// ===== SMOOTH SCROLL (untuk link internal) =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

// ===== ANIMATION ON SCROLL =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Terapkan animasi pada elemen tertentu
document.querySelectorAll('.stat-card, .potensi-card, .berita-card, .fasilitas-card, .mata-pencaharian-card, .komoditas-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// ===== CONTACT FORM HANDLER =====
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Ambil data form
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Validasi sederhana
    if (!data.nama || !data.email || !data.subjek || !data.pesan) {
      alert('Mohon lengkapi semua field!');
      return;
    }
    
    // Simulasi pengiriman
    alert('Terima kasih! Pesan Anda telah kami terima. Kami akan menghubungi Anda segera.');
    contactForm.reset();
  });
}

console.log('Website Desa Semparuk loaded successfully! 🌿');