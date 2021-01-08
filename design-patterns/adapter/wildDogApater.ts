import { Lion } from "./lion";
import { WildDog } from "./wildDog";

export class WildDogAdapter implements Lion {
    private wildDog: WildDog;

    constructor(wildDog: WildDog) {
        this.wildDog = wildDog;
    }

    roar() {
        return this.wildDog.bark();
    }
}