import { gsap } from 'gsap';

export const gsapInitCustom =()=>{
  gsap.registerPlugin({
    name: 'myCustomProperty',
    init(target, value) {
      gsap.to(target, {
        x: value.x,
        backgroundColor: value.backgroundColor,
        rotate: value.rotate,
        duration: value.duration
      })
    }
  })
}