import { Text, View, StyleSheet, TextInput } from 'react-native';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '@/components/HomeScreen';
import ResultsScreen from '@/components/ResultScreen';


// Putting stack navigator in a variable
const Stack = createNativeStackNavigator();

export default function App() {
    return(
        // NavigationIndependentTree is a component that wraps the NavigationContainer
        // NavigationContainer is a component that wraps the stack navigator
        // Stack.Navigator is a component that wraps the screens with Home being the default screen
        // Stack.Screen is a component that wraps the HomeScreen and ResultsScreen components
        <NavigationIndependentTree>
            <NavigationContainer>
                <Stack.Navigator 
                    initialRouteName='Home'
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: '#f4511e'
                        },
                        animation: 'fade'
                    }}
                >
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Results" component={ResultsScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </NavigationIndependentTree>
    )
}