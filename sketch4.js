var ball={
    x:20,
    y:30,
    r:30,
    xspeed:0,
    yspeed:0,
    colour:["blue","red","green","black"],
};

function draw(){
    background("lightblue")
    circle(ball.x,ball.y,ball.r)
    fill(ball.colour[1])
    ball.xspeed = 1
    ball.x = ball.x+ball.xspeed
    
}