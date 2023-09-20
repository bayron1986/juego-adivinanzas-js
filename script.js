//seleccion de numero al azar y contador de intentos
let numeroAzar= Math.floor(Math.random()*100) +1
console.log(numeroAzar)
let numeroEntrada= document.getElementById('numeroEntrada') 
let mensaje= document.getElementById('mensaje') 
let intento= document.getElementById('intento') 
let intentos= 0 

function mostrarGanador() {
    // Selecciona el elemento de la imagen por su ID
    var imagen = document.getElementById("imagenGanador");
    // Actualiza el atributo src con la ruta de la imagen de ganador
    imagen.src = "https://png.pngtree.com/png-vector/20191213/ourmid/pngtree-gold-trophy-with-the-name-plate-of-the-winner-of-the-png-image_2088890.jpg";
    // Muestra la imagen al establecer su estilo a "display: block;"
    imagen.style.display = "block";
}

// Esta accion se va a ejecutr cuando hagamos click en ejecutar
function chequearResultado() {
    intentos ++
    intento.textContent = intentos
    let numeroIngresado= parseInt(numeroEntrada.value)
    
    if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){ 
    mensaje.textContent = 'El numero ingresado es invalido! debe ser mayor a 0 y menor que 100'
return 
}
if (numeroIngresado === numeroAzar) {
    mensaje.textContent = 'Felicitaciones! eres el ganador!';
    mensaje.style.color = 'green';
    numeroEntrada.disabled = true;
    mostrarGanador();

} else if (numeroIngresado < numeroAzar){
    mensaje.textContent = 'casi acertas!, el numero es un poquito mas grande! pensa!😂🥱';
    mensaje.style.color = 'blue';
} else {
    mensaje.textContent = 'UPS!!! el numero es mas bajo, intenta de nuevo😁';
    mensaje.style.color = 'red';
}
}