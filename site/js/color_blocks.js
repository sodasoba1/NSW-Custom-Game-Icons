/* 
You can create color blocks in table td element.
This script will look for the format (255,255,255) in a td and prepend a small div with that rgb color as background
The table needs to be wrapped in a '.color-table'.
*/
const rgbaREGEX = /\((\d{1,3}),\s?(\d{1,3}),\s?(\d{1,3}),?\s?(\d{0,3})\)/;
const TDs = document.querySelectorAll(".color-table td, .color-text");
TDs.forEach((el) => {
	const color = el.innerText.match(rgbaREGEX);
	if (color) {
		const colorBlock = document.createElement("div");
		colorBlock.style.background = `rgba(${color[1]}, ${color[2]}, ${color[3]}, ${color[4] ? color[4] : 255})`;
		colorBlock.classList.add("color-block");
		el.prepend(colorBlock);
	}
});
