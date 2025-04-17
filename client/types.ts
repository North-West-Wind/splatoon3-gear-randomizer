// For local gear.json
export type Gear = {
	ExDrinksArray: number[],
	ExSkillArray: number[],
	MainSkill: number,
	RandomContext: number
};

export type GearDB = {
	HaveGearHeadMap: Record<`${number}`, Gear>;
	HaveGearClothesMap: Record<`${number}`, Gear>;
	HaveGearShoesMap: Record<`${number}`, Gear>;
};

export type SeedListing = {
	Context1: number;
	Context2: number;
	Context3: number;
	Context4: number;
};

export type SeedListingKey = "CardPack" | "Lot" | "LotFest" | "MissionDrone" | "MysteryBox" | "RandomDrinkTicket" | "RandomFoodTicket" | "RewardRandomPool_Byname" | "RewardRandomPool_Emote" | "RewardRandomPool_Gear_Clothes" | "RewardRandomPool_Gear_Head" | "RewardRandomPool_Gear_Shoes" | "RewardRandomPool_LockerFigure" | "RewardRandomPool_LockerSticker" | "RewardRandomPool_NamePlateBg" | "Vendor";

export type Versus = {
	WinCountByRule: Record<`${number}`, number>;
	WinCountBySpecial: Record<`${number}`, number>;
	WinCountByTclAtk: number;
	WinCountByTclDef: number;
}

export type Coop = {
	BossKillNumMap: Record<`${number}`, number>;
	RareEnemyKillNumMap: Record<`${number}`, number>;
}

export type Profile = {
	BadgeList: `${number}`[];
	GoodsMap: Record<`${number}`, number>;
	BynameAdjectiveMap: Record<`${number}`, boolean>;
	BynameSubjectMap: Record<`${number}`, boolean>;
	NamePlateBgMap: Record<`${number}`, boolean>;
	SkillChipMap: Record<`${number}`, number>;
	Versus: Versus;
	Coop: Coop;
	Level: number;
	EmoteMap: Record<`${number}`, boolean>;
	LastUpdated: number;
}

export type GearJSON = {
	GearDB: GearDB;
	UserData: { CloudRandomSet: { Map: Record<SeedListingKey, SeedListing> } };
}

// For APIs
export type GearType = "head" | "clothes" | "shoes";

export type GenreHead = "Head_Accessory" | "Head_Band" | "Head_Bandana" | "Head_Beret" | "Head_Cap" | "Head_Glasses" | "Head_Goggle" | "Head_Hat" | "Head_Headphone" | "Head_Helmet" | "Head_KnitCap" | "Head_Mask" | "Head_Party" | "Head_Sand" | "Head_Spring" | "Head_Visor" | "Unknown";
export type GenreClothes = "Unknown"
export type GenreShoes = "Shoes_Barefoot" | "Shoes_BigFoot" | "Shoes_Boots" | "Shoes_Bouldering" | "Shoes_Comfort" | "Shoes_Hicut" | "Shoes_Leather" | "Shoes_Lowcut" | "Shoes_Moccasin" | "Shoes_RainBoots" | "Shoes_RubberSole" | "Shoes_Sandal" | "Shoes_Slippon" | "Shoes_Spike" | "Shoes_Spring" | "Unknown";

export type GearInfo = {
	AlphaMaskF: string;
	AlphaMaskM: string;
	AlphaMaskV1: string;
	Brand: `B${number}` | "None";
	CaptureModelType: "Male" | "Female";
	Genre0: string;
	Genre1: string;
	// Too lazy to type all so here are the important things
	Id: number;
	__RowId: string;
}

export type GearInfoHead = GearInfo & {
	Genre0: GenreHead;
	Genre1: GenreHead;
}

export type GearInfoClothes = GearInfo & {
	Genre0: GenreClothes;
	Genre1: GenreClothes;
}

export type GearInfoShoes = GearInfo & {
	Genre0: GenreShoes;
	Genre1: GenreShoes;
}

export type Locale = "USen" | "EUen" | "EUes" | "USes" | "EUfr" | "EUde" | "EUnl" | "EUit" | "EUru" | "JPja" | "CNzh" | "KRko" | "TWzh";
export type Language = Record<string, Record<string, string>>;