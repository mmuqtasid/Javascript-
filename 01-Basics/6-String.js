let newCountry = "Pakistan";
let capitalPk = "Islamabad";

console.log(`Country name is ${newCountry} - Capital is ${capitalPk}`);
console.log(newCountry.length);
console.log(__proto__)
console.log(capitalPk.charAt(2));
console.log(newCountry.indexOf("n"));
console.log(`Country name is ${newCountry} - Capital is ${capitalPk}`);
console.log("Length:", newCountry.length);
console.log("CharAt(2):", capitalPk.charAt(2));
console.log("IndexOf('n'):", newCountry.indexOf("n"));
console.log("toUpperCase:", newCountry.toUpperCase());
console.log("toLowerCase:", newCountry.toLowerCase());
console.log("includes('Pak'):", newCountry.includes("Pak"));
console.log("startsWith('Pa'):", newCountry.startsWith("Pa"));
console.log("endsWith('tan'):", newCountry.endsWith("tan"));
console.log("slice(0,4):", newCountry.slice(0, 4));
console.log("substring(0,4):", newCountry.substring(0, 4));
console.log("substr(0,4):", newCountry.substr(0, 4)); 
console.log("replace:", newCountry.replace("Pakistan", "India"));
console.log(
  "replaceAll:",
  "Hello Hello".replaceAll("Hello", "Hi")
);
console.log("split(''):", newCountry.split(""));
console.log("split('a'):", newCountry.split("a"));
let textWithSpaces = "   Pakistan   ";
console.log("trim:", textWithSpaces.trim());
console.log("repeat:", newCountry.repeat(2));
console.log("concat:", newCountry.concat(" Zindabad"));
console.log("padStart:", newCountry.padStart(10, "*"));
console.log("padEnd:", newCountry.padEnd(12, "*"));
console.log("match(/a/g):", newCountry.match(/a/g));
console.log("charCodeAt(0):", newCountry.charCodeAt(0));
console.log("valueOf:", newCountry.valueOf());
console.log("localeCompare:", "a".localeCompare("b"));

