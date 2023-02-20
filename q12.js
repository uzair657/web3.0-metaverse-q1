"use strict";
//Think of your favorite mode of transportation, such as a motorcycle or a car,
//and make a list that stores several examples. Use your list to print a series of statements
//about these items, such as “I would like to own a Honda motorcycle.”
/******Solution******/
const my_transportation_mode = [
    "Honda Motorcycle",
    "Honda Car",
    "Tesla Car",
    "BMW Heavy Bike",
];
my_transportation_mode.forEach((vehical) => {
    console.log("I would like to own a " + vehical);
});
