var width = 20;

function play() {
const playBTN=document.getElementById("play")
playBTN.addEventListener("click", ()=>{
const play_bar = document.getElementById("playBar");
    if (width < 100) {
      width+=10;
      play_bar.style.width = width + '%';
      play_bar.innerHTML = width * 1 + '%';
    }
  
}
)}

function feed() {
const feedBTN=document.getElementById("feed")
feedBTN.addEventListener("click", ()=>{
const feed_bar = document.getElementById("feedBar");
      if (width < 100) {
        width+=10;
        feed_bar.style.width = width + '%';
        feed_bar.innerHTML = width * 1 + '%';
        play_bar.innerHTML = width * 1 - '%';
      }
    
  }
)}

  function water() {
    const waterBTN=document.getElementById("water")
    waterBTN.addEventListener("click", ()=>{
     const water_bar = document.getElementById("waterBar");
      if (width < 100) {
        width+=10;
        water_bar.style.width = width + '%';
        water_bar.innerHTML = width * 1 + '%';
      }
    
  }
)}

//const playBTN = document.getElementById("play");
//const feedBTN = document.getElementById("feed");
//const waterBTN = document.getElementById("water");

//PET STATUS//
//const enerygyStatus = document.getElementById("energyBar");
//const hungerStatus = document.getElementById("hungerBar");
//const thirstStatus = document.getElementById("thirstBar");

//PET INTERACTIONS//
//playBTN.addEventListener("click", () => {
   // enerygyStatus.value -= 10;
    //hungerStatus.value -= 5;
//})
//feedBTN.addEventListener("click", () => {
  //  hungerStatus.value += 10;
   // enerygyStatus.value += 5;
   // thirstStatus.value -= 5;
//})
//waterBTN.addEventListener("click", () => {
  //  thirstStatus.value += 10;
   // enerygyStatus.value += 5;
    //hungerStatus.value -= 5;