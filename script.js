// gsap.to("h1", {
//     x: 400,
//     duration: 3,
//     color: "green"
// });


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

gsap.from(".s-3", {
    x: 500,
    // scale: 6,
    rotation: 360,
    fill: "yellow",
    duration: 5,
    stagger: 0.2,
    // yoyo: ture,
})

gsap.fromTo(".s-3",
    {
        x: 700,
        y: 500,
        opacity: 0
    },
    {
        x: 500,
        y: 200,
        opacity: 1,
        scale: 3,
        rotation: 360,
        fill: "yellow",
        duration: 2,
        stagger: 0.2
    })

// special properties delay and repeat
gsap.to("h1", {
    x: 400,
    duration: 3,
    delay: 2,
    color: "green"
});
// gsap.to("h2", {
//     repeat: 1,
//     x: 400,
//     duration: 3,
//     delay: 2,
//     color: "green"
// });
gsap.to("h2", {
    // repeat: 1,
    repeat: -1,
    repeatDelay: 2,
    yoyo: true,
    x: 400,
    duration: 3,
    delay: 2,
    color: "green"
});
