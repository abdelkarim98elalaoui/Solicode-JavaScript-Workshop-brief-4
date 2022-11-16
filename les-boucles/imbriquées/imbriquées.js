let userInpt = document.querySelector("#user-inp");
let btn = document.querySelector("#tap");
const output = document.querySelector("#output");

btn.addEventListener("click", design);

function design(e) {
  e.preventDefault();
  output.innerHTML = "";
  if (userInpt.value < 10) {
    for (let i = 1; i <= userInpt.value; i++) {
      for (let j = 1; j <= i; j++) {
        output.innerHTML += "*";
        output.style.color = "black";
      }
      output.innerHTML += "<br>";
    }
  } else {
    output.innerHTML += "its so long";
    output.style.color = "red";
    output.style.fontSize = "x-large";
    output.style.padding = "3rem";
  }
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
