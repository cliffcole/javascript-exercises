function matrixAdd(array, array2){
    //console.log(array);
    var results = [];
    //console.log(array[0][1] +" + "+ array2[0][0])
    results.push(array[0][0] + array2[0][0]);
    results.push(array[0][1] + array2[0][1]);
    results.push(array[1][0] + array2[1][0]);
    results.push(array[1][1] + array2[1][1]);

    return results;
}

console.log(matrixAdd([[1, 3], [2, 4]], [[5, 2], [1, 0]]));