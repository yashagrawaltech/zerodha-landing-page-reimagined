function initLenis() {
  const lenis = new Lenis({
    wheelMultiplier: 0.8,
  });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
}

function navActions() {
  const navOpenBtn = document.querySelector(".nav .right > i");
  const navCloseBtn = document.querySelector(".nav-open > i");
  const navOpen = document.querySelector(".nav-open");

  navOpenBtn.addEventListener("click", (dets) => {
    gsap.to(navOpen, {
      display: "block",
      right: 0,
      duration: 0.5,
    });
  });
  navCloseBtn.addEventListener("click", (dets) => {
    gsap.to(navOpen, {
      right: "-100%",
      duration: 1,
    });
  });
}

function heroAnimation() {
  const tl = gsap.timeline({
    ease: Power4,
  });

  tl.to(".hero > .background", {
    opacity: 1,
    duration: 0.5,
  })
    .to(".hero > .text > .banner-1-text", {
      opacity: 1,
      duration: 0.3,
      stagger: 0.3,
    })
    .to(".hero > .circle-link", {
      opacity: 1,
      stagger: 0.3,
    })
    .to(".nav", {
      opacity: 1,
      duration: 0.3,
    });
}

function zerodhaUniverseAnimation() {
  if (window.innerWidth > 1200) {
    const numberOfSlides = document.querySelectorAll(
      ".zerodha-universe > .slides > .slide"
    ).length;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".zerodha-universe",
        scrub: true,
        start: "top top",
        end: "+=" + 5000,
        pin: true,
      },
    });
    tl.to(".zerodha-universe > .slides > .slide", {
      opacity: 1,
      duration: 0.02,
    }).to(".zerodha-universe > .slides > .slide", {
      xPercent: -300,
      ease: "none",
    });
  }
}

function investInAnythingAnimation() {
  let start = 20;
  let tl = gsap.timeline();
  if (window.innerWidth <= 1000) {
    start = 80;
    tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".invest-in-anything",
        start: `top ${start}%`,
        end: "bottom 80%",
        scrub: true,
      },
    });
  } else {
    tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".invest-in-anything",
        start: `top top`,
        end: "+=" + 2000,
        scrub: true,
        ease: "circ.out",
        pin: true,
      },
    });
  }

  tl.from(
    ".invest-in-anything .grid .part-1 .equity",
    {
      opacity: 0,
      scale: 0.5,
    },
    "a"
  )
    .from(
      ".invest-in-anything .grid .part-1 .circle",
      {
        opacity: 0,
        scale: 0.5,
      },
      "b"
    )
    .from(
      ".invest-in-anything .grid .part-1 .derivatives",
      {
        opacity: 0,
        scale: 0.5,
      },
      "c"
    )
    .from(
      ".invest-in-anything .grid .part-2",
      {
        opacity: 0,
        scale: 0.5,
      },
      "d"
    )
    .from(
      ".invest-in-anything .grid .part-3 .mutual-funds",
      {
        opacity: 0,
        scale: 0.5,
      },
      "e"
    )
    .from(
      ".invest-in-anything .grid .part-3 .and-more",
      {
        opacity: 0,
        scale: 0.5,
      },
      "f"
    );
}

function whyZerodhaBestAnimation() {
  const container = document.querySelector(".why-zerodha-best > .right");
  const wrapper = document.querySelector(
    ".why-zerodha-best > .right > .wrapper"
  );

  if (window.innerWidth > 1000) {
    // console.log(container.offsetHeight);
    // console.log(wrapper.offsetHeight);
    gsap.to(wrapper, {
      y: -(wrapper.offsetHeight - container.offsetHeight),
      ease: "none",
      scrollTrigger: {
        trigger: ".why-zerodha-best",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
      },
    });
  }
}

function zerodhaVarsityAnimation() {
  const row = document.querySelectorAll(
    ".zerodha-varsity > .wrapper > .rows > .rows-content > .row"
  );

  row.forEach((e) => {
    e.addEventListener("mousemove", (dets) => {
      gsap.to(e.querySelector(".phone-img > .p-img"), {
        x: gsap.utils.mapRange(0, window.innerWidth, -100, 100, dets.clientX),
        opacity: 1,
        rotate: 30,
        ease: Power4,
        duration: 0.5,
      });
    });
    e.addEventListener("mouseleave", (dets) => {
      gsap.to(e.querySelector(".phone-img > .p-img"), {
        opacity: 0,
        rotate: 30,
        ease: Power4,
        duration: 0.5,
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initLenis();
  navActions();
  heroAnimation();
  zerodhaUniverseAnimation();
  investInAnythingAnimation();
  whyZerodhaBestAnimation();
  zerodhaVarsityAnimation();
})

