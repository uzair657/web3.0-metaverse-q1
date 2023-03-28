let firstName =["Ali","Fatima","Hassan","Hussain"];
let lastName = ["Muhammad"];
let fullName= [];

for(let g=0;g<lastName.length;g++){
    for(let e = 0; e<firstName.length;e++){
        fullName.push(firstName[e]+lastName[g]);
    }
}
console.log(fullName);