//var numbers = [-1,-3,-4 ,3,1,4,9];

function positiveNumbers(numbers){
    var returnArray = [];
    for(var x = 0; x < numbers.length; x++){
        if(numbers[x] > 0){
            returnArray.push(numbers[x]);
        }
    }
    return(returnArray);
}

console.log(positiveNumbers([-1,-3,0,2,4,6]));