song = "";

function preload()
{
    song = loadSound("mp_3.mp3");
}

function setup()
{
    canvas = createCanvas(600,500);
    canvas.centre();
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
image(video, 0, 0, 600,500);
}

function play()
{
    song.play();
}