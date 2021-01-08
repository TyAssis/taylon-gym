import { Archive } from "./archive";

export class File implements Archive {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    download() {
        console.log(`downloading file ${this.name}`);
    }
}