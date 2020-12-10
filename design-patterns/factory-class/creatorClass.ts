// creator abstract class
// The creator class declares the factory method

export interface EnemyShipConstructor {
    name: string;
    amtDamage: number;
}

export abstract class EnemyShip {
    private _name: string;
    private _amtDamage: number;

    constructor({  name, amtDamage } : EnemyShipConstructor) {
        this._name = name;
        this._amtDamage = amtDamage;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get amtDamage() {
        return this._amtDamage;
    }

    set amtDamage(_amtDamage: number) {
        this._amtDamage = this._amtDamage;
    }

    followHeroShip() {
        console.log(`${this.name} is following the hero`)
    }

    displayEnemyShip() {
        console.log(`${this.name} is on the screen`)
    }

    enemyShipShoots() {
        console.log(`${this.name} attacks harming you in ${this.amtDamage} points`);
    }
    
}