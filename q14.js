"use strict";
//Changing Guest List: You just heard that one of your guests can’t make the dinner, 
//so you need to send out a new set of invitations. 
//You’ll have to think of someone else to invite.
Object.defineProperty(exports, "__esModule", { value: true });
const guestList = ["Usama Yousaf", "Ali Ahmad", "Virat Kohli", "Hashim Raza"];
console.log(`Unfortunately ${guestList[2]} is not comming to the dinner`);
guestList.splice(2, 1, "Haris Khan");
guestList.forEach((element) => {
    console.log(`Hi, ${element} I hope you are fine. I am inviting you for a dinner please come join us.`);
});
