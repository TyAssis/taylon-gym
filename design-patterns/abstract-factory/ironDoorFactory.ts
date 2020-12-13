import { Door, DoorExpert, DoorFactory } from "./doorFactory";

class IronDoor implements Door {
    constructor() {

    }

    getDescription(): string {
        return 'I\'m a iron door';
    }
}

class IronDoorExpert implements DoorExpert {
    constructor() {

    }

    getDescription(): string {
        return 'I\'m a iron door expert';
    }
}

export class IronDoorFactory implements DoorFactory {
    makeDoor(): Door {
        return new IronDoor();
    }   

    makeExpert(): DoorExpert {
        return new IronDoorExpert();
    }
}