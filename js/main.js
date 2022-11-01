let nombre = prompt("¿Cuál es tu nombre?");
 if (nombre != "") {
  console.log(nombre)

} else {
  let nombre = prompt("Por favor, ingresá un nombre");
 console.log (nombre)

};
let titulo=document.getElementById("titulo");
titulo.innerHTML= `<h1>Bienvenid@ a <b>Interlingua</b>, ${nombre}</h1>`;