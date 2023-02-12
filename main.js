

difference = 0;
function preload(){
classifier = ml5.imageClassifier('poseNet');
}
function setup(){
canvas = createCanvas(550, 550);
canvas.position(790, 100);
video = createCapture(VIDEO);
video.size(550, 500);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('poseNet is loaded');
}
function gotPoses(result){
    if(result.length > 0){
        leftWristX = result[0].pose.leftWrist.x;
        rightWristX = result[0].pose.rightWrist.x;
        difference = Math.floor(leftWristX - rightWristX);
    }
}
function draw(){
    background('lime');
    textSize(difference); 
    fill('white');
    text('Daniyal', 50, 400);
            
}    