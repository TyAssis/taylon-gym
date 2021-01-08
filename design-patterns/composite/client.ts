import { Folder } from "./folder";
import { File } from "./file";

const archives = new Folder([]);
const file1 = new File('sha');
const file2 = new File('la');
const file3 = new File('la');
archives.add(file1);
archives.add(file2);
archives.add(file3);

const archives2 = new Folder([
    new Folder([
        new File('itsu'),
        new File('ka'),
    ]),
    new File('ki'),
    new File('itu'),
]);

archives.download();
archives2.download();