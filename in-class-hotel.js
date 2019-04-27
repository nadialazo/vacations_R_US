// START HERE
// 1. Create a hotel object assigned to a variable for Hotel Paradise.  This hotel needs the following attributes:
// -has 50 total rooms
// -keeps track of the number of booked rooms - set to 0
// -has a gym - NO
// -has a pool - YES
// -allows pets - NO

let hotels = [{
	name: "Hotel Paradise",
	totalRms: 50,
	bookedRms: 0,
	gym: 'no',
	pool: 'yes',
	pets: 'no',
	numOfRoomsAvailable: function () {
		return this.totalRms - this.bookedRms;
	},
	roomTypes: ['single', 'double', 'triple', 'king', 'suite'],
}, {
	name: "Quay Hotel",
	totalRms: 75,
	bookedRms: 0,
	gym: 'yes',
	pool: 'yes',
	pets: 'yes',
	numOfRoomsAvailable: function () {
		return this.totalRms - this.bookedRms;
	},
	roomTypes: ['single', 'double', 'triple'],
}, {
	name: "Parker Place",
	totalRms: 140,
	bookedRms: 0,
	gym: 'no',
	pool: 'yes',
	pets: 'no',
	numOfRoomsAvailable: function () {
		return this.totalRms - this.bookedRms;
	},
	roomTypes: ['single', 'double', 'king', 'suite'],
}]

// 2. Create a second variable for Quay Hotel
// -has 75 total rooms
// -keeps track of the number of booked rooms - set to 0
// -has a gym - YES
// -has a pool - YES
// -allows pets - YES


// 3. Create a third variable for Parker Place
// -has 140 total rooms
// -keeps track of the number of booked rooms - set to 0
// -has a gym - YES
// -has a pool - YES
// -allows pets - YES


// 4. Print the name of each hotel on a separate line
/*console.log();
console.log("4. Hotel Names");
console.log("\n");
for(let i=0; i < hotels.length; i++){
	console.log("   " + hotels[i].name);
}
console.log("\n");*/

for (let i = 0; i < hotels.length; i++) {
	console.log('4. ' + hotels[i].name);
}

// 5. Use square bracket syntax to print the total number of rooms each hotel has

for (let i = 0; i < hotels.length; i++) {
	console.log('5. ' + hotels[i].totalRms);
}


// 6. Since the hotel has yet to accept bookings, confirm none of the rooms are booked by printing the
// number of rooms booked
for (let i = 0; i < hotels.length; i++) {
	console.log('6. ' + hotels[i].bookedRms);
}


// 7. Print the names of hotels that have gyms

for (let i = 0; i < hotels.length; i++) {
	if (hotels[i].gym === 'yes') {
		console.log('7. ' + hotels[i].name + ' has a gym');
	}
}


// 8. Calculate and print the number of rooms available per hotel
let availableRooms = 0;
for (let i = 0; i < hotels.length; i++) {
	availableRooms = hotels[i].totalRms - hotels[i].bookedRms;
	console.log('8. There are ' + availableRooms + ' rooms available at ' + hotels[i].name);
}


// 9. The Marketing Team believes the new site has 500 rooms, but the Construction Team says less than 300.
// To resolve this squabble, print the total number of rooms by adding this across all 3 hotels.
let roomArray;
let sumOfAllRooms = 0;
for (let i = 0; i < hotels.length; i++) {
	roomArray = hotels[i].totalRms;
	sumOfAllRooms += roomArray;
}

console.log('9. The total number of rooms is ' + sumOfAllRooms);


// Optional HW

// 1. In the previous file, you calculated room availability.  Create a function to do this and add
// it as a method to each object above.  Run the new method to print the results.

//console.log(hotels[0].numOfRoomsAvailable());

for (i = 0; i < hotels.length; i++) {
	console.log('1.A There are ' + hotels[i].numOfRoomsAvailable() + ' at ' + hotels[i].name);
}



// 2. You just received an email from Vacations-R-Us where they want to track the room types per hotel.
// Update the objects above to capture the following:
// -3Parker Place has single, double, king, and suite
// -1Hotel Paradise has single, double, triple, king, and suite
// -2Quay Hotel has single, double, and triple
// Now print the number of room types per hotel


for( i=0; i<hotels.length; i++){
	console.log('2.A In ' +  hotels[i].name + ' there are ' +  hotels[i].roomTypes.length + ' types of rooms');
}

// 3. Print the names of hotels that have suites
for (let i = 0; i < hotels.length; i++) {
	if(hotels[i].roomTypes === 'suites'){
		console.log(hotels[i].name);
	}
};


// 4. Find out if Parker Place has more total rooms than Hotel Paradise and Quay Hotel combined.
// Print the following:
// if Parker Place has more total rooms than the other two hotels combined, print "TRUE"
// if the numbers are equal, print "EQUAL"
//if hotel 3 has less total rooms than the other two hotels combined, print "FALSE"

if(hotels[2].totalRms > hotels[0].totalRms + hotels[1].totalRms){
	console.log('TRUE');
} else if (hotels[2].totalRms === hotels[0].totalRms + hotels[1].totalRms) {
	console.log('EQUAL');
} else {
	console.log('FALSE');
}


// 5. Use a conditional statement to print the names of the hotels that have pools and allow pets
for (let i = 0; i < hotels.length; i++) {
	if (hotels[i].pool === 'yes' && hotels[i].pets === 'yes'){
		console.log('5.A ' + hotels[i].name + ' allows pets and has a pool.');
	}
}


// 6. Vacations-R-Us' Marketing Team believes each hotel will have 15% of its rooms booked for opening day.
// For each hotel, calculate what that number will be and print it out along with the name of the hotel.
// And remember, Marketing can't work with fraction of rooms, so round any value > 0.49 to 1
let toBeBooked = [];
for (let i = 0; i < hotels.length; i++) {
	toBeBooked[i] = Math.round(15 * hotels[i].totalRms/100);
	console.log('6A. ' + hotels[i].name + ' will have ' + toBeBooked[i] + ' rooms booked by opening day')
}


// 7. Now the Construction Team wants to confirm every hotel has a triple and king room type.
// Print the names of the hotels that do not fit this criteria

for (let i = 0; i < hotels.length; i++){
	if (hotels[i].roomTypes.indexOf('king') === null){
		console.log(hotels[i].name);
	} if (hotels[i].roomTypes.indexOf('triple') === null){
		console.log(hotels[i].name);
	}
}

