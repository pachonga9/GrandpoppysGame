//global variables//
const turnDisplayer = document.getElementById('turnDisplayer');
let blacksTurn = true;

//which are the black checkers?//
let blackCheckers = document.getElementsByClassName('blackChecker');

//which are the red checkers?//
let redCheckers = document.getElementsByClassName('redChecker');

//what are the gameboard tiles? possibly use array?//
let movementTiles = document.getElementsByClassName('blackTile')[0];

//display whose turn it it//
function displayTurn(){
    let paragraph = document.createElement('p');
    if(blacksTurn === true){
        turnDisplayer.appendChild(paragraph);
        paragraph.innerHTML = "It's Blacks Turn";
        paragraph.style.color = "yellow";
        console.log("it's blacks turn.");
    } else if(blacksTurn === false){
        turnDisplayer.appendChild(paragraph);
        paragraph.innerHTML = "It's Red's Turn";
        paragraph.style.color = "yellow";
        console.log("it's red's turn.");
    };
};
displayTurn();
initCheckers(blackCheckers);
initCheckers(redCheckers);

let selected = 0; 

// change the border color of a checker when it's clicked. Still need to do: If clicked again, revert back.//
function initCheckers(checkers) {
	for(let i = 0; i < checkers.length; i++){
  	checkers[i].addEventListener("click", function(){
    	checkers[selected].style.borderColor = "white";
			checkers[i].style.borderColor = "yellow";
      selected = i;
    });
	}
}