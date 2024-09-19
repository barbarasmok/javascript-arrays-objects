/*
Cambiando el color de fondo de un elemento de
HTML al hacerle click
Ejercicio 2.2
*/
// function pintar(event) {
//   event.target.style.backgroundColor = 'yellow';
// }
// const ele = document.getElementById('ele1');
// ele.addEventListener('click', pintar);

/*
Pasandole un color como argumento a la
función pintar
Ejercicio 2.3
*/
function pintar(event, color = 'green') {
  event.target.style.backgroundColor = color;
}
const ele = document.getElementById('ele1');
ele.addEventListener('click', function (event) {
  pintar(event, 'yellow'); // al hacerle click cambia el color a amarillo
});
