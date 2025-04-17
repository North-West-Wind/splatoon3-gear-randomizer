import axios from "axios";
import { existsSync, readFileSync, writeFileSync } from "fs";
import { GearInfo, GearJSON, Language } from "./types";

if (!existsSync("input/gear.json")) throw new Error("No input/gear.json found!");
const json = JSON.parse(readFileSync("input/gear.json", "utf8")) as GearJSON;

(async () => {
	const set = new Set<string>();
	const lang = (await axios.get("https://leanny.github.io/splat3/data/language/EUen.json")).data as Language;
	writeFileSync("lang.json", JSON.stringify(lang, null, 2));
})();