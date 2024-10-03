// Constructor de Estudiante en ES6
class Estudiante {
    constructor(nombre, edad, ...asignaturas) {
        this.nombre = nombre;
        this.edad = edad;
        this.asignaturas = asignaturas;
    }

    // Añadir un método para saludar
    saludar = () => {
        console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
    };

    // Añadir un método para listar las asignaturas
    listarAsignaturas = () => {
        console.log(`Mis asignaturas son: ${this.asignaturas.join(', ')}`);
    };
}

// Crear un nuevo estudiante
const estudiante1 = new Estudiante('Ana', 20, 'Matemáticas', 'Historia', 'Literatura');

// Destructuring manual para extraer nombre y edad
const {nombre, edad} = estudiante1;

// Mostrar datos del estudiante
console.log(`Nombre: ${nombre}`);
console.log(`Edad: ${edad}`);

// Mostrar saludo y asignaturas
estudiante1.saludar();
estudiante1.listarAsignaturas();

// Función en ES6 para sumar notas
function calcularPromedio() {
    var suma = 0;
    for (let i = 0; i < arguments.length; i++) {
        suma += arguments[i];
    }
    return suma / arguments.length;
}

// Calcular promedio de notas
const promedio = calcularPromedio(85, 90, 78, 92);
console.log(`El promedio es: ${promedio}`);