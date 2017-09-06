function printBox(width, height){
    
    var horizontal = "";
    for(var i = 1; i <= height; i++){
        if (i == 1){
            for (var x = 1; x <= width; x++){
                horizontal = horizontal + "*";
            }
        }
        else if (i < height){
            for(var x = 1; x <= width; x++){
                //console.log(x);
                if (x == 1 ){
                    horizontal = "*";
                }
                else if(x < width){
                    horizontal = horizontal + " ";
                }
                else {
                    
                    horizontal = horizontal + "*";
                }
            }
        }
        else {
            for (var x = 1; x <= width; x++){
                horizontal = horizontal + "*";
            }
        }
        console.log(horizontal);
        horizontal = "";
    }    
}

printBox(5,5);