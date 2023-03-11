var friendsName = ["Mithu", "Miraj", "Ema", "Tamme", "Aminul Islam", "Tamima Akter Ema"];
// use push an Element to friendsName Array as the  last element of the array
friendsName.push("Rimi");
console.log(friendsName);

// use pop to get last Element of the friendsName Array
var lastElement = friendsName.pop();
console.log(lastElement);

// use push to add an Element to numbers Array as the  last element of the array
var numbers = [23, 25, 24, 20, 21, 22, 19, 18];
numbers.push(36);
console.log(numbers);

// use pop to get or remove last Element of the number Array
var number = [23, 25, 24, 20, 21, 22, 19, 18];
number.pop();
console.log(number);

// use shift to get or remove first Element of the numbers01 Array
var numbers01 = [10, 20, 30, 40, 50];
numbers01.shift();
console.log(numbers01);

// use unshift to add an new Element of the numbers02 Array as the first Element of the Array
var numbers02 = [10, 20, 30, 40, 50];
numbers02.unshift(100);
console.log(numbers02);
