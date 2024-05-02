//Relaxing music while watching the Generative Art

// list of websites I formed my idea for:

//this is the number one inspitation but wanted "more" https://editor.p5js.org/tz1440/sketches/BSxNSEDXo

//https://p5js.org/examples/simulate-particles.html

//watched a lot of this guys videos not as talented as him but picked up a few tip.I will watch more as I go along.  https://www.youtube.com/@StevesMakerspace

//https://github.com/processing/p5.js/wiki/JavaScript-basics

//installed p5.vscode extension and p5js Snippets a Live Server extension for project



let particles = [];
let numberOfParticles = 150;
let colors = [];
let colorPalettes = [
    ['#FFC0CB', '#FF69B4', '#FF1493'], // Pink values
    ['#00FFFF', '#7FFFD4', '#008B8B'], // Aqua values
    ['#FFD700', '#FFA500', '#FF8C00'], // Gold values
    ['#8A2BE2', '#9400D3', '#9932CC'], // Purple values
    ['#FF6347', '#FF4500', '#FF7F50'], // Coral values
    ['#00FF00', '#32CD32', '#228B22'], // Lime values
    ['#FFFF00', '#FFD700', '#FFA500'], // Yellow values
    ['#87CEEB', '#ADD8E6', '#B0E0E6'], // Sky Blue values
    ['#8FBC8F', '#3CB371', '#2E8B57']  // Sea Green values
];

let playlist = ["cinematic-documentary-115669.mp3", "forest-lullaby-110624.mp3", "perfect-beauty-191271.mp3", "relaxing-145038.mp3", "separation-185196.mp3", "please-calm-my-mind-125566.mp3", "just-relax-11157.mp3"];
let currentSongIndex = Math.floor(Math.random() * playlist.length);// Chooses a random index within  playlist array.
// Math.random() generates a random floating-point number between 0 and 1.
// Multiply Math.random() by the length of the playlist array to get a random number within the range of the play list array.
// Math.floor() rounds down the result to the nearest integer, ensuring it's a valid array index.
// This gives us a random index to select a song from the playlist.
//refrence sites:  https://www.codecademy.com/forum_questions/5020be4d3a51800002015ebe  and  https://stackoverflow.com/questions/43267033/understanding-the-use-of-math-floor-when-randomly-accessing-an-array

// these are all kind of self explanatory
let songs;
let isSongStarted = false;
let volumeSlider;
let controlButton;
let skipButton;
let refreshTimer;

function preload() {

    // Load the song before setup
    songs = loadSound(playlist[currentSongIndex]);

    songs.onended(() => {
        playNextSong();//stillnotplaying next song automatically??? not sure how to fix.
    });
}


function setup() {
    createCanvas(windowWidth, windowHeight);// fill the wholescreen
    background(0);

    generateColors();
    for (let i = 0; i < numberOfParticles; i++) {  // Loop through 'numberOfParticles'  to create particles
        particles.push(new Particle(random(width), random(height)));  // Create a new Particle object and push it into the 'particles' array
        //push adds each new Particle in the particles array, buildingon them or multiplying I think? It was coolso I kept it...
    }
    
    controlButton = createButton('Start Song'); // 
    controlButton.position(10, 10);
    controlButton.mousePressed(toggleAudio);

    skipButton = createButton('Skip Song'); //Buttons!
    skipButton.position(110, 10)
    skipButton.mousePressed(playNextSong);

//https://stackoverflow.com/questions/60062079/how-could-i-style-a-slider-created-through-the-createbutton-function-in-p5-js-us
    volumeSlider = createSlider(0, 1, getVolumeFromLocalStorage(), 0.01);
    volumeSlider.position(10, 50);
    // Set the color of the volume slider to blue
    volumeSlider.style('background-color', '#007bff');

    // Start the song automatically
    toggleAudio();

    refreshTimer = setTimeout(refreshPage, 300000);//Timeout with page refresh  5 minute
}
//button functions

function toggleAudio() {
    if (!isSongStarted) {
        // If the song is stopped, start it
        songs.loop();
        controlButton.html('Stop Music');
        isSongStarted = true;
    } else {
        // If the song is playing, stop it
        songs.stop();
        controlButton.html('Play Music');
        isSongStarted = false;
    }
}

