
leftWristX=0;
rightWristX=0;
difference=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

}
function draw(){
    background("#8ae647");
    textSize(difference);
    fill("#3e5ae3");
    text('Aryan',50,400);
}
function modelLoaded(){
    console.log("poseNet is initialized");
}
function gotPoses(results){
if(results.length>0)
{
    console.log(results);
    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    difference=floor(leftWristX-rightWristX);
    console.log("leftwristX = " + leftWristX + "rightwristX = "+ rightWristX + "difference =" + difference);
}
}