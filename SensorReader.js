import React, { Component } from 'react';
import SerialPort from 'react-native-serialport';

class SensorReader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sensorValue: 'Waiting for data...',
      danger: 50, // Set your danger threshold
    };
  }

  componentDidMount() {
    SerialPort.startListener('/dev/tty0', { baudRate: 9600 }, (data) => {
      const parsedValue = parseFloat(data);

      if (!isNaN(parsedValue)) {
        this.setState({ sensorValue: parsedValue }, () => {
          this.displayWarnings();
        });
      }
    });
  }

  componentWillUnmount() {
    SerialPort.stopListener();
  }

  displayWarnings() {
    if (sensorValue < danger) {
      newWarnings.push(`Obstacle is ${sensorValue}cm ahead.`);
    }

    this.setState({ warnings: newWarnings });
  }

  render() {
    return (
      <div>
        <h2>Warnings:</h2>
        <ul>
          {this.state.warnings.map((warning, index) => (
            <li key={index}>{warning}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SensorReader;