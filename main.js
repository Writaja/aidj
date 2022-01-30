song="";
scoreLeftWrist=0;
function preload(){
song=loadSound("music.mp3");
}

function setup(){
canvas= createCanvas(600,500);
canvas.center();
video=createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video,modelloaded);
poseNet.on("pose",gotposes);

}
function draw(){
    image(video,0,0,600,500);
}
function modelloaded(){
    console.log("poseNet");
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
    leftWristY=results[0].pose.leftWrist.y;
    rightWristX=results[0].pose.rightWrist.x;
    rightWristY=results[0].pose.rightWrist.y;
    console.log("leftWristX= "+leftWristX+"leftWristY= "+leftWristY);
    console.log("rightWristX= "+rightWristX+"rightWristY= "+rightWristY);
}
}