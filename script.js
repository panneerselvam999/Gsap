gsap.to("h1", {
    x: 400,
    duration: 3,
    color: "green"
});


gsap.to(".star", {
    x: 500,
    // scale: 6,
    rotation: 360,
    fill: "yellow",
    duration: 5,
    stagger: 0.2
})


gsap.to(".s-1", {
    skewX: 10,
})

gsap.to(".s-2", {
    width: 20
})
