class Singleton {
    private static instance: Singleton;

    private constructor() {

    }

    public static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}

const ref1 = Singleton.getInstance();
const ref2 = Singleton.getInstance();

if (ref1 === ref2) console.log('singleton works');