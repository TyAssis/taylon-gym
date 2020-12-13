import { SubwaySandwich } from "./subwaySandwich";
import { SubwaySandwichBuilderInterface } from "./subwaySandwichBuilderInterface";

export class CheapOfFridayBuilder implements SubwaySandwichBuilderInterface {
    private sandwich: SubwaySandwich = { };

    constructor() {
        this.reset();
    }

    reset(): void {
        this.sandwich = new SubwaySandwich();
    }

    setBread(): void {
        this.sandwich.bread = 'MULTIGRAIN';
    }

    setMeat(): void {
        this.sandwich.meat = 'CHICKEN';
    }

    setChesse(): void {
        this.sandwich.cheese = 'PARMESAN';
    }

    setSalad(): void {
        this.sandwich.salad = ['OLIVE', 'ONION'];
    }

    getProduct(): SubwaySandwich {
        const product = this.sandwich;
        this.reset();
        return product;
    }
}