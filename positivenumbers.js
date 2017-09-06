var numbers = [-1,-3,-4 ,3,1,4,9];

function positiveNumbers(numbers){
    var returnArray = numbers.every(function(x){
        if (x > 0){
            return x;
        }
    })
    return(returnArray);
    
}

console.log(positiveNumbers(numbers));