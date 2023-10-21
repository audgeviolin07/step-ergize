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
    return (
      <View style={styles.container}>
        {this.state.splashVisible ? (
          <View>
            <Image
              source={require("../stepup/assets/stepergize.png")}
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
          <View style={styles.textContainer}>
            <Text style={styles.topText}>Top Text</Text>
            <View style={styles.horizontalTextContainer}>
              <Text style={styles.leftText}>Left Text</Text>
              <Image source={require('../stepup/assets/shoes.jpeg')} style={styles.centerImage} />
              <Text style={styles.rightText}>Right Text</Text>
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
    width: 75,
    justifyContent: 'center',
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
