// creator concrete class

import { EnemyShip } from "./creatorClass";

export class RocketEnemyShip extends EnemyShip {
    constructor() {
        super({ name: 'Rocket Enemy Ship', amtDamage: 10 })
    }
}