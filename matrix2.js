function matrixMultiply(array, array1){
    var results = [];

    results.push([array[0][0] * array1[0][0] + array[0][1] * array1[1][0],array[0][0] * array1[0][1] + array[0][1] * array1[1][1]]);
    
    results.push([array[1][0] * array1[0][0] + array[1][1] * array1[1][0],array[1][0] * array1[0][1] + array[1][1] * array1[1][1]]);

    return results;
}

console.log(matrixMultiply([[2, 4],[3, 4]],[[5, 2], [3, 1]]));