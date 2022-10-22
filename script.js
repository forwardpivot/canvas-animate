let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.beginPath();
ctx.arc(500,500,30,0,Math.PI * 2);
ctx.strokeStyle = 'blue';
ctx.stroke();

let x = 500;
let dx = 1;
function animate() {
        ctx.clearRect(0,0,innerWidth,innerHeight);
        ctx.beginPath();
        ctx.arc(x,500,30,0,Math.PI * 2);
        ctx.strokeStyle = 'blue';
        ctx.fill();
        ctx.stroke();

        if (x > innerWidth) 
            dx = -1; 

        x += dx;
    requestAnimationFrame(animate);
}

animate();