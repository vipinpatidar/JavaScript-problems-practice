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

/*
Write a JavaScript program to create a string using the middle three 
characters of a given string of odd length. The string length must be 
greater than or equal to three.  
*/

function midCharString(string) {
  if (!(string.length >= 3))
    return "String must be greater then or equal to three";

  const index = (string.length - 3) / 2;

  if (string.length % 2 !== 0)
    return string.slice(index, string.length - index);

  return `${string} string is has event length`;
}

// console.log(midCharString("vipin"));

/*
Write a JavaScript program to concatenate two strings and return the result. 
If the length of the strings does not match, then remove the characters from 
the longer string.  
*/

function concateStingOnSameLength(string1, string2) {
  const min = Math.min(string1.length, string2.length);

  return `${string1.substring(string1.length - min)} ${string2.substring(
    string2.length - min
  )}`;
}

// console.log(concateStingOnSameLength("vipin", "patidar"));

/*
Write a JavaScript program to reverse the elements of a given array of integers of length 3.  
*/

function reverseArray(arr) {
  return arr.map((elem, idx, array) => array[arr.length - 1 - idx]);
}

// console.log(reverseArray([1, 2, 3, 4]));

/*
75
Write a JavaScript program to find the largest value between the first and 
last elements and set all the other elements to that value. Display the updated array.
*/

function largestNumArray(array) {
  const max = Math.max(...array);

  return new Array(array.length).fill(max);
}

// console.log(largestNumArray([20, 30, 40, 50, 90]));
// console.log(largestNumArray([-7, -9, 0]));

/*
Write a JavaScript program to add two positive integers without carrying.
*/

function addIntNotCarrying(a, b) {
  if (a < 0 || b < 0) return "Integers must be positive";

  let result = 0;
  let num = 1;

  while (a > 0 && b > 0) {
    result += num * ((a + b) % 10); // a + b -> 1133 -> 113 -> 11
    a = Math.floor(a / 10);
    b = Math.floor(b / 10);
    num *= 10;
  }

  return result;
}

// console.log(addIntNotCarrying(222, 911));
// console.log(addIntNotCarrying(107, 1077));

/*
Write a JavaScript program to find the longest string from a given array of strings.
*/

function findLongestStringInArray(arr) {
  let max = arr[0].length;

  arr.map((str) => (max = Math.max(max, str.length)));
  let [longStr] = arr.filter((str) => str.length === max);

  return longStr;
}

// console.log(
//   findLongestStringInArray(["vipin", "sidhima", "gunjan", "payal", "riya"])
// );

/*
Write a JavaScript program to replace each character in a given string with the next in the English alphabet.  
Note: 'a' will be replace by 'b' or 'z' would be replaced by 'a'.
*/

function replaceCharToNextChar(alphabetString) {
  const charCodeOfA = "a".charCodeAt(0);
  const charCodeOfZ = "z".charCodeAt(0);

  const newStr = alphabetString
    .toLowerCase()
    .split("")
    .map((str) => {
      let strCharCode = str.charCodeAt(0);

      if (strCharCode === charCodeOfZ) return String.fromCharCode(charCodeOfA);

      return String.fromCharCode(strCharCode + 1);
    })
    .join("");

  return newStr;
}

// console.log(replaceCharToNextChar("vipin"));
// console.log(replaceCharToNextChar("abcdefghijklmnopqrstuvwxyz"));

/*
Write a JavaScript program to divide a given array of positive integers into 
two parts. First element belongs to the first part, second element belongs to 
the second part, and third element belongs to the first part and so on. Now 
compute the sum of two parts and store it in an array of size two.
*/

function addOddEvenPartOfArrs(array) {
  const newArr = array.reduce(
    (acc, curr, i, arr) => {
      if (i % 2 === 0) {
        acc[0] += curr;
      } else {
        acc[1] += curr;
      }

      return acc;
    },
    [0, 0]
  );

  return newArr;
}

// console.log(addOddEvenPartOfArrs([1, 3, 6, 2, 5, 10]));

/*
Write a JavaScript program to determine if two arrays of integers 
of the same length are similar. The arrays will be similar if one 
array can be obtained from another array by swapping at most one 
pair of elements.
*/

function swapArraySame(arr1, arr2) {
  if (arr1.length !== arr2.length) return;

  for (let i = 0; i < arr1.length; i++) {
    for (let j = i; j < arr1.length; j++) {
      console.log(i, j);
      let result = true;
      let temp;

      temp = arr1[i];

      // Swap elements
      arr1[i] = arr1[j];
      arr1[j] = temp;

      console.log(arr1);

      // Compare elements of the modified arra1 with arra2
      for (let k = 0; k < arr1.length; k++) {
        console.log(arr1[k], arr2[k]);
        if (arr1[k] !== arr2[k]) {
          result = false;
          break;
        }
      }

      // If the arrays match, return true
      if (result) {
        return true;
      }

      // Restore the original order by swapping back elements
      arr1[j] = arr1[i];
      arr1[i] = temp;
    }
  }

  // If no match is found, return false
  return false;
}

