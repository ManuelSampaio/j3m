# J3M Solutions - Landing Page

![J3M Solutions](https://img.shields.io/badge/J3M-Solutions-blue?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## Sobre o Projeto

Landing page profissional desenvolvida para a **J3M Solutions**, uma agência de desenvolvimento digital fundada por quatro jovens angolanos: **Manuel Sampaio, José Correia, José Ulo e Jair Fernandes**.

O projeto foi criado com foco em **credibilidade, profissionalismo e conversão**, utilizando as melhores práticas de design e desenvolvimento web.

---

## Características

- ✅ **Design Responsivo** - Funciona perfeitamente em todos os dispositivos
- ✅ **Animações Suaves** - Experiência de usuário premium
- ✅ **SEO Otimizado** - Preparado para motores de busca
- ✅ **Performance** - Carregamento rápido e eficiente
- ✅ **Formulário de Contacto** - Sistema funcional de contacto
- ✅ **Scroll Suave** - Navegação fluida entre secções
- ✅ **Código Limpo** - Fácil de manter e personalizar

---

## Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização moderna (Grid, Flexbox, Animações)
- **JavaScript** - Interatividade e funcionalidades
- **Google Fonts** - Tipografia profissional (Poppins & Inter)

---

## Estrutura do Projeto

```
j3m-solutions/
│
├── index.html              # Página principal
├── css/
│   └── style.css          # Estilos CSS
├── js/
│   └── script.js          # JavaScript
├── images/                 # Pasta para imagens (criar)
│   ├── logo.png
│   ├── founders/
│   └── portfolio/
└── README.md              # Este arquivo
```

---

## Como Usar

### **Opção 1: Abrir Localmente**

1. Baixe todos os arquivos
2. Mantenha a estrutura de pastas
3. Abra o arquivo `index.html` no navegador

### **Opção 2: Deploy Online (GitHub Pages)**

1. Crie uma conta no [GitHub](https://github.com)
2. Crie um novo repositório
3. Faça upload dos arquivos
4. Ative o GitHub Pages nas configurações
5. Acesse: `seuusername.github.io/j3m-solutions`

### **Opção 3: Deploy Rápido (Netlify)**

1. Acesse [Netlify](https://netlify.com)
2. Arraste a pasta do projeto
3. Pronto! Site online em segundos

---

## Paleta de Cores

```css
--primary-blue: #0B0F3B    /* Azul principal - confiança */
--accent-blue: #1F6FEB     /* Azul vibrante - inovação */
--light-gray: #F2F2F2      /* Cinza claro - neutralidade */
--white: #FFFFFF           /* Branco - clareza */
--gold: #CDAA7D            /* Dourado - prestígio */
```

---

## Secções da Landing Page

1. **Hero** - Apresentação impactante
2. **Sobre Nós** - História e fundadores
3. **Serviços** - O que oferecemos
4. **Estatísticas** - Números que impressionam
5. **Portfolio** - Projetos realizados
6. **Preços** - Planos e valores
7. **Contacto** - Formulário e informações
8. **Footer** - Links e informações finais

---

## Personalizações Necessárias

### **1. Informações de Contacto**

No arquivo `index.html`, linha ~280, altere:

```html
<!-- WhatsApp -->
<a href="https://wa.me/244SEUNUMERO">+244 XXX XXX XXX</a>

<!-- Email -->
<a href="mailto:seuemail@j3msolutions.com">seuemail@j3msolutions.com</a>
```

### **2. Adicionar Fotos dos Fundadores**

1. Coloque as fotos na pasta `images/founders/`
2. No CSS, substitua os avatares por:

```css
.founder-avatar {
    background-image: url('../images/founders/nome.jpg');
    background-size: cover;
}
```

### **3. Adicionar Imagens do Portfolio**

Substitua os emojis por imagens reais na pasta `images/portfolio/`

---

## Configurar Formulário de Contacto

### **Opção 1: EmailJS (Grátis)**

1. Crie conta em [EmailJS](https://www.emailjs.com)
2. Configure seu template
3. Adicione no `script.js` (código comentado incluído)

### **Opção 2: Formspree (Grátis)**

1. Acesse [Formspree](https://formspree.io)
2. Crie um formulário
3. Substitua o `<form>` no HTML:

```html
<form action="https://formspree.io/f/SEU_ID" method="POST">
```

### **Opção 3: Netlify Forms (Grátis)**

Se usar Netlify, adicione `netlify` ao form:

```html
<form name="contact" method="POST" data-netlify="true">
```

---

## Domínio Próprio

### **Domínios Gratuitos:**
- Freenom (.tk, .ml, .ga)
- Netlify subdomain (.netlify.app)
- Vercel subdomain (.vercel.app)

### **Domínios Pagos (Recomendado):**
- Namecheap (~$10/ano)
- GoDaddy
- Angola Cables (domínio .ao)

---

## Redes Sociais (Adicionar depois)

No rodapé, adicione ícones de redes sociais:

```html
<div class="social-links">
    <a href="#"><i class="fab fa-facebook"></i></a>
    <a href="#"><i class="fab fa-instagram"></i></a>
    <a href="#"><i class="fab fa-linkedin"></i></a>
</div>
```

Use [Font Awesome](https://fontawesome.com) para os ícones.

---

## SEO e Meta Tags

O projeto já inclui:
- Meta description
- Meta keywords
- Título otimizado
- Estrutura semântica HTML5

**Para melhorar ainda mais:**
1. Adicione Google Analytics
2. Configure Google Search Console
3. Crie sitemap.xml
4. Adicione robots.txt

---

## Analytics (Opcional)

### **Google Analytics:**

1. Crie conta em [Google Analytics](https://analytics.google.com)
2. Adicione o código no `<head>` do HTML:

```html
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## 🐛 Suporte

Para problemas ou dúvidas:

- 📧 Email: contato@j3msolutions.com
- 📱 WhatsApp: +244 XXX XXX XXX

---

## 📜 Licença

© 2024 J3M Solutions. Todos os direitos reservados.

---

## 👥 Equipa

Desenvolvido por:
- **Manuel Sampaio** - Co-Fundador
- **José Correia** - Co-Fundador
- **José Ulo** - Co-Fundador
- **Jair Fernandes** - Co-Fundador
