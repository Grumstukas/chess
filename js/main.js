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
            },
            allBoard:[],
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
        if(maxCellWidth%2!==0){
            maxCellWidth = maxCellWidth-1;
        }
        if(maxCellHeight%2!==0){
            maxCellHeight = maxCellHeight-1;
        }       

        board.cells.cellSize = maxCellWidth;  //nežinomas langelio dydis keičiamas maksimaliu langelio pločiu
        // cellSize = maxCellWidth; //ir tai pervadinama cellSize
        if(maxCellWidth > maxCellHeight){ //jeigu plotis daugiau už aukštį
            board.cells.cellSize = maxCellHeight; //nežinomas langelio dydis keičiamas maksimaliu langelio aukščiu
        }
        cellSize = board.cells.cellSize;
        // if (cellSize%2!=0){
        //     cellSize = board.cells.cellSize-1;
        // }
        

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
                    if(x==0){
                        HTML += `<div class="cell" style="width: ${cellSize*0.5}px; height: ${cellSize*0.5}px; margin-top:${cellSize*0.5}px; margin-left:${cellSize*0.5}px; padding:${((cellSize*0.5)-20)*0.5}px; border:none; background-color:var(--dim_gray); border-radius:15px 0 0 0;'">${letter}</div>`;
                    }
                    else if(x==(board.cells.x-1)){
                        HTML += `<div class="cell" style="width: ${cellSize*0.5}px; height: ${cellSize*0.5}px; margin-top:${cellSize*0.5}px; padding:${((cellSize*0.5)-20)*0.5}px; border:none; background-color:var(--dim_gray);border-radius:0 15px 0 0;">${letter}</div>`;
                    }else{
                        HTML += `<div class="cell" style="width: ${cellSize}px; height: ${cellSize*0.5}px; margin-top:${cellSize*0.5}px; padding:${((cellSize*0.5)-20)*0.5}px;border:none; background-color:var(--dim_gray);transform: rotate(180deg);">${letter}</div>`;  
                    }
                }
                else if(y==(board.cells.y-1)){
                    if(x==0){
                        HTML += `<div class="cell" style="width: ${cellSize*0.5}px; height: ${cellSize*0.5}px; margin-bottom:${cellSize*0.5}px; margin-left:${cellSize*0.5}px; padding:${((cellSize*0.5)-20)*0.5}px; border:none; background-color:var(--dim_gray); border-radius: 0 0 0 15px;">${letter}</div>`;
                    }
                    else if(x==(board.cells.x-1)){
                        HTML += `<div class="cell" style="width: ${cellSize*0.5}px; height: ${cellSize*0.5}px; margin-bottom:${cellSize*0.5}px; padding:${((cellSize*0.5)-20)*0.5}px; border:none; background-color:var(--dim_gray); border-radius: 0 0 15px 0;">${letter}</div>`;
                    }else{
                        HTML += `<div class="cell" style="width: ${cellSize}px; height: ${cellSize*0.5}px; margin-bottom:${cellSize*0.5}px; padding:${((cellSize*0.5)-20)*0.5}px;border:none; background-color:var(--dim_gray);">${letter}</div>`;
                    }
                }else{
                    if(x==0){
                        HTML += `<div class="cell" style="width: ${cellSize*0.5}px; height: ${cellSize}px; margin-left:${cellSize*0.5}px; padding:${(cellSize-20)*0.5}px 0;border:none; background-color:var(--dim_gray);">${number}</div>`;
                    }
                    else if(x==(board.cells.x-1)){
                        HTML += `<div class="cell" style="width: ${cellSize*0.5}px; height: ${cellSize}px; margin-right:${cellSize*0.5}px; padding:${(cellSize-20)*0.5}px 0;border:none; background-color:var(--dim_gray);transform: rotate(180deg);">${number}</div>`;
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
    var cellList = boardContainer.querySelectorAll('#chess > #board-container > #board > .row > .cell'),
        cellsCount = board.cells.x * board.cells.y;
    
    for (let y=0; y<board.cells.y-1; y++){
        if (y == 0 || y == board.cells.y){
            continue;
        }
        if( y % 2==0 ){
            for(let x=0; x<board.cells.x-1; x++){
                if (x == board.cells.x || x == 0){
                    continue;
                }
                if ( x % 2 ==0 ){
                    cellList[x+(10*y)].classList.add('white');
                }
                if ( x % 2 !=0 ){
                    cellList[x+(10*y)].classList.add('dark');
                }
            }
        }
        if( y % 2!==0 ){
            for(let x=1; x<board.cells.x-1; x++){
                if (x == board.cells.x || x == 0){
                    continue;
                }
                if ( x % 2 !==0 ){
                    cellList[x+(10*y)].classList.add('white');
                }
                if ( x % 2 ==0 ){
                    cellList[x+(10*y)].classList.add('dark');
                }
            }
        }
    }
    return
}