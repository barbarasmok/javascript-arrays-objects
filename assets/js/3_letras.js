/*
Guía para realizar acciones cuando se presione una tecla
document.addEventListener('keydown', function (event) {
if (event.key === 'a') {
// Cambiar a color 1
} else if (event.key === 's') {
    // Cambiar a color 2
    }
    })
*/

// Se crea una variable para almacenar el color
let currentColor = 'white';

// Configurando las keys
document.addEventListener('keydown', function (event) {
  const key = document.getElementById('key');

  switch (event.key) {
    case 'a':
      currentColor = 'pink';
      break;
    case 's':
      currentColor = 'orange';
      break;
    case 'd':
      currentColor = 'lightblue';
      break;
    case 'q':
      createNewDiv('purple');
      break;
    case 'w':
      createNewDiv('gray');
      break;
    case 'e':
      createNewDiv('brown');
      break;
    default:
      return; // No se presiona la tecla que no esta en el listado no hace nada
  }
  // Cambia el color si se le hace click a las key 'a', 's' o 'd'
  if (['a', 's', 'd'].includes(event.key)) {
    key.style.backgroundColor = currentColor;
  }
});

// Se crea una nueva div con el nombre 'color-box'
function createNewDiv(color) {
  const newKey = document.createElement('div');
  newKey.className = 'color-box'; // se le asigna la clase de 'color-box'
  newKey.style.backgroundColor = color; // se le asigna el parametro de 'color' a la nueva div 'newKey'

  // Selecciona el contenedor 'keys-grid'
  const keysGrid = document.querySelector('.keys-grid');
  keysGrid.appendChild(newKey); // Se agrega el nuevo div como hijo del contenedor 'keys-grid'
}
