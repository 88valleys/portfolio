document.addEventListener('DOMContentLoaded', function () {
  initTypewriter();
  initScrollIcon();
  initMobileMenu();
  initSmoothScroll();
  initContactForm();
  initTranslation();
  initProjectImageClick();
});

function initTranslation() {
  const translations = {
    en: {
      banner_title: "Hello, I'm Senie 👋",
      banner_description:
        `I'm a <span>UI/UX designer</span> based in Tokyo, Japan. Drawing from my background in <span>web development</span> and <span>digital media</span>, I like shaping products that make complex ideas simple and easy for people to navigate.`,
      download_cv: 'Download CV',
      navbar_projects: 'Portfolio',
      navbar_about: 'About',
      navbar_contact: 'Contact',
      mobile_menu_projects: 'Portfolio',
      mobile_menu_about: 'About',
      mobile_menu_contact: 'Contact',
      mobile_credit: `Built with ❤︎ by Senie using <a href="https://middlemanapp.com/" target="_blank">Middleman</a>.`,
      projects_title: 'Portfolio 👩🏻‍💻',
      about_title: 'About me 🌻',
      about_paragraph_1:
        `Hello, thanks for stopping by! I’m Senie, Melbourne, Australia-raised, Tokyo-based. 
        I’m a UX/UI Designer at <span><a href="https://kortvaluta.com/" target="_blank" class="highlight-link">Kort Valuta</a></span>. `,
      about_paragraph_2: 
        `With a background in digital media and customer experience, I’ve always been curious about how people interact with products and systems. 
        That curiosity first brought me to Japan on the <a href="https://jetprogramme.org/en/" target="_blank" class="highlight-link">JET Programme</a>, where working across cultures deepened my interest in design for diverse users. `,
      about_paragraph_3:
        `To develop my skills further, I completed <a href="https://www.lewagon.com/tokyo" class="highlight-link"
        target="_blank">Le Wagon Tokyo</a>’s web development bootcamp.
        During that time, I led the design and development of 
        <a href="https://www.tokyoscene.me/" target="_blank" class="highlight-link">TokyoScene</a>, 
        a live music event aggregator using Spotify data to recommend gigs in Tokyo. 
        This project combined my love of live music with data-driven product and UI/UX thinking.  `,
      about_paragraph_4:
        `Building on my experience at Le Wagon, I joined <a href="https://japanproductcamp.io/" target="_blank" class="highlight-link">Japan Product Camp</a>
        to deepen my understanding of product design, user research, and growth strategy. 
        From there, I interned on design and development projects before joining Kort Valuta.`,
      about_paragraph_5:
        `As a UX/UI designer, my goal is to create simple, intuitive experiences for users, 
        while also bridging communication between design and development with my background in both code and product design.`,
      about_paragraph_6:
        `Outside of work, I play bass, explore Tokyo’s live music scene, read contemporary books (if you have any recommendations, let me know!), and unwind with video games (JRPGs!) and yoga. `,
      about_paragraph_7:
        `If you’re curious about building something together, or just want to have a chat, feel free to connect or reach out! Looking forward to chatting with you soon :)`,
      tech_stack_title: 'Tech Stack 💻',

      social_title: "Let's connect! 💫",
      social_paragraph:
        'I’d love to hear from you! Whether you’re interested in collaborating, discussing ideas, or want to chat over a coffee, feel free to reach out. You can connect with me on social media or send me a message!',
      contact_placeholder_name: 'name',
      contact_placeholder_email: 'email',
      contact_placeholder_message: 'write your message',
      contact_button: 'Send Message',
      footer_title: `Built with ❤︎ by Senie using <a href="https://middlemanapp.com/" target="_blank">Middleman</a>.`,
    },
    jp: {
      banner_title: 'こんにちは、セニーです 👋',
    banner_description:
      `東京を拠点に活動する<span>UI/UXデザイナー</span>です。<span>ウェブ開発</span>と<span>デジタルメディア</span>のバックグラウンドを活かし、複雑なアイデアをシンプルにして、人が直感的に使えるプロダクトをつくるのが好きです。`,
      download_cv: '履歴書をダウンロード',
      navbar_projects: 'ポートフォリオ',
      navbar_about: '私について',
      navbar_contact: 'お問い合わせ',
      mobile_menu_projects: 'ポートフォリオ',
      mobile_menu_about: '私について',
      mobile_menu_contact: 'お問い合わせ',
      mobile_credit: `❤︎ 心を込めて Senie が <a href="https://middlemanapp.com/" target="_blank">Middleman</a> を使用して開発しました。`,
      projects_title: 'ポートフォリオ 👩🏻‍💻',
      about_title: '私について 🌻',
      about_paragraph_1: 
        `こんにちは、プロフィールをご覧いただきありがとうございます！メルボルンで育ち、現在は東京を拠点に活動しているSenieです。 
        <span><a href="https://kortvaluta.com/" target="_blank" class="highlight-link">Kort Valuta</a></span>でUX/UIデザイナーとして働いています。`,
      about_paragraph_2: 
        `デジタルメディアとカスタマーエクスペリエンスのバックグラウンドを持ち、常に「人がプロダクトやシステムとどう関わるのか」に関心を持ってきました。 
        その探究心から<a href="https://jetprogramme.org/en/" target="_blank" class="highlight-link">JETプログラム</a>で日本に来て、異文化での経験を通じて多様なユーザーを意識したデザインにさらに興味を持つようになりました。`,
      about_paragraph_3: 
        `スキルをさらに伸ばすため、<a href="https://www.lewagon.com/tokyo" class="highlight-link" target="_blank">Le Wagon Tokyo</a>のWeb開発ブートキャンプを修了しました。
        その期間に、Spotifyのデータを活用して東京のライブイベントをおすすめする
        <a href="https://www.tokyoscene.me/" target="_blank" class="highlight-link">TokyoScene</a>というアプリのデザインと開発をリードしました。 
        このプロジェクトでは、音楽への情熱とデータドリブンなプロダクト／UI/UXデザインを組み合わせることができました。`,
    about_paragraph_4: 
      `<a href="https://japanproductcamp.io/" target="_blank" class="highlight-link">Japan Product Camp</a>にも参加し、プロダクトデザイン、ユーザーリサーチ、グロース戦略についてさらに理解を深めました。 
      その後、デザインと開発のインターンを経て、Kort Valutaに入社しました。`,
    about_paragraph_5: 
      `UX/UIデザイナーとして、ユーザーにとってシンプルで直感的な体験を作ることを目指しています。 
      また、コードとプロダクトデザインの両方の経験を活かし、デザインと開発のコミュニケーションをつなぐ役割も担っています。`,
    about_paragraph_6: 
      `仕事以外では、ベースを弾いたり、東京のライブハウスを巡ったり、本を読んだり（おすすめがあればぜひ教えてください！）、JRPGのゲームやヨガでリフレッシュしています。`,
    about_paragraph_7: 
      `もし一緒に何かを作ってみたい、または気軽にお話ししたいと思っていただけたら、ぜひご連絡ください！お話しできるのを楽しみにしています。`,
    tech_stack_title: '技術スタック 💻',
    social_title: 'つながりましょう！💫',
    social_paragraph:
      'お気軽にご連絡ください！コラボレーションに興味がある方、アイデアを共有したい方、またはコーヒーを飲みながらお話ししたい方、ぜひつながりましょう。SNSやメッセージでの交流も大歓迎です！',
    contact_placeholder_name: '名前',
    contact_placeholder_email: 'メールアドレス',
    contact_placeholder_message: 'メッセージを書く',
    contact_button: 'メッセージを送信',
    footer_title: `❤︎ 心を込めて Senie が <a href="https://middlemanapp.com/" target="_blank">Middleman</a> を使用して開発しました。`,
    },
  };

  const elements = {
    banner_title: document.getElementById('banner-title'),
    banner_description: document.getElementById('banner-description'),
    download_cv: document.getElementById('download_cv'),
    navbar_projects: document.getElementById('navbar_projects'),
    navbar_about: document.getElementById('navbar_about'),
    navbar_contact: document.getElementById('navbar_contact'),
    mobile_menu_projects: document.getElementById('mobile_menu_projects'),
    mobile_menu_about: document.getElementById('mobile_menu_about'),
    mobile_menu_contact: document.getElementById('mobile_menu_contact'),
    mobile_credit: document.getElementById('mobile-credit'),

    projects_title: document.getElementById('projects-title'),
    project_descriptions: document.querySelectorAll('.project-description'),

    about_title: document.getElementById('about-title'),
    about_paragraph_1: document.getElementById('about-paragraph-1'),
    about_paragraph_2: document.getElementById('about-paragraph-2'),
    about_paragraph_3: document.getElementById('about-paragraph-3'),
    about_paragraph_4: document.getElementById('about-paragraph-4'),
    about_paragraph_5: document.getElementById('about-paragraph-5'),
    about_paragraph_6: document.getElementById('about-paragraph-6'),
    about_paragraph_7: document.getElementById('about-paragraph-7'),


    tech_stack_title: document.getElementById('tech-stack-title'),

    social_title: document.getElementById('social-title'),
    social_paragraph: document.getElementById('social-paragraph'),

    contact_name: document.getElementById('contact-name'),
    contact_email: document.getElementById('contact-email'),
    contact_message: document.getElementById('contact-message'),
    contact_button: document.getElementById('contact-button'),

    footer_title: document.getElementById('footer-title'),
  };

  function translate(language) {
    elements.banner_title.innerHTML = translations[language].banner_title;
    elements.banner_description.innerHTML =
      translations[language].banner_description;
    elements.navbar_projects.innerHTML = translations[language].navbar_projects;
    elements.navbar_about.innerHTML = translations[language].navbar_about;
    elements.navbar_contact.innerHTML = translations[language].navbar_contact;
    elements.mobile_menu_projects.innerHTML =
      translations[language].mobile_menu_projects;
    elements.mobile_menu_about.innerHTML =
      translations[language].mobile_menu_about;
    elements.mobile_menu_contact.innerHTML =
      translations[language].mobile_menu_contact;

    elements.mobile_credit.innerHTML = translations[language].mobile_credit;

    elements.projects_title.innerHTML = translations[language].projects_title;

    elements.project_descriptions.forEach((descriptionElement) => {
      const description =
        language === 'jp'
          ? descriptionElement.dataset.descriptionJp
          : descriptionElement.dataset.descriptionEn;
      descriptionElement.innerHTML = description;
    });

    elements.about_title.innerHTML = translations[language].about_title;
    elements.about_paragraph_1.innerHTML =
      translations[language].about_paragraph_1;
    elements.about_paragraph_2.innerHTML =
      translations[language].about_paragraph_2;
    elements.about_paragraph_3.innerHTML =
      translations[language].about_paragraph_3;
    elements.about_paragraph_4.innerHTML =
      translations[language].about_paragraph_4;
    elements.about_paragraph_5.innerHTML =
      translations[language].about_paragraph_5;
    elements.about_paragraph_6.innerHTML =
      translations[language].about_paragraph_6;
    elements.about_paragraph_7.innerHTML =
      translations[language].about_paragraph_7;
    elements.tech_stack_title.innerHTML =
      translations[language].tech_stack_title;

    elements.social_title.innerHTML = translations[language].social_title;
    elements.social_paragraph.innerHTML =
      translations[language].social_paragraph;
    elements.contact_name.placeholder =
      translations[language].contact_placeholder_name;
    elements.contact_email.placeholder =
      translations[language].contact_placeholder_email;
    elements.contact_message.placeholder =
      translations[language].contact_placeholder_message;
    elements.contact_button.innerHTML = translations[language].contact_button;

    elements.footer_title.innerHTML = translations[language].footer_title;

    updateDownloadCV(language);

    if (language === 'jp') {
      elements.footer_title.classList.add('footer-title-small');
    } else {
      elements.footer_title.classList.remove('footer-title-small');
    }
  }

  const languageLinks = document.querySelectorAll('.language-link');

  languageLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      languageLinks.forEach((l) => l.classList.remove('selected'));

      link.classList.add('selected');

      const language = link.id === 'lang-en' ? 'en' : 'jp';
      translate(language);
    });
  });
}

