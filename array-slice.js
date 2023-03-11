// array elements slice
var friendsAge = [20, 21, 22, 19, 23, 25, 24, 18];
var slice = friendsAge.slice(3, 6);
console.log(slice); // return 19, 23, 25

// includes
var friendsName = ["Mithu", "Miraj", "Ema", "Tamme", "Aminul Islam", "Tamima Akter Ema"];
var includes = friendsName.includes("Ema");
console.log(includes); // return true

// substring
var simple = "My name is Aminul Islam Emon";
var substring = simple.substring(0, 10);
console.log(substring); // return My name is
