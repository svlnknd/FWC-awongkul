
const create = $("#create");
const list = $("#ft_list");

create.on("click", function() { 

	const text = prompt("new TODO:");

	if (text == null){
		return;
	}

	const todo = $("<div>");
	
	todo.text(text);



	list.prepend(todo);


	todo.on("click", function() {

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

	for (const todo of list.children()){
		everything.push(todo.textContent);
	}

	// everything is an array
	
	document.cookie = "eachtodo="+JSON.stringify(everything);

}

function loadHtmlCookie() {
	//redundant, only doing it for "good practices" as instructed
	const cookies = document.cookie.split("; ");
	//redundant2, only one cookie is here anyway
	for (const cookie of cookies) {
		
		const c = cookie.substring(9);
		const e = JSON.parse(c);

		for (const text of e) {
			const todo = $("<div>");
			todo.text(text);
			list.append(todo);
				
			todo.on("click", function(){

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
