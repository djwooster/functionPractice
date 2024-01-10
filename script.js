'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
// object destructuring

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// destructuring arrays

// receive 2 return values from a function. creating 2 variables out of 1 function call
const [starter, main] = restaurant.order(0, 1);
console.log(starter, main);

// nested destructuring

const nested = [2, 3, [7, 8, 9]];
console.log(nested);

const [, , [, eight]] = nested;
console.log(eight);
// expects 8

// default values to set
const randomArray = [12, 13];
const [p, q, r] = randomArray;
console.log(randomArray);
// expects r to be undefined

const randomArrayTwo = [12, 13];
const [o, s, v = 1] = randomArrayTwo;
console.log(o, s, v);
// sets the default

const arrayOne = [2, 3, 4];
const [x, y, z] = arrayOne; // destructuring the array from the right side of the equals operator. JavaScript knows when it sees brackets on the left side that it should destructure

// original array is unchanged
console.log(x, y, z);

const [first, , third] = restaurant.categories;
// expects Italian Vegetarian
console.log(first, third);

/* my code here */
//translatation: 'Make variables of the property names from the object restaurant
const { name, categories, openingHours } = restaurant;
console.log(name, categories, openingHours);
// the property names and the object from which to take them from
//the = basically gets translated into 'from'

const {
  name: restaurantName,
  openingHours: hours,
  categories: styles,
} = restaurant;
// if we want to make the variable names different than the property names in the object

console.log(restaurantName, styles);
// expects Classico Italiano

const { menu = [], starterMenu: starters = [] } = restaurant;
//empty brackets gives a default value in the case that a property (yet) doesn't exist and is ignored if a value is already present. useful to set defaults**

console.log(menu, starters);
// changed name to starters and ignored it's default values

// mutating variables
let a = 111;
let b = 999;
const objTest = { a: 1, b: 2, c: 3 };
({ a, b } = objTest);
console.log(a, b);
// Expects 1 and 2

// nested objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

const keys = Object.keys(restaurant);
// object method returning an array of keys in the object

const values = Object.values(restaurant);
// object method returning an array of values in the object
console.log(keys, values);
