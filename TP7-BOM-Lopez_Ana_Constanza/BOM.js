//Crear un script que luego de 3 segundos muestre en el navegador la fecha del día

// setTimeout(function() {
//     // Crear objeto Date
//     const fecha = new Date();
    
//     // Obtiener el día, mes y año
//     const dia = fecha.getDate();
//     const mes = fecha.getMonth() + 1;
//     const anio = fecha.getFullYear();
    
//     // Crea cadena con la fecha
//     const fechaString = dia + "/" + mes + "/" + anio;
    
//     // Muestra fecha en el navegador
//     alert("Hoy es " + fechaString);
//   }, 3000);
  

//---------------------------------------------------------------------------------------------



  //Con 30 minutos de bicicleta puedes quemar 192 calorías. Crear un script que muestre en consola las calorías que vas quemando por segundo simulando que vas en bicicleta.

const caloriasPorMediaHora = 192;

const caloriasPorSegundo = caloriasPorMediaHora / (30 * 60);

function mostrarCaloriasQuemadas() {
  const tiempoTranscurrido = Date.now() - inicio;
  const segundosTranscurridos = tiempoTranscurrido / 1000;
  const caloriasQuemadas = segundosTranscurridos * caloriasPorSegundo;
  console.log("Calorías quemadas: " + caloriasQuemadas.toFixed(2));
}

// Inicia el simulador de bicicleta
console.log("Comenzando a pedalear...");
const inicio = Date.now();
mostrarCaloriasQuemadas();

// Actualiza las calorías perdidas por cada segundo
setInterval(function() {
  mostrarCaloriasQuemadas();
}, 1000);