function updateDownloadCV(language) {
  const downloadCV = document.getElementById('download_cv');
  if (!downloadCV) return;

  if (language === 'jp') {
    downloadCV.href = '/files/Senie_Calalang_CV-JP.pdf';
    downloadCV.download = 'Senie_Calalang_CV-JP.pdf';
    downloadCV.textContent = '履歴書をダウンロード';
  } else {
    downloadCV.href = '/files/Senie_Calalang_CV-EN.pdf';
    downloadCV.download = 'Senie_Calalang_CV-EN.pdf';
    downloadCV.textContent = 'Download CV';
  }
}

// Typewriter function for banner title
function initTypewriter() {
  const dynamicText = document.querySelector('h1 span');
  const words = ["Hello, I'm Senie 👋"];
  let continueTyping = true;

  if (!dynamicText) {
    console.error('Element not found');
    return;
  }

  // Function to type out each character
  function typeWriter(text, i, callback) {
    if (i < text.length) {
      dynamicText.innerHTML =
        text.substring(0, i + 1) +
        '<span class="typed-cursor typed-cursor--blink" aria-hidden="true"></span>';
      setTimeout(() => typeWriter(text, i + 1, callback), 55);
    } else if (typeof callback === 'function') {
      setTimeout(callback, 1000);
    }
  }

  // Function to start the typing effect
  function startTextAnimation(i) {
    if (i >= words.length) {
      continueTyping = false;
      return;
    }
    typeWriter(words[i], 0, () => startTextAnimation(i + 1));
  }

  startTextAnimation(0);
}

