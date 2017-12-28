// adapter pattern
// think like adapters in real life, a european plug and a US plug for devices
var iPhone7 = /** @class */ (function () {
    function iPhone7() {
    }
    iPhone7.prototype.useLightning = function () {
        console.log('Using the lightning port..');
    };
    return iPhone7;
}());
var GooglePixel = /** @class */ (function () {
    function GooglePixel() {
    }
    GooglePixel.prototype.useMicroUSB = function () {
        console.log('Using micro USB..');
    };
    return GooglePixel;
}());
// define the adapter
var lightningToMicroUSBAdapter = /** @class */ (function () {
    function lightningToMicroUSBAdapter(iphone) {
        this.iphoneDevice = iphone;
    }
    lightningToMicroUSBAdapter.prototype.useMicroUSB = function () {
        // need to map it to something the iphone understands
        console.log('Want to use USB, converting to Lightning....');
        // even though thte iphone is not compatible with USB, we can make it so with the adapter
        // this is trasnlated to something that the iphone can understand
        this.iphoneDevice.useLightning();
    };
    return lightningToMicroUSBAdapter;
}());
// to use
var iphone = new iPhone7();
var chargeAdapter = new lightningToMicroUSBAdapter(iphone);
chargeAdapter.useMicroUSB();
