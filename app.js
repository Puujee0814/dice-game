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

document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-0').textContent = 0;

var dicedom = document.querySelector('.dice');
dicedom.style.display = 'none';
document.querySelector('.btn-roll ').addEventListener('click',function(){
    var dice = Math.floor(Math.random()*6)+1;
    dicedom.style.display = 'block';
    dicedom.src = 'dice-' + dice + '.png';
    // alert("шоо буулаа" + dice);
});
