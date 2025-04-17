import { GearJSON } from "./types";
import { getGearImageUrl, getGearName } from "./utils";

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

	// websocket listener
	const ws = new WebSocket("/");
	ws.onmessage = async message => {
		if (message.data == "roll") {
			const head = parseInt(headList[Math.floor(Math.random() * headList.length)]);
			const clothes = parseInt(clothesList[Math.floor(Math.random() * clothesList.length)]);
			const shoes = parseInt(shoesList[Math.floor(Math.random() * shoesList.length)]);

			headCol.getElementsByTagName("img").item(0)!.src = (await getGearImageUrl(head, "head"))!;
			clothesCol.getElementsByTagName("img").item(0)!.src = (await getGearImageUrl(clothes, "clothes"))!;
			shoesCol.getElementsByTagName("img").item(0)!.src = (await getGearImageUrl(shoes, "shoes"))!;

			ws.send(`${await getGearName(head, "head")}|${await getGearName(clothes, "clothes")}|${await getGearName(shoes, "shoes")}`);
		}
	};
})();

// handlers
import "./handlers/resize";
