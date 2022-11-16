const btn = document.querySelector("#tap");
let num = document.querySelector("#user-num");
let output = document.querySelector("#output");
let counter = document.querySelector("#counter");
let again = document.querySelector("#again");
let randomNr = Math.floor(Math.random() * 51 + 1);
let limit = document.querySelector("#limit");

btn.addEventListener("click", Tentatives);
again.addEventListener("click", relaod);

function relaod() {
  location.reload();
}
function Tentatives(e) {
  e.preventDefault();
  if (num.value < randomNr) {
    output.innerHTML = ` ${num.value} est petit`;
    counter.innerHTML++;
  } else if (num.value > randomNr) {
    output.innerHTML = `${num.value} est grand`;
    counter.innerHTML++;
  } else {
    output.innerHTML = `oui tu as gagné car le nombre aléatoire est ${randomNr} `;
    num.disabled = true;
    btn.disabled = true;
    btn.style.opacity = ".5";

    again.style.display = "inline";
  }

  if (counter.innerHTML > 10) {
    limit.classList.add("big");
    num.disabled = true;
    btn.disabled = true;
    btn.style.opacity = "0.5";
    output.innerHTML = `tentatives sont terminées`;
    again.style.display = "inline";
  }
  console.log(num.value, randomNr);
}
