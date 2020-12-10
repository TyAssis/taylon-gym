// creator concrete class

import { EnemyShip } from "./creatorClass";


export class UFOEnemyShip extends EnemyShip {
    constructor() {
        super({ name: 'UFO Enemy Ship', amtDamage: 20 })
    }
}