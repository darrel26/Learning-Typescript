export function runCommands() {
	// Declare your variables and runtime logic here! ✨
	let nextResource: "food" | "water" | undefined;
	let day = 1;
	let food = 5;
	let water = 5;

	for (day; day <= 7; day++) {
		const randomNumber = Math.floor(Math.random() * 6) + 1;
		let nextStep: "finish" | "food" | "water" | number;

		switch (randomNumber) {
			case 1:
				nextStep = "food";
				console.log(`Day ${day} - Available Resource is now Food`);
				break;
			case 2:
				nextStep = "water";
				console.log(`Day ${day} - Available Resource is now Water`);
				break;
			default:
				nextStep = randomNumber;
				break;
		}

		if (typeof nextStep === "number") {
			switch (nextResource) {
				case "food":
					food += nextStep;
					console.log(`Day ${day} - Added ${nextStep} amount of Food`);
					nextResource = undefined;
					break;
				case "water":
					water += nextStep;
					console.log(`Day ${day} - Added ${nextStep} amount of Water`);
					nextResource = undefined;
					break;
				default:
					if (randomNumber % 2 === 0) {
						console.log(`Day ${day} - Available Resource is now Food`);
						nextStep = "food";
					} else {
						console.log(`Day ${day} - Available Resource is now Water`);
						nextStep = "water";
					}
					break;
			}
		}

		switch (nextStep) {
			case "food":
				nextResource = "food";
				break;
			case "water":
				nextResource = "water";
				break;
		}

		food -= 1;
		water -= 1;

		if (food === 0 || water === 0) {
			console.log(`\n You are dead! \n Food = ${food} \n Water = ${water} \n`);
			return false;
		}
	}
	console.log(`\n You still alive! \n Food = ${food} \n Water = ${water} \n`);
	return true;
}

runCommands();
