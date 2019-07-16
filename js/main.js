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
        },
        figures = [
            // white team
            {
                x:1,
                y:1,
                name: 'rook',
                team: 'white',
                img: 'light.rook.png'
            },
            {
                x:2,
                y:1,
                name: 'knight',
                team: 'white',
                img: 'light.knight.png'
            },
            {
                x:3,
                y:1,
                name: 'bishop',
                team: 'white',
                img: 'light.bishop.png'
            },
            {
                x:4,
                y:1,
                name: 'king',
                team: 'white',
                img: 'light.king.png'
            },
            {
                x:5,
                y:1,
                name: 'queen',
                team: 'white',
                img: 'light.queen.png'
            },
            {
                x:6,
                y:1,
                name: 'bishop',
                team: 'white',
                img: 'light.bishop.png'
            },
            {
                x:7,
                y:1,
                name: 'knight',
                team: 'white',
                img: 'light.knight_r.png'
            },
            {
                x:8,
                y:1,
                name: 'rook',
                team: 'white',
                img: 'light.rook.png'
            },
            {
                x:1,
                y:2,
                name: 'pawn',
                team: 'white',
                img: 'light.pawn.png'
            },
            {
                x:2,
                y:2,
                name: 'pawn',
                team: 'white',
                img: 'light.pawn.png'
            },
            {
                x:3,
                y:2,
                name: 'pawn',
                team: 'white',
                img: 'light.pawn.png'
            },
            {
                x:4,
                y:2,
                name: 'pawn',
                team: 'white',
                img: 'light.pawn.png'
            },
            {
                x:5,
                y:2,
                name: 'pawn',
                team: 'white',
                img: 'light.pawn.png'
            },
            {
                x:6,
                y:2,
                name: 'pawn',
                team: 'white',
                img: 'light.pawn.png'
            },
            {
                x:7,
                y:2,
                name: 'pawn',
                team: 'white',
                img: 'light.pawn.png'
            },
            {
                x:8,
                y:2,
                name: 'pawn',
                team: 'white',
                img: 'light.pawn.png'
            },
            // dark team
            {
                x:1,
                y:8,
                name: 'rook',
                team: 'dark',
                img: 'dark.rook.png'
            },
            {
                x:2,
                y:8,
                name: 'knight',
                team: 'dark',
                img: 'dark.knight_l.png'
            },
            {
                x:3,
                y:8,
                name: 'bishop',
                team: 'dark',
                img: 'dark.bishop.png'
            },
            {
                x:4,
                y:8,
                name: 'king',
                team: 'dark',
                img: 'dark.king.png'
            },
            {
                x:5,
                y:8,
                name: 'queen',
                team: 'dark',
                img: 'dark.queen.png'
            },
            {
                x:6,
                y:8,
                name: 'bishop',
                team: 'dark',
                img: 'dark.bishop.png'
            },
            {
                x:7,
                y:8,
                name: 'knight',
                team: 'dark',
                img: 'dark.knight_r.png'
            },
            {
                x:8,
                y:8,
                name: 'rook',
                team: 'dark',
                img: 'dark.rook.png'
            },
            {
                x:1,
                y:7,
                name: 'pawn',
                team: 'dark',
                img: 'dark.pawn.png'
            },
            {
                x:2,
                y:7,
                name: 'pawn',
                team: 'dark',
                img: 'dark.pawn.png'
            },
            {
                x:3,
                y:7,
                name: 'pawn',
                team: 'dark',
                img: 'dark.pawn.png'
            },
            {
                x:4,
                y:7,
                name: 'pawn',
                team: 'dark',
                img: 'dark.pawn.png'
            },
            {
                x:5,
                y:7,
                name: 'pawn',
                team: 'dark',
                img: 'dark.pawn.png'
            },
            {
                x:6,
                y:7,
                name: 'pawn',
                team: 'dark',
                img: 'dark.pawn.png'
            },
            {
                x:7,
                y:7,
                name: 'pawn',
                team: 'dark',
                img: 'dark.pawn.png'
            },
            {
                x:8,
                y:7,
                name: 'pawn',
                team: 'dark',
                img: 'dark.pawn.png'
            }
        ];
    var game = document.querySelector('#chess'),
            boardContainer = game.querySelector('#board-container'),
                gameBoard = boardContainer.querySelector('#board'),
                playBoard = boardContainer.querySelector('#play_board'),
                gameInfo = game.querySelector('#info');
        board.size.width = parseInt( getComputedStyle( game ).width );
        board.size.height = parseInt( getComputedStyle( game ).height );
        
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

        playBoard.style.height = board.cells.y * cellSize + 'px';
        // playBoard.style.width = Math.floor(((board.cells.x * cellSize) * 100) / board.size.width) + '%';
        playBoard.style.width = board.cells.x * cellSize + 'px';
        playBoard.style.padding = cellSize + 'px';
        console.log(playBoard.style.width);
        
        
        gameInfo.style.width = (board.size.width - (board.cells.x * cellSize)) + 'px';
        // gameInfo.style.width = (100 - Math.floor(((board.cells.x * cellSize) * 100) / board.size.width)) + '%';
        gameInfo.style.height = gameBoard.style.height;

        drawBoardCells();
        paintCells();
        lay_out_figures()
}
function drawBoardCells(){
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
                        HTML += `<div class="cell" style="  width: ${cellSize*0.5}px; 
                                                            height: ${cellSize*0.5}px; 
                                                            margin-top:${cellSize*0.5}px; 
                                                            margin-left:${cellSize*0.5}px; 
                                                            padding:${((cellSize*0.5)-20)*0.5}px; 
                                                            border:none; 
                                                            background-color:var(--dim_gray); 
                                                            border-radius:15px 0 0 0;">${letter}</div>`;
                    }
                    else if(x==(board.cells.x-1)){
                        HTML += `<div class="cell" style="  width: ${cellSize*0.5}px; 
                                                            height: ${cellSize*0.5}px; 
                                                            margin-top:${cellSize*0.5}px; 
                                                            padding:${((cellSize*0.5)-20)*0.5}px; 
                                                            border:none; 
                                                            background-color:var(--dim_gray);
                                                            border-radius:0 15px 0 0;">${letter}</div>`;
                    }else{
                        HTML += `<div class="cell" style="  width: ${cellSize}px; 
                                                            height: ${cellSize*0.5}px; 
                                                            margin-top:${cellSize*0.5}px; 
                                                            padding:${((cellSize*0.5)-20)*0.5}px;
                                                            border:none; 
                                                            background-color:var(--dim_gray);
                                                            transform: rotate(180deg);">${letter}</div>`;  
                    }
                }
                else if(y==(board.cells.y-1)){
                    if(x==0){
                        HTML += `<div class="cell" style="  width: ${cellSize*0.5}px; 
                                                            height: ${cellSize*0.5}px; 
                                                            margin-bottom:${cellSize*0.5}px; 
                                                            margin-left:${cellSize*0.5}px; 
                                                            padding:${((cellSize*0.5)-20)*0.5}px; 
                                                            border:none; 
                                                            background-color:var(--dim_gray); 
                                                            border-radius: 0 0 0 15px;">${letter}</div>`;
                    }
                    else if(x==(board.cells.x-1)){
                        HTML += `<div class="cell" style="  width: ${cellSize*0.5}px; 
                                                            height: ${cellSize*0.5}px; 
                                                            margin-bottom:${cellSize*0.5}px; 
                                                            padding:${((cellSize*0.5)-20)*0.5}px; 
                                                            border:none; 
                                                            background-color:var(--dim_gray); 
                                                            border-radius: 0 0 15px 0;">${letter}</div>`;
                    }else{
                        HTML += `<div class="cell" style="  width: ${cellSize}px; 
                                                            height: ${cellSize*0.5}px; 
                                                            margin-bottom:${cellSize*0.5}px; 
                                                            padding:${((cellSize*0.5)-20)*0.5}px;
                                                            border:none; 
                                                            background-color:var(--dim_gray);">${letter}</div>`;
                    }
                }else{
                    if(x==0){
                        HTML += `<div class="cell" style="  width: ${cellSize*0.5}px; 
                                                            height: ${cellSize}px; 
                                                            margin-left:${cellSize*0.5}px; 
                                                            padding:${(cellSize-20)*0.5}px 0;
                                                            border:none; 
                                                            background-color:var(--dim_gray);">${number}</div>`;
                    }
                    else if(x==(board.cells.x-1)){
                        HTML += `<div class="cell" style="  width: ${cellSize*0.5}px; 
                                                            height: ${cellSize}px; 
                                                            margin-right:${cellSize*0.5}px; 
                                                            padding:${(cellSize-20)*0.5}px 0;
                                                            border:none; 
                                                            background-color:var(--dim_gray);
                                                            transform: rotate(180deg);">${number}</div>`;
                    }else{
                        HTML += `<div class="cell" style="  width: ${cellSize}px; 
                                                            height: ${cellSize}px;"></div>`;   
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
function lay_out_figures(){
    let cellSize = board.cells.cellSize,
        HTML = '',
        boardCellCount = 32;
            for (let i = 0; i < boardCellCount; i++){
                var x = (figures[i].x)*cellSize,
                    y = (figures[i].y)*cellSize,
                    img = figures[i].img;

                HTML += `<div class="cell" style="width: ${cellSize}px; height: ${cellSize}px; top:${y}px; left:${x}px; background-image: url(../img/figures/${img});"></div>`;   
            }
        
    return playBoard.innerHTML = HTML
}

function figure_click(event){
    var cellSize = board.cells.cellSize,
        raides = ['A','B','C','D','E','F','G','H'],
        a = event.target.style.backgroundImage.slice(20),
        name = (a.slice(0,a.length-6)).slice(((a.slice(0,a.length-6)).indexOf('.'))+1),
        team = (a.slice(0,a.length-6)).slice(0,((a.slice(0,a.length-6)).indexOf('.'))),
        y = event.target.offsetTop/cellSize,
        x = raides[event.target.offsetLeft/cellSize -1],
        coordinates = x+y;
        
        // if( team == 'light'){

        // }
        // namePlace = document.querySelector(`#history > .team > .figure_name`),
        // currentPositionPlace = document.querySelector(`#history > .team > .current_position`);

console.log('top = '+y);
console.log('left = '+x);
console.log('team = '+team);
console.log('name = '+name);
console.log(coordinates);
    
    return; 
}
var all_figures = playBoard.querySelectorAll('.cell');
    all_figures.forEach(figure => {
        figure.addEventListener( 'click', figure_click );
    });
