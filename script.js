let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.beginPath();
ctx.arc(500,500,30,0,Math.PI * 2);
ctx.strokeStyle = 'blue';
ctx.stroke();

let x = Math.random() * innerWidth;
let y = Math.random() * innerHeight;
let dx = (Math.random() * - 0.5) * 15;
let dy = (Math.random() * - 0.5) * 15;
var radius = 30;
function animate() {
        ctx.clearRect(0,0,innerWidth,innerHeight);
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.strokeStyle = 'blue';
        ctx.fill();
        ctx.stroke();

        if (x + radius > innerWidth || x - radius < 0) 
            dx = -dx; 
        if (y + radius > innerHeight || y - radius < 0)
            dy = -dy;
        x += dx;
        y += dy;
    requestAnimationFrame(animate);
}

animate();