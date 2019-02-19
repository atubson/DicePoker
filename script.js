// Variables with chances
let chance = 3;
let score = 0;
// DOM strings object - object z zapisanymi nazwami 
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
    if(chance === 3) {
        DOMString.schoollist1.classList.toggle('score-list-box-disabled');
        DOMString.schoollist2.classList.toggle('score-list-box-disabled');
        DOMString.schoollist3.classList.toggle('score-list-box-disabled');
        DOMString.schoollist4.classList.toggle('score-list-box-disabled');
        DOMString.schoollist5.classList.toggle('score-list-box-disabled');
        DOMString.schoollist6.classList.toggle('score-list-box-disabled');
        DOMString.specificlistFull.classList.toggle('score-list-box-disabled');
        DOMString.specificlistLS.classList.toggle('score-list-box-disabled');
        DOMString.specificlistBS.classList.toggle('score-list-box-disabled');
        DOMString.specificlist3x.classList.toggle('score-list-box-disabled');
        DOMString.specificlist4x.classList.toggle('score-list-box-disabled');
        DOMString.specificlistRescue.classList.toggle('score-list-box-disabled');
        DOMString.specificlist5x.classList.toggle('score-list-box-disabled');
        DOMString.schoollist1.classList.toggle('score-list-box');
        DOMString.schoollist2.classList.toggle('score-list-box');
        DOMString.schoollist3.classList.toggle('score-list-box');
        DOMString.schoollist4.classList.toggle('score-list-box');
        DOMString.schoollist5.classList.toggle('score-list-box');
        DOMString.schoollist6.classList.toggle('score-list-box');
        DOMString.specificlistFull.classList.toggle('score-list-box');
        DOMString.specificlistLS.classList.toggle('score-list-box');
        DOMString.specificlistBS.classList.toggle('score-list-box');
        DOMString.specificlist3x.classList.toggle('score-list-box');
        DOMString.specificlist4x.classList.toggle('score-list-box');
        DOMString.specificlistRescue.classList.toggle('score-list-box');
        DOMString.specificlist5x.classList.toggle('score-list-box');

    }
    Result.cleanResult();
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
    // School list 1-6
    rollResults.map(n => {
        switch(n) {
            case 1:
                Result.resultArray[0]++ ;
                break;
            case 2:
                Result.resultArray[1]++ ;
                break;
            case 3:
                Result.resultArray[2]++ ;
                break;
            case 4:
                Result.resultArray[3]++ ;
                break;
            case 5:
                Result.resultArray[4]++ ;
                break;
            case 6:
                Result.resultArray[5]++ ;
        }
    })
        Result.resultArray.map((n, i) => {
            if(n === 2) {
                Result.full2 = 1;
            }
            if(n === 3) {
                Result.full3 = 1;
            }
            // x3
            if(n >= 3) {
                Result.x3 = i + 1;
            }
            // x4
            if(n >= 4) {
                Result.x4 = i + 1;
            }
            // x5
            if(n >= 5) {
                Result.x5 = 50;
            }
            // full
            if(Result.full2 === 1 && Result.full3 === 1)
                {
                    Result.full = 25;
                }

        });
        // Small_straight
        if(Result.resultArray[0] === 1 && Result.resultArray[1] === 1 && Result.resultArray[2] === 1 && Result.resultArray[3] === 1 && Result.resultArray[4] === 1 ) {
            Result.small_straight = 15;
        }
        // Big Straight
        if (Result.resultArray[1] === 1 && Result.resultArray[2] === 1 && Result.resultArray[3] === 1 && Result.resultArray[4] === 1 && Result.resultArray[5] === 1 ) {
            Result.big_straight = 25;
        }
        // Rescue
        Result.rescue = rollResults.reduce((prev, next) =>{
            return prev + next;
        })
    
    DOMString.schoollist1.innerHTML = `Jedynki punkty: ${Result.resultArray[0] * 1}`;
    DOMString.schoollist2.innerHTML = `Dwojki punkty: ${Result.resultArray[1] * 2}`;
    DOMString.schoollist3.innerHTML = `Trojki punkty: ${Result.resultArray[2] * 3}`;
    DOMString.schoollist4.innerHTML = `Czworki punkty: ${Result.resultArray[3] * 4}`;
    DOMString.schoollist5.innerHTML = `Piatki punkty: ${Result.resultArray[4] * 5}`;
    DOMString.schoollist6.innerHTML = `Szostki punkty: ${Result.resultArray[5] * 6}`;
    DOMString.specificlistFull.innerHTML = `Full punkty: ${Result.full}`;
    DOMString.specificlistLS.innerHTML = `Mały strit punkty: ${Result.small_straight}`;
    DOMString.specificlistBS.innerHTML = `Duży strit punkty: ${Result.big_straight}`;
    DOMString.specificlist3x.innerHTML = `3X punkty : ${Result.x3 * 3}`;
    DOMString.specificlist4x.innerHTML = `4X punkty : ${(Result.x4 > 0)?((Result.x4 * 4) + 20) : 0}`;
    DOMString.specificlistRescue.innerHTML = `Rescue punkty : ${Result.rescue}`;
    DOMString.specificlist5x.innerHTML = `5X punkty : ${Result.x5}`;

    chance--;
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
        DOMString.btnRoll.classList.toggle("button-roll-disabled");
        DOMString.btnRoll.classList.toggle("button-roll");
        DOMString.btnRoll.innerHTML = 'Choose';
    }
}
function handleClickOnList(event) {
    console.log(event.srcElement.innerHTML);
    choosingResult(event);
    addingPoints(event);
}
function choosingResult(event) {
    chance = 3;
    DOMString.chance2.style.color = 'rgb(40, 172, 40)';
    DOMString.chance1.style.color = 'rgb(40, 172, 40)';
    DOMString.chance0.style.color = 'rgb(40, 172, 40)';
    Result.cleanResult();
    DOMString.btnRoll.classList.toggle("button-roll-disabled");
    DOMString.btnRoll.classList.toggle("button-roll");
    DOMString.btnRoll.innerHTML = 'Roll';
}
function addingPoints(event) {

}
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


