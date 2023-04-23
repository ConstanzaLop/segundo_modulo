//Ejercicio 1 -------------------------------------------------------------------------------------------

// const auto = {
//     color: 'rojo',
//     marca: 'Toyota',
//     modelo: 'Corolla',
//     encendido: false,
//     encender: function() {
//       this.encendido = true;
//       console.log('Auto encendido');
//     },
//     apagar: function() {
//       this.encendido = false;
//       console.log('El auto se apagó');
//     }
//   };
  
  


//Ejercicio 2 -------------------------------------------------------------------------------------------

// const cuenta = {
//     titular: 'Alex',
//     saldo: 0,
//     ingresar: function(cantidad) {
//       this.saldo += cantidad;
//       console.log(`Se ingresaron ${cantidad} pesos a la cuenta.`);
//     },
//     extraer: function(cantidad) {
//       if (cantidad > this.saldo) {
//         console.log(`No es posible extraer ${cantidad} pesos. El saldo disponible es de ${this.saldo} pesos.`);
//       } else {
//         this.saldo -= cantidad;
//         console.log(`Se extrajeron ${cantidad} pesos de la cuenta.`);
//       }
//     },
//     informar: function() {
//       console.log(`Titular: ${this.titular}\nSaldo: ${this.saldo} pesos.`);
//     }
//   };
  
  

//Ejercicio 3 -------------------------------------------------------------------------------------------

// class Rectangulo {
//     constructor(alto, ancho) {
//       this.alto = alto;
//       this.ancho = ancho;
//     }
  
//     modificarAlto(nuevoAlto) {
//       this.alto = nuevoAlto;
//     }
  
//     modificarAncho(nuevoAncho) {
//       this.ancho = nuevoAncho;
//     }
  
//     mostrarPropiedades() {
//       console.log(`El rectángulo tiene un alto de ${this.alto} y un ancho de ${this.ancho}.`);
//     }
  
//     calcularPerimetro() {
//       const perimetro = 2 * (this.alto + this.ancho);
//       console.log(`El perímetro del rectángulo es ${perimetro}.`);
//     }
  
//     calcularArea() {
//       const area = this.alto * this.ancho;
//       console.log(`El área del rectángulo es ${area}.`);
//     }
//   }
  

//Ejercicio 4 -------------------------------------------------------------------------------------------

// class Producto {
//     constructor(codigo, nombre, precio) {
//       this.codigo = codigo;
//       this.nombre = nombre;
//       this.precio = precio;
//     }
  
//     imprimeDatos() {
//       console.log(`Código: ${this.codigo}, Nombre: ${this.nombre}, Precio: ${this.precio}`);
//     }
//   }
  
//   const productos = [
//     new Producto(1, "Producto 1", 10),
//     new Producto(2, "Producto 2", 20),
//     new Producto(3, "Producto 3", 30),
//   ];
  
//   productos.forEach(producto => producto.imprimeDatos());


//Ejercicio 8 ADICIONAL -------------------------------------------------------------------------------------------

// class Persona {
//     constructor(nombre, edad, profesion) {
//       this.nombre = nombre;
//       this.edad = edad;
//       this.profesion = profesion;
//     }
  
//     saludar() {
//       console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}.`);
//     }
  
//     despedirse() {
//       console.log(`Adiós, fue un gusto hablar contigo.`);
//     }
//   }
  
//   const persona1 = new Persona("Pedro", 35, "Profesor");
//   const persona2 = new Persona("María", 27, "secretaria");
  
//   persona1.saludar();
//   persona1.despedirse();
  
//   persona2.saludar();
//   persona2.despedirse();
  

//Ejercicio 9 ADICIONAL -------------------------------------------------------------------------------------------

// class Animal {
//     constructor(nombre, edad) {
//       this.nombre = nombre;
//       this.edad = edad;
//     }
  
//     emitirSonido() {
//       console.log("Este animal emite un sonido genérico.");
//     }
//   }
  
//   class Perro extends Animal {
//     constructor(nombre, edad) {
//       super(nombre, edad);
//     }
  
//     emitirSonido() {
//       console.log("Guau, guau, guau!");
//     }
//   }
  
//   class Gato extends Animal {
//     constructor(nombre, edad) {
//       super(nombre, edad);
//     }
  
//     emitirSonido() {
//       console.log("Miau, miau!");
//     }
//   }
  
//   const perro1 = new Perro("Firulais", 2);
//   const gato1 = new Gato("Michifus", 3);
  
//   perro1.emitirSonido();
//   gato1.emitirSonido();
  

//Ejercicio 10 ADICIONAL -------------------------------------------------------------------------------------------

class Aeropuerto {
    constructor(nombreAeropuerto) {
      this.nombreAeropuerto = nombreAeropuerto;
      this.listaAviones = [];
    }
  
    agregarAvion(avion) {
      this.listaAviones.push(avion);
    }
  
    buscarAvion(nombreAvion) {
      for (let avion of this.listaAviones) {
        if (avion.nombre === nombreAvion) {
          return avion;
        }
      }
      return "No se encontró el avión.";
    }
  }
  
  class Avion {
    constructor(nombre, capacidad, destino) {
      this.nombre = nombre;
      this.capacidad = capacidad;
      this.destino = destino;
      this.listaPasajeros = [];
    }
  
    abordar(pasajero) {
      if (this.listaPasajeros.length < this.capacidad) {
        this.listaPasajeros.push(pasajero);
        console.log(`El pasajero ${pasajero} ha abordado el avión ${this.nombre}.`);
      } else {
        console.log(`El avión ${this.nombre} está lleno. No se puede abordar.`);
      }
    }
  }

  
  const aeropuertoInternacional = new Aeropuerto("Aeropuerto Internacional");
  
  const avion1 = new Avion("Avion 1", 100, "Ciudad de México");
  const avion2 = new Avion("Avion 2", 80, "Buenos Aires");
  const avion3 = new Avion("Avion 3", 120, "Barcelona");
  
  aeropuertoInternacional.agregarAvion(avion1);
  aeropuertoInternacional.agregarAvion(avion2);
  aeropuertoInternacional.agregarAvion(avion3);

 const avionEncontrado = aeropuertoInternacional.buscarAvion("Avion 2");
 avionEncontrado.abordar("Pedro Pérez");

  