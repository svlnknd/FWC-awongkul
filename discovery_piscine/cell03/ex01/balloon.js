const balloon = document.getElementById("balloon");

let size = 200;
let colorPos = 0;
const arrColor = ["red", "green", "blue"];
balloon.textContent = size+"px";




balloon.addEventListener("click", function() {
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

balloon.style.width = size+"px";
balloon.style.height = size+"px";
balloon.style.backgroundColor = arrColor[colorPos];
balloon.textContent = size+"px";

});

balloon.addEventListener("mouseleave", function () {

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

balloon.style.width = size+"px";
balloon.style.height = size+"px";
balloon.style.backgroundColor = arrColor[colorPos];
balloon.textContent = size+"px";
});
