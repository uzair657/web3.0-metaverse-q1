"use strict";
/*Adding Comments:
Choose two of the programs you’ve written, and add at least one comment to each.
If you don’t have anything specific to write because your programs are too simple at this point,
just add your name and the current date at the top of each program file.
Then write one sentence describing what the program does.*/
Object.defineProperty(exports, "__esModule", { value: true });
/*********Program 1 Start *********/
//Here I am creating a variable person_name and assigning a value to  this variable
let person_name = "Uzair Ahmad";
//In This Line I am printing whole message to console
console.log(`Hello ${person_name} , would you like to learn some Python today?`);
/*********Program 1 End *********/
/*********Program 2 Start *********/
//Here I am creating a variable person_Name and assigning a value to  this variable
let my_Name = "Uzair Ahmad";
//Convert to Lower Case
console.log(my_Name.toLowerCase());
//Convert to  Upper Case
console.log(my_Name.toUpperCase());
//Convert to Title Case
console.log(my_Name.replace(/\b\w/g, (c) => c.toUpperCase()));
