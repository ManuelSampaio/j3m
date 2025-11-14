/* ========================================
   J3M SOLUTIONS - SCRIPT.JS
   Arquivo JavaScript Principal
   ======================================== */

// Esperar o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // SCROLL SUAVE PARA NAVEGAÇÃO
    // ========================================
    const navLinks = document.querySelectorAll('.nav-links a, .footer-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========================================
    // NAVBAR SCROLL EFFECT
    // ========================================
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Adicionar sombra quando rolar
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 2px 30px rgba(0,0,0,0.2)';
        } else {
            navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        }
        
        lastScroll = currentScroll;
    });

    // ========================================
    // ANIMAÇÃO DE NÚMEROS NAS ESTATÍSTICAS
    // ========================================
    function animateNumbers() {
        const statNumbers = document.querySelectorAll('.stat-number');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    const targetText = target.textContent;
                    const hasPlus = targetText.includes('+');
                    const hasPercent = targetText.includes('%');
                    const number = parseInt(targetText.replace(/\D/g, ''));
                    
                    let current = 0;
                    const increment = number / 50;
                    const duration = 2000;
                    const stepTime = duration / 50;
                    
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= number) {
                            current = number;
                            clearInterval(timer);
                        }
                        
                        let displayValue = Math.floor(current);
                        if (hasPlus) displayValue += '+';
                        if (hasPercent) displayValue += '%';
                        
                        target.textContent = displayValue;
                    }, stepTime);
                    
                    observer.unobserve(target);
                }
            });
        }, { threshold: 0.5 });
        
        statNumbers.forEach(stat => observer.observe(stat));
    }
    
    animateNumbers();

    // ========================================
    // ANIMAÇÃO DE ENTRADA DOS ELEMENTOS
    // ========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Elementos para animar
    const animatedElements = document.querySelectorAll(
        '.service-card, .portfolio-item, .pricing-card, .founder-card'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // ========================================
    // FORMULÁRIO DE CONTACTO
    // ========================================
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obter valores do formulário
            const formData = {
                name: this.elements.name.value,
                email: this.elements.email.value,
                phone: this.elements.phone.value,
                message: this.elements.message.value
            };
            
            // Aqui você pode integrar com um serviço de email
            // Por enquanto, vamos apenas mostrar uma mensagem de sucesso
            
            // Simular envio
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.textContent = 'Enviando...';
            submitButton.disabled = true;
            
            setTimeout(() => {
                // Mostrar mensagem de sucesso
                alert('Mensagem enviada com sucesso! Entraremos em contacto em breve.');
                
                // Resetar formulário
                contactForm.reset();
                
                // Restaurar botão
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                
                // Redirecionar para WhatsApp (opcional)
                const whatsappMessage = encodeURIComponent(
                    `Olá! Meu nome é ${formData.name}. ${formData.message}`
                );
                // window.open(`https://wa.me/244923456789?text=${whatsappMessage}`, '_blank');
                
            }, 1500);
        });
    }

    // ========================================
    // BOTÕES CTA - SCROLL TO CONTACT
    // ========================================
    const ctaButtons = document.querySelectorAll('.btn-primary');
    
    ctaButtons.forEach(button => {
        if (button.getAttribute('href') === '#contact') {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const contactSection = document.querySelector('#contact');
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = contactSection.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            });
        }
    });

    // ========================================
    // ACTIVE LINK NA NAVEGAÇÃO
    // ========================================
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navbarHeight - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.pageYOffset >= sectionTop && 
                window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // ========================================
    // PREVENÇÃO DE FORMULÁRIO VAZIO
    // ========================================
    const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.hasAttribute('required') && !this.value.trim()) {
                this.style.borderColor = '#ff4444';
            } else {
                this.style.borderColor = '#ddd';
            }
        });
        
        input.addEventListener('focus', function() {
            this.style.borderColor = 'var(--accent-blue)';
        });
    });

    // ========================================
    // BOTÃO VOLTAR AO TOPO (Opcional)
    // ========================================
    function createBackToTopButton() {
        const button = document.createElement('button');
        button.innerHTML = '↑';
        button.className = 'back-to-top';
        button.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            background: var(--accent-blue);
            color: white;
            border: none;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            font-size: 24px;
            cursor: pointer;
            opacity: 0;
            transition: opacity 0.3s, transform 0.3s;
            z-index: 999;
            box-shadow: 0 5px 20px rgba(31, 111, 235, 0.4);
        `;
        
        button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        document.body.appendChild(button);
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 500) {
                button.style.opacity = '1';
                button.style.transform = 'scale(1)';
            } else {
                button.style.opacity = '0';
                button.style.transform = 'scale(0.8)';
            }
        });
        
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.1)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
        });
    }
    
    createBackToTopButton();

    // ========================================
    // LOG DE INICIALIZAÇÃO (Opcional)
    // ========================================
    console.log('%c J3M Solutions ', 'background: #0B0F3B; color: #1F6FEB; font-size: 20px; font-weight: bold; padding: 10px;');
    console.log('%c Website carregado com sucesso! ', 'background: #1F6FEB; color: white; font-size: 14px; padding: 5px;');
    
});

// ========================================
// FUNÇÃO PARA INTEGRAR COM EMAILJS (Opcional)
// ========================================
/*
Para usar EmailJS:
1. Crie conta em https://www.emailjs.com
2. Configure seu serviço de email
3. Obtenha suas chaves
4. Descomente e configure o código abaixo
*/

/*
function sendEmail(formData) {
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message
    })
    .then(function(response) {
        console.log('Email enviado com sucesso!', response);
        alert('Mensagem enviada com sucesso!');
    }, function(error) {
        console.log('Erro ao enviar email:', error);
        alert('Erro ao enviar mensagem. Tente novamente.');
    });
}
*/