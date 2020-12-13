import { Animal } from "./prototype";

export class Canine extends Animal {
    private weight: number;

    constructor(source: { height: number; color: string; weight: number }) {
        super({ color: source.color, height: source.height });
        this.weight = source.weight;
        console.log('Canine is made in constructor');
    }

    clone(): Animal {
        console.log('Canine is cloned');
        const clone = Object.create(this) as Canine;
        clone.color = this.color;
        clone.height = this.height;
        clone.weight = this.weight;
        return clone;
    }
}