//acho que esta tudo certo mas fica em um loading infinito
var starImg,bgImg;
var star, starBody;
//criar variável para sprite de fada e imgFada
var fada,anmfada,vozfada;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    //carregar animação de fada 
    anmfada = loadAnimation("fairy.png","fairyimage1.png","fairyimage2.png");
    vozfada = loadSound("joyMusic.mp3");
}

function setup() {
    createCanvas(800, 750);

    //escrever código para tocar o som vozFada
    vozfada.play();


    //criar sprite de fada e adicionar animação para fada
    fada = createSprite(100,650,40,40);
    fada.addAnimation(anmfada);


    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}
function draw(){
if(keyIsPressed("left")){
    fada.x=fada.x-20;
}

drawsprites();
}
