var head = document.getElementById("head");

var title = document.createElement("title");
title.innerHTML = "Mass Design with a Cause";
head.appendChild(title);

var body = document.getElementById("body");

var page = document.createElement("div");
with(page.style) {
	width = "100%";
	height = "100%";
	backgroundColor = "#c8c8c8";
}
body.appendChild(page);

const xDivs = parseInt(1301 / 2);
const yDivs = parseInt(681 / 2);

var cell = [];
var row = [];
var i, j;
var dId;

for (j=0; j<=yDivs; j++) {
	row[j] = document.createElement("div");
	with (row[j].style){
		width = "inherited";
		height = "2px";
	}
	page.appendChild(row[j]);
	for (i=0; i<=xDivs; i++) {
		cell[i] = document.createElement("div");
		dId = eval(i + ((j-1) * xDivs))
		cell[i].id = dId;
		with (cell[i].style) {
			width = "2px";
			height = "2px";
			position = "absolute";
			top = "inherited";
			left = eval(8 + (2 * i)) + "px";
		}
		row[j].appendChild(cell[i]);
	}
}

for (i=0; i<=dId; i++) {
	document.getElementById(i).onmouseover = function () {
		this.style.backgroundColor = "#c00000";
	}
}
