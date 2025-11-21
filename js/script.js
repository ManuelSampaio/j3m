// ========================================
// NAVBAR SCROLL EFFECT
// ========================================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ========================================
// MOBILE MENU TOGGLE (HAMBURGUER)
// ========================================
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', function() {
    // Toggle da classe 'active' no menu
    navLinks.classList.toggle('active');
    
    // Animação do ícone hamburguer
    menuToggle.classList.toggle('active');
});

// Fechar menu ao clicar em um link
const menuItems = document.querySelectorAll('.nav-links a');
menuItems.forEach(item => {
    item.addEventListener('click', function() {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// Fechar menu ao clicar fora
document.addEventListener('click', function(event) {
    const isClickInside = navbar.contains(event.target);
    if (!isClickInside && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});

// ========================================
// SMOOTH SCROLL
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = navbar.offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// ANIMATE NUMBERS (STATS)
// ========================================
const animateNumber = (element) => {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 16);
};

const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.getAttribute('data-target')) {
            animateNumber(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.stat-number[data-target]').forEach(stat => {
    observer.observe(stat);
});

// ========================================
// CONTACT FORM
// ========================================
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    
    btn.textContent = 'Enviando...';
    btn.disabled = true;
    
    // Simula envio (substitua por integração real)
    setTimeout(() => {
        alert('Mensagem enviada com sucesso! Entraremos em contacto em breve.');
        this.reset();
        btn.textContent = originalText;
        btn.disabled = false;
    }, 1500);
});

// ========================================
// BACK TO TOP BUTTON
// ========================================
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========================================
// INTERSECTION OBSERVER (ANIMAÇÕES DE ENTRADA)
// ========================================
const fadeElements = document.querySelectorAll('.service-card, .portfolio-card, .pricing-card, .founder-card');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, 100);
            
            fadeObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

fadeElements.forEach(el => fadeObserver.observe(el));
