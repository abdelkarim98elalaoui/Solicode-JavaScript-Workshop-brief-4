const searchBtn = document.querySelector("#search");
let phrase = document.querySelector("#phrase-user");
let output = document.querySelector("#output");
let mot = document.querySelector("#mot");
const deleteBtn = document.querySelector("#delete");
searchBtn.addEventListener("click", find);
deleteBtn.addEventListener("click", deleteFun);
function find(e) {
  e.preventDefault();
  console.log(phrase.value);
  console.log(mot.value);

  phrase.value.indexOf(mot.value);
  if (phrase.value.includes(mot.value)) {
    output.innerHTML = ` ${mot.value} est dans la phrase`;
  } else {
    output.innerHTML = ` ${mot.value} n'est pas dans la phrase `;
  }
}
function deleteFun(e) {
  e.preventDefault();
  output.innerHTML = phrase.value.replace(mot.value, "");
}
