var longVowels = {
    aa: 'aaaaa',
    ee: 'eeeee',
    ii: 'iiiii',
    oo: 'ooooo',
    uu: 'uuuuu'
}

function longvowels(word){
    var newWord = word;
    for (key in longVowels){
        var re = RegExp(key);
        //console.log(re);
        newWord = newWord.replace(re, longVowels[key]);
    }
    return newWord;
}

console.log(longvowels('man'));