//Тоглогчийн ээлжийг хадгалах хувьсагч 
var activePlayar = 1;

// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч 
var scores = [0,0];




//тоглогчдын ээлжиндээ  цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

//шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй,1-6 санамсаргүй үүсгэж өгнө.
var dice = Math.floor(Math.random()*6)+1;

/* <div class="player-score" id="score-0">43</div> */
// document.querySelector('.dice').style.display ='none';
// document.querySelector('#score-1').innerHTML = '<em>yes<em>';

document.querySelector('#score-0').textContent = 0;
document.querySelector('#score-1').textContent = 0;
document.querySelector('#current-0').textContent = 0;
document.querySelector('#current-0').textContent = 0;

console.log ('шоо :' + dice );