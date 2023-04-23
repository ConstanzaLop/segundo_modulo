// Definir el objeto persona con sus atributos y metodos
const persona = {
    nombre: '',
    edad: 0,
    dni: '',
    domicilio: '',
    hijos: 0,
    profesion: '',
    saludar: function() {
      console.log(`Hola, mi nombre es ${this.nombre} tengo ${this.edad} años y soy ${this.profesion}.`);
    },
    listar: function() {
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Edad: ${this.edad}`);
      console.log(`DNI: ${this.dni}`);
      console.log(`Domicilio: ${this.domicilio}`);
      console.log(`Hijos: ${this.hijos}`);
      console.log(`Profesión: ${this.profesion}`);
    }
  }
  
  // Pedir los datos al usuario
  function crearPersona() {
    const persona1 = Object.create(persona);
    persona1.nombre = prompt('Ingrese su nombre:');
    persona1.edad = parseInt(prompt('Ingrese su edad:'));
    persona1.dni = prompt('Ingrese su DNI:');
    persona1.domicilio = prompt('Ingrese su domicilio:');
    persona1.hijos = parseInt(prompt('Ingrese la cantidad de hijos que tiene:'));
    persona1.profesion = prompt('Ingrese su profesión:');
    return persona1;
  }
  
  // Se pide los atributos al usuario
  const persona1 = crearPersona();
  
  // Saludo y listado en consola
  persona1.saludar();
  persona1.listar();
  
  