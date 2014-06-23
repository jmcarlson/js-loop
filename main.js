console.log("Starting loop 01");

for(var i = 0; i <= 5; i++) {
	console.log("i is " + i);
};

console.log("Starting loop 02");

for (var i = 0; i <= 500; i = i + 100) {
	console.log("i is " + i);
};

console.log("Starting loop 03");

for (var i = 1; i <= 64; i = i * 2) {
	console.log("i is " + i);
};

console.log("Starting loop 04");

for (var i = 1; i <= 3; i++) {
	for (var x = 0; x <=2; x++) {
		console.log("i is " + i + " x is " + x);
		// console.log("i is " + i);
	};
};

console.log("Starting loop 05");

for (var i = 0; i <= 10; i = i + 2) {
	console.log("i is " + i);
};

console.log("Starting loop 06");

for (var i = 3; i <= 15; i = i + 3) {
	console.log("i is " + i);
};

console.log("Starting loop 07");

for (var i = 9; i >= 0; i--) {
	console.log("i is " + i);
};

console.log("Starting loop 08");

for (var i = 0; i <= 2; i++) {
	for (var x = 0; x <=3; x++) {
		// console.log("i is " + i + " x is " + x);
		console.log("x is " + x);
	};
};