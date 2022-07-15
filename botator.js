let humanAlphabet = [' ','a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

let botAlphabet = [' ','`', '~','!','@','#','$','%','^','&','*','(',')','-','=','_','+','/',',','.','?',';',':','[',']','{','}'];

let userInput = '';

let translatedOutput = [];

let finalOutput = '';

function toBot(){
    userInput = prompt("Enter the Sentence:");

    translatedOutput = [];

    for (let i=0; i <userInput.length; i++){
        translatedOutput.push(botAlphabet[humanAlphabet.indexOf(userInput[i])]);
        console.log(userInput[i]);
    }

    console.log(translatedOutput);

    finalOutput = translatedOutput.join('');

    document.write(finalOutput);
}

function toHuman(){
    userInput = prompt("Enter the Sentence:");

    translatedOutput = [];

    for (let i=0; i <userInput.length; i++){
        translatedOutput.push(humanAlphabet[botAlphabet.indexOf(userInput[i])]);
        console.log(userInput[i]);
    }

    console.log(translatedOutput);

    finalOutput = translatedOutput.join('');

    document.write(finalOutput);
}