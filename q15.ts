
//More Guests: You just found a bigger dinner table, so now more space is available. 
//Think of three more guests to invite to dinner.
const guestList: String[] = ["Usama Yousaf", "Ali Ahmad","Virat Kohli", "Hashim Raza"];
console.log(guestList.length);
console.log(`Unfortunately ${guestList[2]} is not comming to the dinner`);
guestList.splice(2,1,"Haris Khan");
guestList.forEach((element) => {
  console.log(
    `Hi, ${element} I hope you are fine. I am inviting you for a dinner please come join us.`
  );
});
//Problem Start
console.log("I have a good news for all of you finally I've found a big table for dinner");
console.log(guestList.length);
guestList.unshift("Hassan Iqbal");

let middlevalue = guestList.length/2;
console.log(middlevalue);
guestList.splice(middlevalue,0,"Zeeshan Ali");
guestList.push("Ali Raza");

guestList.forEach((element) => {
    console.log(
      `Hi, ${element} I hope you are fine. I am inviting you for a dinner please come join us.`
    );
  });

export{}