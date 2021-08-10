const game = {
	gameboard: document.querySelector('.gameboard'),
  //redCell: '<div class="cell red"></div>',
  //blackCell: '<div class="cell black"></div>',
  cell: {
  		red: '<div class="cell red"></div>',
      black: '<div class="cell black"></div>'
  	},
 
  redChecker: [['r'],['<div class="checker r"></div>']],
  blackChecker: [['b'],['<div class="checker b"></div>']],
  redKing: [['R'],['<div class="checker R">K</div>']],
  blackKing: [['B'],['<div class="checker B">K</div>']],
  
  boardArray: [
							/*0*/	['','r','','r','','r','','r'], 
							/*1*/	['r','','r','','r','','r',''],
							/*2*/	['','r','','r','','r','','r'],
							/*3*/	['','','','','','','',''],
							/*4*/	['','','','','','','',''],
							/*5*/	['b','','b','','b','','b',''],
							/*6*/	['','b','','b','','b','','b'],
							/*7*/	['b','','b','','b','','b','']
							],
  maxNum: 8,            
  draw: function(){
  				for(let i = 0; i < this.maxNum; i++){
        		for(let j = 0; j < this.maxNum; j++){
          		if((i + j) % 2 == 0){
            		this.gameboard.insertAdjacentHTML('beforeend', this.cell.red);
            		//this.boardArray = this.boardArray += i;
       					} else {
            				this.gameboard.insertAdjacentHTML('beforeend', this.cell.black);
            				//this.boardArray = this.boardArray += i;
       					 		}
      						} 
  							}
               },
  };
game.draw();
console.log(game.boardArray);


//display whose turn it it//
//this needs to go inside the game object//
let blacksTurn = true;
const turnDisplayer = document.getElementById('turnDisplayer');
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
/*

//which are the black checkers?//
let blackCheckers = document.getElementsByClassName('blackChecker');

//which are the red checkers?//
let redCheckers = document.getElementsByClassName('redChecker');

//what are the gameboard tiles? possibly use array?//




// change the border color of a checker when it's clicked. If clicked again, revert back.//
initCheckers(blackCheckers);
initCheckers(redCheckers);
let selectedChecker = 0; 
function initCheckers(checkers) {
	for(let i = 0; i < checkers.length; i++){
  	checkers[i].addEventListener("click", function(){
    	checkers[selectedChecker].style.borderColor = "white";
		checkers[i].style.borderColor = "yellow";
        selectedChecker = i;
        //let selectedCheckerPlacement = movementTiles.indexOf(selectedChecker[i]);
        //console.log(selectedCheckerPlacement);
        console.log(movementTiles[0]);
    });
	}
}//get the movement tile the selected piece is on//
// calculate movable tiles the selected piece can move to//
// highlight the calculated movable tiles the piece can move to//
*/

