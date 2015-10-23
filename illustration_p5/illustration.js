//illustration.js

//give variables to each image
var backgroundImage;
var smallCloud;
var largeCloud;
var boy;
var leafOne;
var leafTwo;
var leafThree;
var leafFour;
var leafFive;
var leafSix;
var leafSeven;
var leafCrown;
var tree;
var grass;

var largeCloudX = -100;
var smallCloudX = 600;
var leavesFalling = false;
var leavesY = 200;
var crownOn = 300;

//load the images
function preload() {
	backgroundImage = loadImage("images/background.png");
	smallCloud = loadImage("images/smallCloud.png");
	largeCloud = loadImage("images/largeCloud.png");
	boy = loadImage("images/boy.png");
	leafOne = loadImage("images/leafOne.png");
	leafTwo = loadImage("images/leafTwo.png");
	leafThree = loadImage("images/leafThree.png");
	leafFour = loadImage("images/leafFour.png");
	leafFive = loadImage("images/leafFive.png");
	leafSix = loadImage("images/leafSix.png");
	leafSeven = loadImage("images/leafSeven.png");
	leafCrown = loadImage("images/leafCrown.png");
	tree = loadImage("images/tree.png");
	grass = loadImage("images/grass.png");
}

//create a place to draw
function setup() {
	createCanvas(800, 600);
}

function draw() {
	//draw the background
	image(backgroundImage, 0, 0);

	//animate the clouds
	largeCloudX += 0.8;
	if (largeCloudX > 800) {
		largeCloudX = -200;
	}
	image(largeCloud, largeCloudX, 100);

	smallCloudX += 0.5;
	if (smallCloudX > 800) {
		smallCloudX = -200;
	}
	image(smallCloud, smallCloudX, 50);

	//add the tree

	image(tree, 0, 0);

	//make leaves fall when tree is clicked on
	if (mouseIsPressed) {
		if (mouseX < 300) {
			if (mouseY < 245);
			leavesFalling = true;
		}
	}

	if (leavesFalling) {
		image(leafFive, 125, leavesY);
		image(leafOne, 145, leavesY);
		image(leafThree, 160, leavesY);
		image(leafSix, 190, leavesY);
		image(leafSeven, 220, leavesY);

		if (leavesY < 500) {
			leavesY += 0.6;
		}
	}

	//add the grass over the bottom of the tree
	image(grass, 0, 500);

	//insert the character
	image(boy, mouseX - 50, 230);

	//add the leaf crown when you click on the boy's head
	if (mouseIsPressed) {
		// if (mouseY > 313 && mouseY < 326);
		crownOn = true
	}

	if (crownOn) {
		image(leafCrown, mouseX - 20, 220);
	}


}
