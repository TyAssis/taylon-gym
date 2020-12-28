import { About } from "./about";
import { Career } from "./career";
import { DarkTheme } from "./darkTheme";
import { LightTheme } from "./lightTheme";

const darkTheme = new DarkTheme();
const lightTheme = new LightTheme();

const aboutPageLightTheme = new About({ theme: lightTheme });
const careerPageLightTheme = new Career({ theme: lightTheme });
const aboutPageDarkTheme = new About({ theme: darkTheme });
const careerPageDarkTheme = new Career({ theme: darkTheme });

console.log(aboutPageLightTheme.getContent());
console.log(careerPageLightTheme.getContent());
console.log(aboutPageDarkTheme.getContent());
console.log(careerPageDarkTheme.getContent());