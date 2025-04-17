import axios from "axios";
import { GearInfoClothes, GearInfoHead, GearInfoShoes, GearType, Language, Locale } from "./types";

let head: GearInfoHead[] | undefined;
let clothes: GearInfoClothes[] | undefined;
let shoes: GearInfoShoes[] | undefined;
let lang: { locale: Locale, data: Language } | undefined;

export async function getInfo(type: GearType) {
	switch (type) {
		case "head":
			if (head) return head;
			return head = (await axios.get("https://leanny.github.io/splat3/data/mush/930/GearInfoHead.json")).data as GearInfoHead[];
		case "clothes":
			if (clothes) return clothes;
			return clothes = (await axios.get("https://leanny.github.io/splat3/data/mush/930/GearInfoClothes.json")).data as GearInfoClothes[];
		case "shoes":
			if (shoes) return shoes;
			return shoes = (await axios.get("https://leanny.github.io/splat3/data/mush/930/GearInfoShoes.json")).data as GearInfoShoes[];
	}
}

export async function getLang(locale: Locale) {
	if (lang && lang.locale == locale) return lang;
	return lang = { locale, data: (await axios.get(`https://leanny.github.io/splat3/data/language/${locale}.json`)).data as Language }
}

export async function getGearName(id: number, type: GearType) {
	const info = await getInfo(type);
	const gear = info.find(gear => gear.id == id);

}

export async function getGearImageUrl(id: number, type: GearType) {
	const info = await getInfo(type);
	const gear = info.find(gear => gear.id == id);
	if (gear) return `https://leanny.github.io/splat3/images/gear/${gear.__RowId}.png`;
	return undefined;
}