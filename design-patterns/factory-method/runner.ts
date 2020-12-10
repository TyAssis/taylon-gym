import { EasyGame } from "./easyGame";
import { Game } from "./game";
import { HardGame } from "./hardGame";

class Runner {
    constructor(private game: Game) {

    }

    run() {
        this.game.run();
    }
}

const runner = new Runner(new HardGame());
const runner2 = new Runner(new EasyGame());

runner.run();
runner2.run();