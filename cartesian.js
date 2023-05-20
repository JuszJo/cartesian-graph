class Cartesian {
    constructor() {
        this.x_origin = 0;
        this.y_origin = 550;
        this.x_final = this.x_origin + 550;
        this.y_final = this.y_origin - this.y_origin;
        this.distance = 20;    // Between Points
        this.length = 5;    // Length of small line
        this.numberCount = 27   // Amount of values 
        this.textDistance = 10; // Between text
    }

    connectPoints(x1, y1, x2, y2) {
        drawingSurface.beginPath()
        drawingSurface.moveTo(x2, y2);
        drawingSurface.lineTo(x1, y1);
        drawingSurface.stroke();
    }

    drawCartesian() {
        this.connectPoints(this.x_origin, this.y_origin, this.x_final, this.y_origin)
        this.connectPoints(this.x_origin, this.y_origin, this.x_origin, this.y_final);
    }

    numberCartesianX() {
        for(let number = 0, numberDistance = 20; number < this.numberCount; numberDistance += 20, ++number) {
            this.connectPoints(this.x_origin + numberDistance, this.y_origin + this.length, this.x_origin + numberDistance, this.y_origin - this.length);
            drawingSurface.font = '12px Arial';
            drawingSurface.textAlign = 'center';
            drawingSurface.textBaseline = 'top'
            drawingSurface.fillText(`${number + 1}`, this.x_origin + numberDistance, this.y_origin + this.textDistance);
        }
    }

    numberCartesianY() {
        for(let number = 0, numberDistance = 20; number < this.numberCount; numberDistance += 20, ++number) {
            this.connectPoints(this.x_origin - this.length, this.y_origin - numberDistance, this.x_origin + this.length, this.y_origin - numberDistance);
            drawingSurface.font = '12px Arial';
            drawingSurface.textAlign = 'center';
            drawingSurface.textBaseline = 'middle';
            drawingSurface.fillText(`${number + 1}`, this.x_origin - this.textDistance - this.length, this.y_origin - numberDistance);
        }
        this.distance = 20;
    }

    plot(x, y) {
        let plotX = x * this.distance;
        let plotY = this.y_origin - (y * this.distance);

        // Creates point
        drawingSurface.beginPath();
        drawingSurface.fillStyle = 'black';
        drawingSurface.arc(plotX, plotY, 2, 0, Math.PI * 2, false);
        drawingSurface.fill()
        drawingSurface.closePath();
    }

    draw() {
        this.drawCartesian();
        this.numberCartesianX();
        this.numberCartesianY();
    }
}

        
        
        
        