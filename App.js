import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      splashVisible: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ splashVisible: false });
    }, 10000); // Change this value to control how long the splash screen is displayed (in milliseconds)
  }

  render() {
    return this.state.splashVisible ? (
      <View style={styles.container}>
        <Image
          source={require("../stepup/assets/stepergize.png")} // Replace with your logo image path
          style={styles.logo}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.setState({ splashVisible: false })}
        >
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      </View>
    ) : (
      // Your main app content goes here
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Main App Content</Text>
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
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
  },
});

export default SplashScreen;