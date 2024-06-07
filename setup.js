const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");
const boardDiv = document.createElement('board');

canvas.width = BOARD_SIZE_PX+2*BOARD_SIZE_PX/BOARD_SIZE;
canvas.height = BOARD_SIZE_PX+2*BOARD_SIZE_PX/BOARD_SIZE;

var mousePosition = {x: 0, y: 0};

var draw = function(){

}

var onMouseMove = function(event){
    
}

var onMouseDown = function(){

}

var onMouseUp = function(){
    
}

setInterval(function() { 
    draw();
}, DRAW_INTERVAL); 

document.addEventListener('mousemove', (event) => {onMouseMove(event);});
document.addEventListener('mousedown', onMouseDown);
document.addEventListener('mouseup', onMouseUp);
