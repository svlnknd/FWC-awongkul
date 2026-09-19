const button = $("#button");

button.on("click", function () {
	document.body.style.backgroundColor = `rgba(${(Math.random() * 255)}, ${(Math.random() * 255)}, ${(Math.random() * 255)}, ${(Math.random() * 255)})`;
	

});
