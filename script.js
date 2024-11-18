function changeLanguage(lang) {
    // نصوص الصفحة باللغات الأربع
    const texts = {
        de: {
            "hero-heading": "Willkommen bei Boden Eleganz",
            "hero-paragraph": "Laminat & Vinyl, Malerarbeiten für Ihre Räumlichkeiten – Professionell ausgeführt",
            "cta-btn-text": "Unsere Leistungen entdecken",
            "leistungen-heading": "Unsere Leistungen",
            "leistung-card-1": "Malerarbeiten",
            "leistung-card-2": "Bodenbeläge",
            "kontakt-heading": "Kontakt",
            "contact-phone": "+49 123 456 789",
            "contact-email": "info@bodeneleganz.de",
            "contact-address": "Musterstraße 123, 10115 Berlin",
            "footer-text": "&copy; 2024 Boden Eleganz | Alle Rechte vorbehalten"
        },
        en: {
            "hero-heading": "Welcome to Boden Elegance",
            "hero-paragraph": "Laminate & Vinyl, Painting works for your spaces – Professionally executed",
            "cta-btn-text": "Discover Our Services",
            "leistungen-heading": "Our Services",
            "leistung-card-1": "Painting Works",
            "leistung-card-2": "Flooring",
            "kontakt-heading": "Contact",
            "contact-phone": "+49 123 456 789",
            "contact-email": "info@bodeneleganz.de",
            "contact-address": "Musterstraße 123, 10115 Berlin",
            "footer-text": "&copy; 2024 Boden Eleganz | All Rights Reserved"
        },
        tr: {
            "hero-heading": "Boden Eleganz'a Hoşgeldiniz",
            "hero-paragraph": "Laminate & Vinil, Mekanlarınız için Boya Çalışmaları – Profesyonelce yapılmış",
            "cta-btn-text": "Hizmetlerimizi Keşfedin",
            "leistungen-heading": "Hizmetlerimiz",
            "leistung-card-1": "Boya Çalışmaları",
            "leistung-card-2": "Zemin Kaplamaları",
            "kontakt-heading": "İletişim",
            "contact-phone": "+49 123 456 789",
            "contact-email": "info@bodeneleganz.de",
            "contact-address": "Musterstraße 123, 10115 Berlin",
            "footer-text": "&copy; 2024 Boden Eleganz | Tüm Hakları Saklıdır"
        },
        ar: {
            "hero-heading": "مرحبًا بكم في Boden Eleganz",
            "hero-paragraph": "أرضيات لامينيت وفينيل، وأعمال طلاء للمساحات الخاصة بك – تنفيذ احترافي",
            "cta-btn-text": "اكتشف خدماتنا",
            "leistungen-heading": "خدماتنا",
            "leistung-card-1": "أعمال الطلاء",
            "leistung-card-2": "أرضيات",
            "kontakt-heading": "اتصل بنا",
            "contact-phone": "+49 123 456 789",
            "contact-email": "info@bodeneleganz.de",
            "contact-address": "شارع Muster 123، 10115 برلين",
            "footer-text": "&copy; 2024 Boden Eleganz | جميع الحقوق محفوظة"
        }
    };

    // تغيير النصوص في الصفحة حسب اللغة المختارة
    document.querySelector('.hero h1').textContent = texts[lang]["hero-heading"];
    document.querySelector('.hero p').textContent = texts[lang]["hero-paragraph"];
    document.querySelector('.cta-btn').textContent = texts[lang]["cta-btn-text"];
    document.querySelector('#leistungen h2').textContent = texts[lang]["leistungen-heading"];
    document.querySelectorAll('.leistung-card h3')[0].textContent = texts[lang]["leistung-card-1"];
    document.querySelectorAll('.leistung-card h3')[1].textContent = texts[lang]["leistung-card-2"];
    document.querySelector('#kontakt h2').textContent = texts[lang]["kontakt-heading"];
    document.querySelector('.contact-info p:nth-of-type(1)').innerHTML = `<i class="fas fa-phone-alt"></i> Telefon: <a href="tel:+49123456789">${texts[lang]["contact-phone"]}</a>`;
    document.querySelector('.contact-info p:nth-of-type(2)').innerHTML = `<i class="fas fa-envelope"></i> Email: <a href="mailto:info@bodeneleganz.de">${texts[lang]["contact-email"]}</a>`;
    document.querySelector('.contact-info p:nth-of-type(3)').innerHTML = `<i class="fas fa-map-marker-alt"></i> Adresse: ${texts[lang]["contact-address"]}`;
    document.querySelector('footer p').innerHTML = texts[lang]["footer-text"];
}
