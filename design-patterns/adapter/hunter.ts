import { AfricanLion } from "./africanLion.";
import { AsianLion } from "./asianLion";
import { Lion } from "./lion";
import { WildDog } from "./wildDog";
import { WildDogAdapter } from "./wildDogApater";

class Hunter {
    private lion: Lion;

    constructor(lion: Lion) {
        this.lion = lion;
    }

    hunt() {
        console.log(this.lion.roar());
    }
}

const asianHunter = new Hunter(new AsianLion());
const africanHunter = new Hunter(new AfricanLion());
asianHunter.hunt();
africanHunter.hunt();
const wildDog = new WildDog();
const wildDogApater = new WildDogAdapter(wildDog);
const wildDogHunter = new Hunter(wildDogApater);
wildDogHunter.hunt();