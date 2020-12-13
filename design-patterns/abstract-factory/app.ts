import { Door, DoorExpert, DoorFactory } from "./doorFactory";
import { IronDoorFactory } from "./ironDoorFactory";
import { WoodenDoorFactory } from "./woodenDoorFactory";

enum DoorMaterial {
    WOOD = 'WOOD',
    IRON ='IRON',
}

class DoorStore {
    private factory: DoorFactory | undefined = undefined;
    private door: Door;
    private doorExpert: DoorExpert;

    constructor({ doorMaterial }: { doorMaterial: DoorMaterial })  {
        if (doorMaterial === DoorMaterial.IRON) {
            this.factory = new IronDoorFactory();
        }
        if (doorMaterial === DoorMaterial.WOOD) {
            this.factory = new WoodenDoorFactory();
        }
        if (!this.factory) throw new Error('invalid door material');
        this.door = this.factory.makeDoor();
        this.doorExpert = this.factory.makeExpert();
    }

    showDoorAndExpert(): void {
        console.log(this.door.getDescription());
        console.log(this.doorExpert.getDescription());
    }
}

const store = new DoorStore({ doorMaterial: DoorMaterial.IRON });
const store2 = new DoorStore({ doorMaterial: DoorMaterial.WOOD });

store.showDoorAndExpert();
store2.showDoorAndExpert();
