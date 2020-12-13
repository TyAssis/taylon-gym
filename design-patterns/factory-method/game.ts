import { EnemyShip } from "./product";

export abstract class Game {
    private enemyShip: EnemyShip;
    abstract makeEnemyShip(): EnemyShip;

    constructor() {
        this.enemyShip = this.makeEnemyShip();
    }

    run() {
        this.enemyShip = this.makeEnemyShip();
        this.enemyShip.displayEnemyShip();
        this.enemyShip.followHeroShip();
        this.enemyShip.enemyShipShoots();
    }
    
}