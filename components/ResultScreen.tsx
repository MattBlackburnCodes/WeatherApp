import React from "react";
import { View, Text, StyleSheet, TextInput, ImageBackground } from "react-native";

export default function ResultScreen({ route }) {
    const { zip, city, temp, country, weather, description, feels_like, temp_min, temp_max } = route.params
    
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

    const cityName = (zip, city) => {
        if (zip >= 20001 && zip <= 20599) {
            return 'District of Columbia';
        }
        else{
            return city;
        }
    }

    const tempRound = Math.round(temp);

    const feelsLikeRound = Math.round(feels_like);

    const tempMaxRound = Math.round(temp_max);

    const tempMinRound = Math.round(temp_min);

    return (
        <ImageBackground 
            source={getWeatherBackground()}
            style={{width: '100%', height: '100%'}}
        >
            <View style={styles.container}>
                <Text style={styles.textCity}>{cityName(zip, city)}</Text> 
                <Text style={styles.textTemp}>{tempRound}°F</Text>
                <Text style={styles.text}>Feels Like: {feelsLikeRound}°F</Text>
                <Text style={styles.text}>L: {tempMinRound}°F - H: {tempMaxRound}°F</Text>
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
        backgroundColor: 'rgba(135, 206, 235, 1)',
        paddingTop: 10,
        opacity: 0.6
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    textCity: {
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    textTemp: {
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})