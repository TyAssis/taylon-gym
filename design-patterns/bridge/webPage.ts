import { Theme } from "./theme";

export interface WebPageConstructor {
    theme: Theme;
}

export abstract class WebPage {
    abstract getContent(): string;
}