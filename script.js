// Centralized, defensive initialization
document.addEventListener('DOMContentLoaded', () => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Robot icon click animation (if present)
    const robotIcon = document.querySelector('.robot-icon');
    if (robotIcon && !prefersReduced) {
        robotIcon.addEventListener('click', function () {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = 'float 3s ease-in-out infinite';
            }, 10);
        });
    }

    // Navigation mobile (defensive)
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Fermer le menu mobile au clic sur un lien
        document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }));
    }

    // Smooth scroll (only for in-page anchors)
    if (!prefersReduced) {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (!href || href === '#') return;
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    }

// Animation des barres de compétences au scroll
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 500);
            });
        }
    });
}, observerOptions);

const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    observer.observe(skillsSection);
}

    // Animation d'apparition des éléments au scroll
    if (!prefersReduced) {
        const fadeInElements = document.querySelectorAll('.skill-card, .project-card, .about-content');
        if (fadeInElements.length) {
            const fadeInObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

            fadeInElements.forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                fadeInObserver.observe(el);
            });
        }
    }

    // Combine scroll handlers into a single listener for performance
    let lastKnownScrollY = 0;
    let ticking = false;

    function onScroll() {
        lastKnownScrollY = window.pageYOffset;
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = lastKnownScrollY;

                // Parallax hero
                const hero = document.querySelector('.hero');
                if (hero && !prefersReduced) {
                    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
                }

                // Navbar color
                const navbar = document.querySelector('.navbar');
                if (navbar) {
                    navbar.style.background = (scrolled > 100) ? 'rgba(15, 23, 42, 0.98)' : 'rgba(15, 23, 42, 0.95)';
                }

                ticking = false;
            });
            ticking = true;
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    // Set initial navbar/hero state immediately to avoid flash
    onScroll();

    // Shared: animation au scroll pour les cartes (remplace les scripts inline présents dans plusieurs pages)
    if (!prefersReduced) {
        try {
            const observerOptionsShared = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
            const sharedObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptionsShared);

            document.querySelectorAll('.competence-card, .flow-card, .result-card, .tech-category').forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                sharedObserver.observe(card);
            });
        } catch (e) {
            console.warn('Shared observer script failed:', e);
        }
    }
});

// Shared: animation au scroll pour les cartes (remplace les scripts inline présents dans plusieurs pages)
document.addEventListener('DOMContentLoaded', () => {
    try {
        const observerOptionsShared = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const sharedObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptionsShared);

        document.querySelectorAll('.competence-card, .flow-card, .result-card, .tech-category').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            sharedObserver.observe(card);
        });
    } catch (e) {
        // Defensive: if DOM APIs are not present, silently skip
        console.warn('Shared observer script failed:', e);
    }
});
