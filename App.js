

import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import * as Speech from 'expo-speech'; // Import expo-speech library

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
          
          <View style={styles.container}>
            <Image
              source={require("../stepup/assets/iconlogo.png")}
              style={styles.icon}
            />
            <Text style={styles.topText}>Looking Forward</Text>
            <View style={styles.horizontalTextContainer}>
              <Text style={styles.leftText}>On Your Left!</Text>
              <Image source={require('../stepup/assets/shoes.jpeg')} style={styles.centerImage} />
              <Text style={styles.rightText}>On Your Right!</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  splashContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    position: 'absolute', // Position it absolutely
    top: 30, // Place it at the top
    left: 25, // Place it at the left
    width: 50, // Set the width to your desired size
    height: 50, // Set the height to your desired size

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
    flexDirection: 'row',
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