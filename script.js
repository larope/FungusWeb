let mousePressed = false;
let mouseReleased = true;

let w_king = new Piece(0,0,'king',king_white_img);
let b_pawn = new Piece(3,4,'pawn',pawn_black_img);

let pieces = [];
let board = [];

pieces.push(w_king);
pieces.push(b_pawn);

function setUpBoard(){
    for(let i = 0; i < BOARD_SIZE; i++){
        for(let j = 0; j < BOARD_SIZE; j++){
            board[i][j] = null;
        }
    }
}

function refreshBoard(){
    for(let piece in pieces){
        board
    }
}

function refreshBoard(){
    for(let i = 0; i < BOARD_SIZE; i++) {
        for(let j = 0; j < BOARD_SIZE; j++) {
            if((i+j)%2==1){
                ctx.fillStyle = BLACK_CELL_COLOR;
            }
            else{
                ctx.fillStyle = WHITE_CELL_COLOR;
            }
            ctx.fillRect(OFFSET_PX+i*CELL_SIZE_PX, OFFSET_PX+j*CELL_SIZE_PX, CELL_SIZE_PX, CELL_SIZE_PX);
        }
    }
}

function draw(){
    ctx.fillStyle = '#003049';
    ctx.fillRect(0,0,BOARD_SIZE_PX+2*BOARD_SIZE_PX/BOARD_SIZE,BOARD_SIZE_PX+2*BOARD_SIZE_PX/BOARD_SIZE);
    refreshBoard();    
    highlightCurrentCell();

    for(let piece in pieces){
        ctx.drawImage(pieces[piece].img, pieces[piece].x*CELL_SIZE_PX+OFFSET_PX, pieces[piece].x*CELL_SIZE_PX+OFFSET_PX, CELL_SIZE_PX, CELL_SIZE_PX);
    }

    
}

function getCurrentCell(){
    if(
        mousePosition.x >= OFFSET_PX && mousePosition.y >= OFFSET_PX && 
        mousePosition.x < OFFSET_PX+BOARD_SIZE_PX && mousePosition.y <OFFSET_PX+BOARD_SIZE_PX
        ){
            let x = parseInt(mousePosition.x/CELL_SIZE_PX);
            let y = parseInt(mousePosition.y/CELL_SIZE_PX);
            
            return {x: x, y: y};
        }
    return null;
}
function highlightCurrentCell(){
    let currentCell = getCurrentCell();

    if(currentCell == null){
        return;
    }

    if((currentCell.x+currentCell.y)%2==1){
        ctx.fillStyle = BLACK_CELL_COLOR_HIGHLIGHTED;
    }
    else{
        ctx.fillStyle = WHITE_CELL_COLOR_HIGHLIGHTED;
    }

    ctx.fillRect(currentCell.x*CELL_SIZE_PX, currentCell.y*CELL_SIZE_PX, CELL_SIZE_PX, CELL_SIZE_PX);
}



function getMousePos(canvas, event) {
    const rect = canvas.getBoundingClientRect();
    return {
        x: parseInt(event.clientX - rect.left),
        y: parseInt(event.clientY - rect.top)
    };
}

function onMouseMove(){
    mousePosition = getMousePos(canvas, event);
    document.getElementById('mouse-pos').innerHTML = getCurrentCell().x + " : " + getCurrentCell().y;
}

function onMouseDown(event) {
    console.log("onMouseDown");

    if(getCurrentCell() != null){
        
    }

    mousePressed = true;
    mouseReleased = false;
}

function onMouseUp(event) {
    console.log("onMouseUp");

    mousePressed = false;
    mouseReleased = true;
}
