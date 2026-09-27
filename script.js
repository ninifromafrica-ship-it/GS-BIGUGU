document.addEventListener('DOMContentLoaded', () => {
    // 1. SLIDER YA BANNER / HERO
    const slides = document.querySelectorAll('.slide');
    const nextBtn = document.getElementById('nextSlide');
    const prevBtn = document.getElementById('prevSlide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        });

        prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        });

        // Ihindura amafoto buri masegonda 6
        setInterval(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }, 6000);
    }

    // 2. GUKUMIRA GUKOPORA (PREVENT RIGHT-CLICK & COPY)
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        alert('Gukopora ibiri kuri uru rubuga rwa GS BIGUGU ntibyemewe!');
    });

    document.addEventListener('keydown', (e) => {
        // Kubuza Ctrl+C, Ctrl+U, na Ctrl+S
        if (e.ctrlKey && (e.key === 'c' || e.key === 'C' || e.key === 'u' || e.key === 'U' || e.key === 's' || e.key === 'S')) {
            e.preventDefault();
            alert('Aya mahitamo ntagukora ku rubuga rwa GS BIGUGU.');
        }
    });
});