const roulette = document.getElementById("roulette");
const shoot = document.getElementById("shoot");
const eyes = document.getElementById("eyes");
const profiles = document.querySelectorAll(".pfp");

let selected = null;
let shooting = false;

// const homes = new Map([
// 	[profiles[0], {
// 		left: "2%",
// 		top: "4%"
// 	}],
// 	[profiles[1], {
// 		left: "12%",
// 		top: "4%"
// 	}]
// ]);

profiles.forEach(function (pfp) {
	pfp.addEventListener("mousedown", function (event){

		const rect = pfp.getBoundingClientRect(); /* returns an obj, gives all ltrb wh value that can be called like rect.top rect.width */
		pfp.style.left = rect.left+"px";
		pfp.style.top = rect.top+"px";

		const offsetX = event.clientX - rect.left;
		const offsetY = event.clientY - rect.top;

		function move(event) {
			pfp.style.left = (event.clientX-offsetX) + "px";
			pfp.style.top = (event.clientY-offsetY) + "px";
		}

		function stop() {
            /* i freaking hate copilot */
			document.removeEventListener("mousemove", move);
			document.removeEventListener("mouseup", stop);
			pfp.classList.remove("dragging");
			checkRoulette(pfp);
		}

		document.addEventListener("mousemove", move);
		document.addEventListener("mouseup", stop);
        /* copilot end, returning to nvim */
	});
});

function checkRoulette(pfp) {
	const p = pfp.getBoundingClientRect();
	const r = roulette.getBoundingClientRect();

	const touching = p.right>r.left && p.left<r.right && p.bottom>r.top && p.top<r.bottom;

	if (!touching) return;

	// if (selected && selected !== pfp) {
	// 	// returnHome(selected);
	// }

	selected=pfp;
	pfp.style.display="none";
	shoot.classList.add("visible");
    document.getElementById("headnote").classList.add("fade");
}

// function returnHome(pfp) {
// 	const home = homes.get(pfp);
// 	if (!home) return;

// 	pfp.classList.remove("dragging", "shoot-fade", "flying");
// 	pfp.style.display = "block";
// 	pfp.style.opacity = "1";
// 	pfp.style.width = "110px";
// 	pfp.style.height = "110px";
// 	pfp.style.left = home.left;
// 	pfp.style.top = home.top;
// 	pfp.style.transform = "";
// }

shoot.addEventListener("click", function (){
	if (!selected||shooting) return;

	shooting = true;
	shoot.classList.remove("visible");

	const firedProfile = selected;
	const target = firedProfile.dataset.target;

	profiles.forEach(function (pfp) {
		if (pfp !== firedProfile) {
			pfp.classList.add("shoot-fade");
		}
	});

    /* okay so this is a bit of a weird one but i made a redundant function to fade away only the selected profile */
	setTimeout(function (){
		profiles.forEach(function (pfp){
			if (pfp !== firedProfile) {
				pfp.style.display = "none";
				pfp.classList.remove("shoot-fade");
			}
		});
	}, 250);

	document.body.classList.add("shooting");

    setTimeout(function (){
        eyes.classList.remove("flash");
        void eyes.offsetWidth;
        eyes.classList.add("flash");
    }, 2800);

    setTimeout(function (){
        fireProfile(firedProfile);
        document.getElementById("gun").classList.add("recoil");
    }, 3000);

    setTimeout(function (){
        window.location.href = target;
    }, 3750);

	setTimeout(function (){
		window.location.href = target;
	}, 3750);
});

function fireProfile(pfp) {
	const gun = document.getElementById("gun");
	const gunRect = gun.getBoundingClientRect();
	const size = 80;
	pfp.classList.remove("shoot-fade", "flying");
	pfp.style.width = size+"px"; pfp.style.height = size+"px"; pfp.style.display = "block";
	pfp.style.opacity = "0";
	pfp.style.left = (gunRect.left+gunRect.width/2-size/2)+"px";
	pfp.style.top = (gunRect.top)+"px";
	pfp.style.transform="none";

	void pfp.offsetWidth;
	pfp.classList.add("flying");
}