let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


// let x = Math.random() * innerWidth;
// let y = Math.random() * innerHeight;
// let dx = (Math.random() * - 0.5) * 15;
// let dy = (Math.random() * - 0.5) * 15;
// var radius = 30;

let mouse = {
    x: undefined,
    y: undefined
}

let maxRadius = 50;
let minRadius = 10;

let colorArray = [
    '#ff12aa',
    '#ff34bb',
    '#ff56cc',
    '#bb98ee',
    '#cc76dd'
];

window.addEventListener('mousemove', function(e){
    mouse.x = e.x;
    mouse.y = e.y;
});

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    init();
});

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)]

    this.draw = function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
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

        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y -this.y < 50
            && mouse.y - this.y > -50) {
                if (this.radius < maxRadius)
                    this.radius += 1;
        } else if (this.radius > this.minRadius) {
            this.radius -= 1;
        }

        this.draw();
    }
}

let circleArray = [];

function init() {
    circleArray =[];
    for (let i = 0; i < 600; i++) {
        var radius = Math.random() * 9 + 1;
        let x = Math.random() * (innerWidth - radius * 2) + radius;
        let y = Math.random() * (innerHeight - radius * 2) + radius;
        let dx = (Math.random() * - 0.5) * 3;
        let dy = (Math.random() * - 0.5) * 3;
    
        circleArray.push(new Circle(x, y, dx, dy, radius));
        //let circle = new Circle(200, 200, 3, 3, 30);
    }
}

function animate() {
        ctx.clearRect(0,0,innerWidth,innerHeight);
        
    // circle.update();

    for (let i =0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
        
    requestAnimationFrame(animate);
}
init();
animate();