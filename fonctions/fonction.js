let plus = document.querySelector("#plus");
const moin = document.querySelector("#moin");
const multipl = document.querySelector("#multipl");
const devid = document.querySelector("#devid");
let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
const output = document.getElementById("output");

plus.addEventListener("click", plusOpertaion);
function plusOpertaion(e) {
  e.preventDefault();
  let num3 = parseInt(document.querySelector("#num1").value);
  let num4 = parseInt(document.querySelector("#num2").value);
  output.innerHTML = num3 + num4;
  console.log(output);
}

moin.addEventListener("click", moinOpertaion);
function moinOpertaion(e) {
  e.preventDefault();
  output.innerText = num1.value - num2.value;

  console.log("moin");
}
multipl.addEventListener("click", multplOpertaion);
function multplOpertaion(e) {
  e.preventDefault();
  output.innerText = num1.value * num2.value;
  console.log("multpl");
}
devid.addEventListener("click", devidOpertaion);
function devidOpertaion(e) {
  e.preventDefault();
  output.innerText = num1.value / num2.value;
  console.log("devid");
}
