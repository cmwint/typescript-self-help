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
class lightningToMicroUSBAdapter {
    
}