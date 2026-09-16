const balloon = document.getElementById("balloon");

let size = 200;
let red = "red";
let green = "green";
let blue = "blue";
let color = "red";

balloon.addEventListener("click", function() {
size+=10;
if (size > 420) {
	size = 200;
}

if (color == "red"){
	color = "green";
}

else if (color == "green"){
	color = "blue";
}

else {
	color = "red";
}

balloon.style.width = size+"px";
balloon.style.height = size+"px";
balloon.style.backgroundColor = color;
balloon.textContent = size+"px";

});

balloon.addEventListener("mouseleave", function () {

	if (size > 200){
		size -= 5;
	}

if (color == "red"){
	color = "blue";
}

else if (color == "blue"){
	color = "green";
}

else {
	color = "red";
}

balloon.style.width = size+"px";
balloon.style.height = size+"px";
balloon.style.backgroundColor = color;
balloon.textContent = size+"px";
});
