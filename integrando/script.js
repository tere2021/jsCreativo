let canvas = document.getElementById('my_canvas');

//se obtiene  el contexto de dibujo para el canvas 
const ctx = canvas.getContext("2d");

//tamaño de los lados de la triangulo y cuadrado (y radio para circulo)
const lado = 100;

let forma="triangulo";

switch (forma) {
    case "triangulo":
        //coordenadas del triangulo
        const x1 = 150, y1 = 80; // Vértice superior (en la parte superior del canvas)
        const x2 = 150 - lado, y2 = 150 + lado; // Vértice inferior izquierdo
        const x3 = 150 + lado, y3 = 150 + lado; // Vértice inferior derecho
        ctx.beginPath();// a partir de aca viene un dibujo nuevo
        ctx.moveTo(x1, y1); //primer vértice
        ctx.lineTo(x2, y2); // Dibuja una línea hasta el segundo vértice
        ctx.lineTo(x3, y3); // Dibuja una línea hasta el tercer vértice
        ctx.closePath(); // Cierra el triángulo, conectando el último vértice con el primero

        // Establece el color del triángulo
        ctx.fillStyle = "blue";
        ctx.fill(); // Rellena el triángulo con el color definido 
        break;

    case "cuadrado":
        //  coordenadas de la esquina superior izquierda y el tamaño del cuadrado
        const x = 100; // Coordenada X de la esquina superior izquierda
        const y = 100; // Coordenada Y de la esquina superior izquierda

        // Dibuja el cuadrado usando fillRect
        ctx.fillStyle = "orange"; // Color de relleno
        ctx.fillRect(x, y, lado, lado); // Dibuja el cuadrado
        break;

    case "circulo":
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        // DIBUJAR EL CÍRCULO
        ctx.beginPath();
        ctx.arc(centerX, centerY, lado, 0, 2 * Math.PI); 
        
        ctx.fillStyle = "white"; // Color del relleno
        ctx.fill(); // Rellena el círculo con color
       

        break;
    default:
        console.log('Objeto no reonocido');
}