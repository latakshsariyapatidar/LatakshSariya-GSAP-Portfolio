
let timeline = gsap.timeline();

timeline.from('#nav h3', {
    y:-100,
    opacity:0,
    duration:0.3,
    stagger:0.3
})

timeline.from('#hero h1', {
    x:-500,
    duration:0.5,
    opacity:0,
    stagger:0.2
})

timeline.from('img', {
    x:100,
    rotate:30,
    stagger:0.5,
    duration:0.3,
    opacity:0
})

timeline.from('#down-img', {
    y:100,
    opacity:0,
    duration:0.5,

})

