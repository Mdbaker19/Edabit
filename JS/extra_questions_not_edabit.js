// for(let n = 0; n < 10000000; n++){
//     narcissisticNum(n);
// }

function narcissisticNum(j) {
    let output = [];
    //exponent is determined by the length of the number 3 for 153
    let findExponent = j.toString().length;
    //convert to string to pull each char out individually
    let numAsString = j.toString();
    for (let i = 0; i < findExponent; i++) {
        //use this to pull the 1, 5, and 3 separately from an input of 153
        let input = numAsString.charAt(i);
        //push each 1, 5, and 3 individually to the output array
        output.push(input);
    }
    let numsExponentApplied = output.map((element) => element ** findExponent);
    let sum = numsExponentApplied.reduce((a, b) => a + b);
    if (sum === j) {
        console.log(j);
        return true;
    }
}






























