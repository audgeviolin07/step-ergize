import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

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
    }, 2000); // Change this value to control how long the splash screen is displayed (in milliseconds)
  }

  navigateToOtherScreen = () => {
    const navigation = useNavigation(); // Use useNavigation to get the navigation prop
    navigation.navigate('OtherScreen'); // Navigate to OtherScreen
  };

  render() {
    if (this.state.splashVisible) {
      return (
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
      );
    } else {
      return (
        // Your main app content goes here
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Get Started!</Text>
          <TouchableOpacity style={styles.button} onPress={this.navigateToOtherScreen}>
            <Text style={styles.buttonText}>Go to Other Screen</Text>
          </TouchableOpacity>
        </View>
      );
    }
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
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SplashScreen;