// console.log(swapArraySame([10, 20, 30], [10, 20, 30]));
// console.log(swapArraySame([10, 20, 30], [30, 10, 20]));
// console.log(swapArraySame([10, 20, 30, 40], [10, 30, 20, 40]));

/*
Write a JavaScript program to find the kth greatest element in a given array of integers.
*/

function findKthGretestElem(array, kth) {
  const newArr = array.toSorted((a, b) => b - a);

  return newArr[kth - 1];
}

// console.log(findKthGretestElem([-10, -25, -47, -36, 0], 1));

/*
Write a JavaScript program to find the maximum possible sum of some of its k consecutive 
numbers (numbers that follow each other in order) in a given array of positive integers.
*/

function maxOfKconsecutiveNums(arr, k) {
  let max = 1;
  for (let i = 0; i < arr.length; i++) {
    if (k + i <= arr.length) {
      let a = arr.slice(i, k + i).reduce((a, b) => a + b, 0);

      if (a >= max) {
        max = a;
      }
    }
  }

  return max;
}

// console.log(maxOfKconsecutiveNums([2, 3, 8, 4, 6, 1, 6], 3));
// console.log(maxOfKconsecutiveNums([9, 3, 5, 1, 7], 2));

/*
Write a JavaScript program to find the maximum difference between any two adjacent elements of a given array of integers.
*/

function minInAdjacentNums(arr) {
  let max = -1;
  let temp;

  for (let i = 0; i < arr.length - 1; i++) {
    temp = Math.abs(arr[i] - arr[i + 1]);
    max = Math.max(temp, max);
  }

  return max;
}

// console.log(minInAdjacentNums([1, 3, 6, 4, 9, 2, 5]));

/*
Write a JavaScript program to find the maximum difference among all possible pairs of a given array of integers.
*/

function array_max_diff(arr) {
  let max_result = 0;

  // Iterate through the array elements
  for (let i = 0; i < arr.length; i++) {
    // skip iteration which match
    for (let k = 0; k !== i && k < arr.length; k++) {
      console.log(i, k);
      let diff = Math.abs(arr[i] - arr[k]);
      max_result = Math.max(max_result, diff);
    }
  }

  return max_result;
}

// console.log(array_max_diff([1, 2, 3, 8, 6]));

/*
Write a JavaScript program to find the number appearing most frequently in a given array of integers. 
*/

function mostFrequentNumInArr(arr) {
  let freq = new Map();
  let maxCount = 1;
  let result = [];

  for (const num of arr) {
    const count = (freq.get(num) || 0) + 1;
    freq.set(num, count);

    if (count > maxCount) {
      maxCount = count;
      result = [num];
    } else if (count === maxCount) {
      result.push(num);
    }
  }

  return result.length === 1 ? result[0] : result;
}

/*
function mostFrequentNumInArr(arr) {
  if (arr.length === 0) return undefined;

  // Build frequency map
  const frequencies = arr.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});

  console.log(frequencies);

  // Find max frequency
  return Object.keys(frequencies).reduce((a, b) =>
    frequencies[a] > frequencies[b] ? a : b
  );
}
*/
// console.log(mostFrequentNumInArr([1, 2, 3, 2, 2, 8, 1, 1, 9]));

/*
Write a JavaScript program to compute the sum of the absolute differences of consecutive numbers in a given array of integers.
*/

function sumOfAbsoDiffArrNum(arr) {
  const sum = arr
    .slice(1)
    .reduce((acc, curr, i) => (acc += Math.abs(curr - arr[i])), 0);
  return sum;
}

// console.log(sumOfAbsoDiffArrNum([1, 2, 3, 4, 8, 4]));/

/*
Write a JavaScript program to find the shortest possible string. This can be 
converted into a string and converted into a palindrome by adding characters 
to the end of it.
*/

function createAPalindromeString(s) {
  if (s.length <= 1) return s;

  // Try adding characters one by one
  for (let i = 0; i < s.length; i++) {
    // Take first i characters from reverse and add to end
    const toAdd = s.substring(0, i).split("").reverse().join("");
    const candidate = s + toAdd;

    if (isPalindrome(candidate)) {
      return candidate;
    }
  }

  function isPalindrome(s) {
    return s === s.split("").reverse().join("");
  }
  // Worst case: add entire reverse except last char
  return (
    s +
    s
      .substring(0, s.length - 1)
      .split("")
      .reverse()
      .join("")
  );
}

// console.log(createAPalindromeString("abcddc"));

/*
Write a JavaScript program to check whether a given string contains only Latin 
letters and no two uppercase and no two lowercase letters are in adjacent positions.
*/

// Last: 101
//FIXME: Make a commit to repo
//TODO: Stop the codespaces
