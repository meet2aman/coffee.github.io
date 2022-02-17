AOS.init();







gsap.from('.header',{duration:1.5 , opacity:0, ease:'power2.out', y:-50})


gsap.from('.hero__content',{duration:1 , opacity:0, ease:'power2.out', y:-100,delay:1})


gsap.from('.buy-now',{duration:1.3 , opacity:0, ease:'power2.out', x:-100,delay:1.2})


gsap.from('.hero__scroll-btn',{duration:1.3,  ease:'bounce', y:"-1000",delay:1.5,opacity:1})




gsap.from('.steps__content-width',{duration:1.3 , opacity:0, ease:'power2.out', x:100,delay:0.8})


gsap.from('.hero__scroll-btn2',{duration:1.3,  ease:'power2.out', y:"-100",delay:1.5,opacity:0})

gsap.from('.img2',{duration:1.3 , opacity:0, ease:'power2.out', x:100,delay:0.8})


gsap.from('.steps__content-width2',{duration:1.3 , opacity:0, ease:'power2.out', x:-100,delay:0.8})

gsap.from('.hero__scroll-btn4',{duration:1.3,  ease:'power2.out', y:"-100",delay:1.5,opacity:0})

gsap.from('.img3',{duration:1.3 , opacity:0, ease:'power2.out', x:-100,delay:0.8})



// gsap.registerPlugin(ScrollTrigger);


// gsap.to(".img1",{
//     scrollTrigger:{
//         trigger:".img1",
//         start:"top center",
//         markers:"ture",
//         toggleActions:"restart none reverse none",
//     },
//     x:"-100%",
//     duration:1.3,
//     opacity:1,


// })