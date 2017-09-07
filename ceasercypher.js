
var offset = 13;

function encrypt(text){

}

function decrypt(text){
    textArray = text.split();
    for(var x = 0; x < text.length; x++){
        var charCode = text.charCodeAt(x);
        
        if (charCode >=65  && charCode <= 90 ){
            var newChar = parseInt(charCode - offset);
            //console.log(newChar);
            if (newChar < 65){
                console.log(String.fromCharCode(parseInt(text.charCodeAt(newChar))));
            } 
            //console.log(String.fromCharCode(parseInt(text.charCodeAt(x) - offset)));
        } else if (charCode >= 97 && charCode <= 122){
            var newChar = parseInt(charCode - offset);
            //console.log(newChar);
            if(newChar < 97){
                console.log(String.fromCharCode(parseInt(text.charCodeAt(newChar))));
            }
            //console.log(String.fromCharCode(parseInt(text.charCodeAt(x) - offset)));
        } else {
            //console.log(String.fromCharCode(parseInt(text.charCodeAt(x) - offset)));
        }
        //console.log(charCode);
        //console.log("sub: "+parseInt(charCode - offset));
        //console.log(String.fromCharCode(parseInt(text.charCodeAt(x) - offset)));
        //console.log(text.charCodeAt(x));
    }
}

decrypt("Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar");