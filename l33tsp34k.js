var l33t = {
    a: '4',
    e: '3',
    g: '6',
    i: '1',
    o: '0',
    s: '5',
    t: '7',


}

function leetspeak(word){
    var returnWord = "";
    var wordArray = word.split('');
    
    for(var x = 0; x < wordArray.length; x++){
        if (l33t.hasOwnProperty(wordArray[x])){
            returnWord += l33t[wordArray[x]];
        }
        else {
            returnWord += wordArray[x];
        }
        
    }
    return returnWord;
}

console.log(leetspeak('word to your moms'));
