import { Text, View, StyleSheet, TextInput } from 'react-native';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '@/components/HomeScreen';
import ResultsScreen from '@/components/ResultScreen';
import TitleScreen from '@/components/TitleScreen';


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
                    initialRouteName='Title'
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: '#f4511e'
                        },
                        animation: 'fade'
                    }}
                >
                    <Stack.Screen 
                        name="Title" 
                        component={TitleScreen}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen 
                        name="Home" 
                        component={HomeScreen}
                        options={{
                            headerShown: false,
                        }} 
                    />
                    <Stack.Screen 
                        name="Results" 
                        component={ResultsScreen}
                        options={{
                            headerStyle:{
                                backgroundColor: 'black',
                            },
                            headerTintColor: 'white',
                        }} 
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </NavigationIndependentTree>
    )
}