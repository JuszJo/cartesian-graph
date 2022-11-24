var canvas = document.querySelector('canvas');

let drawingSurface = canvas.getContext('2d');

let width = 800;
let height = 600;

canvas.setAttribute("width", width);
canvas.setAttribute("height", height);


drawingSurface.strokeRect(0, 0, width, height);

drawingSurface.translate(25, 10)

var cartesian = new Cartesian();

window.requestAnimationFrame(update);

function update() {
    draw();
}

function draw() {
    cartesian.draw();

    cartesian.plot(1, 3)
    cartesian.plot(7, 9)
    cartesian.plot(10, 5)
}
