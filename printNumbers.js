function printNumbers(num1, num2){
    for (x = num1; x <= num2; x++){
        console.log(x);
    }
}

function printNumbersWithWhile(num1,num2){
    var x = num1;
    while(x <= num2){
        console.log(x);
        x++;
    }
}

printNumbers(20,50);

console.log("     --------------      ");
printNumbersWithWhile(20,50);