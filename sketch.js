var road, roadIMG
var boy, boyANIM
var leftwall, rightwall
function preload(){
  //imagens pré-carregadas
  roadIMG = loadImage("path.png")
  boyANIM = loadAnimation("Runner-1.png", "Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui


road = createSprite(200,200)
boy = createSprite(200,300)
road.addImage(roadIMG) 
boy.addAnimation("run", boyANIM) 
boy.scale = 0.1
leftwall = createSprite(2,200,100,400)
rightwall = createSprite(398,200,100,400)
leftwall.visible = false
rightwall.visible = false
}

function draw() {
  background(0);
drawSprites()
boy.x = mouseX
road.velocityY = 5
if (road.y > 400) {
  road.y = 0
}
boy.collide(leftwall)
boy.collide(rightwall)
}
