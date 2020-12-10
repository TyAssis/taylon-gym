// client class

import { EnemyShip } from "./creatorClass";
import { EnemyShipFactory } from "./factoryClass";

class App {
    private enemyShip: EnemyShip | undefined;

    constructor({ gameMode }: { gameMode: string }) {
       this.enemyShip = EnemyShipFactory.makeEnemyShip({ gameMode });
    }

    run() {
        if (!this.enemyShip) throw new Error('missing enemy ship')
        this.enemyShip.displayEnemyShip();
        this.enemyShip.followHeroShip();
        this.enemyShip.enemyShipShoots();
    }
}

const app1 = new App({ gameMode: 'EASY' });
const app2 = new App({ gameMode: 'HARD' });

app1.run();
app2.run();