{\rtf1\ansi\ansicpg1252\cocoartf2869
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // STARS\
\
for(let i=0;i<120;i++)\{\
\
  const star=document.createElement('div');\
\
  star.classList.add('star');\
\
  star.style.left=Math.random()*100+'%';\
  star.style.top=Math.random()*100+'%';\
\
  document.getElementById('stars')\
  .appendChild(star);\
\}\
\
// PETALS\
\
function createPetal()\{\
\
  const petal=document.createElement('div');\
\
  petal.classList.add('petal');\
\
  petal.innerHTML='\uc0\u55356 \u57145 ';\
\
  petal.style.left=\
  Math.random()*100+'vw';\
\
  petal.style.fontSize=\
  (18+Math.random()*20)+'px';\
\
  petal.style.animationDuration=\
  (5+Math.random()*5)+'s';\
\
  document.body.appendChild(petal);\
\
  setTimeout(()=>\{\
    petal.remove();\
  \},10000);\
\}\
\
setInterval(createPetal,300);\
\
// MESSAGE\
\
const message=\
`Out of all the moments life could have given me,\
it gave me you.\
\
Every laugh,\
every late-night conversation,\
every little moment with you\
became my favorite memory.\
\
And somewhere between all those moments,\
you became my home.\
\
So today,\
I have only one question left to ask...\
\
Will you marry me?\
\
\'97 Forever yours,\
Suryaa \uc0\u10084 \u65039 `;\
\
let index=0;\
\
// OPEN LETTER\
\
function openLetter()\{\
\
  document.getElementById('envelopeScreen')\
  .style.display='none';\
\
  document.getElementById('letterScreen')\
  .style.display='flex';\
\
  resetLetter();\
\
  typeMessage();\
\}\
\
// TYPEWRITER\
\
function typeMessage()\{\
\
  if(index < message.length)\{\
\
    document.getElementById('typedText')\
    .innerHTML += message.charAt(index);\
\
    index++;\
\
    setTimeout(typeMessage,45);\
\
  \}else\{\
\
    document.getElementById('buttons')\
    .classList.add('show');\
  \}\
\}\
\
// RESET\
\
function resetLetter()\{\
\
  index=0;\
\
  document.getElementById('typedText')\
  .innerHTML='';\
\
  document.getElementById('buttons')\
  .classList.remove('show');\
\}\
\
// HOME\
\
function goHome()\{\
\
  document.getElementById('letterScreen')\
  .style.display='none';\
\
  document.getElementById('celebration')\
  .style.display='none';\
\
  document.getElementById('envelopeScreen')\
  .style.display='flex';\
\}\
\
// BACK\
\
function backToLetter()\{\
\
  document.getElementById('celebration')\
  .style.display='none';\
\
  document.getElementById('letterScreen')\
  .style.display='flex';\
\}\
\
// NO BUTTON\
\
const noBtn=\
document.getElementById('noBtn');\
\
const funnyText=\
document.getElementById('funnyText');\
\
document.addEventListener('mousemove',(e)=>\{\
\
  const buttons=\
  document.getElementById('buttons');\
\
  if(!buttons.classList.contains('show'))\
  return;\
\
  const rect=\
  noBtn.getBoundingClientRect();\
\
  const btnX=\
  rect.left + rect.width/2;\
\
  const btnY=\
  rect.top + rect.height/2;\
\
  const distanceX=\
  e.clientX - btnX;\
\
  const distanceY=\
  e.clientY - btnY;\
\
  const distance=\
  Math.sqrt(distanceX*distanceX + distanceY*distanceY);\
\
  if(distance < 140)\{\
\
    const angle=\
    Math.atan2(distanceY,distanceX);\
\
    const moveX=\
    Math.cos(angle)*80;\
\
    const moveY=\
    Math.sin(angle)*80;\
\
    noBtn.style.transform=\
    `translate($\{-moveX\}px,$\{-moveY\}px)`;\
\
    funnyText.innerHTML=\
    "Nice try Moluuu \uc0\u55357 \u56877 \u10084 \u65039 ";\
\
  \}else\{\
\
    noBtn.style.transform=\
    `translate(0px,0px)`;\
\
    funnyText.innerHTML="";\
  \}\
\});\
\
// YES\
\
async function sayYes()\{\
\
  document.getElementById('letterScreen')\
  .style.display='none';\
\
  document.getElementById('celebration')\
  .style.display='flex';\
\
  const song=\
  document.getElementById('loveSong');\
\
  try\{\
\
    song.volume=1;\
\
    await song.play();\
\
  \}catch(err)\{\
\
    console.log(err);\
  \}\
\
  createHearts();\
\}\
\
// HEARTS\
\
function createHearts()\{\
\
  for(let i=0;i<90;i++)\{\
\
    const heart=\
    document.createElement('div');\
\
    heart.classList.add('heart');\
\
    heart.innerHTML='\uc0\u55357 \u56470 ';\
\
    heart.style.left=\
    Math.random()*100+'vw';\
\
    heart.style.top='100vh';\
\
    heart.style.fontSize=\
    (20+Math.random()*40)+'px';\
\
    document.body.appendChild(heart);\
\
    setTimeout(()=>\{\
      heart.remove();\
    \},6000);\
  \}\
\}}