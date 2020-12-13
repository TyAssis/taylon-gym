import { Canine } from "./canine"

(() => {
    const canine = new Canine({
        color: 'black', height: 1.00, weight: 32,
    });
    const otherCanine = canine.clone();

    console.log(canine);
    console.log(otherCanine);
})()