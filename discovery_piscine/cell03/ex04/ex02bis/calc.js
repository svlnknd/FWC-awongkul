const calc = $("#calc");
const num1 = $("#num1");
const num2 = $("#num2");
const op = $("#op");

calc.on("click", function () {

	const x = Number(num1.val());
	const y = Number(num2.val());
	const operator = op.val();
	
	if ( x < 0 || y < 0 ) {
		alert("Error :(");
		return;
	}

	if (operator == "/" || operator == "%") {
		if (y==0){
			alert("It's over 9000!");
			console.log("It's over 9000!");
			return;
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
