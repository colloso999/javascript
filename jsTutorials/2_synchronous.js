const stock = {
	Fruits: ["strawberries", "grapes", "banana", "apple"],
	Holdings: ["cone", "cup", "stick"],
	Toppings: ["chocolate", "sprinkles"],
	Liquids: ["water", "ice"],
};

let order = (call_production) => {
	// do something
	console.log("Order placed. Please call production");

	// function is being called
	call_production();
};

let production = () => {
	console.log("Production has started")
};

// set time here
order(2000, () => console.log(`${stock.Fruits[0]} was selected`);
