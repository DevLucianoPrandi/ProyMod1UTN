let saludo;

while (true) {
  let nombre = prompt("¿Cuál es tu nombre?");
  if (nombre === "" || nombre === null) {
    alert("Ingresá un nombre válido, por favor");
  } else {
    saludo = nombre;
    break;
  }
}
let titulo = document.getElementById("titulo");
titulo.innerHTML = `<h1>Bienvenid@ a <b>Interlingua</b>, ${saludo}</h1>`;