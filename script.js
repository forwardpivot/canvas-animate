let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


// let x = Math.random() * innerWidth;
// let y = Math.random() * innerHeight;
// let dx = (Math.random() * - 0.5) * 15;
// let dy = (Math.random() * - 0.5) * 15;
// var radius = 30;

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius

    this.draw = function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.strokeStyle = 'blue';
        ctx.fill();
        ctx.stroke();
    }

    this.update = function() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) 
        this.dx = -this.dx; 
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0)
            this.dy = -this.dy;
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
}

let circleArray = [];

for (let i = 0; i < 50; i++) {
    var radius = 30;
    let x = Math.random() * (innerWidth - radius * 2) + radius;
    let y = Math.random() * (innerHeight - radius * 2) + radius;
    let dx = (Math.random() * - 0.5) * 7;
    let dy = (Math.random() * - 0.5) * 7;

    circleArray.push(new Circle(x,y,dx,dy,radius));
    //let circle = new Circle(200, 200, 3, 3, 30);
}

console.log(circleArray);


function animate() {
        ctx.clearRect(0,0,innerWidth,innerHeight);
        
    // circle.update();

    for (let i =0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
        
    requestAnimationFrame(animate);
}

animate();