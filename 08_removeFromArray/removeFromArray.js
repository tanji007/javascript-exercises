const removeFromArray = function (arr, ...args) {
    let arr2 = arr.filter((val)=> !args.includes(val))
    return arr2
};

// Do not edit below this line
module.exports = removeFromArray;
