const reverseString = function(str) {
    let arr = str.split("");
    let str2 = arr.reverse().join("")
    return str2
};
// Correct but could be more optimal
// Do not edit below this line
module.exports = reverseString;

