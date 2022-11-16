const num1 = document.querySelector("#first-num");
const num2 = document.querySelector("#sec-num");
const switchBtn = document.querySelector("#switch");
const head = document.getElementById("head");
switchBtn.addEventListener("click", switchFun);
function switchFun(e) {
  e.preventDefault();
  let curValue1 = num1.value;
  num1.value = num2.value;
  num2.value = curValue1;
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
