"use strict";
// D U O M E N Y S
    var board = {
            size: {
                width: 0,
                height: 0
            },
            cells: {
                x: 10,
                y: 10,
                cellSize: 1,
                letters: ['','A','B','C','D','E','F','G','H',''],
                numbers: ['','8','7','6','5','4','3','2','1','']
            }
    };
    var game = document.querySelector('#chess'),
            boardContainer = game.querySelector('#board-container'),
                gameBoard = boardContainer.querySelector('#board'),
                gameInfo = game.querySelector('#info');
        board.size.width = parseInt( getComputedStyle( game ).width );
        board.size.height = parseInt( getComputedStyle( game ).height );
        console.log(board.size.width,board.size.height);
        renderBoard();

// F U N K C I J O S

function renderBoard(){
    let maxCellWidth = Math.floor(board.size.width / board.cells.x), //max 1 langelio plotis
        maxCellHeight = Math.floor(board.size.height / board.cells.y), //max 1 langelio aukštis
        cellSize = 0; //naujas langelio dydis

        board.cells.cellSize = maxCellWidth;  //nežinomas langelio dydis keičiamas maksimaliu langelio pločiu
        // cellSize = maxCellWidth; //ir tai pervadinama cellSize
        if(maxCellWidth > maxCellHeight){ //jeigu plotis daugiau už aukštį
            board.cells.cellSize = maxCellHeight; //nežinomas langelio dydis keičiamas maksimaliu langelio aukščiu
        }
        cellSize = board.cells.cellSize;
        

        gameBoard.style.height = board.cells.y * cellSize + 'px';
        // gameBoard.style.width = Math.floor(((board.cells.x * cellSize) * 100) / board.size.width) + '%';
        gameBoard.style.width = board.cells.x * cellSize + 'px';
        console.log(gameBoard.style.width);
        
        
        gameInfo.style.width = (board.size.width - (board.cells.x * cellSize)) + 'px';
        // gameInfo.style.width = (100 - Math.floor(((board.cells.x * cellSize) * 100) / board.size.width)) + '%';
        gameInfo.style.height = gameBoard.style.height;

        drawCells();
        paintCells();
}
function drawCells(){
    let cellSize = board.cells.cellSize,
        letters = board.cells.letters,
        numbers = board.cells.numbers,
        HTML = '';
        console.log(numbers)
        for (let y=0; y<board.cells.y; y++){
            HTML += `<div class="row" style="height: ${cellSize}px;">`;
            for(let x=0; x<board.cells.x; x++){
                let letter = letters[x],
                    number = numbers[y];
                 
                
                if(y==0){
                    HTML += `<div class="cell" style="width: ${cellSize}px; height: ${cellSize*0.5}px; margin-top:${cellSize*0.5}px; padding:${((cellSize*0.5)-20)*0.5}px;">${letter}</div>`;  
                }
                else if(y==(board.cells.y-1)){
                    HTML += `<div class="cell" style="width: ${cellSize}px; height: ${cellSize*0.5}px; margin-bottom:${cellSize*0.5}px; padding:${((cellSize*0.5)-20)*0.5}px;">${letter}</div>`;
                }else{
                    if(x==0){
                        HTML += `<div class="cell" style="width: ${cellSize*0.5}px; height: ${cellSize}px; margin-left:${cellSize*0.5}px; padding:${(cellSize-20)*0.5}px 0;">${number}</div>`;
                    }
                    else if(x==(board.cells.x-1)){
                        HTML += `<div class="cell" style="width: ${cellSize*0.5}px; height: ${cellSize}px; margin-right:${cellSize*0.5}px; padding:${(cellSize-20)*0.5}px 0;">${number}</div>`;
                    }else{
                        HTML += `<div class="cell" style="width: ${cellSize}px; height: ${cellSize}px;"></div>`;   
                    }
                }
            }
            HTML += `</div>`;
        }
    return gameBoard.innerHTML = HTML
}
function paintCells(){
    var cellList = document.querySelectorAll('#chess > #board-container > #board > .row > .cell'),
        allCells = Array.from(cellList);
        // allCells[10].classList.add('white');
        // cellList[20].classList.add('white');
    console.log(allCells);
    console.log(allCells.lenght);

    for(var i=0; i<100; i++){
        if (i>10 && i<90){
            if (i % 2 === 0){
                allCells[i].classList.add('white');
            }else{
                allCells[i].classList.add('dark');
            }
        }
    }
    console.log(allCells[10]);
    return
}