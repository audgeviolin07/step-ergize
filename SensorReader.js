import React, { Component } from 'react';
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