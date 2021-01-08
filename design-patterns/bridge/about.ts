import { Theme } from "./theme";
import { WebPage, WebPageConstructor } from "./webPage";

export class About implements WebPage {
    protected theme: Theme;
    constructor({ theme } : WebPageConstructor) {
        this.theme = theme;
    }

    getContent(): string {
        return `About page with ${this.theme.getColor()} theme`;
    }
}