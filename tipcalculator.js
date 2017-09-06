function tipAmount(amount, los){
    if(los.toLowerCase() == 'good'){
        return amount * .20;
    }
    else if (los.toLowerCase() == 'fair'){
        return amount * .15;
    }
    else {
        return amount * .10;
    }
}

console.log(tipAmount(100, 'good'));
console.log(tipAmount(100, 'fair'));
console.log(tipAmount(100, 'bad'));