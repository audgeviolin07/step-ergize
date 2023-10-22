/* import React, { Component } from 'react';
import SerialPort from 'react-native-serialport';

class SensorReader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sensorValue: 'Waiting for data...',
    };
  }

  componentDidMount() {
    SerialPort.startListener('/dev/tty0', { baudRate: 9600 }, (data) => {
      const parsedValue = parseFloat(data);
      if (!isNaN(parsedValue)) {
        this.setState({ sensorValue: parsedValue });
      }
    });
  }
  

  componentWillUnmount() {
    SerialPort.stopListener();
  }
  getDistance() {
    return this.state.sensorValue;
  }

  render() {
    null;
  }
}

export default SensorReader;
*/
import React, { Component } from 'react';

class SensorReader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sensorValue: this.getRandomInt(20, 100), // Initialize with a random value
    };
  }

  componentDidMount() {
    // Simulate data updates at regular intervals (e.g., every 3 seconds)
    this.dataUpdateInterval = setInterval(() => {
      this.setState({ sensorValue: this.getRandomInt(20, 100) });
    }, 1000); // Change the interval as needed
  }

  componentWillUnmount() {
    clearInterval(this.dataUpdateInterval); // Clear the interval when unmounting the component
  }

  // Generate a random integer value between min and max (inclusive)
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  getDistance() {
    return this.getRandomInt(20, 100);
  }

  render() {
    return null; 
  }
}

export default SensorReader;
