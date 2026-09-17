const balloon = $("#balloon");

let size = 200;
let colorPos = 0;
const arrColor = ["red", "green", "blue"];
balloon.text(size+"px");




balloon.on("click", function() {
size+=10;
if (size > 420) {
	size = 200;
}

colorPos++

if (colorPos > arrColor.length-1) {
	colorPos=0;
}
// if (colorPos == "red"){
// 	colorPos = "green";
// }

// else if (colorPos == "green"){
// 	colorPos = "blue";
// }

// else {
// 	colorPos = "red";
// }

balloon.css("width", size+"px");
balloon.css("height", size+"px");
balloon.css("background-color", arrColor[colorPos]);
balloon.text(size+"px");

});

balloon.on("mouseleave", function () {

	if (size > 200){
		size -= 5;
	}

	colorPos--;
	if (colorPos < 0){
		colorPos = arrColor.length-1;
	}
// if (colorPos == "red"){
// 	colorPos = "blue";
// }
//
// else if (colorPos == "blue"){
// 	colorPos = "green";
// }
//
// else {
// 	colorPos = "red";
// }

balloon.css("width", size+"px");
balloon.css("height", size+"px");
balloon.css("background-color", arrColor[colorPos]);
balloon.text(size+"px");
});
