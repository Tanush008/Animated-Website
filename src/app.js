function homeAnimation() {
  gsap.set(".slidesm", {
    scale: 5,
  });
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".home",
      start: "top top",
      end: "bottom bottom",
      scrub: 2,
    },
  });
  tl.to(
    ".vdodiv",
    {
      "--clip": "0%",
      ease: Power2,
    },
    "a"
  );
  tl.to(
    ".slidesm",
    {
      scale: 1,
      ease: Power2,
    },
    "a"
  );
  tl.to(
    ".lft",
    {
      xPercent: -10,
      staggered: 0.03,
      ease: Power4,
    },
    "b"
  );
  tl.to(
    ".rgt",
    {
      xPercent: 10,
      staggered: 0.03,
      ease: Power4,
    },
    "b"
  );
}
function realAnimation() {
  gsap.to(".slide", {
    scrollTrigger: {
      trigger: ".cont",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
    },
    xPercent: -200,
    ease: Power2,
  });
}
function teamAnimation() {
  document.querySelectorAll(".listelem").forEach(function (el) {
    el.addEventListener("mousemove", function (dets) {
      gsap.to(this.querySelector(".picture"), {
        opacity: 1,
        ease: Power2,
        x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
        duration: 0.08,
      });
    });
    el.addEventListener("mouseleave", function (dets) {
      gsap.to(this.querySelector(".picture"), {
        opacity: 0,
        ease: Power4,
        duration: 0.4,
      });
    });
  });
}
function textAnimation() {
  var clutter = "";
  document
    .querySelector(".textPara")
    .textContent.split("")
    .forEach(function (e) {
      if (e === " ") {
        clutter += `<span>&nbsp;</span>`;
      }
      clutter += `<span>${e}</span>`;
    });
  document.querySelector(".textPara").innerHTML = clutter;
  gsap.set(".textPara span", { opacity: 0.1 });
  gsap.to(".textPara span", {
    scrollTrigger: {
      trigger: ".para",
      start: "top 50%",
      end: "bottom 80%",
      scrub: 1,
    },
    opacity: 1,
    ease: Power4,
    stagger: 0.03,
  });
}
function loco() {
  (function () {
    const locomotiveScroll = new LocomotiveScroll();
  })();
}
function capsules() {
  gsap.to(".capsules :nth-child(2)", {
    scrollTrigger: {
      trigger: ".capsule",
      start: "top 80%",
      end: "bottom bottom",
      scrub: 1,
    },
    ease: Power4,
    y: 0,
  });
}
function colorAnimation() {
  document.querySelectorAll(".section").forEach(function (e) {
    ScrollTrigger.create({
      trigger: e,
      start: "top 50%",
      end: "bottom 50%",
      onEnter: function () {
        document.body.setAttribute("theme", e.dataset.color);
      },
      onEnterBack: function () {
        document.body.setAttribute("theme", e.dataset.color);
      },
    });
  });
}
loco();
colorAnimation();
textAnimation();
teamAnimation();
realAnimation();
homeAnimation();
capsules();
