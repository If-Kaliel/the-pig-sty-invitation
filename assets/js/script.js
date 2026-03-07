gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// Inicializa o ScrollSmoother
const smoother = ScrollSmoother.create({
    smooth: 1.5,
    effects: true
});

function animarPagina() {
    // Hero Animation
    const tlHero = gsap.timeline();
    tlHero.from(".hero", { opacity: 0, duration: 1 })
          .from(".hero-bg picture", { y: (i) => i ? 60 : -60, duration: 1.2, ease: "power2.out" }, "-=0.8");

    // Cards Animation
    gsap.from(".card", {
        opacity: 0,
        y: 50,
        filter: "blur(10px)",
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".cards-container",
            start: "top 85%",
            end: "bottom 70%",
            scrub: true
        }
    });

    // Social Section Animation
    gsap.from(".social-list li", {
        opacity: 0,
        x: 30,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".social-list",
            start: "top 80%",
            scrub: true
        }
    });

    // SplitText simplificado e eficiente
    const textos = document.querySelectorAll(".textoSplit");
    textos.forEach(texto => {
        const split = new SplitText(texto, { type: "chars, words" });
        gsap.from(split.chars, {
            scrollTrigger: {
                trigger: texto,
                start: "top 90%",
            },
            y: 20,
            opacity: 0,
            stagger: 0.02,
            duration: 0.5,
            ease: "power2.out"
        });
    });
}

// Preloader & Start
window.addEventListener("load", () => {
    const tlPreloader = gsap.timeline({
        onComplete: animarPagina
    });

    tlPreloader.to(".logo-preloader", { opacity: 1, scale: 1, duration: 0.8 })
               .to("#preloader", { 
                   yPercent: -100, 
                   duration: 0.8, 
                   ease: "expo.inOut",
                   delay: 0.5 
               })
               .set("#preloader", { display: "none" });
});