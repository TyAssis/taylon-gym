export interface Door {
    getDescription(): string;
}

export interface DoorExpert {
    getDescription(): string;
}

export abstract class DoorFactory {
    abstract makeDoor(): Door;
    abstract makeExpert(): DoorExpert;
}