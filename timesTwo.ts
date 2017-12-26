// modules share code between files
// they can keep file size small and dependencies clear

// define a module with this
module Utility {

    // modules export classes
    // once a class is exported by a module, it can be accessed by any file which requires that module
    export class Useful {
        timesTwo (n: number) {
            return n * 2;
        }
    }

}