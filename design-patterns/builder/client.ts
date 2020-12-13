import { CheapOfFridayBuilder } from "./cheapOfFriday";
import { CheapOfMondayBuilder } from "./cheapOfMonday";
import { Director } from "./director";

(() => {
    const builder = new CheapOfFridayBuilder();
    const director = new Director(builder);
    director.buildComplete();
    console.log(builder.getProduct());
    director.buildWithoutSalad();
    console.log(builder.getProduct());
})();

(() => {
    const builder = new CheapOfMondayBuilder();
    const director = new Director(builder);
    director.buildComplete();
    console.log(builder.getProduct());
    director.buildWithoutSalad();
    console.log(builder.getProduct());
})();