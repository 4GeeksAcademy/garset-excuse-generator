// Variables con las partes de la excusa
const who = ['El perro', 'Mi abuela', 'El cartero', 'Mi ave'];
const action = ['masticó', 'derribó', 'aplastó', 'rompió'];
const what = ['mi tarea', 'mi teléfono', 'mi maqueta'];
const when = ['antes de clase', 'cuando estaba durmiendo', 'mientras hacia ejercicio', 'durante la comida', 'mientras estaba jugando'];

// Función para obtener un elemento aleatorio de un array
const getRandomElement = array => array[Math.floor(Math.random() * array.length)];

// Función para generar una excusa
const generateExcuse = () => {
    return `${getRandomElement(who)} ${getRandomElement(action)} ${getRandomElement(what)} ${getRandomElement(when)}`;
};

// Función para mostrar la excusa
const displayExcuse = () => {
    document.getElementById('excuse').textContent = generateExcuse();
};

// Eventos
document.getElementById('generate-btn').addEventListener('click', displayExcuse);
window.addEventListener('load', displayExcuse);