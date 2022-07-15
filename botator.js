let englishAlphabet = [' ','a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

let botAlphabet = [' ','`', '~','!','@','#','$','%','£','&','*','(',')','-','=','_','+','/',',','.','?',';',':','[',']','{','}'];

let userInput = '';

let translatedOutput = [];

let finalOutput = '';

function toBot(){
    userInput = prompt("Enter the ENGLISH Sentence You want To translate to BOT language:");

    translatedOutput = [];

    for (let i=0; i <userInput.length; i++){
        translatedOutput.push(botAlphabet[englishAlphabet.indexOf(userInput[i])]);
    }

    finalOutput = translatedOutput.join('');

    document.getElementById("translatedText").innerHTML = finalOutput;
}

function toEnglish(){
    userInput = prompt("Enter the BOT Language Sentence You want To translate to ENGLISH:");

    translatedOutput = [];

    for (let i=0; i <userInput.length; i++){
        translatedOutput.push(englishAlphabet[botAlphabet.indexOf(userInput[i])]);
    }

    finalOutput = translatedOutput.join('');

    document.getElementById("translatedText").innerHTML = finalOutput;
}
