console.log("Hello world !!");


let course = "Full Stack Web Development Course";


// How to find the length of the string. [len]
// const len = course.length;
// console.log("Length of the string is :", len);



// Concatination of the strings    [+, concat]
// let name1 = "Vijay Pratap Singh";
// let age = "22";
// let statement = name1 + " is " + age + " years old."
// let newStr = age.concat(name1);
// console.log(newStr);
// console.log(name1 + age);
// console.log(statement);


// Access any character based on what ? index value.
// var a = [1, 3, 5]
// console.log(course[10]);        // it will return you the character present at that specific index
// console.log(course.indexOf("l"));   // this will return the index of that character at first occurence.
// console.log(course.lastIndexOf("l")) // this will return the index of the character of last occurence



// ****************** IMPORTANT ***************
// REVERSE OF A STRING : 


// 1.> split : which converts your string to an array.

let name = "Mayank";
let aplhabet = "a b c"
const splitStr = name.split("")
const splitStr2 = aplhabet.split(" ")

console.log(splitStr, splitStr2);


// 2.> reverse : reverse all the values present inside it

const reversedArr = splitStr.reverse();
console.log("Reversed Array",reversedArr);


// 3.>  join   : convert the array to string

const strOutput = reversedArr.join("*");
console.log("Output", strOutput);



const reversedCourse = course.split("").reverse().join("");
console.log(reversedCourse);





// Replace  : takes two params , first is what is required to be replaced, second is with what you want to replace

const temp = "John is a good guy. John is working as a developer";
console.log(temp);
console.log(temp.replace("John","Doe"));    // it will replace only the first occurence
console.log(temp.replaceAll("John","Doe")); // it will replace all the occurences