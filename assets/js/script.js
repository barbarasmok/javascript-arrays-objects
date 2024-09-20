// Object Arrays
const propertiesVenta = [
  {
    category: 'Venta',
    nombre: 'Casa en Viña del Mar',
    src: '../assets/imgs/properties/venta-1.png',
    descripcion: 'Hermosa casa con vista al mar',
    ubicacion: 'Viña del Mar',
    habitaciones: 3,
    costo: 120000,
    smoke: false,
    pets: true,
  },
  {
    category: 'Venta',
    nombre: 'Casa en Con Con',
    src: '../assets/imgs/properties/venta-2.png',
    descripcion: 'Moderno departamento en el centro',
    ubicacion: 'Santiago',
    habitaciones: 2,
    costo: 90000,
    smoke: true,
    pets: false,
  },
  {
    category: 'Venta',
    nombre: 'Casa en Viña del Mar',
    src: '../assets/imgs/properties/venta-3.png',
    descripcion: 'Casa amplia y luminosa',
    ubicacion: 'Valparaíso',
    habitaciones: 4,
    costo: 150000,
    smoke: false,
    pets: true,
  },
  {
    category: 'Venta',
    nombre: 'Casa en Curauma',
    src: '../assets/imgs/properties/venta-4.png',
    descripcion: 'Departamento con piscina',
    ubicacion: 'La Serena',
    habitaciones: 2,
    costo: 85000,
    smoke: true,
    pets: true,
  },
  {
    category: 'Venta',
    nombre: 'Departamento en Santiago',
    src: '../assets/imgs/properties/venta-5.png',
    descripcion: 'Casa en la naturaleza con vista al lago',
    ubicacion: 'Puerto Varas',
    habitaciones: 5,
    costo: 200000,
    smoke: false,
    pets: true,
  },
  {
    category: 'Venta',
    nombre: 'Departamento en Reñaca',
    src: '../assets/imgs/properties/venta-6.png',
    descripcion: 'Departamento céntrico en Concepción',
    ubicacion: 'Concepción',
    habitaciones: 3,
    costo: 100000,
    smoke: true,
    pets: false,
  },
];

const propertiesAlquiler = [
  {
    category: 'Alquiler',
    nombre: 'Departamento en Las Condes',
    src: '../assets/imgs/properties/alquiler-1.png',
    descripcion: 'Casa moderna y acogedora',
    ubicacion: 'Concepción',
    habitaciones: 3,
    costo: 50000,
    smoke: false,
    pets: false,
  },
  {
    category: 'Alquiler',
    nombre: 'Departamento en Bellas Artes',
    src: '../assets/imgs/properties/alquiler-2.png',
    descripcion: 'Departamento con vista al mar',
    ubicacion: 'Antofagasta',
    habitaciones: 1,
    costo: 40000,
    smoke: true,
    pets: true,
  },
  {
    category: 'Alquiler',
    nombre: 'Departamento en Santiago',
    src: '../assets/imgs/properties/alquiler-3.png',
    descripcion: 'Casa en un barrio tranquilo',
    ubicacion: 'Temuco',
    habitaciones: 4,
    costo: 70000,
    smoke: false,
    pets: false,
  },
  {
    category: 'Alquiler',
    nombre: 'Casa en Reñaca',
    src: '../assets/imgs/properties/alquiler-4.png',
    descripcion: 'Departamento céntrico',
    ubicacion: 'Rancagua',
    habitaciones: 2,
    costo: 45000,
    smoke: true,
    pets: true,
  },
  {
    category: 'Alquiler',
    nombre: 'Departamento en Providencia',
    src: '../assets/imgs/properties/alquiler-5.png',
    descripcion: 'Moderno departamento cerca de la playa',
    ubicacion: 'Viña del Mar',
    habitaciones: 2,
    costo: 60000,
    smoke: false,
    pets: true,
  },
  {
    category: 'Alquiler',
    nombre: 'Casa en Ñuñoa',
    src: '../assets/imgs/properties/alquiler-6.png',
    descripcion: 'Casa familiar con jardín amplio',
    ubicacion: 'Puerto Montt',
    habitaciones: 4,
    costo: 80000,
    smoke: true,
    pets: false,
  },
];

// Renderización de propiedades
function renderCards(properties, containerId, limit = properties.length) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  for (let i = 0; i < limit; i++) {
    const property = properties[i];
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    // Create the image element separately
    const img = document.createElement('img');
    img.src = property.src;
    img.alt = property.nombre;
    img.classList.add('card-img'); // Using Bootstrap's class for better styling

    // Create the card body element and include other details inside it
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    cardBody.innerHTML = `
      <h4 class="card-category">${property.category}</h4>
      <h3 class="card-title">${property.nombre}</h3>
      <p class="card-text">${property.descripcion}</p>
      <p class="textIcon"><i class="fas fa-bed"></i> ${
        property.habitaciones
      } Habitaciones</p>
      <p class="propertyCost textIcon"><i class="fas fa-dollar-sign"></i> ${
        property.costo
      }</p>
      <p class="${
        property.smoke ? 'text-success' : 'text-danger'
      } textIconSmoke">
        <i class="fas fa-smoking"></i> ${
          property.smoke ? 'Permitido fumar' : 'Prohibido fumar'
        }
      </p>
      <p class="${property.pets ? 'text-success' : 'text-danger'} textIconPets">
        <i class="fas fa-paw"></i> ${
          property.pets ? 'Mascotas permitidas' : 'Mascotas prohibidas'
        }
      </p>
    `;

    // Append image and card body to card div
    cardDiv.appendChild(img);
    cardDiv.appendChild(cardBody);

    // Append the card to the container
    container.appendChild(cardDiv);
  }
}

// Renderización de propiedades en index, limite 3
if (document.getElementById('cards-venta')) {
  renderCards(propertiesVenta, 'cards-venta', 3);
}
if (document.getElementById('cards-alquiler')) {
  renderCards(propertiesAlquiler, 'cards-alquiler', 3);
}

// Renderización de propiedades en ventas
if (document.title.includes('Venta')) {
  renderCards(propertiesVenta, 'cards-venta');
}

// Renderización de propiedades en alquiler
if (document.title.includes('Alquiler')) {
  renderCards(propertiesAlquiler, 'cards-alquiler');
}

// Cambia el color de fondo de la main nav cuando se avanza y cambia el color de fondo cuando se abre el menu en tablet y mobile

document.addEventListener('DOMContentLoaded', function () {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbar = document.querySelector('.navbar');

  navbarToggler.addEventListener('click', function () {
    navbar.classList.toggle('toggled-open');
  });

  window.addEventListener('scroll', function () {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
});
