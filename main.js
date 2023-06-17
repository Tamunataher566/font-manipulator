difference=0
nosex=0
nosey=0
leftwristx=0
rightwristx=0
function setup(){
canvas=createCanvas(550,550)
canvas.position(560,150)
video=createCapture(VIDEO)
video.size(550,550)

posenet=ml5.poseNet(video,modeloaded)
posenet.on('pose',gotposes)


}
function modeloaded(){
console.log("poseNet is initialized")

}
function gotposes(result){
if(
    result.length>0
    
)
{
    console.log(result)
    nosex= result[0].pose.nose.x
    nosey= result[0].pose.nose.y
    console.log("nosex="+nosex+ "nosey"+nosey) 
    leftwristx= result[0].pose.leftWrist.x
    rightwristx= result[0].pose.rightWrist.x
difference=floor(leftwristx-rightwristx)
    
}

}
function draw(){
    background("purple")
fill("white")    
stroke("white")
text("TAHER", nosex , nosey )
textSize(difference)
document.getElementById("square").innerHTML="font size will be  "+difference+" px"

}

