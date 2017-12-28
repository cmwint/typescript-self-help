// observer pattern?
// when one part of your application changes, other parts need to be updated

// something like, on click or on change


// the WeatherStation class is a "subject" because other classes can monitor this class
// the TemperatureDisply class is an "observer" because this observes another object

// now create interfaces for each subject and observer class

interface Subject {
    // a subject needs 3 methods
    // the first
    registerObserver(o: Observer): void;
    // ^^^ allows the TempDisplay class to register itself as an observer with the weather station
    // so the weather station knows to notify the TemDisplay of any changes

    // to stop the weather station from notifying the temp display of any changes
    removeObserver(o: Observer): void;

    // so if a change happens in the subject, it should notify all of the observers
    notifyObservers(): void;
}

interface Observer {
    // only one method, to pass along the temperature when updating
    update(temperatue: number): void;
}


class WeatherStation implements Subject{
    private temperature: number;
    private observers: Observer[] = [];

    setTemperature (temp: number) {
        console.log('WeatherStation: new temperature measurement: ' + temp);
        this.temperature = temp;
        this.notifyObservers();
    }

    public registerObserver(o: Observer) {
        this.observers.push(o)
    }
    public removeObserver(o: Observer) {
        // look up where this observer is
        let index = this.observers.indexOf(o);
        // take any element at index
        this.observers.splice(index, 1);
    }
    public notifyObservers() {
        for(let observer of this.observers) {
            observer.update(this.temperature);
        }
    }
}
// the temperatue display should update every time the weather station upates the temperature
class TemperatureDisplay implements Observer{
    private subject: Subject;

    constructor(weatherStation: Subject) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }

    update(temperatue: number) {
        console.log('TemperatureDisplay: I need to update my display');
        // some logic
    }
}


class Fan implements Observer{
    private subject: Subject;

    constructor(weatherStation: Subject) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }

    update(temperatue: number) {
        // the fan should turn up if temp is above a certain degree
        if (temperatue > 25) {
            console.log('It\'s hot, fan will turn on')
        } else {
            console.log('It\'s cool, fan is off');
        }
    }
}


// to use this, basically, create instances and pass references along

let weatherStation = new WeatherStation();

let tempDisplay = new TemperatureDisplay(weatherStation);
let fan = new Fan(weatherStation);


weatherStation.setTemperature(20);
weatherStation.setTemperature(30);