//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
//Make a list that includes at least three people you’d like to invite to dinner.
//Then use your list to print a message to each person, inviting them to dinner.

const guestList: String[] = ["Usama Yousaf", "Ali Ahmad", "Hashim Raza"];
guestList.forEach((element) => {
  console.log(
    "Hi, " +
      element +
      " I hope you are fine. I am inviting you for a dinner please come join us."
  );
});
export{}