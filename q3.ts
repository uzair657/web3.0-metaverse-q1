var person_Name: String = "Uzair Ahmad";
//Convert to Lower Case
console.log(person_Name.toLowerCase());
//Convert to  Upper Case
console.log(person_Name.toUpperCase());
//Convert to Title Case
console.log(person_Name.replace(/\b\w/g, (c) => c.toUpperCase()));
