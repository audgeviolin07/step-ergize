import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
    }, 20000); // Change this value to control how long the splash screen is displayed (in milliseconds)
  }

  navigateToMainScreen = () => {
    this.props.navigation.navigate('MainScreen');
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
          <Text>Main App Content</Text>
          {/* //<TouchableOpacity style={styles.button} onPress={this.navigateToMainScreen}>
            //<Text style={styles.buttonText}>Go to Main Screen</Text>
         // </TouchableOpacity> */}
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

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        {/* Define MainScreen and other screens as needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

