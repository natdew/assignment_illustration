// illustration.js

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


// load the images
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

//add the tree, cover up the bottom with grass
//make leaves fall when tree is clicked on

image(tree, 0, 0);
	// if (mouseIsPressed) {
	// image(leafFive, 200, 200);
	// }

	image(grass, 0, 500);

//insert the character
image(boy, mouseX - 50, 230);
	// if (mouseIsPressed){
		// image(leafCrown, );
// }


}
