import { SubwaySandwichBuilderInterface } from "./subwaySandwichBuilderInterface";

export class Director {
    private builder: SubwaySandwichBuilderInterface;

    constructor(builder: SubwaySandwichBuilderInterface) {
        this.builder = builder;
    }

    public buildComplete() {
        this.builder.setBread();
        this.builder.setMeat();
        if (this.builder.setChesse) this.builder.setChesse();
        if (this.builder.setSalad) this.builder.setSalad();
    }
    
    public buildWithoutSalad() {
        this.builder.setBread();
        this.builder.setMeat();
        if (this.builder.setChesse) this.builder.setChesse();
    }
}