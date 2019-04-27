// START HERE.  Copy your hotel variables from in-class_hotel.js and paste here

let hotels = [{
	name: "Hotel Paradise",
	totalRms: 50,
	bookedRms: 0,
	gym: 'no',
	pool: 'yes',
	pets: 'no',
},{
	name: "Quay Hotel",
	totalRms: 75,
	bookedRms: 0,
	gym: 'yes',
	pool: 'yes',
	pets: 'yes',
},{
	name: "Parker Place",
	totalRms: 140,
	bookedRms: 0,
	gym: 'no',
	pool: 'yes',
	pets: 'no',
}]
// 1. In the previous file, you calculated room availability.  Create a function to do this and add
// it as a method to each object above.  Run the new method to print the results.
let hotels = {
  avlbRoom: function() {
let availableRooms = " ";
for(let i=0; i < hotels.length; i++){
	availableRooms = hotels[i].totalRms - hotels[i].bookedRms;
	console.log('There are ' + availableRooms + ' rooms available at ' + hotels[i].name);
}
  }
}

hotels.avlbRoom();

// 2. You just received an email from Vacations-R-Us where they want to track the room types per hotel.
// Update the objects above to capture the following:
// -Parker Place has single, double, king, and suite
// -Hotel Paradise has single, double, triple, king, and suite
// -Quay Hotel has single, double, and triple
// Now print the number of room types per hotel
console.log("-------------\n");
console.log("2. Number of Room Types");


// 3. Print the names of hotels that have suites
console.log("-------------\n");
console.log("3. Hotels with Suite Room Types");


// 4. Find out if Parker Place has more total rooms than Hotel Paradise and Quay Hotel combined.
// Print the following:
// if Parker Place has more total rooms than the other two hotels combined, print "TRUE"
// if the numbers are equal, print "EQUAL"
//if hotel 3 has less total rooms than the other two hotels combined, print "FALSE"
console.log("-------------\n");
console.log(
  "4. Does Parker Place have more total rooms than Hotel Paradise and Quay Hotel combined?"
);


// 5. Use a conditional statement to print the names of the hotels that have pools and allow pets
console.log("-------------\n");
console.log("5. Hotels with Pools and Allow Pets");


// 6. Vacations-R-Us' Marketing Team believes each hotel will have 15% of its rooms booked for opening day.
// For each hotel, calculate what that number will be and print it out along with the name of the hotel.
// And remember, Marketing can't work with fraction of rooms, so round any value > 0.49 to 1
console.log("-------------\n");
console.log("6. Marketing Team 15% Booking Estimates");


// 7. Now the Construction Team wants to confirm every hotel has a triple and king room type.
// Print the names of the hotels that do not fit this criteria
console.log("-------------\n");
console.log("7. Hotels Missing Triple and/or King Room Types");
