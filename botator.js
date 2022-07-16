let englishAlphabet = [' ','a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', 'A', 'B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z', '0','1','2','3','4','5','6','7','8','9'];

let botAlphabet = [' ','<', '~','!','@','…','$','%','£','&','*','(',')','-','=','₹','+','/',',','.','?',';',':','[',']','{','}', '<', '~','!','@','…','$','%','£','&','*','(',')','-','=','₹','+','/',',','.','?',';',':','[',']','{','}', '9','8','7','6','5','4','3','2','1','0' ];

let userInput = '';

let translatedOutput = [];

let finalOutput = '';

function toBot(){
    userInput = document.getElementById("englishInput").value;

    translatedOutput = [];

    for (let i=0; i <userInput.length; i++){
        translatedOutput.push(botAlphabet[englishAlphabet.indexOf(userInput[i])]);
    }

    finalOutput = translatedOutput.join('');

    document.getElementById("botInput").value = finalOutput;
}

function toEnglish(){
    userInput = document.getElementById("botInput").value;;

    translatedOutput = [];

    for (let i=0; i <userInput.length; i++){
        translatedOutput.push(englishAlphabet[botAlphabet.indexOf(userInput[i])]);
    }

    finalOutput = translatedOutput.join('');

    document.getElementById("englishInput").value = finalOutput;
}
