import React, { Component } from 'react';
import SerialPort from 'react-native-serialport';

class SensorReader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sensorData: {
        left: 'Waiting for data...',
        right: 'Waiting for data...',
        front: 'Waiting for data...',
      },
      danger: 50, // Set your danger threshold
      warnings: [], // Store warnings in state
    };
  }

  componentDidMount() {
    SerialPort.startListener('/dev/tty0', { baudRate: 9600 }, (data) => {
      [sensorIdentifier, value] = data.split(':');
      parsedValue = parseFloat(value);
      this.setState((prevState) => ({
        sensorData: {
          ...prevState.sensorData,
          [sensorIdentifier]: parsedValue,
        },
      }));
      this.displayWarnings(); // Call the function to display warnings when new data is received
    });
  }

  componentWillUnmount() {
    SerialPort.stopListener();
  }

  getSensorData() {
    sensorData = this.state.sensorData;
    arrayOfDictionaries = [];
    for (sensorIdentifier in sensorData) {
        value = sensorData[sensorIdentifier];
        arrayOfDistance.push({ [sensorIdentifier]: value });
    }
    return arrayOfDistance;
  } 

  displayWarnings() {
    const arrayOfObstacles = this.getSensorData();
    const newWarnings = [];
    arrayOfObstacles.forEach((dictionary) => {
      for (const direction in dictionary) {
        const distance = dictionary[direction];
        if (distance < this.state.danger) {
          newWarnings.push(`Obstacle is ${distance}cm ahead in the ${direction} direction.`);
        }
      }
    });

    this.setState({ warnings: newWarnings }); // Update the warnings in the component's state
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
