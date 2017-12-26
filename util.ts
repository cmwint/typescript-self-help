// define the path to the file that's required
/// <reference path="timesTwo.ts" />

// created the class that is imported
var use = new Utility.Useful();

console.log(use.timesTwo(8));


// ^^ this gives us an error because the terminal thinks we're going to run the timesTwo.ts file and run it separately
// to combine files in TS, use the "out" flag
////// command :: tsc util.ts timesTwo.ts --out util.js
// add files that you want to combine, then the out flag, then the file you want the output to go to