let btn = document.querySelector("#tap");
let table = document.querySelector("#table");
let inp = document.querySelector("#numInp");
let Rechercher = document.querySelector("#Rechercher");
let output = document.querySelector("#output");
let searchNum = document.getElementById("searchNum");
//EventListeners
btn.addEventListener("click", create);
Rechercher.addEventListener("click", search);

//Function
function create(e) {
  e.preventDefault();
  for (let i = 0; i <= inp.value - 1; i++) {
    const newInp = document.createElement("input");
    newInp.setAttribute("class", "newInp");
    table.append(newInp);
    btn.disabled = true;
    inp.disabled = true;
  }
}

//Function
let arr = [];
function search(e) {
  e.preventDefault();
  var arr = [];
  let inptValue = document.querySelectorAll(".newInp");

  for (let i = 0; i < inp.value; i++) {
    arr.push(inptValue[i].value);
    console.log(arr);
  }
  console.log(searchNum.value);
  if (arr.includes(searchNum.value)) {
    output.innerHTML = ` ${searchNum} est existe dans le tableau`;
  } else {
    console.log("its not here");
    output.innerHTML = "its not here";
  }
}
