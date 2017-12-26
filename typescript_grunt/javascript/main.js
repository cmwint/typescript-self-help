var Helper;
(function (Helper) {
    var Language = (function () {
        function Language() {
        }
        Language.Greeting = "hello";
        return Language;
    }());
    Helper.Language = Language;
})(Helper || (Helper = {}));
console.log("oh, " + Helper.Language.Greeting);
//# sourceMappingURL=main.js.map