import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import * as Speech from 'expo-speech'; // Import expo-speech library
import SensorReader from './SensorReader';

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      splashVisible: true,
    };
  }

  // Function to handle text-to-speech
  handleSpeak = () => {
    const textToSpeak = 'Hello, welcome to Stepergize';
    Speech.speak(textToSpeak); // Use expo-speech to speak the text
  };


  componentDidMount() {
    setTimeout(() => {
      this.setState({ splashVisible: false });
    }, 10000); // Change this value to control how long the splash screen is displayed (in milliseconds)
  }

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
              onPress={() => this.handleSpeak()}
              //onPress={() => this.setState({ splashVisible: false })}
            >
              <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.horizontalTextContainer}>
            <Image
              source={require("../stepup/assets/iconlogo.png")}
              style={styles.icon}
            />
            <Image
              source={require("../stepup/assets/name.png")}
              style={styles.name}
            />
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
    width: 50, // Set the width to your desired size
    height: 50, // Set the height to your desired size
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
  horizontalTextContainer: {
    top: 40,
    left: 20,
    flexDirection: 'row', // Arrange items horizontally
    alignItems: 'center',
  },
  leftText: {
    flex: 1,
    textAlign: 'left',
    fontSize: 18,
  },
  centerImage: {
    width: 200,
    height: 200,
  },
  rightText: {
    flex: 1,
    textAlign: 'right',
    fontSize: 18,
  },
});

export default SplashScreen;
