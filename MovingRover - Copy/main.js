canvas=document.getElementById("Canvasofmine");//potato
ctx=canvas.getContext("2d");//potato
rover_width=120;//potato
rover_height=70;//potato
backgroundIMG="racing.jpg";//potato
roverIMG="car1.png"; //potato
rover2IMG="download.png";//potato
ROVERX=10;//potato
ROVERY=10;//potato
ROVERY2=80;//potato
ROVERX2=10;//potato
function add(){
    background_imgTag= new Image();//potato
    background_imgTag.onload = uploadBackground;//potato
    background_imgTag.src=backgroundIMG; //potato

    rover_imgTag= new Image();//potato
    rover_imgTag.onload = uploadrover;//potato
    rover_imgTag.src=roverIMG; //potato

    rover2_imgTag= new Image();//potato
    rover2_imgTag.onload = uploadrover2;//potato
    rover2_imgTag.src=rover2IMG; //potato

}
function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);//potato
}

function uploadrover(){
    ctx.drawImage(rover_imgTag,ROVERX,ROVERY,rover_width,rover_height);//potato
}
function uploadrover2(){
    ctx.drawImage(rover2_imgTag,ROVERX2,ROVERY2,rover_width,rover_height);//potato
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed =='38')
    {
        up();
        console.log("up");
    }
    if(keyPressed =='40')
    {
        down();
        console.log("down");
    }
    if(keyPressed =='37')
    {
        left();
        console.log("left");
    }
    if(keyPressed =='39')
    {
        right();
        console.log("right");
    }
    if(keyPressed =='87')
    {
        up2();
        console.log("up");
    }
    if(keyPressed =='83')
    {
        down2();
        console.log("down");
    }
    if(keyPressed =='65')
    {
        left2();
        console.log("left");
    }
    if(keyPressed =='68')
    {
        right2();
        console.log("right");
    }
}
function up()
{
    if(ROVERY>=0)
    {
        ROVERY= ROVERY-10
        console.log("When up arrow is pressed ="+ROVERX+"-"+ROVERY);
        uploadBackground();
        uploadrover();
        uploadrover2();
    }
}
function down()
{
    if(ROVERY<=500)
    {
        ROVERY= ROVERY+10
        console.log("When up arrow is pressed ="+ROVERX+"-"+ROVERY);
        uploadBackground();
        uploadrover();
        uploadrover2();
    }
}
function left()
{
    if(ROVERX>=0)
    {
        ROVERX= ROVERX-10
        console.log("When up arrow is pressed ="+ROVERX+"-"+ROVERY);
        uploadBackground();
        uploadrover();
        uploadrover2();
    }
}
function right()
{
    if(ROVERX<=700)
    {
        ROVERX= ROVERX+10
        console.log("When up arrow is pressed ="+ROVERX+"-"+ROVERY);
        uploadBackground();
        uploadrover();
        uploadrover2();
    }
}
function up2()
{
    if(ROVERY2>=0)
    {
        ROVERY2= ROVERY2-10
        console.log("When up arrow is pressed ="+ROVERX2+"-"+ROVERY2);
        uploadBackground();
        uploadrover();
        uploadrover2();
    }
}
function down2()
{
    if(ROVERY2<=500)
    {
        ROVERY2= ROVERY2+10
        console.log("When up arrow is pressed ="+ROVERX2+"-"+ROVERY2);
        uploadBackground();
        uploadrover();
        uploadrover2();
    }
}
function left2()
{
    if(ROVERX2>=0)
    {
        ROVERX2= ROVERX2-10
        console.log("When up arrow is pressed ="+ROVERX2+"-"+ROVERY2);
        uploadBackground();
        uploadrover();
        uploadrover2();
    }
}
function right2()
{
    if(ROVERX2<=700)
    {
        ROVERX2= ROVERX2+10
        console.log("When up arrow is pressed ="+ROVERX2+"-"+ROVERY2);
        uploadBackground();
        uploadrover();
        uploadrover2();
    }
}