$(() => {
    console.log('JQuery OK')
});

// ------ button in the DOM-------
let buttonStartGame = document.getElementById('buttonStartGame');
let buttonRollDice = document.getElementById('buttonRollDice');
let buttonSaveScore = document.getElementById('buttonSaveScore');
let buttonExplain = document.getElementById('buttonExplain');
// ------ image in the DOM-------
let diceFace = document.querySelector("img");
diceFace.setAttribute("src","images\\1.png");
// ------ Class display/no-display in the DOM-------
let classePlayer1 = document.getElementById('player1');
classePlayer1.setAttribute("class","display");
let classePlayer2 = document.getElementById('player2');
classePlayer2.setAttribute("class","no-display");
// ------ cumul intermediary player in the DOM-------
let cumulPlayer = document.getElementById('cumulPlayer');

//--- initialisation variables--------
let cumul = 0;    
let array1 = [0];
let array2 = [0];
let array3 = [0];
let player1 = true;
let player2 = false;
let scorePlayer1 = 0;
let scorePlayer2 = 0;
let diceValue = 1;
let p1 = "Cumul intermédiaire joueur 1"
let p2 = "Cumul intermédiaire joueur 2"
cumulPlayer.innerHTML= p1;


// ---Function roll the dice --------
let rollDice = () => 1 + Math.floor((Math.random()*6));


//---Function cumul intermedary --------
function cumul1(){
    document.getElementById("cumulInt").innerHTML= cumul;
    // call function roll the dice----
    diceValue = rollDice();
    diceFace.setAttribute("src",`images\\${diceValue}.png`);
    if (diceValue !== 1) {   
        array1.push(diceValue);
        const initialValue = 0;
        cumul = array1.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue
        
        );
        

    } else {
        cumul = 0;
        array1 = [0];
        // --function wait for initialise diceface and players before alert-----
        function wait() {

            if (player1) {
            alert('Perdu! Joueur 1, vous avez fait "1" Passez votre Tour');

            player2 = true;
            classePlayer2.setAttribute("class","display");
            player1 = false;
            classePlayer1.setAttribute("class","no-display");
            cumulPlayer.innerHTML= p2;
        } else {
            alert('Perdu! Joueur 2, vous avez fait "1" Passez votre Tour');
            player1 = true;
            classePlayer1.setAttribute("class","display");
            player2 = false;
            classePlayer2.setAttribute("class","no-display");
            cumulPlayer.innerHTML= p1;
           
        }
    }
        setTimeout (wait,250);
    };
        
    document.getElementById("cumulInt").innerHTML= cumul;
    
}; 

//---function Explain Game--------
let rules = () => {
    alert('Le jeu comporte 2 joueurs. Un cumul intermédiaire est incrémenté à chaque lancé et réinitialisé lors du changement de joueur - lors de son tour le joueur lance le dé autant de fois qu\'il le souhaite - S\'il le désire, le joueur peut sauvegarder ses lancés - si la valeur du lancé est 1 c\'est perdu le cumul intermédiaire est remis à 0 et le tour passe - le premier arrivé à 100 ou plus a gagné - Bonne chance!'); 

    
};

// ---Function save score ------
function storage() {
    if (cumul > 0) {
        if (player1) {
            array2.push(cumul);
            const initialValue1 = 0;
            let scorePlayer1 = array2.reduce(
            (previousValue1, currentValue1) => previousValue1 + currentValue1, initialValue1);
            document.getElementById("scorePlayer1").innerHTML= scorePlayer1;
            if (scorePlayer1 >= 100) {
                alert(' Le joueur 1 a gagné')
            } else {
                player1 = false;
                classePlayer1.setAttribute("class","no-display");
                player2 = true;
                classePlayer2.setAttribute("class","display");
                cumulPlayer.innerHTML= p2;
                array1 = [0];
                cumul = 0;
                
            };
        
        } else {
            array3.push(cumul);
            const initialValue2 = 0;
            let scorePlayer2 = array3.reduce(
            (previousValue2, currentValue2) => previousValue2 + currentValue2, initialValue2);
            document.getElementById("scorePlayer2").innerHTML= scorePlayer2;
            if (scorePlayer2 >= 100) {
                alert(' Le joueur 2 a gagné')
            } else {
                player2 = false;
                classePlayer2.setAttribute("class","no-display");
                player1 = true;
                classePlayer1.setAttribute("class","display");
                cumulPlayer.innerHTML= p1;
                array1 = [0];
                cumul = 0;
            };
        };
    };
    document.getElementById("cumulInt").innerHTML= cumul;
};

// ---Button rules-----
buttonExplain.addEventListener('click',rules);

// ---Button Start Game-----
buttonStartGame.addEventListener('click',startGame);


// ---Function Start Game-----
function startGame () {
    //--- initialisation des variables--------
    cumul = 0;    
    array1 = [0];
    array2 = [0];
    array3 = [0];
    player1 = true;
    player2 = false;
    scorePlayer1 = 0;
    scorePlayer2 = 0;
    document.getElementById("cumulInt").innerHTML= cumul;
    document.getElementById("scorePlayer1").innerHTML= scorePlayer1;
    document.getElementById("scorePlayer2").innerHTML= scorePlayer2;
    cumulPlayer.innerHTML= p1;
    classePlayer2.setAttribute("class","no-display");
    classePlayer1.setAttribute("class","display");
    

    // ---Button Roll Dice-----Call rollDice and Cumul-Inter functions----
    buttonRollDice.addEventListener('click',cumul1);
   
    // ---Button storage Score-----Call Storage Function---------
    buttonSaveScore.addEventListener('click',storage);
        
};





    
    





