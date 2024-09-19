// Object Arrays
const propertiesVenta = [
  {
    nombre: 'Casa en Viña del Mar',
    src: '../assets/imgs/img-template.png',
    descripcion: 'Hermosa casa con vista al mar',
    ubicacion: 'Viña del Mar',
    habitaciones: 3,
    costo: 120000,
    smoke: false,
    pets: true,
  },
  {
    nombre: 'Departamento en Santiago',
    src: '../assets/imgs/img-template.png',
    descripcion: 'Moderno departamento en el centro',
    ubicacion: 'Santiago',
    habitaciones: 2,
    costo: 90000,
    smoke: true,
    pets: false,
  },
  {
    nombre: 'Casa en Valparaíso',
    src: '../assets/imgs/img-template.png',
    descripcion: 'Casa amplia y luminosa',
    ubicacion: 'Valparaíso',
    habitaciones: 4,
    costo: 150000,
    smoke: false,
    pets: true,
  },
  {
    nombre: 'Departamento en La Serena',
    src: '../assets/imgs/img-template.png',
    descripcion: 'Departamento con piscina',
    ubicacion: 'La Serena',
    habitaciones: 2,
    costo: 85000,
    smoke: true,
    pets: true,
  },
  {
    nombre: 'Casa en Puerto Varas',
    src: '../assets/imgs/img-template.png',
    descripcion: 'Casa en la naturaleza con vista al lago',
    ubicacion: 'Puerto Varas',
    habitaciones: 5,
    costo: 200000,
    smoke: false,
    pets: true,
  },
  {
    nombre: 'Departamento en Concepción',
    src: '../assets/imgs/img-template.png',
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
    nombre: 'Casa en Concepción',
    src: '../assets/imgs/img-template.png',
    descripcion: 'Casa moderna y acogedora',
    ubicacion: 'Concepción',
    habitaciones: 3,
    costo: 50000,
    smoke: false,
    pets: false,
  },
  {
    nombre: 'Departamento en Antofagasta',
    src: '../assets/imgs/img-template.png',
    descripcion: 'Departamento con vista al mar',
    ubicacion: 'Antofagasta',
    habitaciones: 1,
    costo: 40000,
    smoke: true,
    pets: true,
  },
  {
    nombre: 'Casa en Temuco',
    src: '../assets/imgs/img-template.png',
    descripcion: 'Casa en un barrio tranquilo',
    ubicacion: 'Temuco',
    habitaciones: 4,
    costo: 70000,
    smoke: false,
    pets: false,
  },
  {
    nombre: 'Departamento en Rancagua',
    src: '../assets/imgs/img-template.png',
    descripcion: 'Departamento céntrico',
    ubicacion: 'Rancagua',
    habitaciones: 2,
    costo: 45000,
    smoke: true,
    pets: true,
  },
  {
    nombre: 'Departamento en Viña del Mar',
    src: '../assets/imgs/img-template.png',
    descripcion: 'Moderno departamento cerca de la playa',
    ubicacion: 'Viña del Mar',
    habitaciones: 2,
    costo: 60000,
    smoke: false,
    pets: true,
  },
  {
    nombre: 'Casa en Puerto Montt',
    src: '../assets/imgs/img-template.png',
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
    cardDiv.innerHTML = `<img src="${property.src}" alt="${
      property.nombre
    }" class="card-img">
            <h3 class="card-title">${property.nombre}</h3>
            <p class="card-text">${property.descripcion}</p>
            <div>
                <p class="textIcon">
                    <i class="fas fa-bed"></i> ${
                      property.habitaciones
                    } Habitaciones
                </p>
            </div>
            <div class="propertyCost">
                <p class="textIcon">
                    <i class="fas fa-dollar-sign"></i> ${property.costo}
                </p>
            </div>
            <div class="propertySmoke">
                <p class="${
                  property.smoke
                    ? 'text-success textIconSmoke'
                    : 'text-danger textIconSmoke'
                }">
                    <i class="fas fa-smoking"></i> ${
                      property.smoke ? 'Permitido fumar' : 'Prohibido fumar'
                    }
                </p>
            </div>
            <div class="propertyPets">
                <p class="${
                  property.pets
                    ? 'text-success textIconPets'
                    : 'text-danger textIconPets'
                }">
                    <i class="fas fa-paw"></i> ${
                      property.pets
                        ? 'Mascotas permitidas'
                        : 'Mascotas prohibidas'
                    }
                </p>
            </div>`;
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
