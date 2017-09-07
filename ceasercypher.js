
var offset = 13;

function encrypt(text){
    var results = ""
    for(var x = 0; x < text.length; x++){
        var charCode = text.charCodeAt(x);
        
        if (charCode >= 65  && charCode <= 90 ){
            var newChar = parseInt(charCode + offset);
            //console.log("U: "+newChar);
            if (newChar > 90){
                //console.log(String.fromCharCode(newChar));
                results += String.fromCharCode(newChar);
                //console.log(String.fromCharCode(parseInt(text.charCodeAt(newChar))));
            }
            else {
              //  console.log(String.fromCharCode(newChar));
                results += String.fromCharCode(newChar);
            } 
            //console.log(String.fromCharCode(parseInt(text.charCodeAt(x) - offset)));
        } else if (charCode >= 97 && charCode <= 122){
            var newChar = parseInt(charCode + offset);
            
            if(newChar > 122){
                //console.log("O: "+newChar);
                var diff = newChar - 122;
                newChar = 96 + diff;
                //console.log("U: "+charCode +" - "+String.fromCharCode(newChar));
                results += String.fromCharCode(newChar);
                //console.log(String.fromCharCode(parseInt(text.charCodeAt(newChar))));
            }else {
              //  console.log(String.fromCharCode(newChar));
                results += String.fromCharCode(newChar);
            }
            //console.log(String.fromCharCode(parseInt(text.charCodeAt(x) - offset)));
        } else {
            newChar = parseInt(charCode);
            //console.log(String.fromCharCode(newChar));
            results += String.fromCharCode(newChar);
            //console.log("N: "+newChar);
            //console.log(String.fromCharCode(parseInt(text.charCodeAt(x) - offset)));
        }
        //console.log(charCode);
        //console.log("sub: "+parseInt(charCode - offset));
        //console.log(String.fromCharCode(parseInt(text.charCodeAt(x) - offset)));
        //console.log(text.charCodeAt(x));
    }
    return results;
}

function decrypt(text){
    var results = ""
    for(var x = 0; x < text.length; x++){
        var charCode = text.charCodeAt(x);
        
        if (charCode >= 65  && charCode <= 90 ){
            var newChar = parseInt(charCode - offset);
            //console.log("U: "+newChar);
            if (newChar < 65){
                //console.log(String.fromCharCode(newChar));
                var diff = 65 - newChar;
                newChar = 91 - diff;
                results += String.fromCharCode(newChar);
                //console.log(String.fromCharCode(parseInt(text.charCodeAt(newChar))));
            }
            else {
              //  console.log(String.fromCharCode(newChar));
                results += String.fromCharCode(newChar);
            } 
            //console.log(String.fromCharCode(parseInt(text.charCodeAt(x) - offset)));
        } else if (charCode >= 97 && charCode <= 122){
            var newChar = parseInt(charCode - offset);
            //console.log("O: "+newChar);
            if(newChar < 97){
                var diff = 97 - newChar;
                newChar = 123 - diff;
                //console.log("U: "+charCode +" - "+String.fromCharCode(newChar));
                results += String.fromCharCode(newChar);
                //console.log(String.fromCharCode(parseInt(text.charCodeAt(newChar))));
            }else {
              //  console.log(String.fromCharCode(newChar));
                results += String.fromCharCode(newChar);
            }
            //console.log(String.fromCharCode(parseInt(text.charCodeAt(x) - offset)));
        } else {
            newChar = parseInt(charCode);
            //console.log(String.fromCharCode(newChar));
            results += String.fromCharCode(newChar);
            //console.log("N: "+newChar);
            //console.log(String.fromCharCode(parseInt(text.charCodeAt(x) - offset)));
        }
        //console.log(charCode);
        //console.log("sub: "+parseInt(charCode - offset));
        //console.log(String.fromCharCode(parseInt(text.charCodeAt(x) - offset)));
        //console.log(text.charCodeAt(x));
    }
    return results;
}

console.log(decrypt("Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar"));
//console.log("Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar");
console.log(encrypt('Genius without education is like silver in the mine'));