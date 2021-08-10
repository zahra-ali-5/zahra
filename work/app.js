const myHeading = document.getElementById("heading");

myHeading.addEventListener("click", () => {
myHeading.style.color = "yellow";
})
document.getElementById("heading").style.backgroundColor="blue";
document.getElementById("heading").style.borderRadius = "20px";
function myFunction() {
    var x = document.getElementById("myCheck");
    x.checked = true;
  }
document.getElementById("input").value="Text here";
const input = document.getElementById("input");

const submit = document.getElementById("submit");

const list = document.getElementById("list");


submit.addEventListener("click", () => {

    list.innerHTML += `<li>${input.value}</li>`;
    input.value="";
    })
    const removeBtn = document.getElementById('remove');

removeBtn.addEventListener('click', () => {
    let lastItem = document.querySelector('li:first-child');
    let list = document.getElementsByTagName('ul')[0];
    list.removeChild(lastItem);
    })