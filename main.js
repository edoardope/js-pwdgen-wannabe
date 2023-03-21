// variabili
const nome = document.getElementById('nome');
const color = document.getElementById('color');
const cognome = document.getElementById('cognome');
const bottone = document.getElementById('bottone');
const pass = document.getElementById('pass')

// funzione di scrittura

function scritturapass() {
    document.getElementById("pass").innerHTML=`${nome.value + cognome.value + color.value + 21} `  

}
        
// ascolto bottone
bottone.addEventListener('click',scritturapass);




// sequenza randomica di 10 tra cifre e caratteri
function generateRandomSequence() {
    const characters = "0123456789abcdefghijklmnopqrstuvwxyz";
    let sequence = "";
    for (let i = 0; i < 10; i++) {
      sequence += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return sequence;
  
}
  
  const randomSequence = generateRandomSequence();
  console.log(randomSequence);


// better pass functions

function mixInputs() {
    let nome2 = document.getElementById("nome2").value;
    let cognome2 = document.getElementById("cognome2").value;
    let color2 = document.getElementById("color2").value;
    
    let mixedString = nome2 + cognome2 + color2 + randomSequence;
    let mixedArray = mixedString.split("");
    let currentIndex = mixedArray.length;
    let temporaryValue, randomIndex;
  
    // Fisher-Yates shuffle algorithm
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = mixedArray[currentIndex];
      mixedArray[currentIndex] = mixedArray[randomIndex];
      mixedArray[randomIndex] = temporaryValue;
    }
  
    let mixedInputs = mixedArray.join("");
    return mixedInputs;
  
}
 
  
document.getElementById("bottone2").addEventListener("click", function() {
    let mixedResult = mixInputs();
    console.log(mixedResult);

    let pass2Span = document.getElementById("pass2");
    pass2Span.textContent = mixedResult;
  
});

   










