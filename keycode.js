const displayKey=document.querySelector('.key h2');
const displayKeyCode=document.querySelector('.keyCode h2');
//const KeyCodeDiv=document.querySelector('.keyCode');

window.addEventListener('keydown',(e)=>{
    displayKey.innerText = e.key;
    displayKeyCode.innerText = e.keyCode;
    if(e.keyCode === 32){
        displayKey.innerText = `'space'` ;
    }
})
