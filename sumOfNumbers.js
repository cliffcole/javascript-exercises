function sumOfNumbers(numbers){

    var total = numbers.reduce(function(sum, value){
        return sum + value;
    },0)

    return total;
}

function sumOfNumbers2(numbers){
    var total = 0;
    for(var x = 0; x < numbers.length; x++){
        total = total +numbers[x];
    }
    return total;
}

console.log("TOTAL: "+sumOfNumbers([1,2,3,3]));
console.log("TOTAL: "+sumOfNumbers2([1,2,3,3]));
