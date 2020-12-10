import { Game } from "./game";
import { EnemyShip } from "./product";

class RocketEnemyShip extends EnemyShip {
    constructor() {
        super({ name: 'Rocket Enemy Ship', amtDamage: 20 });
    }
}

export class EasyGame extends Game {
    makeEnemyShip(): EnemyShip {
        return new RocketEnemyShip();
    }
}