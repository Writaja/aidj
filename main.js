leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
song="";
scoreLeftWrist=0;
scoreRightWrist=0;
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
    fill("#ff0000");
    stroke("#ff0000");
    if(scoreRightWrist>0.2){
    circle(rightWristX,rightWristY,20);

if(rightWristY>0 && rightWristY<=100){
document.getElementById("speed_txt").innerHTML="speed = 0.5x";
song.rate(0.5);

}
else if(rightWristY>100 && rightWristY<=200){
    document.getElementById("speed_txt").innerHTML="speed = 1x";
    song.rate(1);
    
}
else if(rightWristY>200 && rightWristY<=300){
    document.getElementById("speed_txt").innerHTML="speed = 1.5x";
    song.rate(1.5);
    
}
else if(rightWristY>300 && rightWristY<=400){
    document.getElementById("speed_txt").innerHTML="speed = 2x";
    song.rate(2);
    
}
else if(rightWristY>400 && rightWristY<=500){
    document.getElementById("speed_txt").innerHTML="speed = 2.5x";
    song.rate(2.5);
    
}

    }
    
if(scoreLeftWrist>0.2){
    circle(leftWristX,leftWristY,20);
    inNumberLeftWrist=Number(leftWristY);
    remove_decimals=floor(inNumberLeftWrist);
    volume=remove_decimals/500;
    document.getElementById("volume_txt").innerHTML="volume = "+volume;
    song.setVolume(volume);
}
    
}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
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
scoreLeftWrist=results[0].pose.keypoints[9].score;
console.log("scoreLeftWrist= " + scoreLeftWrist);

scoreRightWrist=results[0].pose.keypoints[10].score;
console.log("scoreRightWrist= " + scoreRightWrist);

    }
}
