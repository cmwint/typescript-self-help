// modules share code between files
// they can keep file size small and dependencies clear
// define a module with this
var Utility;
(function (Utility) {
    // modules export classes
    // once a class is exported by a module, it can be accessed by any file which requires that module
    var Useful = /** @class */ (function () {
        function Useful() {
        }
        Useful.prototype.timesTwo = function (n) {
            return n * 2;
        };
        return Useful;
    }());
    Utility.Useful = Useful;
})(Utility || (Utility = {}));
