gsap.set(".slidesm", {
  scale: 5,
});
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".home",
    start: "top top",
    end: "bottom top",
    scrub: 2,
    pin: true,
  },
});
tl.to(".vdodiv", {
  "--clip": "0%",
  ease: Power2,
},"a");
tl.to(".slidesm",{
    scale: 1,
    ease:Power2
},"a")
tl.to(".lft",{
    xPercent:-10,
    staggered:.03,
    ease:Power4
},"b")
tl.to(".rgt",{
    xPercent:10,
    staggered:.03,
    ease:Power4
},"b")