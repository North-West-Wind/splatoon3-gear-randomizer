import { GearJSON } from "./types";
import { getGearImageUrl } from "./utils";

const headCol = document.getElementById("head")!;
const clothesCol = document.getElementById("clothes")!;
const shoesCol = document.getElementById("shoes")!;

(async () => {
	// init
	const gearDb = ((await fetch("/gear.json").then(res => res.json())) as GearJSON).GearDB;
	const headList = Array.from(Object.keys(gearDb.HaveGearHeadMap));
	const clothesList = Array.from(Object.keys(gearDb.HaveGearClothesMap));
	const shoesList = Array.from(Object.keys(gearDb.HaveGearShoesMap));

	headCol.getElementsByTagName("img").item(0)!.src = (await getGearImageUrl(parseInt(headList[Math.floor(Math.random() * headList.length)]), "head"))!;
	clothesCol.getElementsByTagName("img").item(0)!.src = (await getGearImageUrl(parseInt(clothesList[Math.floor(Math.random() * clothesList.length)]), "clothes"))!;
	shoesCol.getElementsByTagName("img").item(0)!.src = (await getGearImageUrl(parseInt(shoesList[Math.floor(Math.random() * shoesList.length)]), "shoes"))!;
})();

// handlers
import "./handlers/resize";
