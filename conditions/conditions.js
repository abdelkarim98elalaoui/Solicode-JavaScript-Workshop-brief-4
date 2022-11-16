const jour = document.querySelector("#jours");
const mois = document.querySelector("#mois");
const annee = document.querySelector("#annees");
const validBtn = document.querySelector("#valid-btn");
const output = document.querySelector("#output");

validBtn.addEventListener("click", resultFun);

function resultFun(e) {
  e.preventDefault();
  if (
    annee.value > 1900 &&
    jour.value >= 1 &&
    (((mois.value == 4 ||
      mois.value == 6 ||
      mois.value == 9 ||
      mois.value == 11) &&
      jour.value <= 30) ||
      ((mois.value == 1 ||
        mois.value == 3 ||
        mois.value == 5 ||
        mois.value == 7 ||
        mois.value == 8 ||
        mois.value == 10 ||
        mois.value == 12) &&
        jour.value <= 31) ||
      (mois.value == 2 && jour.value <= 28))
  ) {
    output.innerText = " la date est correct";
  } else {
    output.innerText = "la date est incorrecte!!";
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
