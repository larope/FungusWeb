const board = document.createElement('board');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");
const img = new Image();

canvas.width = BOARD_SIZE_PX;
canvas.height = BOARD_SIZE_PX;

let positions = [];

var mousePosition = {x: 0, y: 0};

img.src = 'pieces-svg/bishop-b.svg';

img.onload = function() {
    ctx.drawImage(img, 0, 0);
    console.log("OK");
};


function setUpBoard(){
    for(let i = 0; i < BOARD_SIZE; i++) {
        positions[i] = [];
    
        for(let j = 0; j < BOARD_SIZE; j++) {
            positions[i][j] = {
                x:j*CELL_SIZE_PX,
                y:i*CELL_SIZE_PX
            }
    
            if((i+j)%2==0){
                ctx.fillStyle = BLACK_CELL_COLOR;
            }
            else{
                ctx.fillStyle = WHITE_CELL_COLOR;
            }
            ctx.fillRect(i*CELL_SIZE_PX, j*CELL_SIZE_PX, CELL_SIZE_PX, CELL_SIZE_PX);
        }
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
            ctx.fillRect(i*CELL_SIZE_PX, j*CELL_SIZE_PX, CELL_SIZE_PX, CELL_SIZE_PX);
        }
    }
}
function draw(){
    document.getElementById("X").innerHTML = mousePosition.x;
    document.getElementById("Y").innerHTML = mousePosition.y;
    refreshBoard();    
    
    ctx.drawImage(img, 0, 0, CELL_SIZE_PX, CELL_SIZE_PX);
}

function highlightCurrentCell(){
    if(
        mousePosition.x >= 0 && mousePosition.y >= 0 && 
        mousePosition.x < BOARD_SIZE_PX && mousePosition.y < BOARD_SIZE_PX
        ){
            let x = parseInt(mousePosition.x/CELL_SIZE_PX);
            let y = parseInt(mousePosition.y/CELL_SIZE_PX);

            if((x+y)%2==1){
                ctx.fillStyle = BLACK_CELL_COLOR_HIGHLIGHTED;
            }
            else{
                ctx.fillStyle = WHITE_CELL_COLOR_HIGHLIGHTED;
            }

            ctx.fillRect(x*CELL_SIZE_PX, y*CELL_SIZE_PX, CELL_SIZE_PX, CELL_SIZE_PX);
    }
}
document.addEventListener('mousemove', (event) => {
    mousePosition = getMousePos(canvas, event);

});

function getMousePos(canvas, event) {
    const rect = canvas.getBoundingClientRect();
    return {
        x: parseInt(event.clientX - rect.left),
        y: parseInt(event.clientY - rect.top)
    };
}