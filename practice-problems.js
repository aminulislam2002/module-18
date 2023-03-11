/* practice problems 01 */
// Find the index number of Banana
var fruits = ["Apple", "Banana", "Orange"];
// Find the index of banana
var indexOfBanana = fruits.indexOf("Banana");
console.log(indexOfBanana); // return 1

// Replace Banana with Mango
var fruits01 = ["Apple", "Banana", "Orange"];
fruits01[1] = "Mango";
console.log(fruits01);

// remove orange and add Watermelon
var fruits02 = ["Apple", "Banana", "Orange"];
fruits02.pop();
fruits02.push("Watermelon");
console.log(fruits02);

/* practice problems 02 */
// The grading chart is here
var gradeA = 80;
var gradeB = 60;
var gradeC = 50;
var gradeD = 40;
var gradeF = 39;
// Me and my friends final exam result score is here
var aminulScore = 85;
var tomScore = 66;
var janeScore = 95;
var peterScore = 56;
var johnScore = 35;

// My grade point

if (gradeA <= aminulScore) {
  console.log("Aminul! Your grade is A");
} else if (gradeB <= aminulScore) {
  console.log("Aminul! Your grade is B");
} else if (gradeC <= aminulScore) {
  console.log("Aminul! Your grade is C");
} else if (gradeD <= aminulScore) {
  console.log("Aminul! Your grade is D");
} else {
  console.log("Aminul! Your Faild!");
}

// Tom grade point

if (gradeA <= tomScore) {
  console.log("Tom! Your grade is A");
} else if (gradeB <= tomScore) {
  console.log("Tom! Your grade is B");
} else if (gradeC <= tomScore) {
  console.log("Tom! Your grade is C");
} else if (gradeD <= tomScore) {
  console.log("Tom! Your grade is D");
} else {
  console.log("Tom! Your Faild!");
}

// Tom grade point

if (gradeA <= janeScore) {
  console.log("Jane! Your grade is A");
} else if (gradeB <= janeScore) {
  console.log("Jane! Your grade is B");
} else if (gradeC <= janeScore) {
  console.log("Jane! Your grade is C");
} else if (gradeD <= janeScore) {
  console.log("Jane! Your grade is D");
} else {
  console.log("Jane! Your Faild!");
}

// Tom grade point

if (gradeA <= peterScore) {
  console.log("Peter! My grade is A");
} else if (gradeB <= peterScore) {
  console.log("Peter! My grade is B");
} else if (gradeC <= peterScore) {
  console.log("Peter! Your grade is C");
} else if (gradeD <= peterScore) {
  console.log("Peter! Your grade is D");
} else {
  console.log("Peter! Your Faild!");
}

// Tom grade point

if (gradeA <= johnScore) {
  console.log("John! Your grade is A");
} else if (gradeB <= johnScore) {
  console.log("John! Your grade is B");
} else if (gradeC <= johnScore) {
  console.log("John! Your grade is C");
} else if (gradeD <= johnScore) {
  console.log("John! Your grade is D");
} else {
  console.log("John! Your Faild!");
}

// practice problems 03
var num1 = 13;
var num2 = 79;
var num3 = 45;

// Find the largest number

if (num1 > num2) {
  if (num1 > num3) {
    console.log(num1);
  } else {
    console.log(num3);
  }
} else {
  if (num2 > num3) {
    console.log(num2);
  } else {
    console.log(num3);
  }
}

// Practice Problems 03
var side1 = 9;
var side2 = 8;
var side3 = 9;
if (side1 == side2 || side1 == side3 || side2 == side3) {
  console.log("Isosceles");
} else {
  console.log("NOt");
}
// Extra practice
var ba = 75.25;
var en = 65;
var math = 80;
var ph = 35.45;
var ca = 99.5;
var allSubject = ba + en + math + ph + ca;
console.log(allSubject);
allSubject = allSubject.toFixed(2);
allSubject = parseFloat(allSubject);
var avarageMarks = allSubject / 5;
avarageMarks = avarageMarks.toFixed(2);
console.log(avarageMarks);
