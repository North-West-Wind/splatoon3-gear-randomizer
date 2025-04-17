const resize = () => {
	if (window.innerHeight > window.innerWidth) {
		// vertical
		document.body.style.flexDirection = "column";
		Array.from(document.getElementsByClassName("column")).forEach(element => {
			(element as HTMLElement).classList.remove("hori");
			(element as HTMLElement).classList.add("vert");
		});
	} else {
		// horizontal
		document.body.style.flexDirection = "row";
		Array.from(document.getElementsByClassName("column")).forEach(element => {
			(element as HTMLElement).classList.remove("vert");
			(element as HTMLElement).classList.add("hori");
		});
	}
};

resize();

window.addEventListener("resize", resize);