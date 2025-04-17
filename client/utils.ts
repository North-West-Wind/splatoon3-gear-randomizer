import { GearInfoClothes, GearInfoHead, GearInfoShoes, GearType, Language, Locale } from "./types";

let head: GearInfoHead[] | undefined;
let clothes: GearInfoClothes[] | undefined;
let shoes: GearInfoShoes[] | undefined;
let lang: { locale: Locale, data: Language } | undefined;

export async function getInfo(type: GearType) {
	switch (type) {
		case "head":
			if (head) return head;
			return head = (await fetch("https://leanny.github.io/splat3/data/mush/930/GearInfoHead.json").then(res => res.json())) as GearInfoHead[];
		case "clothes":
			if (clothes) return clothes;
			return clothes = (await fetch("https://leanny.github.io/splat3/data/mush/930/GearInfoClothes.json").then(res => res.json())) as GearInfoClothes[];
		case "shoes":
			if (shoes) return shoes;
			return shoes = (await fetch("https://leanny.github.io/splat3/data/mush/930/GearInfoShoes.json").then(res => res.json())) as GearInfoShoes[];
	}
}

export async function getLang(locale: Locale) {
	if (lang && lang.locale == locale) return lang;
	return lang = { locale, data: (await fetch(`https://leanny.github.io/splat3/data/language/${locale}.json`).then(res => res.json())) as Language }
}

export async function getGearName(id: number, type: GearType, locale: Locale = "EUen") {
	const info = await getInfo(type);
	const gear = info.find(gear => gear.Id == id);
	if (!gear) return undefined; 
	const lang = await getLang(locale);
	let nameMap: Record<string, string> = {};
	switch (type) {
		case "head":
			nameMap = lang.data["CommonMsg/Gear/GearName_Head"];
			break;
		case "clothes":
			nameMap = lang.data["CommonMsg/Gear/GearName_Clothes"];
			break;
		case "shoes":
			nameMap = lang.data["CommonMsg/Gear/GearName_Shoes"];
			break;
	}
	const key = gear.__RowId.split("_").pop();
	if (!key) return undefined;
	return nameMap[key];
}

export async function getGearImageUrl(id: number, type: GearType) {
	const info = await getInfo(type);
	const gear = info.find(gear => gear.Id == id);
	if (gear) return `https://leanny.github.io/splat3/images/gear/${gear.__RowId}.png`;
	return undefined;
}