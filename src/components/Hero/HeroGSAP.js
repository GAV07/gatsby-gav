import gsap from 'gsap'

export default function Motion() {

    let tl = gsap.timeline({defaults: {duration: 1, delay: 2}})

    tl.from("#Fill-3", {y:-50, opacity: 0, delay: 1})
        .from("#Fill-4", {y:-50, opacity: 0, delay: 1})
        .from("#Fill-5", {y:-50, opacity: 0, delay: 1})
        .from("#Fill-6", {y:-50, opacity: 0, delay: 1})

}

Motion()