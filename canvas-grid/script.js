const canvas = document.getElementById('my-canvas');
canvas.style.backgroundColor='#04045a';
const ctx = canvas.getContext('2d');

ctx.strokeStyle='#07fdfc';
ctx.lineWidth=0.25;
ctx.fillStyle = '#07fdfc';
for( let x=0; x<canvas.width; x+=10){
    ctx.beginPath();//limpia las instrucciones de trazos anteriores
    ctx.moveTo(x,0);//desde donde quiero empezar a dibujar los trazos
    ctx.lineTo(x, canvas.height);
    ctx.lineWidth = (x % 50 === 0) ? 0.5 : 0.25;
    ctx.stroke();
    //agregamos una linea con los numeros de X
    if (x % 50 === 0) ctx.fillText(x, x, 10);
}


for( let y=0; y<canvas.height; y+=10){
    ctx.beginPath();
    ctx.moveTo(0,y);//desde donde quiero empezar a dibujar los trazos
    ctx.lineTo(canvas.width, y);
    ctx.lineWidth = (y % 50 === 0) ? 0.5 : 0.25;
    ctx.stroke();//dibuja
    //agregamos una linea con los numeros de Y
    if (y % 50 === 0) ctx.fillText(y, 0, y + 10);
}

//dibujo una figura
ctx.beginPath();
ctx.strokeStyle='#ffffff';
ctx.lineWidth=2;
ctx.moveTo(50, 50);
drawCoordinate(ctx, 50, 50);
ctx.lineTo(150,250);
drawCoordinate(ctx, 150, 250);
ctx.lineTo(250,170);
drawCoordinate(ctx, 250, 170);
ctx.closePath(); //conecta el ultimo punto con el primero
ctx.stroke();

//marcar coordenadas de la figura
function drawCoordinate(ctx, x, y) {
    ctx.fillStyle='#00ffda';
    ctx.fillText(`(${x},${y})`, x, y);
}

