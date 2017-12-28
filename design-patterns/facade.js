/// facade
// can be used to hide a lot of complexity behind a single method
// classes for all the devices in home theater setup
var BlurayPlayer = /** @class */ (function () {
    function BlurayPlayer() {
    }
    BlurayPlayer.prototype.on = function () {
        console.log('Bluray player turning on...');
    };
    BlurayPlayer.prototype.turnOff = function () {
        console.log('Bluray turning off..');
    };
    BlurayPlayer.prototype.play = function () {
        console.log('Playing bluray disc...');
    };
    return BlurayPlayer;
}());
var Amplifier = /** @class */ (function () {
    function Amplifier() {
    }
    Amplifier.prototype.on = function () {
        console.log('Amp is turning on..');
    };
    Amplifier.prototype.turnOff = function () {
        console.log('Amplifier turning off..');
    };
    Amplifier.prototype.setSource = function (source) {
        console.log('Setting source to ' + source);
    };
    Amplifier.prototype.setVolume = function (volumeLevel) {
        console.log('Setting volume to ' + volumeLevel);
    };
    return Amplifier;
}());
var Lights = /** @class */ (function () {
    function Lights() {
    }
    Lights.prototype.dim = function () {
        console.log('Lights are dimming..');
    };
    return Lights;
}());
var TV = /** @class */ (function () {
    function TV() {
    }
    TV.prototype.turnOn = function () {
        console.log('TV turning on..');
    };
    TV.prototype.turnOff = function () {
        console.log('TV turning off..');
    };
    return TV;
}());
var PopcornMaker = /** @class */ (function () {
    function PopcornMaker() {
    }
    PopcornMaker.prototype.turnOn = function () {
        console.log('Popcorn maker turning on..');
    };
    PopcornMaker.prototype.turnOff = function () {
        console.log('Popcorn maker turning off..');
    };
    PopcornMaker.prototype.pop = function () {
        console.log('Popping corn!');
    };
    return PopcornMaker;
}());
var HomeTheaterFacade = /** @class */ (function () {
    // will receive an instance of all of these devices
    function HomeTheaterFacade(amp, blueray, lights, tv, popcornMaker) {
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
    // keeps code flexible for the future, too
    HomeTheaterFacade.prototype.watchMovie = function () {
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
    };
    // same thing for turning off movie
    HomeTheaterFacade.prototype.endMovie = function () {
        this.popcornMaker.turnOff();
        this.amp.turnOff();
        this.tv.turnOff();
        this.blueray.turnOff();
    };
    return HomeTheaterFacade;
}());
// how do you use it? 
// create an instance of each device that your facade needs
var blueray = new BlurayPlayer();
var amp = new Amplifier();
var lights = new Lights();
var tv = new TV();
var popcornMaker = new PopcornMaker();
// this will receive all of the instances we just created 
var hometheater = new HomeTheaterFacade(amp, blueray, lights, tv, popcornMaker);
// call one of the methods in our facade to start watching a movie,
// the facade will then take care of the complex setup process
hometheater.watchMovie();
