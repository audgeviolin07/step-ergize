// import { NativeEventEmitter, NativeModules } from 'react-native';


// import SerialPort from 'react-native-serialport';


// const { MyNativeModule } = NativeModules;

// const myEmitter = new NativeEventEmitter(MyNativeModule);

// const ArduinoPort = '/dev/cu.usbserial-14410';  // Replace with the correct USB port for your Arduino

// SerialPort.connect(ArduinoPort, { baudRate: 115200 })
//   .then(() => {
//     console.log('Connected to Arduino.');

//     SerialPort.on('data', data => {
//       const distance = parseFloat(data);
//       console.log('Received distance:', distance);
//       // You can update your app's state with the received data.
//     });
//   })
//   .catch(error => {
//     console.error('Error connecting to Arduino:', error);
//   });
