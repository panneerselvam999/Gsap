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
    stagger: 0.2,
});

gsap.to(".s-1", {
    skewX: 10,
});

gsap.to(".s-2", {
    width: 20,
});

gsap.from(".s-3", {
    x: 500,
    // scale: 6,
    rotation: 360,
    fill: "yellow",
    duration: 5,
    stagger: 0.2,
    // yoyo: ture,
});

// gsap.fromTo(".s-3",
//     {
//         x: 700,
//         y: 500,
//         opacity: 0
//     },
//     {
//         x: 500,
//         y: 200,
//         opacity: 1,
//         scale: 3,
//         rotation: 360,
//         fill: "yellow",
//         duration: 2,
//         stagger: 0.2
//     })

// special properties delay and repeat
gsap.to("h1", {
    x: 400,
    duration: 3,
    delay: 2,
    color: "green",
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
    color: "green",
});

// ease method
// document.addEventListener("DOMContentLoaded", function () {
//     // Your GSAP animation code
//     gsap.to(".ease", {
//         x: 500,
//         duration: 2,
//         ease: "linear"
//     });
// });

gsap.to("p", {
    repeat: -1,
    yoyo: true,
});
gsap.to(".linear", {
    x: 500,
    duration: 3,
    ease: "linear",
});

gsap.to(".bounce", {
    x: 500,
    duration: 3,
    ease: "bounce",
});
gsap.to(".bounce-in", {
    x: 500,
    duration: 3,
    ease: "bounce.in",
});
gsap.to(".bounce-out", {
    x: 500,
    duration: 3,
    ease: "bounce.out",
});
gsap.to(".bounce-inOut", {
    x: 500,
    duration: 3,
    ease: "bounce.inOut",
});

// elastic
gsap.to(".elastic", {
    x: 500,
    duration: 3,
    ease: "elastic",
});
gsap.to(".elastic-in", {
    x: 500,
    duration: 3,
    ease: "elastic.in",
});
gsap.to(".elastic-out", {
    x: 500,
    duration: 3,
    ease: "elastic.Out",
});
gsap.to(".elastic-inOut", {
    x: 500,
    duration: 3,
    ease: "elastic.inOut",
});



// back 
gsap.to(".back", {
    x: 500,
    duration: 3,
    ease: "back",
});
gsap.to(".back-in", {
    x: 500,
    duration: 3,
    ease: "back.in",
});
gsap.to(".back-out", {
    x: 500,
    duration: 3,
    ease: "back-out",
});
gsap.to(".back-inOut", {
    x: 500,
    duration: 3,
    ease: "back.inOut",
    startTime: 3,
    onStart: printHellow,
});

function printHellow() {
    console.log("on start");
}
// stagger

gsap.to(".stagger", {
    x: 400,
    // stagger: 1,
    // stagger: 0.5
    // stagger: 0.1,
    // staggerAxis:"y",
    // staggerDirection:"end"
    stagger: {
        each: 0.2,
        // amount:4
        // from: "end"
        // from: "center"
        from: "edges"
    }

})


// tween control - start
document.addEventListener('click', function (event) {
    if (event.target.matches('button')) {
        event.target.focus()
    }
})


var tween = gsap.to(".green", { duration: 3, x: 600, ease: "linear", paused: true });


document.getElementById("play").onclick = () => tween.play();
document.getElementById("pause").onclick = () => tween.pause();
document.getElementById("reverse").onclick = () => tween.reverse();
document.getElementById("restart").onclick = () => tween.restart();

// var img = gsap.to(".fred", {
//     x: 600,
//     ease: "bounce",
//     duration: 3,
//     paused: true
// })

// function play() {
//     img.play();
// }
// tween control - end


// timeline - start
gsap.set("#demo", {
    scale: .9,
});
gsap.timeline()
    .from("#demo", { opacity: 0, duration: 1 })
    .from("#title", { opacity: 0, scale: 0, ease: "back", duration: 2 })
    .from("#freds img", { y: 160, ease: "back", stagger: 0.1, })
    .from("#time", { xPercent: 100, })


var time = 2;

var position = gsap.timeline();
position
    .to("#star", { duration: 2, x: 500 })
    // .to("#circle", { duration: 1, x: 500 }, "-=2")
    // .to("#circle", { duration: 3, x: 500 }, "+=1")
    .to("#circle", { duration: 3, x: 500 }, 3)
    // .to("#circle", { duration: 1, x: 500 }, "time=1")
    // .to("#box", { duration: 1, x: 500 })
    // .to("#box", { duration: 1, x: 500 }, "-=1")
    // .to("#box", { duration: 1, x: 500 }, "<")
    .to("#box", { duration: 1, x: 500 }, "1")


// timeline - end