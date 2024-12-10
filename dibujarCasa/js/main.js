import { drawCoordinate, ctx } from './drawing.js';

// Dibujo de la casa

//pared
ctx.beginPath();
ctx.strokeStyle = '#ffffff';
ctx.lineWidth = 4;
ctx.moveTo(50, 350);
drawCoordinate(ctx, 50, 350);
ctx.lineTo(350, 350);
drawCoordinate(ctx, 350, 350);
ctx.lineTo(350, 150);
drawCoordinate(ctx,350, 150);
ctx.lineTo(200, 50);
drawCoordinate(ctx, 200, 50);
ctx.lineTo(50, 150);
drawCoordinate(ctx, 50, 150);
ctx.closePath();
ctx.stroke();

//VENTANA
ctx.beginPath();
ctx.lineWidth = 3;
ctx.strokeRect(95, 170, 100, 100);
ctx.lineWidth = 2;
ctx.strokeRect(110, 185, 70, 70);

//linea horizontal
ctx.moveTo(110, 220);
drawCoordinate(ctx, 110, 220);
ctx.lineTo(180, 220);
drawCoordinate(ctx, 180, 220);

//linea vertical
ctx.moveTo(145, 185);
drawCoordinate(ctx, 145, 185);
ctx.lineTo(145, 255);
drawCoordinate(ctx, 145, 255);

ctx.stroke();


//PUERTA
ctx.beginPath();
ctx.lineWidth = 3;
ctx.strokeRect(235, 195, 80, 155);
ctx.lineWidth = 2;
ctx.strokeRect(245, 210, 60, 55);
ctx.strokeRect(245, 280, 60, 55);
ctx.stroke();


//TECHO
ctx.beginPath();
ctx.lineWidth = 4;
ctx.moveTo(350, 150);
drawCoordinate(ctx,350, 150);
ctx.lineTo(365, 160);
drawCoordinate(ctx, 365, 160);
ctx.lineTo(360, 140);
drawCoordinate(ctx, 360, 140);
ctx.lineTo(200, 30);
drawCoordinate(ctx, 200, 30);
ctx.lineTo(40, 140);
drawCoordinate(ctx, 40, 140);
ctx.lineTo(35, 160);
drawCoordinate(ctx, 35, 160);
ctx.lineTo(50, 150);
drawCoordinate(ctx, 50, 150);

ctx.stroke();
