smithereens = "";
semi_automatic = "";

function preload(){
    smithereens = loadSound("smithereens.mp3");
    semi_automatic = loadSound("semi-automatic.mp3");
}

function setup(){
    canvas = createCanvas(800,600);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    image(video,0,0,800,600);
}

rightWristX = "0";
rightWristY = "0";
leftWristX = "0";
leftWristY = "0";

function modelLoaded(){
    console.log("modelLoaded")
}

function gotPoses(results){
        console.log(results);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
}