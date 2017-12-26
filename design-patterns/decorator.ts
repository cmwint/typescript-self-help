
// when you want to allow objects to have different options
// the pattern, not the feature
// example: the options decorate your car, hence the name of the pattern

// take a base class, instantiate it, then wrap many options around it


// creating abstract class, since there should never be just the class of "car"
abstract class Car {
    public description: string;

    public getDescription(): string {
        return this.description;
    }

    public abstract cost(): number;
}

class ModelS extends Car {
    public description = "Model S";

    public cost(): number {
        return 73000;
    }
}

class ModelX extends Car {
    public description = "Model X";

    public cost(): number {
        return 77000;
    }
}

// then define a class for all of our options that we can choose from
abstract class CarOptions extends Car {
    // a CarOptions will decorate a Car
    // keep a reference to a car that we decorate, called decoratedCar
    decoratedCar: Car;

    // this should override getDescription method
    public abstract getDescription(): string;
    // and should override the cost method
    public abstract cost(): number;
}

// vscode will throw and error saying I need to implement some elements of the extended class
class EnhancedAutoPilot extends CarOptions {
    decoratedCar: Car;

    // need to fill in decoratedCar property
    // so give it an instance of type car
    constructor (car: Car) {
        super();
        this.decoratedCar = car;
    }

    public getDescription(): string {
        // return the description of the car that we decorate, plus description of option
        return this.decoratedCar.getDescription() + ', Enhanced AUto Pilot';
    }
    public cost(): number {
        // cost = cost of decorated car, plus cost of option
        return this.decoratedCar.cost() + 5000;
    }
}