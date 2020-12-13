import { RocketEnemyShip } from "./rocketEnemyShip";
import { UFOEnemyShip } from "./UFOEnemyShip";

export class EnemyShipFactory {
    public static makeEnemyShip({ gameMode }: { gameMode: string }) {
        if (gameMode === 'EASY') {
            return new UFOEnemyShip();
        }
        if (gameMode === 'HARD') {
            return new RocketEnemyShip();
        }
    }
}