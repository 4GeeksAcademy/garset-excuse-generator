
const who = ['El perro', 'Mi abuela', 'El cartero', 'Mi ave'];
const action = ['masticó', 'derribó', 'aplastó', 'rompió'];
const what = ['mi tarea', 'mi teléfono', 'mi maqueta'];
const when = ['antes de clase', 'cuando estaba durmiendo', 'mientras hacia ejercicio', 'durante la comida', 'mientras estaba jugando'];


const getRandomElement = array => array[Math.floor(Math.random() * array.length)];


const generateExcuse = () => {
    return `${getRandomElement(who)} ${getRandomElement(action)} ${getRandomElement(what)} ${getRandomElement(when)}`;
};


const displayExcuse = () => {
    document.getElementById('excuse').textContent = generateExcuse();
};


document.getElementById('generate-btn').addEventListener('click', displayExcuse);
window.addEventListener('load', displayExcuse);