const calc = document.getElementById("calc");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const op = document.getElementById("op");

calc.addEventListener("click", function () {

	const x = Number(num1.value);
	const y = Number(num2.value);
	const operator = op.value;
	
	if ( x < 0 || y < 0 ) {
		alert("Error :(");
		return;
	}

	if (operator == "/" || operator == "%") {
		if (y==0){
			alert("It's over 9000!");
			console.log("It's over 9000!");
		}
	}

	let result = null;

	switch (operator) {
		
		case "+":
			result = x+y;
			break;

		case "-":
			result = x-y;
			break;

		case "*":
			result = x*y;
			break;

		case "/":
			result = x/y;
			break;
			
		case "%":
			result = x%y;
			break;

	}

	alert(result);
	console.log(result);



});

function sendPls() {
	alert("Please, use me...");
}

setInterval(sendPls, 30000);
