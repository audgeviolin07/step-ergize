import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './SplashScreen';
import OtherScreen from './OtherScreen'; // Import OtherScreen

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="OtherScreen" component={OtherScreen} /> {/* Define OtherScreen */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
