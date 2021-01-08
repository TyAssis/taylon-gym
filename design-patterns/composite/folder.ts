import { Archive } from "./archive";

export class Folder implements Archive {
    private archives: Archive[];

    constructor(archives: Archive[]) {
        this.archives = archives;
    }

    download() {
        this.archives.forEach(archive => {
            archive.download();
        })
    }
    
    add(archive: Archive) {
        this.archives.push(archive);
    }
}