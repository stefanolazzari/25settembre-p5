let posX = 0;
let posY = 0;
let diametro = 20;
 
    function setup(){
        createCanvas(400,300);
        background(255,0,0);
    }



    function draw(){
        // noStroke();
        // fill(255,120);
        // circle(mouseX,mouseY,20); 
        noStroke();
        circle(posX+10, posY+10, diametro);
        posX = posX + 1;

    }


    // 