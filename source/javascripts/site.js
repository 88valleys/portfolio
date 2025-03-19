document.addEventListener('DOMContentLoaded', function () {
  initTypewriter();
  initScrollIcon();
  initMobileMenu();
  initSmoothScroll();
  initContactForm();
  initTranslation();
});

function initTranslation() {
  const translations = {
    en: {
      banner_title: "Hello, I'm Senie 👋",
      banner_description:
        'A junior <span>full-stack web developer</span> based in Tokyo, Japan. With a background in digital design and media, I specialise in <span>designing</span> and <span>coding</span> visually appealing and immersive user experiences. ✨',
      download_cv: 'Download CV',

      navbar_projects: 'Projects',
      navbar_about: 'About',
      navbar_contact: 'Contact',
      mobile_menu_projects: 'Projects',
      mobile_menu_about: 'About',
      mobile_menu_contact: 'Contact',
      mobile_credit: `Built with ❤︎ by Senie using <a href="https://middlemanapp.com/" target="_blank">Middleman</a>.`,

      projects_title: 'Projects 👩🏻‍💻',

      about_title: 'About me 🌻',
      about_paragraph_1:
        'Hello, thank you for dropping by! I’m <span>Senie</span> – Melbourne, Australia-raised, Tokyo-based. I’m a <span>full-stack web developer</span> passionate about creating responsive, user-friendly web applications. I graduated from <span>Le Wagon Tokyo’s web development bootcamp</span> in September 2024, where I learned Ruby on Rails, JavaScript, HTML/CSS, and React, building applications from the ground up.',
      about_paragraph_2:
        "In February 2025, I completed <span class='highlight'>Japan Product Camp</span>, an intensive program on <span>product design, user research, and growth strategies</span>. I learned about product design with the <span>user in mind</span>, conducting user interviews, data analysis, and usability testing to inform product decisions.",
      about_paragraph_3:
        "Currently, I'm a <span class='highlight'>front-end developer</span> intern at <a href='https://sustainabilitypage.com/' target='_blank' class='highlight-link'><span>Sustainability Page</span></a>, where I develop and maintain their web application with React, Next.js, and TypeScript. Alongside my internship, I take on freelance projects, designing and developing custom websites for clients.",
      about_paragraph_4:
        "With a background in <span>Digital Media & Design</span>, I love crafting clean, user-friendly interfaces. I'm eager to collaborate with a creative team to build products that blend design and technology.",
      about_paragraph_5:
        'Outside of work, I play bass, explore Tokyo’s live music scene, enjoy video games, reading and practice yoga. I’m always <span>open to new projects</span>, so feel free to reach out! 🚀',
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
        '東京を拠点に活動するジュニア<span>フルスタックウェブ開発者</span>です。デジタルデザインとメディアのバックグラウンドを活かし、<span>デザイン</span>と<span>コーディング</span>を通じて、視覚的に魅力的で没入感のあるユーザー体験を提供することを得意としています。✨',
      download_cv: '履歴書をダウンロード',
      navbar_projects: 'プロジェクト',
      navbar_about: '私について',
      navbar_contact: 'お問い合わせ',
      mobile_menu_projects: 'プロジェクト',
      mobile_menu_about: '私について',
      mobile_menu_contact: 'お問い合わせ',
      mobile_credit: `❤︎ 心を込めて Senie が <a href="https://middlemanapp.com/" target="_blank">Middleman</a> を使用して開発しました。`,

      projects_title: 'プロジェクト 👩🏻‍💻',
      about_title: '私について 🌻',
      about_paragraph_1:
        'こんにちは、ご訪問ありがとうございます！<span>セニー</span>です。メルボルン（オーストラリア）出身、東京在住の<span>フルスタックウェブ開発者</span>です。レスポンシブでユーザーフレンドリーなウェブアプリケーションの開発に情熱を持っています。',
      about_paragraph_2:
        "2025年2月、<span class='highlight'>Japan Product Camp</span>を修了しました。この集中プログラムでは、<span>プロダクトデザイン、ユーザーリサーチ、グロース戦略</span>について学びました。<span>ユーザー視点</span>でのプロダクトデザインを学び、ユーザーインタビュー、データ分析、ユーザビリティテストを実施し、プロダクトの意思決定に役立てました。",
      about_paragraph_3:
        "現在、私は<span class='highlight'>フロントエンド開発者</span>として<a href='https://sustainabilitypage.com/' target='_blank' class='highlight-link'><span>Sustainability Page</span></a>でインターンをしています。React、Next.js、TypeScriptを活用し、ウェブアプリケーションの開発・運用に携わっています。インターンシップと並行して、フリーランスのプロジェクトに取り組み、クライアントのためにカスタムウェブサイトを設計および開発しています。",
      about_paragraph_4:
        '<span>デジタルメディア＆デザイン</span>のバックグラウンドを活かし、クリーンで使いやすいインターフェースを設計することに情熱を持っています。デザインとテクノロジーを融合させた魅力的なプロダクトを創るために、クリエイティブなチームと協力することを楽しみにしています。',
      about_paragraph_5:
        '仕事の外では、ベースを弾いたり、東京のライブミュージックシーンを探索したり、ビデオゲームを楽しんだり、読書やヨガを練習したりしています。常に<span>新しいプロジェクトにオープン</span>なので、お気軽にご連絡ください！🚀',
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
    elements.download_cv.innerHTML = translations[language].download_cv;

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
