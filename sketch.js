const paths = [];
let currentPath = [];
const color = document.querySelector(".color")
const range = document.querySelector(".range")
const clear = document.querySelector(".clear")


function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(155);
}

function draw() {
    noFill();
console.log(paths,currentPath)
    if (mouseIsPressed) {
        const point = {
            x: mouseX,
            y: mouseY,
            color: color.value,
            weight: range.value
        };
        currentPath.push(point);
    }

    paths.forEach(path => {
        beginShape();
        path.forEach(point => {
            stroke(point.color);
            strokeWeight(point.weight);
            vertex(point.x, point.y);
        });
        endShape();
    });
}

function mousePressed() {
    currentPath = [];
    paths.push(currentPath);
}

clear.addEventListener('click', () => {
    paths.splice(0);
    background(255);
});
