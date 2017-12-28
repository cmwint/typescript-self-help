// adapter pattern
// think like adapters in real life, a european plug and a US plug for devices

// the adpator should "implement" the european plug and "expose" a US plug for you to use


// allows different classes with different interfaces to work together
// without changing the source code


// say we want to charge the iPhone with a MicroUSB cable,
// we need to change the port to lightning with an adapter


// first create interfaces, for each device
interface IPhone {
    // will recieve a method that is tied to their ports
    useLightning(): void;
}

interface Android {
    // will recieve a method that is tied to their ports
    useMicroUSB(): void;
}


class iPhone7 implements IPhone {
    useLightning() {
        console.log('Using the lightning port..');
    }
}

class GooglePixel implements Android {
    useMicroUSB() {
        console.log('Using micro USB..');
    }
}

// define the adapter
class lightningToMicroUSBAdapter implements Android {
    // implements USB, but then internally converts it to lightning

    // need a device
    iphoneDevice: IPhone;

    constructor(iphone: IPhone) {
        this.iphoneDevice = iphone;
    }

    useMicroUSB(): void {
        // need to map it to something the iphone understands
        console.log('Want to use USB, converting to Lightning....');

        // even though thte iphone is not compatible with USB, we can make it so with the adapter
        // this is trasnlated to something that the iphone can understand
        this.iphoneDevice.useLightning()
    }
}


// to use
let iphone = new iPhone7();
let chargeAdapter = new lightningToMicroUSBAdapter(iphone);

chargeAdapter.useMicroUSB();