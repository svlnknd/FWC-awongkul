
const create = document.getElementById("create");
const list = document.getElementById("ft_list");

create.addEventListener("click", function() { 

	const text = prompt("new TODO: ");

	if (text == null){
		return;
	}

	const todo = document.createElement("div");
	
	todo.textContent = text;



	list.prepend(todo);


	todo.addEventListener("click", function() {

	const removeConfirm = confirm("remove TODO?");

	if (removeConfirm) {
		todo.remove();
		cookieEverything();
	}
		
		
	});

cookieEverything();

});





function cookieEverything() {
	const everything = [];

	for (const todo of list.children){
		everything.push(todo.textContent);
	}

	// everything is an array
	
	document.cookie = "eachtodo="+JSON.stringify(everything);

}

function loadHtmlCookie() {

	const cookies = document.cookie.split("; ");

	for (const cookie of cookies) {
		
		const c = cookie.substring(9);
		const e = JSON.parse(c);

		for (const text of e) {
			const todo = document.createElement("div");
			todo.textContent = text;
			list.append(todo);
				
			todo.addEventListener("click", function(){

				const removeConfirm = confirm("remove TODO?");
					
				if (removeConfirm){
					todo.remove();
					cookieEverything();
				}

			});


		}

	}


}

loadHtmlCookie();
