difference = 0;
leftwristx = 0;
rightwristx = 0;
noseX = 0;
noseY = 0;
function setup()
{
video = createCapture(VIDEO);
video.size(550, 500);

canvas = createCanvas(550, 420);
canvas.position(560,90);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
console.log('PoseNet Is Initialized!');
}

function draw()
{
background('#b1c4ba')
document.getElementById("square_side").innerHTML = "width & height of a square are = " + difference + "px"
fill('#7dc1e8')
strokeWeight(5)
stroke(color(random(0,255), random(0,255), random(0,255)))
square(noseX, noseY, difference);
fill('#4da58e')
circle(noseX, noseY, difference);
fill('#6e5493')
textSize(difference);
text("Jahnvi", noseX, noseY);
}

function gotPoses(results)
{
if(results.length > 0)
{
console.log(results);
leftwristx = results[0].pose.leftWrist.x
rightwristx = results[0].pose.rightWrist.x
difference = floor(leftwristx - rightwristx)
noseX = results[0].pose.nose.x
noseY = results[0].pose.nose.y 
}
}