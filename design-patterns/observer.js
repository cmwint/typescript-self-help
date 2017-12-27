// observer pattern?
// when one part of your application changes, other parts need to be updated
var WeatherStation = /** @class */ (function () {
    function WeatherStation() {
        this.observers = [];
    }
    WeatherStation.prototype.setTemperature = function (temp) {
        console.log('WeatherStation: new temperature measurement: ' + temp);
        this.temperature = temp;
        this.notifyObservers();
    };
    WeatherStation.prototype.registerObserver = function (o) {
        this.observers.push(o);
    };
    WeatherStation.prototype.removeObserver = function (o) {
        // look up where this observer is
        var index = this.observers.indexOf(o);
        // take any element at index
        this.observers.splice(index, 1);
    };
    WeatherStation.prototype.notifyObservers = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(this.temperature);
        }
    };
    return WeatherStation;
}());
// the temperatue display should update every time the weather station upates the temperature
var TemperatureDisplay = /** @class */ (function () {
    function TemperatureDisplay(weatherStation) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }
    TemperatureDisplay.prototype.update = function (temperatue) {
        console.log('TemperatureDisplay: I need to update my display');
        // some logic
    };
    return TemperatureDisplay;
}());
var Fan = /** @class */ (function () {
    function Fan(weatherStation) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }
    Fan.prototype.update = function (temperatue) {
        // the fan should turn up if temp is above a certain degree
        if (temperatue > 25) {
            console.log('It\'s hot, fan will turn on');
        }
        else {
            console.log('It\'s cool, fan is off');
        }
    };
    return Fan;
}());
// to use this, basically, create instances and pass references along
var weatherStation = new WeatherStation();
var tempDisplay = new TemperatureDisplay(weatherStation);
var fan = new Fan(weatherStation);
weatherStation.setTemperature(20);
weatherStation.setTemperature(30);