function playNextSong() {
    // Play the next song in the playlist
    //https://www.shecodes.io/athena/54957-what-is-the-length-property-in-javascript and //https://2ality.com/2018/12/creating-arrays.html
    currentSongIndex = (currentSongIndex + 1) % playlist.length;// was having issues with song not returning and found this code in stackflow but still amhaving issues with it plying next song in playlist array.
    songs.stop();
    songs = loadSound(playlist[currentSongIndex], () => {
        if (isSongStarted) {
           songs.loop();
        }
    });
}

function refreshPage() {
    // Refresh the page
    location.reload();
}

function draw() {
    // Set the volume of the song
    songs.setVolume(volumeSlider.value());
    // Save the volume to local storage

    //https://stackoverflow.com/questions/71007637/localstorage-values-resetting-after-refresh-and-localstorage-is-not-defined
    saveVolumeToLocalStorage(volumeSlider.value());

    // Update and display particles
    for (let particle of particles) {
        particle.update();
        particle.display();
    }
}

function generateColors() {
    // Generate colors for particles
    colors = colorPalettes[Math.floor(random(colorPalettes.length))];
}

function getVolumeFromLocalStorage() {
    // Get the saved volume from local storage, or use a default value
    let savedVolume = localStorage.getItem('volume');
    return savedVolume ? parseFloat(savedVolume) : 0.5;// allows the volume setting to bertrieved from local storage if it exists, or it falls back to a default 0.5 if there's no stored volume or if the stored volume is not a valid number.
//https://www.geeksforgeeks.org/javascript-number-parsefloat-method/ usedtokeep volume at same level at refresh most of the time. Hopefully

}

function saveVolumeToLocalStorage(volume) {
    // Save the volume to local storage
    localStorage.setItem('volume', volume);
}


//inspiration from these sites: https://dev.to/bitnagar/how-to-create-colored-particles-effect-using-p5js-easy-1nml, https://codereview.stackexchange.com/questions/221891/improving-particle-performance-in-p5-js and p5js site.
class Particle {


constructor(x, y) {
    // Particle properties

    // Initialize position with a vector created at coordinates (x, y)
    this.pos = createVector(x, y);

    // Initialize velocity with a random 2D vector scaled between 1 and 3
    this.vel = p5.Vector.random2D().mult(random(1, 3));

    // Initialize acceleration vector as an empty vector
    this.acc = createVector();

    // Choose a random color for the particle from an array called 'colors'
    this.color = random(colors);

    // Set maximum speed for the particle to a random value between 1 and 3
    this.maxSpeed = random(1, 3);

    // Set maximum steering force (used in steering behaviors)
    this.maxForce = 0.05;

    // Set the initial lifespan of the particle to 255
    this.lifeSpan = 255;

    // Set the initial size of the particle to a random value between 5 and 15
    this.size = random(5, 15);
}


    update() {
        // Update particle position and lifespan
    
        // Update velocity based on acceleration
        this.vel.add(this.acc);
    
        // Limit velocity to maximum speed
        this.vel.limit(this.maxSpeed);
    
        // Update position based on velocity
        this.pos.add(this.vel);
    
        // Reset acceleration to zero
        this.acc.mult(0);
    
        // Decrease lifespan
        this.lifeSpan -= 1;
    
        // Apply random force
        this.applyForce(p5.Vector.random2D().mult(random(0.5, 2)));
    
        // Adjust size randomly
        this.size += random(-1, 1);
    
        // Constrain size within a range
        this.size = constrain(this.size, 5, 15);
    }

    applyForce(force) {
        // Apply force to the particle
        this.acc.add(force);
    }

    edges() {
        // Wrap particles around the canvas edges
        if (this.pos.x > width) {
            this.pos.x = 0;
        } else if (this.pos.x < 0) {
            this.pos.x = width;
        }
        if (this.pos.y > height) {
            this.pos.y = 0;
        } else if (this.pos.y < 0) {
            this.pos.y = height;
        }
    }

    display() {
        // Display the particle
    
        // Set stroke weight
        strokeWeight(2);
    
        // Set stroke color based on particle's color property
        stroke(this.color);
    
        // Draw a point at the particle's position with a given size
        point(this.pos.x, this.pos.y, this.size);
    }
}
