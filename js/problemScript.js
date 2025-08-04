console.log("Hey JavaScript");

/*
Write a JavaScript program to rotate the string 'w3resource' in the right direction. 
This is done by periodically removing one letter from the string end and attaching 
it to the front.  
*/

let str = "";

function rotateString(string) {
  const stringArr = string.split("");
  stringArr.forEach((elem, i, arr) => {
    str += arr[arr.length - (i + 1)];
  });
}

// rotateString("w3resource")
// console.log(str);

/*
Write a JavaScript program to remove a character at the specified position 
in a given string and return the modified string.  
*/

function removeChar(string, position) {
  return string.slice(0, position) + string.slice(position + 1);
}

// console.log(removeChar("character", 5));

/*
Write a JavaScript program to create a new string from a given string by 
changing the position of the first and last characters. The string 
length must be broader than or equal to 1.
*/

function swapString(string) {
  if (string.length <= 1) return "String lenght should be greater then 1";

  return (
    string.slice(string.length - 1) +
    string.slice(1, string.length - 1) +
    string.slice(0, 1)
  );
}

// console.log(swapString("vipin"));

/*
Write a JavaScript program to find the largest of three given integers.  
*/

function largestInt(a, b, c) {
  if (!isFinite(a) || !isFinite(b) || !isFinite(c))
    return "All inputs should be intergers";

  let maxValue = 0;

  maxValue = a > b ? a : b;

  return c > maxValue ? c : maxValue;
}

// console.log(largestInt(6, 3,4));

/*
32. Write a JavaScript program to find the closest value to 100 from two numerical values.  
*/

function closestTo100(a, b) {
  if (a === b) return false;

  if (Math.abs(100 - a) === Math.abs(100 - b)) return 0;

  return Math.abs(100 - a) < Math.abs(100 - b) ? a : b;
}

// console.log(closestTo100(-190, 190))

/*
Write a program to check whether a specified character exists between the 2nd and 4th 
positions in a given string.
*/

function charAt2ndAnd4th(string, char) {
  if (string.length >= 5) {
    return string.slice(1, 4).includes(char)
      ? `${char} is between 2nd and 4th position`
      : "char did not match";
  } else {
    return "String should be at least 5 character long";
  }
}

// console.log(charAt2ndAnd4th("Console", "o"))

/*
Write a JavaScript program to check whether three given numbers are increasing 
in strict or in soft mode.  
Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31
*/

function checkStrictAndSoftMode(x, y, z) {
  if (y > x && z > y) {
    return "This is Strict mode";
  } else if (z > y) {
    return "This is soft mdoe";
  } else {
    return undefined;
  }
}

// console.log(checkStrictAndSoftMode(10, 15, 31))
// console.log(checkStrictAndSoftMode(24, 22, 31))
// console.log(checkStrictAndSoftMode(22, 22, 31))

/*
Write a JavaScript program to replace every character in a given string 
with the character following it in the alphabet.  
console.log(String.fromCharCode(66)) //B
console.log("a".charCodeAt(0)) //97
*/

function charInAlphabet(string) {
  let newStr = "";

  string.split("").forEach((str) => {
    newStr += String.fromCharCode(str.charCodeAt(0) + 1);
  });

  return newStr;
}

// console.log(charInAlphabet("vipin patidar"));
// console.log(charInAlphabet("python"));

/*
Write a JavaScript application that transforms a provided numerical value into hours and minutes.  
*/

function numToHoursAndMinutes(num) {
  const hours = Math.floor(num / 60);
  const min = num % 60;

  return `${String(hours).padStart(2, 0)}:${String(min).padStart(2, 0)}`;
}

// console.log(numToHoursAndMinutes(450));

/*
52. Write a JavaScript program to convert letters of a given string alphabetically.  
console.log(" ".charCodeAt(0)); //32
*/

function letterInAlphabe(string) {
  const alphabeticallyString = string.split("").sort().join("");

  return alphabeticallyString;
}

// console.log(letterInAlphabe("vipin patidar"));
// console.log(letterInAlphabe("sidhima"));

/*
Write a JavaScript program to check whether the characters a and b 
are separated by exactly 3 places anywhere (at least once) in a 
given string.  
*/

function separatedBy3Places(string, a, b) {
  const i = string.indexOf(a);
  const j = string.indexOf(b);

  if (i === -1 && j === -1) return `Letter ${a} and ${b} are not in string`;
  if (i === -1) return `Letter ${a} is not in string`;
  if (j === -1) return `Letter ${b} is not in string`;

  return Math.abs(i - j) - 1 === 3
    ? `Given letter ${a} and ${b} are separated by 3 places`
    : "Given Letter are not separated by 3 places";
}

// console.log(separatedBy3Places("vipin", "v", "p"));

/*
Write a JavaScript program to count the number of vowels in a given string.  
*/

function countVowels(string) {
  const strArr = string.toLowerCase().split("");

  return strArr.reduce((acc, curr) => {
    const vowelsStr = "aeiou";

    if (vowelsStr.includes(curr)) acc++;

    return acc;
  }, 0);
}

// console.log(countVowels("w3resource.com"));

//TODO: Make a commit to repo
//TODO: Stop the codespaces
