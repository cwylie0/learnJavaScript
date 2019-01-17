const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers);

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);

/* OUTPUTS
Picasso is one of my favorite artists.
Kahlo is one of my favorite artists.
Matisse is one of my favorite artists.
Utamaro is one of my favorite artists.
[ 1, 4, 9, 16, 25 ]
[ 5, 3.14, 100 ]
 */

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animals => {
	return animals === 'elephant';
});

console.log(foundAnimal);

const startsWithS = animals.findIndex(animals => {
	return animals[0] === 's';
});

console.log(startsWithS);

// OUTPUTS 7, 3

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue
}, 100)

/* OUTPUTS
The value of accumulator:  100
The value of currentValue:  1
The value of accumulator:  101
The value of currentValue:  3
The value of accumulator:  104
The value of currentValue:  5
The value of accumulator:  109
The value of currentValue:  7
The value of currentValue:  7
*/


const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.some(num => num < 0);

/* OUTPUTS
Have you visited Orlando?
Have you visited Dubai?
Have you visited Edinburgh?
Have you visited Chennai?
Have you visited Accra?
Have you visited Denver?
Have you visited Eskisehir?
Have you visited Medellin?
Have you visited Yokohama?
CODECADEMY
*/

/*
.forEach() is used to execute the same code on every element in an array but does not change the array and returns undefined.
.map() executes the same code on every element in an array and returns a new array with the updated elements.
.filter() checks every element in an array to see if it meets certain criteria and returns a new array with the elements that return truthy for the criteria.
.findIndex() returns the index of the first element of an array which satisfies a condition in the callback function. It returns -1 if none of the elements in the array satisfies the condition.
.reduce() iterates through an array and takes the values of the elements and returns a single value.
*/