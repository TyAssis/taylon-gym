import { Theme } from "./theme";

export class LightTheme implements Theme {
    getColor(): string {
        return 'white';
    }
}