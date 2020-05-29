import p5 from "p5";

const width = 800;
const height = 600;

const createGame = (p: p5) => {
    p.setup = () => {
        p.createCanvas(width, height);
    }

    p.draw = () => {
        p.background(55);
    }
}

const container = document.getElementById("container");
if (container)
    new p5(createGame, container);
