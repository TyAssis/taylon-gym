import { Door, DoorExpert, DoorFactory } from "./doorFactory";

class WoodenDoor implements Door {
    constructor() {

    }

    getDescription(): string {
        return 'I\'m a wooden door';
    }
}

class WoodenDoorExpert implements DoorExpert {
    constructor() {

    }

    getDescription(): string {
        return 'I\'m a wooden door expert';
    }
}

export class WoodenDoorFactory implements DoorFactory {
    makeDoor(): Door {
        return new WoodenDoor();
    }   

    makeExpert(): DoorExpert {
        return new WoodenDoorExpert();
    }
}