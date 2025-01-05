import React from "react";
import { View, Text, StyleSheet, TextInput, ImageBackground } from "react-native";

export default function ResultScreen({ route }) {
    const { city, state, temp, country, weather, description } = route.params
    const getWeatherBackground = () => {
        switch (weather) {
            case 'Clear':
                return require('../assets/images/weatherImages/clear.png');
            case 'Snow':
                return require('../assets/images/weatherImages/snow.png');
            case 'Clouds':
                return require('../assets/images/weatherImages/clouds.png');
            case 'Rain':
                return require('../assets/images/weatherImages/rain.png');
            case 'Fog':
                return require('../assets/images/weatherImages/fog.png');
            case 'default':
                return require('../assets/images/WeatherMainImage.png');
        }
    }

    return (
        <ImageBackground 
            source={getWeatherBackground()}
            style={{width: '100%', height: '100%'}}
        >
            <View style={styles.container}>
                <Text style={styles.text}>City Entered: {city}</Text> 
                <Text style={styles.text}>Country: {country}</Text>
                <Text style={styles.text}>Temperature: {temp}</Text>
                <Text style={styles.text}>Weather: {weather}</Text>
                <Text style={styles.text}>Description: {description}</Text>
            </View>
        </ImageBackground>
    )
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#f5fcff',
        paddingTop: 100,
        opacity: 0.6
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})