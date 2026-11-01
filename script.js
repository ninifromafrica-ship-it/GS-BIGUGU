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

// =======================================================
// 3. KODA Z'INYONGERA: GUHUZA WEBSITE NA SUPABASE DATABASE
// =======================================================
import { createClient } from 'https://jsdelivr.net'

// Imyirondoro ya Database yawe ya nyayo
const SUPABASE_URL = 'https://supabase.co' 
const SUPABASE_ANON_KEY = 'sb_publishable_Dyd9Zy3VmuT9xtm8GMuijQ_PMN1chA5'

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

// Kohereza amakuru muri Database iyo fomu itanzwe
document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    
    if (signupForm) {
        signupForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const usernameInput = document.getElementById('username-input').value;
            const emailInput = document.getElementById('email-input').value;
            
            // Kohereza amakuru kuri Supabase
            const { data, error } = await supabase
                .from('users') // Izina rya table twakoze
                .insert([{ username: usernameInput, email: emailInput }])
            
            if (error) {
                alert('Byanze! Error: ' + error.message);
                console.error(error);
            } else {
                alert('Byakunze! Umukoresha yajyeze muri database ya GS BIGUGU.');
                signupForm.reset(); // Guhanagura fomu
            }
        });
    }
});
