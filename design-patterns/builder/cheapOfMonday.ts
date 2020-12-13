import { SubwaySandwich } from "./subwaySandwich";
import { SubwaySandwichBuilderInterface } from "./subwaySandwichBuilderInterface";

export class CheapOfMondayBuilder implements SubwaySandwichBuilderInterface {
    private sandwich: SubwaySandwich = { };

    constructor() {
        this.reset();
    }

    reset(): void {
        this.sandwich = new SubwaySandwich();
    }

    setBread(): void {
        this.sandwich.bread = 'ITALIAN';
    }

    setMeat(): void {
        this.sandwich.meat = 'BEEF';
    }

    setChesse(): void {
        this.sandwich.cheese = 'MOZZARELLA';
    }

    setSalad(): void {
        this.sandwich.salad = ['LETTUCE', 'TOMATO'];
    }

    getProduct(): SubwaySandwich {
        const product = this.sandwich;
        this.reset();
        return product;
    }
}