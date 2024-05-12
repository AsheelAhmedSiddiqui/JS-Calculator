function num(a) {
  let show = (document.getElementById("show").value += a);
}

function divide() {
  let show = (document.getElementById("show").value += "/");
}

function multi() {
  let show = (document.getElementById("show").value += "*");
}

function plus() {
  let show = (document.getElementById("show").value += "+");
}

function sub() {
  let show = (document.getElementById("show").value += "-");
}

function clearContent() {
  let show = (document.getElementById("show").value = "");
}

function result() {
  let show = document.getElementById("show");
  show.value = eval(show.value);
}

let now = new Date();
let currYear = now.getFullYear();
let span = (document.getElementById("currYear").innerText = currYear);
