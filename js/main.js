const canvasOOP = document.getElementById("canvasOOP");
const canvasRandom = document.getElementById("canvasRandom");
const canvasMultiple = document.getElementById("canvasMultiple");

const ctx = canvasOOP.getContext("2d");
const ctxRandom = canvasRandom.getContext("2d");
const ctxMultiple = canvasMultiple.getContext("2d");

canvasOOP.height = 200;
canvasOOP.width = 300;
canvasRandom.height = 200;
canvasRandom.width = 300;
canvasMultiple.height = 200;
canvasMultiple.width = 300;

canvasOOP.style.background = "black";
canvasRandom.style.background = "#e6f7f6";
canvasMultiple.style.background = "#e6f7f6";

class Circle {
    constructor(x, y, radius, color, text, backcolor) {
        this.posX = x;
        this.posY = y;
        this.radius = radius;
        this.color = color;
        this.text = text;
        this.backcolor = backcolor;
    }

    draw(context) {
        context.beginPath();
        context.fillStyle = this.backcolor;
        context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false);
        context.fill();
        context.lineWidth = 2;
        context.strokeStyle = this.color;
        context.stroke();
        
        context.fillStyle = "black";
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.font = "20px Arial";
        context.fillText(this.text, this.posX, this.posY);
        
        context.closePath();
    }
}


let miCirculo = new Circle(canvasOOP.width / 2, canvasOOP.height / 2, 50, 'black', 'Tec', 'rgb(255, 56, 86)');
miCirculo.draw(ctx);


function validPlacement(x, y, radius, canvas) {
    return (x - radius > 0 && x + radius < canvas.width && y - radius > 0 && y + radius < canvas.height);
}


let randomX, randomY, randomRadius;
do {
    randomRadius = Math.floor(Math.random() * 50 + 30); 
    randomX = Math.random() * (canvasRandom.width - 2 * randomRadius) + randomRadius;
    randomY = Math.random() * (canvasRandom.height - 2 * randomRadius) + randomRadius;
} while (!validPlacement(randomX, randomY, randomRadius, canvasRandom));
let miCirculoRandom = new Circle(randomX, randomY, randomRadius, 'black', 'Tec', 'rgb(255, 32, 171)');
miCirculoRandom.draw(ctxRandom);


let arrayCircle = [];
for (let i = 0; i < 10; i++) {
    do {
        randomRadius = Math.floor(Math.random() * 30 + 30); 
        randomX = Math.random() * (canvasMultiple.width - 2 * randomRadius) + randomRadius;
        randomY = Math.random() * (canvasMultiple.height - 2 * randomRadius) + randomRadius;
    } while (!validPlacement(randomX, randomY, randomRadius, canvasMultiple));

    let miCirculoMultiple = new Circle(randomX, randomY, randomRadius, "black", i + 1, 'rgb(218, 140, 250)');
    arrayCircle.push(miCirculoMultiple);
    arrayCircle[i].draw(ctxMultiple);
}
