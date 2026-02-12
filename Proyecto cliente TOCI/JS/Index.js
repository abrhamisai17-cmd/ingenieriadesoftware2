        // Animación inicial hero
        window.addEventListener('DOMContentLoaded', () => {
            const elements = [
                document.querySelector('.hero-eyebrow'),
                document.querySelector('.hero-title'),
                document.querySelector('.hero-subtitle'),
                document.querySelector('.hero-actions')
            ];

            elements.forEach((el, index) => {
                setTimeout(() => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                    el.style.transition = 'all 0.9s cubic-bezier(.4,0,.2,1)';
                }, index * 220);
            });
        });

        // Scroll-Driven Storytelling
        document.addEventListener('scroll', () => {
            const track = document.querySelector('.chronicle-line-track');
            const progress = document.getElementById('progress-bar');
            const nodes = document.querySelectorAll('.chronicle-node');
            
            if (track && progress) {
                const scrollPercent = (window.scrollY - track.offsetTop + (window.innerHeight / 2)) / track.offsetHeight * 100;
                progress.style.height = `${Math.min(Math.max(scrollPercent, 0), 100)}%`;
            }

            nodes.forEach(node => {
                const rect = node.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.7) {
                    node.style.opacity = "1";
                    node.style.transform = "translateY(0)";
                    node.style.transition = "all 1.2s cubic-bezier(0.2, 1, 0.3, 1)";
                }
            });
        });

        // Inicialización de opacidad timeline
        document.querySelectorAll('.chronicle-node').forEach(n => n.style.opacity = "0");

        // Animación calidad items
        document.addEventListener('DOMContentLoaded', () => {
            const qualityItems = document.querySelectorAll('.quality-item');
            qualityItems.forEach(item => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(40px)';
                item.style.transition = 'all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)';
            });

            const observerOptions = { threshold: 0.2 };
            const qualityObserver = new IntersectionObserver((entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateY(0)';
                        }, index * 200);
                    }
                });
            }, observerOptions);

            qualityItems.forEach(item => qualityObserver.observe(item));
        });

        // Slider hero-split
        document.addEventListener('DOMContentLoaded', () => {
            const slides = document.querySelectorAll('.slide');
            let currentSlide = 0;

            function nextSlide() {
                if (slides.length > 0) {
                    slides[currentSlide].classList.remove('active');
                    currentSlide = (currentSlide + 1) % slides.length;
                    slides[currentSlide].classList.add('active');
                }
            }

            if (slides.length > 0) {
                setInterval(nextSlide, 4000);
            }
        });

        // Scroll animations compromiso
        window.addEventListener('scroll', () => {
            const scroll = window.pageYOffset;
            const section = document.querySelector('.compromiso-inmersivo');
            const bgText = document.querySelector('.bg-scroll-text');
            const img = document.querySelector('.reveal-img');
            
            if (section && bgText && img) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                
                if (scroll > sectionTop - window.innerHeight && scroll < sectionTop + sectionHeight) {
                    const moveText = (scroll - sectionTop) * 0.2;
                    bgText.style.transform = `translate(calc(-50% + ${moveText}px), -50%)`;
                    
                    const zoom = 1 + (scroll - sectionTop) * 0.0002;
                    img.style.transform = `scale(${zoom})`;
                }
            }
        });

        // Animación value items
        const valueItems = document.querySelectorAll('.value-item');
        const valueObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = "1";
                        entry.target.style.transform = "translateY(0)";
                    }, index * 200);
                }
            });
        }, { threshold: 0.5 });

        valueItems.forEach(item => {
            item.style.opacity = "0";
            item.style.transform = "translateY(30px)";
            valueObserver.observe(item);
        });

        // Animación sello y título
        window.addEventListener('scroll', () => {
            const scroll = window.pageYOffset;
            const sello = document.querySelector('.sello-autenticidad');
            const title = document.querySelector('.section-title');
            
            if(sello) {
                sello.style.transform = `translateY(${scroll * -0.05}px)`;
            }

            if (title) {
                const rect = title.getBoundingClientRect();
                if (rect.top < window.innerHeight) {
                    title.style.opacity = "1";
                    title.style.transform = "translateX(0)";
                }
            }
        });

        // Smooth scroll for nav links
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });
        });

        // Animación footer
        document.addEventListener('DOMContentLoaded', () => {
            const footer = document.querySelector('.footer-premium');
            const brand = document.querySelector('.branding-title');

            if (footer && brand) {
                const revealFooter = (entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            brand.animate([
                                { transform: 'translateY(100px)', opacity: 0 },
                                { transform: 'translateY(0)', opacity: 1 }
                            ], {
                                duration: 1200,
                                easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
                                fill: 'forwards'
                            });
                        }
                    });
                };

                const observer = new IntersectionObserver(revealFooter, { threshold: 0.1 });
                observer.observe(footer);
            }
        });