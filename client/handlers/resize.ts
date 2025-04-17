const resize = () => {
	if (window.innerHeight > window.innerWidth) {
		// vertical
		document.body.style.flexDirection = "column";
	} else {
		// horizontal
		document.body.style.flexDirection = "row";
	}
};

resize();

window.addEventListener("resize", resize);