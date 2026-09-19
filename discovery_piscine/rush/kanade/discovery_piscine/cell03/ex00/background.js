const button = document.querySelector("button");

button.addEventListener("click", function () {
	document.body.style.backgroundColor = `rgba(${(Math.random() * 255)}, ${(Math.random() * 255)}, ${(Math.random() * 255)}, ${(Math.random() * 255)})`;
	

});
