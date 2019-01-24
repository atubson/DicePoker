
// DOM strings object - object z zapisanymi nazwami 
    DOMString = {
        dice0: document.getElementById("dice-0"),
        dice1: document.getElementById("dice-1"),
        dice2: document.getElementById("dice-2"),
        dice3: document.getElementById("dice-3"),
        dice4: document.getElementById("dice-4"),
        btnRoll: document.querySelector(".button-roll"),
        savedDice0: document.getElementById("dice-saved-0"),
        savedDice1: document.getElementById("dice-saved-1"),
        savedDice2: document.getElementById("dice-saved-2"),
        savedDice3: document.getElementById("dice-saved-3"),
        savedDice4: document.getElementById("dice-saved-4"),
        score: document.querySelector("#scores"),
        chance: document.querySelector("#chance"),
        schoollist1: document.querySelector("#one"),
        schoollist2: document.querySelector("#two"),
        schoollist3: document.querySelector("#three"),
        schoollist4: document.querySelector("#four"),
        schoollist5: document.querySelector("#five"),
        schoollist6: document.querySelector("#six"),
        specificlist3x: document.querySelector("#x3"),
        specificlist4x: document.querySelector("#x4"),
        specificlistFull: document.querySelector("#full"),
        specificlistLS: document.querySelector("#little-straight"),
        specificlistBS: document.querySelector("#big-straight"),
        specificlistRescue: document.querySelector("#rescue"),
        specificlist5x: document.querySelector("#x5")

    }

    // tablica trzymajaca wyniki rzutow koścmi




    // funkcja losujaca liczbe od 1 do 6

    function rollDice() {
        return Math.round((Math.random() * 5) + 1);
    }

    // funkcja losujaca rzuty po nacisnieciu przycisku

function showRoll() {
    const rollResults = [];
    document.getElementById('dice-0').src = `img/dice-${2}.png`;
    console.log("Nacisnieto");
    for (let i = 0; i < 5; i++) {
        rollResults[i] = rollDice();
    }
    DOMString.dice0.innerHTML = `<img src="img/dice-${rollResults[0]}.png">`;
    DOMString.dice1.innerHTML = `<img src="img/dice-${rollResults[1]}.png">`;
    DOMString.dice2.innerHTML = `<img src="img/dice-${rollResults[2]}.png">`;
    DOMString.dice3.innerHTML = `<img src="img/dice-${rollResults[3]}.png">`;
    DOMString.dice4.innerHTML = `<img src="img/dice-${rollResults[4]}.png">`;

    DOMString.savedDice0.innerHTML = `<img src="img/dice-${rollResults[0]}.png">`;
    DOMString.savedDice1.innerHTML = `<img src="img/dice-${rollResults[1]}.png">`;
    DOMString.savedDice2.innerHTML = `<img src="img/dice-${rollResults[2]}.png">`;
    DOMString.savedDice3.innerHTML = `<img src="img/dice-${rollResults[3]}.png">`;
    DOMString.savedDice4.innerHTML = `<img src="img/dice-${rollResults[4]}.png">`;
}

    DOMString.btnRoll.addEventListener('click',showRoll);
    
    


