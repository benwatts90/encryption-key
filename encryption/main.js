function encrypt() {
    let encryptedMessage;
    let input = document.getElementById("encryptor-input").value;
    const messageArray = input.split("");
    console.log (messageArray)
    
    let encryptedMessageArray = [];

    for (i = 0; i < messageArray.length; i++) {
        let letter;
        switch(messageArray[i]) {
            case "a":
                letter = "(";
                break;
            case "b":
                letter = "E";
                break;
            case "c":
                letter = "]";
                break;
            case "d":
                letter = "0";
                break;
            case "e":
                letter = "+";
                break;
            case "f":
                letter = "A";
                break;
            case "g":
                letter = "?";
                break;
            case "h":
                letter = ";";
                break;
            case "i":
                letter = "S";
                break;
            case "j":
                letter = "%";
                break;
            case "k":
                letter = "7";
                break;
            case "l":
                letter = "a";
                break;
            case "m":
                letter = "B";
                break;
            case "n":
                letter = "£";
                break;
            case "o":
                letter = "H";
                break;
            case "p":
                letter = "i";
                break;
            case "q":
                letter = "1";
                break;
            case "r":
                letter = ">";
                break;
            case "s":
                letter = '"';
                break;
            case "t":
                letter = "c";
                break;
            case "u":
                letter = "8";
                break;
            case "v":
                letter = "L";
                break;
            case "w":
                letter = "$";
                break;
            case "x":
                letter = "d";
                break;
            case "y":
                letter = "K";
                break;
            case "z":
                letter = "&";
                break;
            case "A":
                letter = "Y";
                break;
            case "B":
                letter = "h";
                break;
            case "C":
                letter = "4";
                break;
            case "D":
                letter = "P";
                break;
            case "E":
                letter = "=";
                break;
            case "F":
                letter = "e";
                break;
            case "G":
                letter = "5";
                break;
            case "H":
                letter = "*";
                break;
            case "I":
                letter = "g";
                break;
            case "J":
                letter = "|";
                break;
            case "K":
                letter = "J";
                break;
            case "L":
                letter = "b";
                break;
            case "M":
                letter = "_";
                break;
            case "N":
                letter = "9";
                break;
            case "O":
                letter = ":";
                break;
            case "P":
                letter = "@";
                break;
            case "Q":
                letter = "¬";
                break;
            case "R":
                letter = "\\";
                break;
            case "S":
                letter = "6";
                break;
            case "T":
                letter = "m";
                break;
            case "U":
                letter = "G";
                break;
            case "V":
                letter = "[";
                break;
            case "W":
                letter = "3";
                break;
            case "X":
                letter = "o";
                break;
            case "Y":
                letter = ")";
                break;
            case "Z":
                letter = "k";
                break;
            case "1":
                letter = "C";
                break;
            case "2":
                letter = "}";
                break;
            case "3":
                letter = "2";
                break;
            case "4":
                letter = "f";
                break;
            case "5":
                letter = "u";
                break;
            case "6":
                letter = ",";
                break;
            case "7":
                letter = "I";
                break;
            case "8":
                letter = "y";
                break;
            case "9":
                letter = "U";
                break;
            case "0":
                letter = "x";
                break;
            case "`":
                letter = "p";
                break;
            case "|":
                letter = "q";
                break;
            case "\\":
                letter = ".";
                break;
            case "/":
                letter = "Z";
                break;
            case ">":
                letter = "`";
                break;
            case ":":
                letter = "^";
                break;
            case ";":
                letter = "z";
                break;
            case "¬":
                letter = "s";
                break;
            case "?":
                letter = "Q";
                break;
            case "-":
                letter = "t";
                break;
            case "+":
                letter = "M";
                break;
            case ".":
                letter = "j";
                break;
            case ",":
                letter = "W";
                break;
            case "'":
                letter = "F";
                break;
            case "@":
                letter = "-";
                break;
            case "{":
                letter = "n";
                break;
            case "}":
                letter = "X";
                break;
            case "[":
                letter = "w";
                break;
            case "]":
                letter = "V";
                break;
            case "&":
                letter = "v";
                break;
            case "=":
                letter = "{";
                break;
            case "_":
                letter = "l";
                break;
            case ")":
                letter = "R";
                break;
            case "(":
                letter = "r";
                break;
            case "*":
                letter = "T";
                break;
            case "&":
                letter = "v";
                break;
            case "^":
                letter = "!";
                break;
            case "%":
                letter = "D";
                break;
            case "!":
                letter = "'";
                break;
            case '"':
                letter = "N";
                break;
            case "£":
                letter = "/";
                break;
            case "$":
                letter = "O";
                break;
            default:
                letter = messageArray[i];
                break;
        }
        encryptedMessageArray.push(letter);
        console.log("encrypted message array", encryptedMessageArray);
    }

    encryptedMessage = encryptedMessageArray.join("");
    document.getElementById("encrypted-message").innerHTML = encryptedMessage;
};

