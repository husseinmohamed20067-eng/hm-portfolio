// ==========================================================
// HM Portfolio — Main Script
// Static site version (no Flask / server-side dependencies)
// ==========================================================

console.log("🚀 HM Portfolio Loaded Successfully");

document.addEventListener("DOMContentLoaded", () => {

    /* ================= SCROLL REVEAL (sections) ================= */
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll("section").forEach((section) => {
        section.classList.add("hidden");
        revealObserver.observe(section);
    });

    /* ================= NAVBAR BACKGROUND ON SCROLL ================= */
    const nav = document.querySelector(".navbar");
    if (nav) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                nav.style.background = "rgba(0,0,0,.95)";
            } else {
                nav.style.background = "rgba(7,7,7,.7)";
            }
        });
    }

    /* ================= MOBILE NAV TOGGLE ================= */
    const navToggle = document.getElementById("navToggle");
    const navLinks = document.querySelector(".nav-links");

    if (navToggle && navLinks) {
        navToggle.addEventListener("click", () => {
            navToggle.classList.toggle("active");
            navLinks.classList.toggle("active");
        });

        // Close mobile menu when a link is clicked
        navLinks.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                navToggle.classList.remove("active");
                navLinks.classList.remove("active");
            });
        });
    }

    /* ================= LOADER ================= */
    const loader = document.getElementById("loader");
    if (loader) {
        window.addEventListener("load", () => {
            setTimeout(() => {
                loader.style.opacity = "0";
                loader.style.visibility = "hidden";
            }, 700);
        });
        // Safety net in case the "load" event already fired or is delayed
        setTimeout(() => {
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
        }, 3000);
    }

    /* ================= TYPING EFFECT ================= */
    const typingEl = document.getElementById("typing");
    if (typingEl && typeof Typed !== "undefined") {
        new Typed("#typing", {
            strings: [
                "Data Analyst",
                "Power BI Developer",
                "Excel Dashboard Expert",
                "Python Developer"
            ],
            typeSpeed: 70,
            backSpeed: 40,
            backDelay: 1800,
            loop: true
        });
    }

    /* ================= 3D TILT EFFECT ================= */
    const tiltTargets = document.querySelectorAll(".card, .project-card");
    if (tiltTargets.length && typeof VanillaTilt !== "undefined") {
        VanillaTilt.init(tiltTargets, {
            max: 12,
            speed: 400,
            glare: true,
            "max-glare": 0.25,
            scale: 1.03
        });
    }

    /* ================= COUNTERS ================= */
    const counters = document.querySelectorAll(".counter");
    if (counters.length) {
        const animateCounter = (counter) => {
            const target = +counter.getAttribute("data-target");
            const update = () => {
                const count = +counter.innerText.replace(/\D/g, "") || 0;
                const increment = Math.max(target / 100, 1);
                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    requestAnimationFrame(() => setTimeout(update, 20));
                } else {
                    counter.innerText = target + "+";
                }
            };
            update();
        };

        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach((counter) => counterObserver.observe(counter));
    }

    /* ================= BACK TO TOP ================= */
    const backToTop = document.getElementById("backToTop");
    if (backToTop) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                backToTop.classList.add("show");
            } else {
                backToTop.classList.remove("show");
            }
        });

        backToTop.addEventListener("click", (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    /* ================= SCROLLREVEAL (extra flourish) ================= */
    if (typeof ScrollReveal !== "undefined") {
        const sr = ScrollReveal();

        sr.reveal(".skill-card", {
            distance: "60px",
            duration: 1200,
            origin: "bottom",
            interval: 150
        });

        sr.reveal(".project-card", {
            distance: "60px",
            duration: 1200,
            origin: "bottom",
            interval: 200
        });

        sr.reveal(".about-content", {
            distance: "80px",
            duration: 1200,
            origin: "left"
        });

        sr.reveal(".hero-image", {
            distance: "80px",
            duration: 1200,
            origin: "right"
        });
    }

});
