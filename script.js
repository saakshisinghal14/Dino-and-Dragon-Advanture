

score=0;
cross=true;

audio= new Audio('music.mp3');
audiogo= new Audio('gameover.mp3');
setTimeout(() => {
    audio.play();
}, 2000);

document.onkeydown=(e)=>{
    console.log("key code is ",e.keyCode);
    //38 for arrowUP
    if(e.keyCode==38){
dino=document.querySelector('.dino');
//for giving anther class to dino
dino.classList.add('animateDino');
setTimeout(() => {
    dino.classList.remove('animateDino')
}, 700);
    }
 else   if(e.keyCode==39){
dino=document.querySelector('.dino');
dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
dino.style.left=dinoX+112+"px";

    }
 else   if(e.keyCode==37){
dino=document.querySelector('.dino');
dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
dino.style.left=(dinoX-112)+"px";

    }
}
setInterval(() => {
    dino=document.querySelector('.dino');
    gameover=document.querySelector('.gameover');
    obstacle=document.querySelector('.obstacle');
    dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));

    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));
    
    offsetX=Math.abs(dx-ox);
    offsetY=Math.abs(dy-oy);
//    console.log(offsetX,offsetY)
 if(offsetX<73 &&offsetY<52){
     gameover.style.visibility="visible";
     obstacle.classList.remove('obstacleAni')
     audiogo.play();
     setTimeout(() => {
         audiogo.pause();
         audio.pause();
     }, 1000);
 }
 else if(cross&&offsetX<145){
     score+=1;
     updateScore(score);
     cross=false;
     setTimeout(() => {
         cross=true;
     }, 1000);
setTimeout(() => {
   anidur=parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
  
newdur=anidur-0.1;
obstacle.style.animationDuration=newdur+'s';  
 console.log(newdur)   
}, 500);
  
 }
}, 10);
function updateScore(score){
   scoreCont = document.getElementById('scoreCont');
    scoreCont.innerHTML="Your Score: "+score;
}