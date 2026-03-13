const translations = {
    en: {
        nav_services: "Services",
        nav_rates: "Price Guide",
        nav_impact: "Eco-Impact",
        nav_contact: "Contact",
        nav_call: "Call Now",
        hero_title: "Clean City,<br><span>Green Future</span>",
        hero_desc: "Welcome to Smart Kawaari. We provide professional waste management solutions for residential, corporate, and industrial sectors. Turn your scrap into value while saving the planet.",
        hero_wa: "WhatsApp Us",
        hero_services: "Our Services",
        services_title: "Our Premium Services",
        services_desc: "We handle all types of scrap with professional care and eco-friendly disposal methods.",
        service_plastic_title: "Plastic Recycling",
        service_plastic_desc: "From PET bottles to industrial plastics, we ensure high-quality recycling and zero waste.",
        service_metal_title: "Metal Scrap",
        service_metal_desc: "Top prices for iron, aluminum, copper, and mixed metal scrap. Instant weighing and payment.",
        service_ewaste_title: "E-Waste Management",
        service_ewaste_desc: "Certified disposal of electronic waste including old computers, phones, and appliances.",
        service_paper_title: "Paper & Cardboard",
        service_paper_desc: "Bulk collection of office paper, old newspapers, and corrugated boxes for recycling.",
        calc_title: "Calculate Your Eco-Impact",
        calc_desc: "See how much of a difference your contribution makes to the environment.",
        calc_label: "Scrap Weight (approx. kg)",
        calc_trees: "Trees Saved",
        calc_water: "Liters Water",
        calc_co2: "kg CO2 Reduced",
        footer_desc: "Leading the way in sustainable waste management. Professional service for a cleaner planet.",
        footer_links: "Quick Links",
        footer_contact: "Contact Us",
        footer_area: "Serving Delhi, NCR & Surrounding Areas"
    },
    hi: {
        nav_services: "सेवाएं",
        nav_rates: "मूल्य सूची",
        nav_impact: "पर्यावरण प्रभाव",
        nav_contact: "संपर्क करें",
        nav_call: "अभी कॉल करें",
        hero_title: "स्वच्छ शहर,<br><span>हरा-भरा भविष्य</span>",
        hero_desc: "स्मार्ट कवाड़ी में आपका स्वागत है। हम आवासीय, कॉर्पोरेट और औद्योगिक क्षेत्रों के लिए पेशेवर कचरा प्रबंधन समाधान प्रदान करते हैं। अपने कबाड़ को मूल्य में बदलें और ग्रह को बचाएं।",
        hero_wa: "व्हाट्सएप करें",
        hero_services: "हमारी सेवाएं",
        services_title: "हमारी प्रीमियम सेवाएं",
        services_desc: "हम पेशेवर देखभाल और पर्यावरण के अनुकूल निपटान विधियों के साथ सभी प्रकार के कबाड़ को संभालते हैं।",
        service_plastic_title: "प्लास्टिक पुनर्चक्रण",
        service_plastic_desc: "पीईटी बोतलों से लेकर औद्योगिक प्लास्टिक तक, हम उच्च गुणवत्ता वाले पुनर्चक्रण और शून्य कचरा सुनिश्चित करते हैं।",
        service_metal_title: "धातु कबाड़ (Metal)",
        service_metal_desc: "लोहा, एल्यूमीनियम, तांबा और मिश्रित धातु कबाड़ के लिए सर्वोत्तम मूल्य। तुरंत तौल और भुगतान।",
        service_ewaste_title: "ई-कचरा प्रबंधन",
        service_ewaste_desc: "पुराने कंप्यूटर, फोन और उपकरणों सहित इलेक्ट्रॉनिक कचरे का प्रमाणित निपटान।",
        service_paper_title: "कागज और कार्डबोर्ड",
        service_paper_desc: "पुनर्चक्रण के लिए कार्यालय के कागज, पुराने समाचार पत्रों और गत्ते के बक्सों का भारी संग्रह।",
        calc_title: "अपने पर्यावरण प्रभाव की गणना करें",
        calc_desc: "देखें कि आपका योगदान पर्यावरण के लिए कितना बड़ा बदलाव लाता है।",
        calc_label: "कबाड़ का वजन (लगभग किलो)",
        calc_trees: "पेड़ बचाए गए",
        calc_water: "लीटर पानी",
        calc_co2: "किलो CO2 कम किया",
        footer_desc: "सतत कचरा प्रबंधन में अग्रणी। स्वच्छ ग्रह के लिए पेशेवर सेवा।",
        footer_links: "त्वरित लिंक",
        footer_contact: "संपर्क करें",
        footer_area: "दिल्ली, एनसीआर और आसपास के क्षेत्रों में सेवा"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Language Switcher Logic
    const langSwitch = document.getElementById('langSwitch');
    let currentLang = 'en';

    function updateLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translations[lang][key];
                } else {
                    el.innerHTML = translations[lang][key];
                }
            }
        });
        document.documentElement.lang = lang;
    }

    langSwitch.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'hi' : 'en';
        langSwitch.textContent = currentLang === 'en' ? 'हिन्दी' : 'English';
        updateLanguage(currentLang);
    });

    // Eco-Impact Calculator
    const weightRange = document.getElementById('weightRange');
    const weightValue = document.getElementById('weightValue');
    const treesSaved = document.getElementById('treesSaved');
    const waterSaved = document.getElementById('waterSaved');
    const co2Reduced = document.getElementById('co2Reduced');

    weightRange.addEventListener('input', (e) => {
        const value = e.target.value;
        weightValue.textContent = value;
        
        treesSaved.textContent = (value * 0.1).toFixed(1);
        waterSaved.textContent = (value * 25).toLocaleString();
        co2Reduced.textContent = (value * 0.3).toFixed(1);
    });

    // Reveal on Scroll
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.service-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 50) {
            header.style.padding = '0.5rem 0';
            header.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.padding = '1rem 0';
            header.style.boxShadow = 'none';
        }
    });
});
