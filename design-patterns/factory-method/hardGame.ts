import { Game } from "./game";
import { EnemyShip } from "./product";

class UFOEnemyShip extends EnemyShip {
    constructor() {
        super({ name: 'UFO Enemy Ship', amtDamage: 10 });
    }
}

export class HardGame extends Game {
    makeEnemyShip(): EnemyShip {
        return new UFOEnemyShip();
    }
}