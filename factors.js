function factors(number){
    var numFactors = [];
    //console.log("GOTHERE");
    for(var x = 1; x <= number; x++){
        if(number % x === 0) {
      //      console.log("got Here");
            numFactors.push(x);
        }
    }
    //console.log("NUM: "+numFactors);
    return numFactors;
}

console.log(factors(100));