// Make the down arrow button on banner clickable and navigates to projects
function initScrollIcon() {
  const scrollIcon = document.querySelector('.scroll-icon');
  const projectsSection = document.getElementById('projects');
  const headerOffset = 70;

  if (scrollIcon && projectsSection) {
    scrollIcon.addEventListener('click', function () {
      const elementPosition = projectsSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    });
  }
}

// Mobile Menu: Hamburger toggle
function initMobileMenu() {
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  const closeIcon = document.querySelector('.close-icon');
  const mobileMenu = document.getElementById('mobile-menu');

  function toggleMenu() {
    mobileMenu.classList.toggle('open');
  }

  function hideMobileMenu() {
    mobileMenu.classList.remove('open');
  }

  hamburgerIcon.addEventListener('click', toggleMenu);
  closeIcon.addEventListener('click', hideMobileMenu);
}

// Smooth scroll on section link click
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (!targetElement) return;

      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      const targetPosition =
        targetElement.getBoundingClientRect().top +
        window.scrollY -
        navbarHeight;

      window.scrollTo({ top: targetPosition, behavior: 'smooth' });

      document.getElementById('mobile-menu')?.classList.remove('open');
    });
  });
}

// Contact Form: Send message using EmailJS
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return;

  emailjs.init('PyViX0SCaQ_EhZME2');

  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const templateParams = {
      name: contactForm.name.value,
      email: contactForm.email.value,
      message: contactForm.message.value,
    };

    emailjs
      .sendForm('service_qpfn5zq', 'template_msbpz65', this)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Message sent! ✉️',
          text: "Thank you for reaching out! I'll get back to you within two business days.",
        });
        contactForm.reset();
      })
      .catch((error) => {
        console.error('Email send failed:', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to send message. Please try again later.',
        });
      });
  });
}

function initProjectImageClick() {
  const projectImages = document.querySelectorAll('.project-image[data-url]');

  projectImages.forEach((image) => {
    image.addEventListener('click', () => {
      const url = image.getAttribute('data-url');
      console.log('Image clicked, URL:', url); // Debugging

      if (url) {
        window.open(url, '_blank'); // Open the link in a new tab
      }
    });
  });
}
