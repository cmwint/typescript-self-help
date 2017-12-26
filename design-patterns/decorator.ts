
// when you want to allow objects to have different options
// the pattern, not the feature
// example: the options decorate your car, hence the name of the pattern

// take a base class, instantiate it, then wrap many options around it

class ModelS {
    public description = "Model S";

    public cost(): number {
        return 73000;
    }
}

class ModelX {
    public description = "Model X";

    public cost(): number {
        return 77000;
    }
}