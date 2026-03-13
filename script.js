document.addEventListener('DOMContentLoaded', () => {
    // Eco-Impact Calculator
    const weightRange = document.getElementById('weightRange');
    const weightValue = document.getElementById('weightValue');
    const treesSaved = document.getElementById('treesSaved');
    const waterSaved = document.getElementById('waterSaved');
    const co2Reduced = document.getElementById('co2Reduced');

    weightRange.addEventListener('input', (e) => {
        const value = e.target.value;
        weightValue.textContent = value;
        
        // Simulating some impact metrics
        treesSaved.textContent = (value * 0.1).toFixed(1);
        waterSaved.textContent = (value * 25).toLocaleString();
        co2Reduced.textContent = (value * 0.3).toFixed(1);
    });

    // Reveal on Scroll
    const observerOptions = {
        threshold: 0.1
    };

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
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Header reveal
    let lastScroll = 0;
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            header.style.padding = '0.5rem 0';
            header.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.padding = '1rem 0';
            header.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });
});
