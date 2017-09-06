function printBanner(bannerText){
    var length = bannerText.length;
    var length = length + 4;
    var output = "";
    for (var x = 0; x < length; x++){
        output = output + "*";
    }
    console.log(output);
    console.log("* "+ bannerText +" *");
    console.log(output);
}

printBanner('blahbla blah blahb blahblah ');