import { Theme } from "./theme";
import { WebPage, WebPageConstructor } from "./webPage";

export class Career implements WebPage {
    protected theme: Theme;
    constructor({ theme } : WebPageConstructor) {
        this.theme = theme;
    }

    getContent(): string {
        return `Career page in ${this.theme.getColor()} color`;
    }
}