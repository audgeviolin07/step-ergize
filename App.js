import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import * as Speech from 'expo-speech'; // Import expo-speech library
import SensorReader from './SensorReader';

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      splashVisible: true,
      warningText: '',
      sensorReader: new SensorReader(),
    };

    this.speechTimeout = null;
  }

  handleSpeak = (text) => {
    Speech.speak(text);
  };

  componentDidMount() {
    Speech.speak("Welcome to Stepergize! Your footsteps, your power!");
    setTimeout(() => {
      this.setState({ splashVisible: false });
      // Start checking sensor data and warnings after the splash screen disappears
      // this.checkSensorData();
    }, 7000); // Change this value to control how long the splash screen is displayed (in milliseconds)
  }

  checkSensorData = () => {
    const updateWarning = () => {
      const distance = this.state.sensorReader.getDistance();
      if (distance < 100 && distance > 50) {
        this.setState({ warningText: "Object is " + (distance / 100) + "m ahead of you" });
      } else if (distance < 50) {
        this.setState({ warningText: "Please stop. Object is " + (distance / 100) + "m ahead of you" });
      } else {
        this.setState({ warningText: "" }); // No warning
      }
    };

    // Set up an interval to periodically check and update the warning
    this.warningInterval = setInterval(updateWarning, 5000); // Adjust the interval as needed
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.splashVisible ? (
        <View style={styles.splashContent}>
          <Image
          source={require("../stepup/assets/stepergize.png")}
          style={styles.logo}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.setState({ splashVisible: false });
            this.checkSensorData();
          }}
        >
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      </View>
    ) : (
      <View style={styles.verticalContainer}>
        <View style={styles.horizontalTextContainer}>
          <Image
            source={require("../stepup/assets/iconlogo.png")}
            style={styles.icon}
          />
          <Image
            source={require("../stepup/assets/name.png")}
            style={styles.name}
          />
          <View style={styles.warningContainer}>

              <Image
                source={require("../stepup/assets/warning.png")}
                style={styles.warningIcon}
              />
                {this.state.warningText && (
                <Text style={styles.warning}>{this.state.warningText}</Text>)}
                {this. state.warningText && this.handleSpeak(this.state.warningText)}
          </View>
        </View>
        <View style={styles.shoeContainer}>
              <Image
                source={require("../stepup/assets/shoes.png")}
                style={styles.shoeImage}
              />
            </View>
      </View>
  )}
</View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  splashContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50,
    padding:4,
  },
  name: {
    width: 300,
    height: 50,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  warningContainer: {
    top: 100,
    right: 350,
    backgroundColor: 'yellow', // Set your desired background color here
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10, // Add padding to control the space within the container
  },
  warningIcon: {
    marginLeft: 5,
    width: 40,
    height: 30,
  },
  warning: {
    marginLeft: 20,
    top: 0,
    color: 'black',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  topText: {
    fontSize: 24,
  },
  shoeImage: {
    left: 10,
    width: 370,
    height: 670,
    top: 100, // Add margin to separate the shoe image from the warning text
  },
  horizontalTextContainer: {
    // justifyContent: 'center',
    // alignItems: 'center',
    top: 50,
    left: 20,
    flexDirection: 'row', 
    alignItems: 'center',
  },
});

export default SplashScreen;
