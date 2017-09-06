function printSquare(size){
    var width = size;
    var height = size;
    var horizontal = "";
    for(var i = 0; i < height; i++){
        for (var x = 0; x < width; x++){
            horizontal = horizontal + "*";
        }
        console.log(horizontal);
        horizontal = "";
    }
    
}

printSquare(10);