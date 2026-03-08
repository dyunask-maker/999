/* =========================
SCENE CONTROL
========================= */

let currentScene = 1

function showScene(n){

let scenes = document.querySelectorAll(".scene")

scenes.forEach(s => s.classList.remove("active"))

let target = document.getElementById("scene"+n)

if(target){
target.classList.add("active")
}

}

function nextScene(){

currentScene++

showScene(currentScene)

}

/* =========================
SWIPE CONTROL
========================= */

let startX = 0

document.addEventListener("touchstart", e => {

startX = e.touches[0].clientX

})

document.addEventListener("touchend", e => {

let endX = e.changedTouches[0].clientX

if(endX - startX > 120){

nextScene()

}

})

/* =========================
ENVELOPE OPEN
========================= */

let avatar = document.getElementById("avatar")

if(avatar){

avatar.addEventListener("click", ()=>{

let envelope = document.querySelector(".envelope")

envelope.classList.add("open")

})

}

/* =========================
GIFT SMALL
========================= */

let giftA = document.getElementById("giftA")
let giftB = document.getElementById("giftB")

if(giftA){

giftA.onclick = ()=>{

document.getElementById("img5").classList.remove("hidden")

}

}

if(giftB){

giftB.onclick = ()=>{

document.getElementById("img6").classList.remove("hidden")

}

}

/* =========================
BIG GIFTS
========================= */

let gifts = document.querySelectorAll(".gift.big")

gifts.forEach(gift=>{

let tap = 0

gift.onclick = ()=>{

tap++

gift.classList.add("shake")

setTimeout(()=>gift.classList.remove("shake"),300)

if(tap==2){

gift.classList.add("inflate")

}

if(tap==3){

explodeGift(gift)

}

}

})

/* =========================
EXPLODE GIFT
========================= */

function explodeGift(gift){

confettiBurst()

let img = document.createElement("img")

img.src = gift.dataset.img

img.className = "popupPhoto"

document.body.appendChild(img)

}

/* =========================
CONFETTI
========================= */

function confettiBurst(){

for(let i=0;i<120;i++){

let c = document.createElement("div")

c.className="confetti"

c.style.left = Math.random()*100+"vw"

c.style.background = randomColor()

c.style.animationDuration = 2+Math.random()*2+"s"

document.body.appendChild(c)

setTimeout(()=>c.remove(),4000)

}

}

function randomColor(){

let colors=["#ff6b6b","#ffd93d","#6bcBef","#ff8fab","#ffa94d"]

return colors[Math.floor(Math.random()*colors.length)]

}

/* =========================
EASTER EGG
========================= */

let egg = document.getElementById("egg")

let eggTap = 0

if(egg){

egg.onclick = ()=>{

eggTap++

if(eggTap >= 10){

let img = document.createElement("img")

img.src = "images/easter.jpg"

img.className = "popupPhoto"

document.body.appendChild(img)

sparkleEffect()

}

}

}

/* =========================
SPARKLE
========================= */

function sparkleEffect(){

for(let i=0;i<80;i++){

let s = document.createElement("div")

s.className="confetti"

s.style.left=Math.random()*100+"vw"

s.style.background="#fff"

s.style.width="4px"
s.style.height="4px"

document.body.appendChild(s)

setTimeout(()=>s.remove(),3000)

}

}

/* =========================
NEXT BUTTON
========================= */

let nextBtn = document.getElementById("nextBtn")

if(nextBtn){

nextBtn.onclick = ()=>{

nextScene()

}

}

/* =========================
PARTICLE BACKGROUND
========================= */

let canvas = document.getElementById("particleCanvas")

if(canvas){

let ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let particles=[]

for(let i=0;i<60;i++){

particles.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:2+Math.random()*3,
vx:(Math.random()-0.5)*0.5,
vy:(Math.random()-0.5)*0.5

})

}

function drawParticles(){

ctx.clearRect(0,0,canvas.width,canvas.height)

particles.forEach(p=>{

p.x+=p.vx
p.y+=p.vy

if(p.x<0)p.x=canvas.width
if(p.x>canvas.width)p.x=0
if(p.y<0)p.y=canvas.height
if(p.y>canvas.height)p.y=0

ctx.beginPath()
ctx.arc(p.x,p.y,p.r,0,Math.PI*2)
ctx.fillStyle="rgba(255,150,180,0.6)"
ctx.fill()

})

requestAnimationFrame(drawParticles)

}

drawParticles()

}

/* =========================
SHAKE DETECT
========================= */

window.addEventListener("devicemotion",function(e){

let a = e.accelerationIncludingGravity

if(!a)return

let force = Math.abs(a.x+a.y+a.z)

if(force>35){

flowerRain()

}

})

/* =========================
FLOWER RAIN
========================= */

function flowerRain(){

for(let i=0;i<40;i++){

let f = document.createElement("div")

f.className="confetti"

f.style.left=Math.random()*100+"vw"

f.style.background="#ff8fab"

f.style.animationDuration=3+Math.random()*2+"s"

document.body.appendChild(f)

setTimeout(()=>f.remove(),4000)

}

}