function decrypt() {
    let decryptedMessage;
    let decryptorInput = document.getElementById("decryptor-input").value;
    const messageArray = decryptorInput.split("");
    console.log(messageArray);
    
    let decryptedMessageArray = [];

    for (i = 0; i < messageArray.length; i++) {
        let letter;
        switch(messageArray[i]) {
            case "(":
                letter = "a";
                break;
            case "E":
                letter = "b";
                break;
            case "]":
                letter = "c";
                break;
            case "0":
                letter = "d";
                break;
            case "+":
                letter = "e";
                break;
            case "A":
                letter = "f";
                break;
            case "?":
                letter = "g";
                break;
            case ";":
                letter = "h";
                break;
            case "S":
                letter = "i";
                break;
            case "%":
                letter = "j";
                break;
            case "7":
                letter = "k";
                break;
            case "a":
                letter = "l";
                break;
            case "B":
                letter = "m";
                break;
            case "£":
                letter = "n";
                break;
            case "H":
                letter = "o";
                break;
            case "i":
                letter = "p";
                break;
            case "1":
                letter = "q";
                break;
            case ">":
                letter = "r";
                break;
            case '"':
                letter = "s";
                break;
            case "c":
                letter = "t";
                break;
            case "8":
                letter = "u";
                break;
            case "L":
                letter = "v";
                break;
            case "$":
                letter = "w";
                break;
            case "d":
                letter = "x";
                break;
            case "K":
                letter = "y";
                break;
            case "&":
                letter = "z";
                break;
            case "Y":
                letter = "A";
                break;
            case "h":
                letter = "B";
                break;
            case "4":
                letter = "C";
                break;
            case "P":
                letter = "D";
                break;
            case "=":
                letter = "E";
                break;
            case "e":
                letter = "F";
                break;
            case "5":
                letter = "G";
                break;
            case "*":
                letter = "H";
                break;
            case "g":
                letter = "I";
                break;
            case "|":
                letter = "J";
                break;
            case "J":
                letter = "K";
                break;
            case "b":
                letter = "L";
                break;
            case "_":
                letter = "M";
                break;
            case "9":
                letter = "N";
                break;
            case ":":
                letter = "O";
                break;
            case "@":
                letter = "P";
                break;
            case "¬":
                letter = "Q";
                break;
            case "\\":
                letter = "R";
                break;
            case "6":
                letter = "S";
                break;
            case "m":
                letter = "T";
                break;
            case "G":
                letter = "U";
                break;
            case "[":
                letter = "V";
                break;
            case "3":
                letter = "W";
                break;
            case "o":
                letter = "X";
                break;
            case ")":
                letter = "Y";
                break;
            case "k":
                letter = "Z";
                break;
            case "C":
                letter = "1";
                break;
            case "}":
                letter = "2";
                break;
            case "2":
                letter = "3";
                break;
            case "f":
                letter = "4";
                break;
            case "u":
                letter = "5";
                break;
            case ",":
                letter = "6";
                break;
            case "I":
                letter = "7";
                break;
            case "y":
                letter = "8";
                break;
            case "U":
                letter = "9";
                break;
            case "x":
                letter = "0";
                break;
            case "p":
                letter = "`";
                break;
            case "q":
                letter = "|";
                break;
            case ".":
                letter = "\\";
                break;
            case "Z":
                letter = "/";
                break;
            case "`":
                letter = ">";
                break;
            case "^":
                letter = ":";
                break;
            case "z":
                letter = ";";
                break;
            case "s":
                letter = "¬";
                break;
            case "Q":
                letter = "?";
                break;
            case "t":
                letter = "-";
                break;
            case "M":
                letter = "+";
                break;
            case "j":
                letter = ".";
                break;
            case "W":
                letter = ",";
                break;
            case "F":
                letter = "'";
                break;
            case "-":
                letter = "@";
                break;
            case "n":
                letter = "{";
                break;
            case "X":
                letter = "}";
                break;
            case "w":
                letter = "[";
                break;
            case "V":
                letter = "]";
                break;
            case "v":
                letter = "&";
                break;
            case "{":
                letter = "=";
                break;
            case "l":
                letter = "_";
                break;
            case "R":
                letter = ")";
                break;
            case "r":
                letter = "(";
                break;
            case "T":
                letter = "*";
                break;
            case "v":
                letter = "&";
                break;
            case "!":
                letter = "^";
                break;
            case "D":
                letter = "%";
                break;
            case "'":
                letter = "!";
                break;
            case "N":
                letter = '"';
                break;
            case "/":
                letter = "£";
                break;
            case "O":
                letter = "$";
                break;
            default:
                letter = messageArray[i];
                break;
        }
        decryptedMessageArray.push(letter);
    }
    decryptedMessage = decryptedMessageArray.join("");
    document.getElementById("decrypted-message").innerHTML = decryptedMessage;
};