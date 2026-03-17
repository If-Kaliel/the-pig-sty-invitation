gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

const smoother = ScrollSmoother.create({
    smooth: 1.5,
    effects: true
});

function animarPagina() {
   
    gsap.from(".hero", { opacity: 0, duration: 1 });
    gsap.from(".hero picture:nth-child(1)", { y: -60, duration: 1.5, ease: "power2.out" });
    gsap.from(".hero picture:nth-child(2)", { y: 60, duration: 1.5, ease: "power2.out" });


    gsap.from(".card", {
        opacity: 0,
        y: 50,
        filter: "blur(10px)",
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".cards",
            start: "top 85%",
            end: "bottom 70%",
            scrub: true,
        }
    });

 
    gsap.from(".secaoObrigado ul li", {
        opacity: 0,
        x: 40,
        filter: "blur(10px)",
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".secaoObrigado",
            start: "top 80%",
            end: "bottom 60%",
            scrub: true,
        }
    });

  
    const elementosSplit = document.querySelectorAll(".textoSplit");
    elementosSplit.forEach(paragrafo => {
        const split = new SplitText(paragrafo, { type: "chars, words" });
        gsap.from(split.chars, {
            opacity: 0,
            y: 20,
            duration: 0.6,
            stagger: 0.02,
            scrollTrigger: {
                trigger: paragrafo,
                start: "top 90%",
            }
        });
    });
}


window.addEventListener("load", () => {
    const tl = gsap.timeline({
        onComplete: animarPagina
    });

    tl.to("#preloader img", { scale: 1.2, duration: 0.5, yoyo: true, repeat: 1 })
      .to("#preloader", { 
          opacity: 0, 
          display: "none", 
          duration: 0.5 
      });
});