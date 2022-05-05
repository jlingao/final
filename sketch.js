let glitch;
let wcglitch;

function preload() {
  mportraits = loadImage('portraits.gif');
  mboards = loadImage('boards.gif');
  wifi = loadImage('wifi.png');
  helix = loadImage('helix.gif');
  ab = loadImage('ab.jpeg');
  retro = loadFont('retro.ttf');
  ofont = loadFont('Orbitron.ttf');
}

function setup() {
    background(0);
	createCanvas(windowWidth,windowHeight);
	imageMode(CENTER);
    frameRate(10);

	glitch = new Glitch();
	loadImage('title.png', function(im){
		glitch.loadImage(im);
	});
    
    wcglitch = new Glitch();
    loadImage('watsoncrick.jpeg', function(im){
        wcglitch.loadImage(im);
    });
  
    hedy = new Glitch();
    loadImage('hedy.jpeg', function(im){
        hedy.loadImage(im);
    });
  
    quote = new Glitch();
    loadImage('quote.png', function(im){
        quote.loadImage(im);
    });
  
}

function draw() {
    background(0);
	glitch.resetBytes();
    
    //title glitch
	glitch.randomBytes(1); // add one random byte for movement
    glitch.limitBytes(0,0.4);
	glitch.buildImage();
	image(glitch.image, width/2, 75);
    
    //wifi pic
    image(wifi, 1000, 350, 600, 300);
  
  
    //watson and crick glitch
	wcglitch.randomBytes(1); // add one random byte for movement
    wcglitch.limitBytes(0,0.4);
    wcglitch.buildImage();
    image(wcglitch.image, 1200,500, 400,400);
    wcglitch.resetBytes();
  
    //bomb image
    image(ab, 1400, 270, 150, 150);
  
  
    //helix
    image(helix, 925, 600, 200, 400);
  
    //hedy lamar
    hedy.randomBytes(1); // add one random byte for movement
    hedy.limitBytes(0,0.4);
    hedy.buildImage();
    image(hedy.image, 550,600, 600,300);
    hedy.resetBytes();
    
    //monopoly boards glitch
    image(mboards, 550, 300, 900,800);
  
    //quote
    quote.randomBytes(1); // add one random byte for movement
    quote.limitBytes(0,0.4);
    quote.buildImage();
    image(quote.image, 650,450, 800,75);
    quote.resetBytes();
  
    fill(255);
    textFont(ofont);
    text("In 1903, Elizabeth Magie Patented the \n board Game: Landlords Game which \n 30 years later was adapted \n and sold by Charles Darrow", 10, 250);
  
    text("In 1951, Rosalind Franklin discovered the \n structure of DNA, for which scientists \n Watson and Crick won a Nobel Prize in 1958", 1420, 400);
  
    text("In 1942, the actress Hedy Lamarr \n and her friend George Antheil \n patented an invention that would later \n form the basis for all wireless \n communication", 10, 500);
  
  text("by Julianne Lingao 2022 \n This work is inspired and named after Cleo \n Abram\'s series \"404 Page Not Found\", in which she explores the hidden stories of \n women in science. These stories seemed best told through glitch art as the\n work of these women has been censored for decades, similar to how technology is\n bounded by the ideas of its producers and can only truly be explored\n through glitch. In his essay on glitch art, Nick Briz notes \"technology is not\n neutral\", and this work further demonstrates that history has never been neutral \n either. This page features the work of 3 women: Hedy Lamarr, Rosalind\n Franklin, and Elizabeth Magie- and attempts to tell the story of the injustices\n they faced.", 1100, 750);

    
}

function keyPressed() {
  fill(255);
  textFont(ofont);
  textSize(20);
  text("In 1903, Elizabeth Magie Patented the board Game \n: Landlords Game which ", 200, 400);
}



