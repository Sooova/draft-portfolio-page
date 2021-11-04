gsap.registerPlugin(ScrollTrigger);

gsap.to(".scrollIndicator", {
    scrollTrigger: {
        trigger:".suvaDiv",
        start:"top center",
        scrub:1,
        // markers: true,
    },
    opacity:0,
    duration:1,
})

gsap.to(".babyImageContainer", {
    scrollTrigger: {
        trigger:".babyImageContainer",
        scrub: 1,

    },
    rotation: 15,
    
    duration: 1
})

gsap.to(".keyboardImageContainer", {
    scrollTrigger: {
        trigger:".babyImageContainer",
        scrub: 1,

    },
    rotation: -15,
    duration: 1
})

gsap.to(".aboutHeading", {
    scrollTrigger: {
        trigger: ".aboutText",
        scrub:1,
    },
    opacity:1
})

gsap.to(".box", {
    scrollTrigger: {
        trigger: ".keyboardImageContainer",
        start: "top center",
        end: "center",
        scrub:0.5
    },
    scale:1
})

gsap.to(".js", {
    scrollTrigger: {
        trigger: ".keyboardImageContainer",
        start: "top center",
        end: "center",
        // toggleActions: "restart ",
        // markers: true,
        scrub: 0.5,
    },
    y: -250,
    rotation: 45
})

gsap.to(".css", {
    scrollTrigger: {
        trigger: ".keyboardImageContainer",
        end: "center",
        start: "top center",
        // toggleActions: "restart ",
        // markers: true,
        scrub: 0.5,
    },
    y: -210,
    x: 70,
    rotation: 30,
    duration: 1
})


gsap.to(".html5", {
    scrollTrigger: {
        trigger: ".keyboardImageContainer",
        end: "center",
        start: "top center",
        // toggleActions: "restart ",
        // markers: true,
        scrub: 0.5,
    },
    y: -180,
    rotation:-30,
    x:-20,
    duration: 0.1

})

gsap.to(".node", {
    scrollTrigger: {
        trigger: ".keyboardImageContainer",
        end: "center",
        // start: "top center",
        // toggleActions: "restart ",
        // markers: true,
        scrub: 0.5,
    },
    y: -100,
    rotation:-15,
    x:9,
    duration: 0.1

})

gsap.to(".handlebars", {
    scrollTrigger: {
        trigger: ".keyboardImageContainer",
        end: "center",
        // start: "top center",
        // toggleActions: "restart ",
        // markers: true,
        scrub: 0.5,
    },
    y: -200,
    rotation:30,
    x:150,
    duration: 0.1

})

gsap.to(".express", {
    scrollTrigger: {
        trigger: ".keyboardImageContainer",
        end: "center",
        start: "top center",
        // toggleActions: "restart ",
        // markers: true,
        scrub: 0.5,
    },
    y: -165,
    rotation:-20,
    x:-100,
    duration: 0.1

})

gsap.to(".work", {
    scrollTrigger: {
        trigger: ".work",
        end: "bottom",
        start: "top top",
        // toggleActions: "restart ",
        // markers: true,
        scrub: 0.5,
    },
    opacity: 1,
    duration:0.5,
    ease: "slow(0.7,0.7,false)",

})

gsap.to(".workContainer", {
    scrollTrigger: {
        trigger: ".work",
        end: "bottom",
        start: "top top",
        // toggleActions: "restart ",
        // markers: true,
        scrub: 0.5,
    },
    opacity: 1,
    duration:1,
    ease: "slow(0.7,0.7,false)",

})

gsap.to(".contactStart", {
    scrollTrigger: {
        trigger: ".contactStart",
        // end: "bottom",
        start: "top top",
        // toggleActions: "restart ",
        // markers: true,
        scrub: 0.5,
    },
    opacity: 0,
    duration:0.5,
    ease: "slow(0.7,0.7,false)",

})

// gsap.to(".contactHeading", {
//     scrollTrigger: {
//         trigger: ".contactHeading",
//         // end: "bottom",
//         start: "top top",
//         // toggleActions: "restart ",
//         // markers: true,
//         scrub: 0.5,
//     },
//     opacity: 0,
//     duration:0.5,
//     ease: "slow(0.7,0.7,false)",

// })

const goToGithub = function(event) {
    const target = event.target.id;
    if (target == 'ydfm') {
        window.open('https://github.com/Sooova/your-daily-5-minutes', '_blank').focus();
    }
    else if (target =='ww') {
        window.open('https://github.com/Sooova/super-duper-bassoon', '_blank').focus();
    }
    else if (target == 'canban') {
        window.open('https://github.com/Sooova/Canban.io', '_blank').focus();
    }
}

