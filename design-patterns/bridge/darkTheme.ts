import { Theme } from "./theme";

export class DarkTheme implements Theme {
    getColor(): string {
        return 'black';
    }
}