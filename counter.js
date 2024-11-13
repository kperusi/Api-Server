
let arraycounter = function(arr){
    return 'The length of the array is '+ arr.length
}

let adder= function(a,b){
    return `the sum of ${a} and ${b} is ${a+b}`
}
let pi= 3.142



module.exports.arraycounter = arraycounter;
module.exports.adder =adder;
module.exports.pi = pi;
// module.exports.adder = adder;
// module.exports.pi = pi;