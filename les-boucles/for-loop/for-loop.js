let num = document.querySelector("#user-num");
const tapBtn = document.querySelector("#tap");
let output = document.querySelector("#output");
tapBtn.addEventListener("click", multiple);
function multiple(e) {
  output.innerHTML = "";
  for (let i = 1; i <= 10; i++) {
    output.innerHTML += `${num.value} * ${i} = ${num.value * i} <br>`;
    console.log(i + "x " + num.value + "=" + i * num.value);
  }
  e.preventDefault();
}

/// hamburger

const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

openBtn.addEventListener("click", openFun);
closeBtn.addEventListener("click", closeFun);

function openFun(e) {
  e.preventDefault();
  console.log("karim");
  head.style.transform = "translateX(0%)";
  closeBtn.style.display = "block";
  openBtn.style.display = "none";
}
function closeFun(e) {
  e.preventDefault();
  console.log("close");
  head.style.transform = "translateX(-100%)";
  closeBtn.style.display = "none";
  openBtn.style.display = "block";
}
