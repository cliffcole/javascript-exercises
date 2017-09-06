function tipAmount(amount, los, numSplit){
    if(los.toLowerCase() == 'good'){
        return (amount + (amount * .20)) / numSplit ;
    }
    else if (los.toLowerCase() == 'fair'){
        return (amount + (amount * .15)) / numSplit ;
    }
    else {
        return (amount + (amount * .10)) / numSplit ;
    }
}

console.log(tipAmount(100, 'good', 2));
console.log(tipAmount(100, 'fair',2));
console.log(tipAmount(100, 'bad',2));