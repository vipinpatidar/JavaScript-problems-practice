console.log("Hey JavaScript");

/*
Write a JavaScript program to rotate the string 'w3resource' in the right direction. 
This is done by periodically removing one letter from the string end and attaching 
it to the front.  
*/

let str = "";

function rotateString(string){
   const stringArr = string.split("");
   stringArr.forEach((elem, i, arr) => {
       str += arr[arr.length - (i+1)]
   });
}

// rotateString("w3resource")
// console.log(str);


/*
Write a JavaScript program to remove a character at the specified position 
in a given string and return the modified string.  
*/

function removeChar(string, position){
    return string.slice(0, position) + string.slice(position + 1)
}

// console.log(removeChar("character", 5));

/*
Write a JavaScript program to create a new string from a given string by 
changing the position of the first and last characters. The string 
length must be broader than or equal to 1.
*/

function swapString(string){
    if(string.length <= 1) return "String lenght should be greater then 1";

     return string.slice(string.length - 1) + string.slice(1, string.length - 1) + string.slice(0,1)
}

// console.log(swapString("vipin"));


/*
Write a JavaScript program to find the largest of three given integers.  
*/

function largestInt(a, b, c){

    if(!isFinite(a) || !isFinite(b) || !isFinite(c)) return "All inputs should be intergers";
   
    let maxValue = 0;

     maxValue = a > b ?  a  : b 

     return c > maxValue ? c: maxValue;
    
}

// console.log(largestInt(6, 3,4));

/*
32. Write a JavaScript program to find the closest value to 100 from two numerical values.  
*/

function closestTo100(a,b){

    if(a === b) return false;

    if(Math.abs(100 - a) === Math.abs(100 - b)) return 0;
    
    return Math.abs(100 - a) < Math.abs(100 - b)  ? a : b;

}

// console.log(closestTo100(-190, 190))