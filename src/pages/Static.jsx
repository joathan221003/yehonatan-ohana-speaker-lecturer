import React from 'react';

export default function Static() {
  const htmlContent = `<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>יהונתן אוחנה - מפקד כיתה בגבעתי | מרצה והשראה</title>
    <meta name="description" content="יהונתן אוחנה, מפקד כיתה בגדוד צבר חטיבת גבעתי. הרצאות מעוררות השראה על חברות, פיקוד, אחריות ואובדן.">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700;800&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        :root {
            --gold: #C9A227;
            --gold-light: #E8D48A;
            --dark: #0a0a0a;
            --dark-lighter: #141414;
            --gray: #1a1a1a;
            --gray-light: #2a2a2a;
        }
        
        html {
            scroll-behavior: smooth;
        }
        
        body {
            font-family: 'Heebo', sans-serif;
            background: var(--dark);
            color: white;
            line-height: 1.6;
        }
        
        /* Header */
        header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            background: rgba(10, 10, 10, 0.95);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        nav {
            max-width: 1280px;
            margin: 0 auto;
            padding: 1rem 1.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .logo {
            font-size: 1.25rem;
            font-weight: 700;
        }
        
        .logo .gold { color: var(--gold); }
        
        .nav-links {
            display: flex;
            gap: 0.5rem;
            list-style: none;
        }
        
        .nav-links a {
            color: #d1d5db;
            text-decoration: none;
            padding: 0.5rem 1rem;
            transition: all 0.3s;
            font-size: 0.875rem;
        }
        
        .nav-links a:hover {
            color: white;
        }
        
        .cta-btn {
            padding: 0.625rem 1.5rem;
            background: var(--gold);
            color: black;
            border-radius: 9999px;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.3s;
        }
        
        .cta-btn:hover {
            background: var(--gold-light);
            transform: scale(1.05);
        }
        
        /* Mobile Menu */
        .mobile-menu-btn {
            display: none;
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
        }
        
        /* Hero Section */
        .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
        }
        
        .hero-bg {
            position: absolute;
            inset: 0;
            z-index: 0;
        }
        
        .hero-bg img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top;
        }
        
        .hero-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to bottom, rgba(10, 10, 10, 0.8), rgba(10, 10, 10, 0.6), #0a0a0a);
        }
        
        .hero-content {
            position: relative;
            z-index: 10;
            text-align: center;
            padding: 2rem;
            max-width: 1280px;
            margin: 0 auto;
        }
        
        .hero-subtitle {
            color: var(--gold);
            font-size: 0.875rem;
            letter-spacing: 0.3em;
            text-transform: uppercase;
            margin-bottom: 1.5rem;
        }
        
        .hero h1 {
            font-size: clamp(2.5rem, 8vw, 5rem);
            font-weight: 700;
            line-height: 1.2;
            margin-bottom: 1.5rem;
        }
        
        .hero h1 .gold {
            color: var(--gold);
            font-weight: 300;
            font-style: italic;
        }
        
        .hero-quote {
            font-size: 1.125rem;
            color: #9ca3af;
            max-width: 700px;
            margin: 0 auto 2.5rem;
        }
        
        .hero-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
        }
        
        .btn-primary {
            padding: 1rem 2rem;
            background: var(--gold);
            color: black;
            border-radius: 9999px;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.3s;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .btn-primary:hover {
            background: var(--gold-light);
            transform: scale(1.05);
        }
        
        .btn-secondary {
            padding: 1rem 2rem;
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 9999px;
            color: white;
            text-decoration: none;
            transition: all 0.3s;
        }
        
        .btn-secondary:hover {
            background: rgba(255, 255, 255, 0.05);
            border-color: rgba(255, 255, 255, 0.4);
        }
        
        /* Sections */
        section {
            padding: 6rem 1.5rem;
            position: relative;
        }
        
        .section-header {
            text-align: center;
            margin-bottom: 4rem;
        }
        
        .section-label {
            color: var(--gold);
            font-size: 0.875rem;
            letter-spacing: 0.3em;
            text-transform: uppercase;
            margin-bottom: 1rem;
            display: block;
        }
        
        .section-title {
            font-size: clamp(2.5rem, 5vw, 4rem);
            font-weight: 700;
            margin-bottom: 1.5rem;
        }
        
        .section-divider {
            width: 6rem;
            height: 4px;
            background: var(--gold);
            margin: 0 auto 2rem;
            border-radius: 9999px;
        }
        
        .container {
            max-width: 1280px;
            margin: 0 auto;
        }
        
        /* About Section */
        .about-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 3rem;
            align-items: center;
        }
        
        .about-text {
            font-size: 1.125rem;
            color: #d1d5db;
            line-height: 1.8;
        }
        
        .about-text p {
            margin-bottom: 1.5rem;
        }
        
        .about-text .highlight {
            color: var(--gold);
            font-weight: 600;
        }
        
        .about-text .highlight-white {
            color: white;
            font-weight: 500;
        }
        
        .article-link {
            display: inline-flex;
            align-items: center;
            gap: 0.75rem;
            margin-top: 2rem;
            padding: 0.75rem 1.5rem;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 9999px;
            color: #d1d5db;
            text-decoration: none;
            transition: all 0.3s;
        }
        
        .article-link:hover {
            background: rgba(201, 162, 39, 0.1);
            border-color: rgba(201, 162, 39, 0.3);
            color: white;
        }
        
        .about-images {
            position: relative;
        }
        
        .about-images img {
            width: 100%;
            border-radius: 1rem;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
        
        /* Features Grid */
        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
            margin-bottom: 4rem;
        }
        
        .feature-card {
            padding: 1.5rem;
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 1rem;
            transition: all 0.3s;
        }
        
        .feature-card:hover {
            background: rgba(255, 255, 255, 0.05);
            border-color: rgba(201, 162, 39, 0.2);
            transform: translateY(-5px);
        }
        
        .feature-icon {
            width: 3rem;
            height: 3rem;
            background: rgba(201, 162, 39, 0.1);
            border-radius: 0.75rem;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1rem;
            color: var(--gold);
        }
        
        .feature-card h3 {
            font-size: 1.125rem;
            margin-bottom: 0.5rem;
        }
        
        .feature-card p {
            color: #6b7280;
            font-size: 0.875rem;
        }
        
        /* Media Section */
        .videos-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }
        
        .video-card {
            position: relative;
            border-radius: 1rem;
            overflow: hidden;
            background: var(--dark-lighter);
            border: 1px solid rgba(255, 255, 255, 0.05);
            cursor: pointer;
            transition: transform 0.3s;
        }
        
        .video-card:hover {
            transform: scale(1.02);
        }
        
        .video-thumbnail {
            position: relative;
            aspect-ratio: 16/9;
            overflow: hidden;
        }
        
        .video-thumbnail img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        .video-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, #0a0a0a, rgba(10, 10, 10, 0.3), transparent);
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .play-button {
            width: 5rem;
            height: 5rem;
            background: var(--gold);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s;
        }
        
        .video-card:hover .play-button {
            background: var(--gold-light);
            transform: scale(1.1);
        }
        
        .video-info {
            padding: 1.5rem;
        }
        
        .video-channel {
            color: var(--gold);
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-bottom: 0.5rem;
        }
        
        .video-title {
            font-size: 1.125rem;
            font-weight: 600;
            line-height: 1.4;
        }
        
        /* Gallery */
        .gallery-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 1rem;
        }
        
        .gallery-item {
            position: relative;
            aspect-ratio: 1;
            border-radius: 0.75rem;
            overflow: hidden;
            cursor: pointer;
            transition: transform 0.3s;
        }
        
        .gallery-item:hover {
            transform: scale(1.05);
        }
        
        .gallery-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        /* Lightbox */
        .lightbox {
            display: none;
            position: fixed;
            inset: 0;
            z-index: 9999;
            background: rgba(0, 0, 0, 0.95);
            align-items: center;
            justify-content: center;
        }
        
        .lightbox.active {
            display: flex;
        }
        
        .lightbox img {
            max-width: 90%;
            max-height: 85vh;
            border-radius: 0.5rem;
        }
        
        .lightbox-close {
            position: absolute;
            top: 1.5rem;
            right: 1.5rem;
            background: none;
            border: none;
            color: white;
            font-size: 2rem;
            cursor: pointer;
        }
        
        /* FAQ */
        .faq-list {
            max-width: 800px;
            margin: 0 auto;
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 1rem;
            overflow: hidden;
        }
        
        .faq-item {
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .faq-item:last-child {
            border-bottom: none;
        }
        
        .faq-question {
            width: 100%;
            padding: 1.5rem;
            background: none;
            border: none;
            color: white;
            font-size: 1.125rem;
            font-weight: 500;
            text-align: right;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: color 0.3s;
        }
        
        .faq-question:hover {
            color: var(--gold);
        }
        
        .faq-answer {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
        }
        
        .faq-item.active .faq-answer {
            max-height: 300px;
        }
        
        .faq-answer-content {
            padding: 0 1.5rem 1.5rem;
            color: #9ca3af;
            line-height: 1.8;
        }
        
        /* Contact Form */
        .contact-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 3rem;
        }
        
        .contact-info {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }
        
        .contact-item {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1.25rem;
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 0.75rem;
            text-decoration: none;
            color: white;
            transition: all 0.3s;
        }
        
        .contact-item:hover {
            background: rgba(255, 255, 255, 0.04);
            border-color: rgba(201, 162, 39, 0.3);
        }
        
        .contact-icon {
            width: 3rem;
            height: 3rem;
            background: rgba(201, 162, 39, 0.1);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--gold);
        }
        
        .contact-form {
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
        }
        
        .form-row {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1.25rem;
        }
        
        .form-group label {
            display: block;
            color: #9ca3af;
            font-size: 0.875rem;
            margin-bottom: 0.5rem;
        }
        
        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: 1rem 1.25rem;
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 0.75rem;
            color: white;
            font-family: inherit;
            transition: all 0.3s;
        }
        
        .form-group input:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: rgba(201, 162, 39, 0.5);
            background: rgba(255, 255, 255, 0.03);
        }
        
        .form-group textarea {
            resize: none;
            min-height: 150px;
        }
        
        .submit-btn {
            padding: 1rem;
            background: var(--gold);
            color: black;
            border: none;
            border-radius: 0.75rem;
            font-weight: 600;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s;
        }
        
        .submit-btn:hover {
            background: var(--gold-light);
            transform: translateY(-2px);
        }
        
        /* Footer */
        footer {
            background: var(--dark);
            border-top: 1px solid rgba(255, 255, 255, 0.05);
            padding: 3rem 1.5rem;
        }
        
        .footer-content {
            max-width: 1280px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
            text-align: center;
        }
        
        .footer-title {
            font-size: 1.25rem;
            font-weight: 700;
        }
        
        .footer-subtitle {
            color: #6b7280;
            font-size: 0.875rem;
        }
        
        .social-links {
            display: flex;
            gap: 1rem;
        }
        
        .social-link {
            width: 3rem;
            height: 3rem;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            text-decoration: none;
            transition: all 0.3s;
        }
        
        .social-link:hover {
            background: rgba(201, 162, 39, 0.2);
            color: var(--gold);
        }
        
        .footer-quote {
            color: #4b5563;
            font-size: 0.875rem;
            margin-top: 2rem;
        }
        
        /* Responsive */
        @media (min-width: 768px) {
            .about-grid {
                grid-template-columns: 1fr 1fr;
            }
            
            .contact-grid {
                grid-template-columns: 2fr 3fr;
            }
            
            .form-row {
                grid-template-columns: 1fr 1fr;
            }
            
            .footer-content {
                flex-direction: row;
                justify-content: space-between;
                text-align: right;
            }
        }
        
        @media (max-width: 1024px) {
            .nav-links {
                display: none;
            }
            
            .mobile-menu-btn {
                display: block;
            }
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header>
        <nav>
            <a href="#hero" class="logo">
                <span class="gold">יהונתן</span> אוחנה
            </a>
            <ul class="nav-links">
                <li><a href="#hero">ראשי</a></li>
                <li><a href="#about">אודות</a></li>
                <li><a href="#lectures">הרצאות</a></li>
                <li><a href="#media">מדיה</a></li>
                <li><a href="#gallery">גלריה</a></li>
                <li><a href="#faq">שאלות נפוצות</a></li>
                <li><a href="#contact">צור קשר</a></li>
            </ul>
            <a href="#contact" class="cta-btn">הזמן הרצאה</a>
            <button class="mobile-menu-btn">☰</button>
        </nav>
    </header>

    <!-- Hero Section -->
    <section id="hero" class="hero">
        <div class="hero-bg">
            <img src="https://yehonatan.online/images/beret.jpg" alt="יהונתן אוחנה">
            <div class="hero-overlay"></div>
        </div>
        <div class="hero-content">
            <span class="hero-subtitle">מפקד כיתה בגבעתי • מרצה • השראה</span>
            <h1>
                <span>המסע שלי</span><br>
                <span class="gold">מהשירות הקרבי</span><br>
                <span style="color: #d1d5db;">ועד לבמות ההרצאות</span>
            </h1>
            <p class="hero-quote">"חייכו כי חיוך זה שמחה ושמחה זה הכח להמשיך"</p>
            <div class="hero-buttons">
                <a href="#contact" class="btn-primary">הזמן הרצאה ←</a>
                <a href="#about" class="btn-secondary">הסיפור שלי</a>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about">
        <div class="container">
            <div class="section-header">
                <span class="section-label">הכר אותי</span>
                <h2 class="section-title">אודות</h2>
                <div class="section-divider"></div>
            </div>
            <div class="about-grid">
                <div class="about-text">
                    <p>
                        שמי <span class="highlight">יהונתן אוחנה</span>, סמ"ר ומפקד כיתה בגדוד צבר של חטיבת גבעתי. לאחר שירות משמעותי בצה"ל, שבו חוויתי את אחד הרגעים הקשים בחיי - <span class="highlight-white">אסון הנמ"ר בו איבדתי את כל חייליי</span> - בחרתי להקדיש את חיי להנצחת חבריי שנפלו.
                    </p>
                    <p>
                        היום, במקום לטייל בעולם כמו רבים אחרים, אני מרצה בבתי ספר, מתנ״סים וארגונים, משתף את הסיפור הלא יאומן של השירות שלי - <span class="highlight-white">סיפור על חברות, פיקוד, אחריות, ואובדן</span>. אני מדבר על הלילה האחרון, על הרגע שבו הבנתי שאיבדתי את כולם, ועל השליחות שמלווה אותי מאז.
                    </p>
                    <p style="color: #9ca3af;">
                        כיום אני סטודנט במגמת תוכנה.
                    </p>
                    <a href="https://www.mako.co.il/news-military/6361323ddea5a810/Article-bfea3ed547c9b81026.htm" target="_blank" class="article-link">
                        לכתבה המלאה על יהונתן אוחנה באתר mako →
                    </a>
                </div>
                <div class="about-images">
                    <img src="https://yehonatan.online/images/team.jpg" alt="תמונה עם החיילים">
                </div>
            </div>
        </div>
    </section>

    <!-- Lectures Section -->
    <section id="lectures" style="background: var(--dark-lighter);">
        <div class="container">
            <div class="section-header">
                <span class="section-label">מה אני מציע</span>
                <h2 class="section-title">הרצאות</h2>
                <div class="section-divider"></div>
                <p style="color: #9ca3af; max-width: 900px; margin: 0 auto; font-size: 1.125rem;">
                    אני מציע הרצאות שמותאמות לקהל היעד – החל מבני נוער ועד מבוגרים, תוך שיח פתוח, כן ונוגע. ההרצאות כוללות סיפור אישי עוצמתי, תמונות, וקטעי וידאו, ומשאירות את הקהל עם תובנות על ערכים, אומץ, חברות, והשראה.
                </p>
            </div>
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">👥</div>
                    <h3>מותאם לקהל</h3>
                    <p>הרצאות שמותאמות לקהל היעד – החל מבני נוער ועד מבוגרים</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">❤️</div>
                    <h3>שיח פתוח וכן</h3>
                    <p>תוך שיח פתוח, כן ונוגע עם הקהל</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">💡</div>
                    <h3>תובנות וערכים</h3>
                    <p>משאירות את הקהל עם תובנות על ערכים, אומץ, חברות, והשראה</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🏆</div>
                    <h3>חוויה מלאה</h3>
                    <p>כוללות סיפור אישי עוצמתי, תמונות, וקטעי וידאו</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Media Section -->
    <section id="media">
        <div class="container">
            <div class="section-header">
                <span class="section-label">צפו בי</span>
                <h2 class="section-title">מדיה</h2>
                <div class="section-divider"></div>
            </div>
            <div class="videos-grid">
                <div class="video-card" onclick="window.open('https://www.youtube.com/watch?v=Zmn8wns1sq0', '_blank')">
                    <div class="video-thumbnail">
                        <img src="https://img.youtube.com/vi/Zmn8wns1sq0/maxresdefault.jpg" alt="וידאו">
                        <div class="video-overlay">
                            <div class="play-button">▶</div>
                        </div>
                    </div>
                    <div class="video-info">
                        <div class="video-channel">פודקאסט הגשר - מדברים פוסט טראומה</div>
                        <div class="video-title">יהונתן אוחנה מפקד בגבעתי ש-11 חייליו נהרגו בעזה</div>
                    </div>
                </div>
                <div class="video-card" onclick="window.open('https://www.youtube.com/watch?v=H8E5PSKF5b0', '_blank')">
                    <div class="video-thumbnail">
                        <img src="https://img.youtube.com/vi/H8E5PSKF5b0/maxresdefault.jpg" alt="וידאו">
                        <div class="video-overlay">
                            <div class="play-button">▶</div>
                        </div>
                    </div>
                    <div class="video-info">
                        <div class="video-channel">ערוץ כנסת</div>
                        <div class="video-title">סמל יהונתן אוחנה מגדוד צבר, אשר איבד 11 מחייליו באסון הנמ"ר</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Gallery Section -->
    <section id="gallery" style="background: var(--dark-lighter);">
        <div class="container">
            <div class="section-header">
                <span class="section-label">רגעים</span>
                <h2 class="section-title">גלריית תמונות</h2>
                <div class="section-divider"></div>
            </div>
            <div class="gallery-grid" id="gallery-grid">
                <!-- Images will be loaded by JS -->
            </div>
        </div>
    </section>

    <!-- FAQ Section -->
    <section id="faq">
        <div class="container">
            <div class="section-header">
                <span class="section-label">שאלות נפוצות</span>
                <h2 class="section-title">שאלות ותשובות</h2>
                <div class="section-divider"></div>
            </div>
            <div class="faq-list">
                <div class="faq-item">
                    <button class="faq-question">
                        למי מתאימות ההרצאות?
                        <span>▼</span>
                    </button>
                    <div class="faq-answer">
                        <div class="faq-answer-content">
                            ההרצאות מתאימות לבני נוער, חיילים, צוותי חינוך, ארגונים, ומבוגרים – כל מי שמחפש השראה, ערכים, וכלים להתמודדות עם אתגרים.
                        </div>
                    </div>
                </div>
                <div class="faq-item">
                    <button class="faq-question">
                        האם יש דגש על העצמה אישית?
                        <span>▼</span>
                    </button>
                    <div class="faq-answer">
                        <div class="faq-answer-content">
                            בהחלט. בהרצאות משולבים כלים מעשיים להתמודדות עם קושי, חוסן נפשי, והפיכת משבר לצמיחה.
                        </div>
                    </div>
                </div>
                <div class="faq-item">
                    <button class="faq-question">
                        האם יש מקום לשאלות מהקהל?
                        <span>▼</span>
                    </button>
                    <div class="faq-answer">
                        <div class="faq-answer-content">
                            כן! חלק מרכזי בהרצאה הוא שיח פתוח עם הקהל, מענה לשאלות, ושיתוף הדדי.
                        </div>
                    </div>
                </div>
                <div class="faq-item">
                    <button class="faq-question">
                        כמה זמן נמשכת ההרצאה?
                        <span>▼</span>
                    </button>
                    <div class="faq-answer">
                        <div class="faq-answer-content">
                            משך ההרצאה נע בין 60 ל-90 דקות, בהתאם לצורך ולבקשת המארגנים.
                        </div>
                    </div>
                </div>
                <div class="faq-item">
                    <button class="faq-question">
                        האם ניתן להתאים את התוכן?
                        <span>▼</span>
                    </button>
                    <div class="faq-answer">
                        <div class="faq-answer-content">
                            בוודאי. ניתן להתאים את התוכן, הדגשים והמסרים לפי קהל היעד והאירוע.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" style="background: var(--dark-lighter);">
        <div class="container">
            <div class="section-header">
                <span class="section-label">בואו נדבר</span>
                <h2 class="section-title">צור קשר</h2>
                <div class="section-divider"></div>
                <p style="color: #9ca3af; font-size: 1.125rem;">
                    להזמנת הרצאה או פרטים נוספים, מלאו את הטופס ואחזור אליכם בהקדם
                </p>
            </div>
            <div class="contact-grid">
                <div class="contact-info">
                    <a href="mailto:yehonatan2210@gmail.com" class="contact-item">
                        <div class="contact-icon">✉️</div>
                        <div>
                            <div style="color: #6b7280; font-size: 0.875rem;">אימייל</div>
                            <div>yehonatan2210@gmail.com</div>
                        </div>
                    </a>
                    <a href="tel:0543226447" class="contact-item">
                        <div class="contact-icon">📞</div>
                        <div>
                            <div style="color: #6b7280; font-size: 0.875rem;">טלפון</div>
                            <div>054-3226447</div>
                        </div>
                    </a>
                </div>
                <form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
                    <div class="form-row">
                        <div class="form-group">
                            <label>שם מלא *</label>
                            <input type="text" name="name" required placeholder="השם שלך">
                        </div>
                        <div class="form-group">
                            <label>טלפון *</label>
                            <input type="tel" name="phone" required placeholder="050-0000000">
                        </div>
                    </div>
                    <div class="form-group">
                        <label>אימייל *</label>
                        <input type="email" name="email" required placeholder="your@email.com">
                    </div>
                    <div class="form-group">
                        <label>הודעה *</label>
                        <textarea name="message" required placeholder="ספרו לי על הארגון ומה אתם מחפשים..."></textarea>
                    </div>
                    <button type="submit" class="submit-btn">שלח הודעה</button>
                </form>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="footer-content">
            <div>
                <div class="footer-title">
                    <span class="gold">יהונתן</span> אוחנה
                </div>
                <div class="footer-subtitle">מפקד כיתה בגבעתי • מרצה • השראה</div>
            </div>
            <div class="social-links">
                <a href="https://www.instagram.com/yehonatan_ohana/" target="_blank" class="social-link">📷</a>
                <a href="mailto:yehonatan2210@gmail.com" class="social-link">✉️</a>
                <a href="tel:0543226447" class="social-link">📞</a>
            </div>
        </div>
        <div style="text-align: center; margin-top: 2rem; padding-top: 2rem; border-top: 1px solid rgba(255, 255, 255, 0.05);">
            <p class="footer-quote">"חייכו כי חיוך זה שמחה ושמחה זה הכח להמשיך"</p>
            <p style="color: #4b5563; font-size: 0.75rem; margin-top: 1rem;">
                © 2025 יהונתן אוחנה. כל הזכויות שמורות.
            </p>
        </div>
    </footer>

    <!-- Lightbox -->
    <div class="lightbox" id="lightbox">
        <button class="lightbox-close" onclick="closeLightbox()">×</button>
        <img id="lightbox-img" src="" alt="">
    </div>

    <script>
        // Gallery Images
        const galleryImages = [
            { src: 'https://yehonatan.online/images/beret.jpg', alt: 'ברט' },
            { src: 'https://yehonatan.online/images/team.jpg', alt: 'החיילים' },
            { src: 'https://yehonatan.online/images/newspaper.jpg', alt: 'כתבה בעיתון' },
            { src: 'https://yehonatan.online/images/portrait1.jpg', alt: 'פורטרט 1' },
            { src: 'https://yehonatan.online/images/portrait2.jpg', alt: 'פורטרט 2' },
            { src: 'https://yehonatan.online/images/fallen.jpg', alt: 'החברים שנפלו' },
            { src: 'https://yehonatan.online/images/IMG-20250717-WA0150.jpg', alt: 'תמונה 1' },
            { src: 'https://yehonatan.online/images/IMG-20250717-WA0151.jpg', alt: 'תמונה 2' },
            { src: 'https://yehonatan.online/images/IMG-20250717-WA0152.jpg', alt: 'תמונה 3' },
            { src: 'https://yehonatan.online/images/IMG-20250717-WA0153.jpg', alt: 'תמונה 4' },
            { src: 'https://yehonatan.online/images/IMG-20250717-WA0154.jpg', alt: 'תמונה 5' },
            { src: 'https://yehonatan.online/images/IMG-20250717-WA0155.jpg', alt: 'תמונה 6' },
            { src: 'https://yehonatan.online/images/IMG-20250717-WA0156.jpg', alt: 'תמונה 7' },
            { src: 'https://yehonatan.online/images/IMG-20250717-WA0149.jpg', alt: 'תמונה 8' },
        ];

        // Load Gallery
        const galleryGrid = document.getElementById('gallery-grid');
        galleryImages.forEach((img, index) => {
            const div = document.createElement('div');
            div.className = 'gallery-item';
            div.onclick = () => openLightbox(img.src);
            div.innerHTML = \`<img src="\${img.src}" alt="\${img.alt}" loading="lazy">\`;
            galleryGrid.appendChild(div);
        });

        // Lightbox
        function openLightbox(src) {
            document.getElementById('lightbox').classList.add('active');
            document.getElementById('lightbox-img').src = src;
            document.body.style.overflow = 'hidden';
        }

        function closeLightbox() {
            document.getElementById('lightbox').classList.remove('active');
            document.body.style.overflow = '';
        }

        document.getElementById('lightbox').addEventListener('click', function(e) {
            if (e.target === this) closeLightbox();
        });

        // FAQ Toggle
        document.querySelectorAll('.faq-question').forEach(btn => {
            btn.addEventListener('click', () => {
                const item = btn.parentElement;
                const wasActive = item.classList.contains('active');
                
                document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
                
                if (!wasActive) {
                    item.classList.add('active');
                }
            });
        });

        // Open first FAQ by default
        document.querySelector('.faq-item').classList.add('active');

        // Smooth scroll offset for fixed header
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
    </script>
</body>
</html>`;

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <h1 className="text-3xl font-bold mb-4 text-gray-900">קובץ HTML סטטי מוכן להורדה</h1>
          <p className="text-gray-700 mb-6">
            הקובץ מוכן להעלאה ל-S3 AWS. העתק את כל התוכן למטה ושמור כקובץ <code className="bg-gray-100 px-2 py-1 rounded">index.html</code>
          </p>
          
          <div className="bg-gray-50 border border-gray-200 rounded p-4 mb-4">
            <h2 className="font-semibold mb-2 text-gray-900">הוראות העלאה ל-AWS S3:</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>העתק את כל הקוד למטה</li>
              <li>שמור כקובץ <code className="bg-gray-100 px-1 rounded">index.html</code></li>
              <li>העלה ל-S3 bucket</li>
              <li>הפעל Static Website Hosting ב-S3</li>
              <li>הגדר את index.html כ-Index Document</li>
            </ol>
          </div>

          <button
            onClick={() => {
              navigator.clipboard.writeText(htmlContent);
              alert('הקוד הועתק ללוח!');
            }}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors mb-4"
          >
            📋 העתק את כל הקוד
          </button>
        </div>

        <div className="bg-gray-900 rounded-lg p-6">
          <pre className="text-gray-100 text-sm overflow-x-auto whitespace-pre-wrap break-words">
            {htmlContent}
          </pre>
        </div>
      </div>
    </div>
  );
}