let score = 112;                        // Number
let str = "Hello JavaScript";           // String
let bool = true;                        // Boolean
let und;                                // Undefined
let nl = null;                          // Null
let bigIntVal = 123456789123456789n;    // BigInt
let sym = Symbol("id");                 // Symbol

console.log({ score, str, bool, und, nl, bigIntVal, sym });

console.log("=== Number to String ===");

let numToString1 = String(score);
let numToString2 = score.toString();
let numToString3 = `${score}`;

console.log("String(score)       =>", numToString1, "| Type:", typeof numToString1);
console.log("score.toString()    =>", numToString2, "| Type:", typeof numToString2);
console.log("Template literal    =>", numToString3, "| Type:", typeof numToString3);

let validString = "33";
let invalidString = "33abc";

console.log("Number('33')        =>", Number(validString), "| Type:", typeof Number(validString));
console.log("Number('33abc')     =>", Number(invalidString)); // NaN
console.log("parseInt('33abc')   =>", parseInt(invalidString));
console.log("parseFloat('40.55') =>", parseFloat("40.55"));

console.log("Number('abc')  =>", Number("abc"));       // NaN
console.log("undefined + 5  =>", undefined + 5);       // NaN
console.log("0 / 0          =>", 0 / 0);               // NaN
console.log("isNaN('abc')   =>", isNaN("abc"));        // true
console.log("Number.isNaN('abc') =>", Number.isNaN("abc")); // false (strict)
console.log("Number.isNaN(Number('abc')) =>", Number.isNaN(Number("abc"))); // true


console.log("Number(true)   =>", Number(true));     // 1
console.log("Number(false)  =>", Number(false));    // 0
console.log("String(true)   =>", String(true));     // "true"
console.log("Boolean(1)     =>", Boolean(1));       // true
console.log("Boolean(0)     =>", Boolean(0));       // false


console.log("String(undefined)  =>", String(undefined));      // "undefined"
console.log("Number(undefined)  =>", Number(undefined));      // NaN
console.log("Boolean(undefined) =>", Boolean(undefined));     // false

console.log("String(null)       =>", String(null));           // "null"
console.log("Number(null)       =>", Number(null));           // 0
console.log("Boolean(null)      =>", Boolean(null));          // false


let arr = [1, 2, 3];

console.log("String([1,2,3])   =>", String(arr));      // "1,2,3"
console.log("[1,2,3].toString() =>", arr.toString());  // "1,2,3"

console.log("Number([5])       =>", Number([5]));      // 5
console.log("Number([1,2,3])   =>", Number([1,2,3]));  // NaN

console.log("[] + []           =>", [] + []);          // ""
console.log("[] + {}           =>", [] + {});          // "[object Object]"

console.log(" '5' + 2         =>", "5" + 2);       // "52"
console.log(" 2 + '5'         =>", 2 + "5");       // "25"
console.log(" '1' + 2 + 2     =>", "1" + 2 + 2);   // "122"
console.log(" 1 + 2 + '2'     =>", 1 + 2 + "2");   // "32"
