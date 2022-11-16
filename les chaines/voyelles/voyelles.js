let phrase = document.querySelector("#phrase-user");
let btn = document.querySelector("#btn");
let output = document.querySelector("#output");
let counter = 0;
btn.addEventListener("click", check);

function check(e) {
  e.preventDefault();
  let voyells = "aeiouyAEIOUY";
  counter = 0;
  //   console.log(phrase.value);
  //   console.log(phrase.value.length);
  for (let i = 0; i < phrase.value.length; i++) {
    for (let j = 0; j < voyells.length; j++) {
      if (phrase.value[i] == voyells[j]) {
        counter++;
        output.innerHTML = counter;
        output.innerHTML =
          "La phrase que vous avez saisi contient " + counter + " voyelles";
      } else {
        output.innerHTML =
          "La phrase que vous avez saisi contient " + counter + " voyelles";
      }
    }
  }
}
