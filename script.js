const game = {
    gameboard: document.querySelector('.gameboard'),

    cell: {
  		red: '<div class="cell red"></div>',
        black: [
      	    /*0*/['<div class="cell black"></div>'],
      	    /*1*/['<div class="cell black"><div class="checker r"></div></div>'],
            /*2*/['<div class="cell black"><div class="checker b"></div></div>'],
            /*3*/['<div class="cell black"><div class="checker R">K</div></div>'],
            /*4*/['<div class="cell black"><div class="checker B">K</div></div>']
            ]
  	},

    checker: {
  	    redChecker: 'r',
 		blackChecker: 'b',
    	redKing: 'R',
  	    blackKing: 'B'
 },

    boardArray: [
		/*0*/['','r','','r','','r','','r'], 
		/*1*/['r','','r','','r','','r',''],
		/*2*/['','r','','r','','r','','r'],
		/*3*/['','','','','','','',''],
		/*4*/['','','','','','','',''],
		/*5*/['b','','b','','b','','b',''],
		/*6*/['','b','','b','','b','','b'],
		/*7*/['b','','b','','b','','b','']
			],
        
    drawBoard: function(){
  				for(let row = 0; row < this.boardArray.length; row++){
        		for(let col = 0; col < this.boardArray.length; col++){
            		//console.log(this.boardArray[row][col]);
              if((row + col) % 2 == 0){
            			this.gameboard.insertAdjacentHTML('beforeend', this.cell.red);
       					} 	else {
                			if(this.boardArray[row][col] == this.checker.redChecker){
                      	this.gameboard.insertAdjacentHTML('beforeend', this.cell.black[1]);
                      }	else if(this.boardArray[row][col] == this.checker.blackChecker){
                      	this.gameboard.insertAdjacentHTML('beforeend', this.cell.black[2]);
                      } else if(this.boardArray[row][col] == this.checker.redKing){
                      	this.gameboard.insertAdjacentHTML('beforeend', this.cell.black[3]);
                      } else if(this.boardArray[row][col] == this.checker.blackKing){
                      	this.gameboard.insertAdjacentHTML('beforeend', this.cell.black[4]);
                      } else {
                      	this.gameboard.insertAdjacentHTML('beforeend', this.cell.black[0]);
                      }
       					 		}
                    //console.log(this.boardArray[row][col]);
      						} 
  							} 
               },
};
game.drawBoard();
