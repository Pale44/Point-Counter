const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

const res = document.getElementById("reset");
var finalScore = 11;

function increment1() {
  let counter = document.getElementById("counter1");
  let count = parseInt(counter.innerHTML);
  if (count < finalScore) {  
  count = count + 1;
  counter.innerHTML = count;
  } else if (count == finalScore) {
    document.body.style.background = "img/sui.jpeg";
    
  } 
}

function increment2() {
  let counter = document.getElementById("counter2");
  let count = parseInt(counter.innerHTML);
  if (count < 11) {  
  count = count + 1;
  counter.innerHTML = count;
  } else if (count == 11) {
    alert("You have won!")
  } 
}

function resetPoints() {
  let counter1 = document.getElementById("counter1");
  let counter2 = document.getElementById("counter2");
  counter1.innerHTML = 0;
  counter2.innerHTML = 0;
}

btn1.addEventListener("click", increment1);
btn2.addEventListener("click", increment2);

res.addEventListener("click", resetPoints);
