
//game constant
let inputDir={x:0,y:0};
let speed=2;
let score=0;
let lastpainttime=0;
let snakearr=[
    {x:13,y:15}
]

//now i have to make object of food of snake
food={x:6,y:7};

//now we have to make a function  of game :
function main(currenttime){
     window.requestAnimationFrame(main);//repeat again and again
     
     //console.log(currenttime)
     if((currenttime-lastpainttime)/1000<1/speed){
        return;
     }
     lastpainttime=currenttime;
     gameEngine();

}
function isCollide(snake){
    //snake  bump into yourself snake 
for(let i=1;i<snakearr.length;i++){
    
if(snake[i].x ===snake[0].x && snake[i].y===snake[0].y){
        return true;
    }
}
    
    //if snake bump into itself and if they can go with outside the boundary so game over 
    if(snake[0].x>=18 || snake[0].x<=0 || snake[0].y>=18 || snake[0].y<=0 ){
return true;
    }
}

//display the snake and we have to see the snake position
function gameEngine(){
    //updating the snake array and food 
if(isCollide(snakearr)){
    inputDir={x:0,y:0}
    alert("game  over ,press any key to play again");
    snakearr=[{x:13,y:15}];
     score=0;
}
//if snake  have eaten the food ,increament the score and regenreate the food 
if(snakearr[0].y === food.y && snakearr[0].x === food.x){
//new element made means if snake can eaten the food so you have to put hte food in x and y direction
score +=1;
//now we have to set the innerhtml of scrore 
scorebox.innerHTML="score:" + score
//unshift is used for add elements in begining and gives new array

snakearr.unshift({x: snakearr[0].x + inputDir.x, y: snakearr[0].y + inputDir.y});
let a=2;
let b=16;
food={x:Math.round(a + (b-a)* Math.random()),y: Math.round(a + (b-a)*Math.random())}

//when snake can eat food so we update that location and math.random() is used for the generate random food

}
//moving the snake : when it can be eaten food so move to direction of x and y direction 


for(let i=snakearr.length - 2;  i>= 0; i--){
    snakearr[i+1]={...snakearr[i]};
}
snakearr[0].x += inputDir.x;
snakearr[0].y += inputDir.y;

//display the snake 

board.innerHTML="";
snakearr.forEach((e,index)=>{
    snakeElement=document.createElement('div');
    snakeElement.style.gridRowStart=e.y;
        snakeElement.style.gridColumnStart=e.x;
//we made an element so im adding class becoz we have to put css
if(index===0){
    snakeElement.classList.add('head');

}
else{

    snakeElement.classList.add('snake');
}
//inside the board we add each element and we appended it 
     board.appendChild(snakeElement);//we have to display the snake in purple color
});

//food is not a array  we have to make an object x:13 and y:15 food particle we made
foodElement=document.createElement('div');
foodElement.style.gridRowStart=food.y;
    foodElement.style.gridColumnStart=food.x;
 foodElement.classList.add('food')
board.appendChild(foodElement)
}
//here the logic is:

 window.requestAnimationFrame(main);
 window.addEventListener('keydown',e=>{
//addeventlistner has two agruments one is a argument and second is arrow function

//when we press any of key then that of method can fire and snake starts moving

inputDir={x:0,y:1}//snake move starty=1 
//if we press arrow key so event can say what type of key can press by the user and if anyone can be 
//press any of key so that of event can be listen
switch(e.key){
    //e for event 
    case "ArrowUp":
    console.log("ArrowUp")
 inputDir.x=0;
    inputDir.y=-1;

    break;

    case "ArrowDown":
        console.log("ArrowDown")
        inputDir.x=0;
        inputDir.y=1;
        break;

        case "ArrowLeft":
            console.log("ArrowLeft")
            inputDir.x=-1;
            inputDir.y=0;
            //we have to subtract -1 becuase snak can move in x and y direction and snake distancde travelled
            //so we have to subtract -1 then snake can go with upper direction 
            break;

            case "ArrowRight":
                console.log("ArrowRight")
                inputDir.x=1;
                inputDir.y=0;//horizontally move snake then value is as it is 
                break;
   default:
                    break;
}
 });

