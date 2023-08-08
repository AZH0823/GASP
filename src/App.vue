<script setup>
// compostion API 全域引入
import { onMounted, inject, ref } from 'vue';
import { gsapInitCustom } from './assets/js/gaspCustom/Custom'
const $gsap = inject('$gsap');
let tween = null
let ctx = null
let tl
 = null
const boxMoveWithTo = ref(null)
console.log($gsap); // 檢查 $gsap 是否為 undefined 或正確註冊

onMounted(() => {
  // console.log($gsap)
  ctx = canvas.value.getContext("2d");
  ctx.fillStyle = "#28a92b";
  gsapInitCustom()
  if($gsap){
    // use a class or ID ex:".box" or "#box"
    // a complex CSS selector ex:"section > .box"
    // use ref data
    tween = $gsap.from(".viewBox", {
      duration: 4,
      x: () => btns.value.offsetWidth, // animate by the px width of the nav
      xPercent: -100, // offset by the width of the box
      rotation: 360,
      ease: "none",
      paused: true,
     
    });
    $gsap.to(boxMoveWithTo.value, { rotation: 27, x: 100, fill: 'blue', duration: .75,
              yoyo: true,
              ease: "power1.inOut",
              stagger: {
                    amount: 1.5,
                    grid: "auto",
                    from: "center"
              },
               repeat: -1,
               repeatDelay: .32,
    })

    $gsap.from(".form", { x: -100, fill: 'blue', duration: 1.5 });
    $gsap.fromTo(".fromTo", { x: () => {
      console.log('byCallback: ', window.innerWidth / 2)
      return window.innerWidth / 2
    }, fill: 'blue', }, { x: 100, fill: 'green', duration: 1.5, rotation: 360, duration: 2, ease: "bounce.out" });
    
    $gsap.set(".set", { x: 100, y: 50 });
    $gsap.to(".set", { duration: 0, x: 100, y: 50, fill:'pink'});

    $gsap.to(".scroll", {
      rotation: 900,
      duration: 1,
      scrollTrigger: {
        trigger: '.box',
        scrub: 2,
        markers: true,
      }
    });

    $gsap.to('.custom', {
      myCustomProperty: {
        x: 100,
        backgroundColor: 'red',
        rotate: 360,
        duration: 3
      }
    })
     tl = $gsap.timeline({ repeat: -1, repeatDelay: .5, yoyo: true })
    tl.to(".box.purple", { rotation: 360 });
    tl.to(".box.purple", { scale: 2.2 });
    tl.to(".box.purple", { rotation: -360 });
  }
  
 
})

// const AnimTimeline1 = 
const clickHandle = (element)=>{
  $gsap.to(`.${element}`, {
    duration: 0.5,
    opacity: 0,
    y: -100,
    stagger: 0.1,
    ease: "back.in"
  });
}

const playAnimHandler = (element)=>{

}


// play pause resume reverse restart
const btns = ref(null)

const clickModeHandler = (mode)=>{
  switch (mode) {
    case 'pause':
      tween.pause()
      break
    case 'resume':
      tween.resume()
      break
    case 'reverse':
      tween.reverse()
      break
    case 'restart':
      tween.restart()
      break
    default:
      tween.play()
      break
  }
}

let position = { x: 0, y: 0 };
const canvas = ref(null)

//把position的x和y的值进行变化
$gsap.to(position, {
  x: 50,
  y: 50,
  duration: 4,
  // canvas需要在每一帧进行重新绘制，才会有动画效果
  onUpdate: () => {
    // 擦除canvas
    ctx.clearRect(0, 0, 500, 500);
    // 在新的位置重新绘制方块
    ctx.fillRect(position.x, position.y, 100, 100);
  }
});
</script>

<template>
  <div class="container">
    <div class="box red mt-b" ref="boxMoveWithTo">boxMoveWithTo</div>
    <div class="box green form mt-b">form</div>
    <div class="box red fromTo mt-b">fromTo</div>
    <div class="box green set mt-b cusor" @click.self="clickHandle('set')">set</div>
    <div class="box green scroll mt-b" @click="clickHandle('scroll')">scroll</div>
    <div class="box purple custom mt-b">custom</div>
  </div>     
  <div class="container mt">
    <div class="viewBox">anmintor</div>
    <div class="btns" ref="btns">
      <button id="play" @click="clickModeHandler('play')">play()</button>
      <button id="pause" @click="clickModeHandler('pause')">pause()</button>
      <button id="resume" @click="clickModeHandler('resume')">resume()</button>
      <button id="reverse" @click="clickModeHandler('reverse')">reverse()</button>
      <button id="restart" @click="clickModeHandler('restart')">restart()</button>
    </div>
  </div>
  
  <div class="container mt">
    <h1>canvas with onUpdate Hook 使用</h1>
    <canvas id="canvas" width="300" height="300" ref="canvas"></canvas>
    <!-- <button @click="playAnimHandler">播放動畫</button> -->
  </div>
  <div class="container mt">
    <h1>Timeline 動畫呈現</h1>
    <div class="box purple">
      Timeline
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  padding: 20px;
  box-shadow: inset 10px 5px 10px rgba(57, 57, 57, 0.476);
  /* overflow: hidden; */
}
.mt{
  margin-top: 50vh;
}
.mt-b{
  margin: 20px 0;
}

.box{
  display: block;
  width: 100px;
  height: 100px;
  box-shadow: 2px 2px 8.5px rgba(0, 0, 0, 0.511);
  color:white;
  text-align: center;
  line-height: 100px;
  outline: 2px salmon solid;
}
.red{
  background-color: red;
}
.purple{
  background-color:purple;
}
.green{
  background-color: green;
}
.cusor{
  cursor: pointer;
}

.viewBox{
  background-color: black;
  color:white;
  width: 150px;
  height: 150px;
  text-align: center;
  line-height: 150px;
  font-size: 30px;
}
.btns{
  display: flex;
  flex-wrap: wrap;
  .btns > button{
    width: 120px;
    text-align: center;
  }
  button+button{
    margin: 5px 10px;
  }
}
#canvas {
  height: 80vh;
  max-height: 300px;
  overflow: visible;
  border: solid 2px white;
}
</style>
