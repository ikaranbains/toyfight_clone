// locomotive smooth scrolling

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


// Image mover function

let main = document.querySelector("#main");
let image = document.querySelector("#page>#who-img>img");

main.addEventListener("mousemove", function (dets) {
    image.style.top = 1 - dets.y * 0.03 + "px";
    image.style.left = 1 - dets.x * 0.03 + "px";
})


function lastPageAnim() {
    var tl = gsap.timeline();

    tl.to(".anim-hand", {
        scrollTrigger: {
            trigger: ".anim-hand",
            start: "2% top",
            end: "bottom top",
            scrub: true,
        },
        opacity: 1,
        y: 0,
        ease: Expo.easeInOut,
        duration: 1
    })

    // tl.to("#page3", {
    //     scrollTrigger: {
    //         trigger: "#page3",
    //         start: "top top",
    //         end: "bottom top",
    //         pin: true,
    //         scroller: "#main"
    //     }
    // })
}

lastPageAnim();



gsap.registerPlugin(ScrollTrigger);

// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
scroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => scroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();










// line animation under center nav links  (didn't work)


// const nav = document.querySelector("#center-nav");

// nav.addEventListener('click', (e) => {
//     const button = e.target.closest("a");
//     if (!button) return;
//     const calcLeft = button.offsetLeft;
//     nav.style.setProperty('--left', calcLeft + 'px');
//     const calcWidth = button.offsetWidth / nav.offsetWidth;
//     nav.style.setProperty('--width', calcWidth);
// });