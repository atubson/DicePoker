// Variables with chances
let chance = 3;
let score = 0;
let savedDice = [];
// Boolean array to check if list button was clicked
let clicked = [false, false, false, false, false, false, false, false, false, false, false, false, false];
// DOM strings object - object with saved path to dom elements 
    DOMString = {
        button: document.querySelector("#button"),
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
        chance2: document.querySelector(".chance-2"),
        chance1: document.querySelector(".chance-1"),
        chance0: document.querySelector(".chance-0"),
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
    const Result = {
        resultArray: [0,0,0,0,0,0],
        x3: 0,
        x4: 0,
        full: 0,
        small_straight: 0,
        big_straight: 0,
        rescue: 0,
        x5: 0,
        full2: 0, // variables working as flag looking for full
        full3: 0,
        savedResultArray: [0,0,0,0,0],


        cleanResult() {
            this.resultArray = [0, 0, 0, 0, 0, 0];
            this.x3 = 0;
            this.x4 = 0;
            this.full = 0;
            this.small_straight = 0;
            this.big_straight = 0;
            this.rescue = 0;
            this.x5 = 0;
            this.full2 = 0;
            this.full3 = 0;
        }
    }




    // funkcja losujaca liczbe od 1 do 6

    function rollDice() {
        return Math.round((Math.random() * 5) + 1);
    }

    // funkcja losujaca rzuty po nacisnieciu przycisku

function showRoll() {
    const rollResults = [];
    savedDice = [];
    resetClassList();
    Result.cleanResult();
    if(chance === 3) {
        for (let i = 0; i < 5; i++) {
            rollResults[i] = rollDice();
        }
        DOMString.dice0.innerHTML = `<img src="img/dice-${rollResults[0]}.png">`;
        DOMString.dice1.innerHTML = `<img src="img/dice-${rollResults[1]}.png">`;
        DOMString.dice2.innerHTML = `<img src="img/dice-${rollResults[2]}.png">`;
        DOMString.dice3.innerHTML = `<img src="img/dice-${rollResults[3]}.png">`;
        DOMString.dice4.innerHTML = `<img src="img/dice-${rollResults[4]}.png">`;

        // Function checking result based on rollResults
        checkResults(rollResults);
        // Function updating list based on roll results
        resetList(Result);

        chance--;
        // Function changing chance counter
        showChance(chance);
    }else {
        let place = 0;
        for (let i = 0; i < 5; i++) {
            if(Result.savedResultArray[i] !== 0) {
                rollResults[place] = Result.savedResultArray[i];
                place ++;
            }
        }
        for (let j = place; j < 5; j++) {
            rollResults[j] = rollDice();
        }
        console.log(rollResults);
        resetDices();
        showDices(rollResults);
        checkResults(rollResults);
        resetList(Result);
        chance--;
        showChance(chance);

    }
    
}
function handleClickOnList(event) {
    savedDice = [];
    event.srcElement.classList.toggle('score-list-box-disabled');
    // function changing clicked index to true
    changingClickedArray(event.srcElement.id);
    choosingResult(event);
    addingPoints(event);
    resetDices();
}

// function handling choosing from list
function choosingResult(event) {
    Result.cleanResult();
    resetList(Result);
    DOMString.btnRoll.className = "button-roll";
    DOMString.btnRoll.innerHTML = 'Roll';
    chance = 3;
    DOMString.chance2.style.color = 'rgb(40, 172, 40)';
    DOMString.chance1.style.color = 'rgb(40, 172, 40)';
    DOMString.chance0.style.color = 'rgb(40, 172, 40)';
    console.log(event);
}

// Function adding points to score
function addingPoints(event) {
    score = score + parseInt(event.srcElement.innerHTML.split(':',3)[1].trim());
    DOMString.score.innerHTML = `Wynik<br> ${score}`;
}

// function changing clicked to true
function changingClickedArray(id) {
    switch(id) {
        case 'one':
            clicked[0] = true;
            break;
        case 'two':
            clicked[1] = true;
            break;
        case 'three':
            clicked[2] = true;
            break;
        case 'four':
            clicked[3] = true;
            break;
        case 'five':
            clicked[4] = true;
            break;
        case 'six':
            clicked[5] = true;
            break;
        case 'x3':
            clicked[6] = true;
            break;
        case 'x4':
            clicked[7] = true;
            break;
        case 'full':
            clicked[8] = true;
            break;
        case 'little-straight':
            clicked[9] = true;
            break;
        case 'big-straight':
            clicked[10] = true;
            break;
        case 'rescue':
            clicked[11] = true;
            break;
        case 'x5':
            clicked[12] = true;
            break;
    }
}

// Function checking rollResult and saving in object
function checkResults(rollResults) {
    // School list 1-6
    rollResults.map(n => {
        switch (n) {
            case 1:
                Result.resultArray[0]++;
                break;
            case 2:
                Result.resultArray[1]++;
                break;
            case 3:
                Result.resultArray[2]++;
                break;
            case 4:
                Result.resultArray[3]++;
                break;
            case 5:
                Result.resultArray[4]++;
                break;
            case 6:
                Result.resultArray[5]++;
        }
    })
    console.log(Result.resultArray);
    Result.resultArray.map((n, i) => {
        if (n === 2) {
            Result.full2 = 1;
        }
        if (n === 3) {
            Result.full3 = 1;
        }
        // x3
        if (n >= 3) {
            Result.x3 = i + 1;
        }
        // x4
        if (n >= 4) {
            Result.x4 = i + 1;
        }
        // x5
        if (n >= 5) {
            Result.x5 = 50;
        }
        // full
        if (Result.full2 === 1 && Result.full3 === 1) {
            Result.full = 25;
        }

    });
    // Small_straight
    if (Result.resultArray[0] === 1 && Result.resultArray[1] === 1 && Result.resultArray[2] === 1 && Result.resultArray[3] === 1 && Result.resultArray[4] === 1) {
        Result.small_straight = 15;
    }
    // Big Straight
    if (Result.resultArray[1] === 1 && Result.resultArray[2] === 1 && Result.resultArray[3] === 1 && Result.resultArray[4] === 1 && Result.resultArray[5] === 1) {
        Result.big_straight = 25;
    }
    // Rescue
    Result.rescue = rollResults.reduce((prev, next) => {
        return prev + next;
    })
}

// Function to reset list and update points
function resetList(Result) {
    if (clicked[0] === false) {
        DOMString.schoollist1.innerHTML = `Jedynki punkty: ${Result.resultArray[0] * 1}`;
    }
    if (clicked[1] === false) {
        DOMString.schoollist2.innerHTML = `Dwojki punkty: ${Result.resultArray[1] * 2}`;
    }
    if (clicked[2] === false) {
        DOMString.schoollist3.innerHTML = `Trojki punkty: ${Result.resultArray[2] * 3}`;
    }
    if (clicked[3] === false) {
        DOMString.schoollist4.innerHTML = `Czworki punkty: ${Result.resultArray[3] * 4}`;
    }
    if (clicked[4] === false) {
        DOMString.schoollist5.innerHTML = `Piatki punkty: ${Result.resultArray[4] * 5}`;
    }
    if (clicked[5] === false) {
        DOMString.schoollist6.innerHTML = `Szostki punkty: ${Result.resultArray[5] * 6}`;
    }
    if (clicked[8] === false) {
        DOMString.specificlistFull.innerHTML = `Full punkty: ${Result.full}`;
    }
    if (clicked[9] === false) {
        DOMString.specificlistLS.innerHTML = `Mały strit punkty: ${Result.small_straight}`;
    }
    if (clicked[10] === false) {
        DOMString.specificlistBS.innerHTML = `Duży strit punkty: ${Result.big_straight}`;
    }
    if (clicked[6] === false) {
        DOMString.specificlist3x.innerHTML = `3X punkty : ${Result.x3 * 3}`;
    }
    if (clicked[7] === false) {
        DOMString.specificlist4x.innerHTML = `4X punkty : ${(Result.x4 > 0) ? ((Result.x4 * 4) + 20) : 0}`;
    }
    if (clicked[11] === false) {
        DOMString.specificlistRescue.innerHTML = `Rescue punkty : ${Result.rescue}`;
    }
    if (clicked[12] === false) {
        DOMString.specificlist5x.innerHTML = `5X punkty : ${Result.x5}`;
    }
}

// Function handling chance system
function showChance(chance) {
    switch (chance) {
        case 2:
            DOMString.chance2.style.color = 'red';
            break;
        case 1:
            DOMString.chance1.style.color = 'red';
            break;
        case 0:
            DOMString.chance0.style.color = 'red';
    }
    if (chance === 0) {
        DOMString.btnRoll.className = "button-roll-disabled";
        DOMString.btnRoll.innerHTML = 'Choose';
    }
}

// Function handling click on dice
function handleClickOnDice(event) {
    let clickedNumber = parseInt(event.target.src.split('/',5)[4].split('-',2)[1][0]);
    let clickedDice = parseInt(event.srcElement.parentElement.id.split('-', 2)[1][0]);
    event.srcElement.parentElement.classList.toggle('dice');
    event.srcElement.parentElement.classList.toggle('dice-disabled');
    switch(clickedDice) {
        case 0:
            DOMString.savedDice0.innerHTML = `<img src="img/dice-${clickedNumber}.png">`;
            DOMString.savedDice0.classList.toggle('dice-saved-disabled');
            DOMString.savedDice0.classList.toggle('dice-saved');
            Result.savedResultArray[0] = clickedNumber;
            savedDice.push(0);
            break;
        case 1:
            DOMString.savedDice1.innerHTML = `<img src="img/dice-${clickedNumber}.png">`;
            DOMString.savedDice1.classList.toggle('dice-saved-disabled');
            DOMString.savedDice1.classList.toggle('dice-saved');
            Result.savedResultArray[1] = clickedNumber;
            savedDice.push(1);
            break;
        case 2:
            DOMString.savedDice2.innerHTML = `<img src="img/dice-${clickedNumber}.png">`;
            DOMString.savedDice2.classList.toggle('dice-saved-disabled');
            DOMString.savedDice2.classList.toggle('dice-saved');
            Result.savedResultArray[2] = clickedNumber;
            savedDice.push(2);
            break;
        case 3:
            DOMString.savedDice3.innerHTML = `<img src="img/dice-${clickedNumber}.png">`;
            DOMString.savedDice3.classList.toggle('dice-saved-disabled');
            DOMString.savedDice3.classList.toggle('dice-saved');
            Result.savedResultArray[3] = clickedNumber;
            savedDice.push(3);
            break;
        case 4:
            DOMString.savedDice4.innerHTML = `<img src="img/dice-${clickedNumber}.png">`;
            DOMString.savedDice4.classList.toggle('dice-saved-disabled');
            DOMString.savedDice4.classList.toggle('dice-saved');
            Result.savedResultArray[4] = clickedNumber;
            savedDice.push(4);
            break;
    }
    
}

// Function reseting classes for list elements
function resetClassList() {
    if (clicked[0] === false) {
        DOMString.schoollist1.className = 'score-list-box';
    }
    if (clicked[1] === false) {
        DOMString.schoollist2.className = 'score-list-box';
    }
    if (clicked[2] === false) {
        DOMString.schoollist3.className = 'score-list-box';
    }
    if (clicked[3] === false) {
        DOMString.schoollist4.className = 'score-list-box';
    }
    if (clicked[4] === false) {
        DOMString.schoollist5.className = 'score-list-box';
    }
    if (clicked[5] === false) {
        DOMString.schoollist6.className = 'score-list-box';
    }
    if (clicked[6] === false) {
        DOMString.specificlist3x.className = 'score-list-box';
    }
    if (clicked[7] === false) {
        DOMString.specificlist4x.className = 'score-list-box';
    }
    if (clicked[8] === false) {
        DOMString.specificlistFull.className = 'score-list-box';
    }
    if (clicked[9] === false) {
        DOMString.specificlistLS.className = 'score-list-box';
    }
    if (clicked[10] === false) {
        DOMString.specificlistBS.className = 'score-list-box';
    }
    if (clicked[11] === false) {
        DOMString.specificlistRescue.className = 'score-list-box';
    }
    if (clicked[12] === false) {
        DOMString.specificlist5x.className = 'score-list-box';
    }
}

// Function handling click on saved dice
function handleClickOnSavedDice(event) {
    let clickedDice = parseInt(event.srcElement.parentElement.id.split('-',3)[2][0]);
    let clickedNumber = parseInt(event.target.src.split('/', 5)[4].split('-', 2)[1][0]);
    event.srcElement.parentElement.classList.toggle('dice-saved');
    event.srcElement.parentElement.classList.toggle('dice-saved-disabled');
    switch(savedDice[(savedDice.length - 1)]) {
        case 0:
            DOMString.dice0.innerHTML = `<img src="img/dice-${clickedNumber}.png">`;
            DOMString.dice0.classList.toggle('dice-disabled');
            DOMString.dice0.classList.toggle('dice');
            Result.savedResultArray[clickedDice] = 0;
            savedDice.pop();
            break;
        case 1:
            DOMString.dice1.innerHTML = `<img src="img/dice-${clickedNumber}.png">`;
            DOMString.dice1.classList.toggle('dice-disabled');
            DOMString.dice1.classList.toggle('dice');
            Result.savedResultArray[clickedDice] = 0;
            savedDice.pop();
            break;
        case 2:
            DOMString.dice2.innerHTML = `<img src="img/dice-${clickedNumber}.png">`;
            DOMString.dice2.classList.toggle('dice-disabled');
            DOMString.dice2.classList.toggle('dice');
            Result.savedResultArray[clickedDice] = 0;
            savedDice.pop();
            break;
        case 3:
            DOMString.dice3.innerHTML = `<img src="img/dice-${clickedNumber}.png">`;
            DOMString.dice3.classList.toggle('dice-disabled');
            DOMString.dice3.classList.toggle('dice');
            Result.savedResultArray[clickedDice] = 0;
            savedDice.pop();
            break;
        case 4:
            DOMString.dice4.innerHTML = `<img src="img/dice-${clickedNumber}.png">`;
            DOMString.dice4.classList.toggle('dice-disabled');
            DOMString.dice4.classList.toggle('dice');
            Result.savedResultArray[clickedDice] = 0;
            savedDice.pop();
            break;

    }
}

// Function reseting to start view
function resetDices() {
    resetDice(DOMString.dice0);
    resetDice(DOMString.dice1);
    resetDice(DOMString.dice2);
    resetDice(DOMString.dice3);
    resetDice(DOMString.dice4);
    resetDice(DOMString.savedDice0);
    resetDice(DOMString.savedDice1);
    resetDice(DOMString.savedDice2);
    resetDice(DOMString.savedDice3);
    resetDice(DOMString.savedDice4);
}

// Function checking if dice is visible or not and reseting view
function resetDice(dice) {
    switch (dice.classList[0]) {
        case 'dice':
            break;
        case 'dice-disabled':
            dice.classList.toggle('dice-disabled');
            dice.classList.toggle('dice');
            break;
        case 'dice-saved':
            dice.classList.toggle('dice-saved');
            dice.classList.toggle('dice-saved-disabled');
            break;
        case 'dice-saved-disabled':
            break;
    }
}

// Function showing dices after roll
function showDices(rollResults) {
    DOMString.dice0.innerHTML = `<img src="img/dice-${rollResults[0]}.png">`;
    DOMString.dice1.innerHTML = `<img src="img/dice-${rollResults[1]}.png">`;
    DOMString.dice2.innerHTML = `<img src="img/dice-${rollResults[2]}.png">`;
    DOMString.dice3.innerHTML = `<img src="img/dice-${rollResults[3]}.png">`;
    DOMString.dice4.innerHTML = `<img src="img/dice-${rollResults[4]}.png">`;
}

// Event listeners
DOMString.btnRoll.addEventListener('click', showRoll);
DOMString.schoollist1.addEventListener('click', handleClickOnList);
DOMString.schoollist2.addEventListener('click', handleClickOnList);
DOMString.schoollist3.addEventListener('click', handleClickOnList);
DOMString.schoollist4.addEventListener('click', handleClickOnList);
DOMString.schoollist5.addEventListener('click', handleClickOnList);
DOMString.schoollist6.addEventListener('click', handleClickOnList);
DOMString.specificlist3x.addEventListener('click', handleClickOnList);
DOMString.specificlist4x.addEventListener('click', handleClickOnList);
DOMString.specificlist5x.addEventListener('click', handleClickOnList);
DOMString.specificlistRescue.addEventListener('click', handleClickOnList);
DOMString.specificlistFull.addEventListener('click', handleClickOnList);
DOMString.specificlistBS.addEventListener('click', handleClickOnList);
DOMString.specificlistLS.addEventListener('click', handleClickOnList);
DOMString.dice0.addEventListener('click', handleClickOnDice);
DOMString.dice1.addEventListener('click', handleClickOnDice);
DOMString.dice2.addEventListener('click', handleClickOnDice);
DOMString.dice3.addEventListener('click', handleClickOnDice);
DOMString.dice4.addEventListener('click', handleClickOnDice);
DOMString.savedDice0.addEventListener('click', handleClickOnSavedDice);
DOMString.savedDice1.addEventListener('click', handleClickOnSavedDice);
DOMString.savedDice2.addEventListener('click', handleClickOnSavedDice);
DOMString.savedDice3.addEventListener('click', handleClickOnSavedDice);
DOMString.savedDice4.addEventListener('click', handleClickOnSavedDice);

