let englishAlphabet = [' ','a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

let botAlphabet = [' ','<', '~','!','@','…','$','%','£','&','*','(',')','-','=','₹','+','/',',','.','?',';',':','[',']','{','}'];

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

    document.getElementById("translatedText").innerHTML = finalOutput;
}

function toEnglish(){
    userInput = document.getElementById("botInput").value;;

    translatedOutput = [];

    for (let i=0; i <userInput.length; i++){
        translatedOutput.push(englishAlphabet[botAlphabet.indexOf(userInput[i])]);
    }

    finalOutput = translatedOutput.join('');

    document.getElementById("translatedText").innerHTML = finalOutput;
}
