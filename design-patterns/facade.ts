/// facade
// can be used to hide a lot of complexity behind a single method


// classes for all the devices in home theater setup
class BlurayPlayer{
    on() {
        console.log('Bluray player turning on...');
    }

    turnOff() {
        console.log('Bluray turning off..');
    }

    play() {
        console.log('Playing bluray disc...');
    }
}

class Amplifier{
    on() {
        console.log('Amp is turning on..');
    }

    turnOff() {
        console.log('Amplifier turning off..');
    }

    setSource(source: string) {
        console.log('Setting source to ' + source);
    }

    setVolume(volumeLevel: number) {
        console.log('Setting volume to ' + volumeLevel);
    }
}

class Lights{
    dim() {
        console.log('Lights are dimming..');
    }
}

class TV{
    turnOn() {
        console.log('TV turning on..');
    }

    turnOff() {
        console.log('TV turning off..');
    }
}

class PopcornMaker{
    turnOn() {
        console.log('Popcorn maker turning on..');
    }

    turnOff() {
        console.log('Popcorn maker turning off..');
    }

    pop() {
        console.log('Popping corn!');
    }
}

class HomeTheaterFacade {

    // attributes for each of the devices we want to control
    private blueray: BlurayPlayer;
    private amp: Amplifier;
    private lights: Lights;
    private tv: TV;
    private popcornMaker: PopcornMaker;

    // will receive an instance of all of these devices
    constructor(amp: Amplifier, blueray: BlurayPlayer, lights: Lights, tv: TV, popcornMaker: PopcornMaker) {
        // keep track of these devices
        this.amp = amp; // that we got through the constructor
        this.blueray = blueray;
        this.lights = lights;
        this.tv = tv;
        this.popcornMaker = popcornMaker;
    }

    // need to have a single place when you set up all your devices to watch a movie
    // prep setup

    // placing all of a complex set up behind a single method

    // set up code is centralized in a single class, this makes facade patterns strong
    // keeps code short and to the point, and keeps you from writing code over and over again
    // keeps code flexible for the future, too. only need to update this in one place
    public watchMovie() {
        // ask the popcorn maker to turn on and pop popcorn
        this.popcornMaker.turnOn();
        this.popcornMaker.pop();

        // dim lights
        this.lights.dim();

        // turn on tv
        this.tv.turnOn();

        // turn amp on and adjust settings
        this.amp.on();
        this.amp.setSource('blueray');
        this.amp.setVolume(11);

        // turn on blueray and play
        this.blueray.on();
        this.blueray.play();
    }

    // same thing for turning off movie
    public endMovie () {
        this.popcornMaker.turnOff();
        this.amp.turnOff();
        this.tv.turnOff();
        this.blueray.turnOff();
    }
}


// how do you use it? 
// create an instance of each device that your facade needs
let blueray = new BlurayPlayer();
let amp = new Amplifier();
let lights = new Lights();
let tv = new TV();
let popcornMaker = new PopcornMaker();

// this will receive all of the instances we just created 
let hometheater = new HomeTheaterFacade(amp, blueray, lights, tv, popcornMaker);

// call one of the methods in our facade to start watching a movie,
// the facade will then take care of the complex setup process
hometheater.watchMovie();