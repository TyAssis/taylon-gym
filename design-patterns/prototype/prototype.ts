export abstract class Animal {
    protected height: number;
    protected color: string;

    constructor(source: { height: number; color: string }) {
        this.height = source.height;
        this.color = source.color;
    }

    abstract clone(): Animal;
}