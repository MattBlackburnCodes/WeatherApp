import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
    Button, 
    Keyboard, 
    TouchableWithoutFeedback,
    TouchableOpacity,
    ImageBackground,
    Alert 

} from 'react-native';
import React from 'react';

export default function HomeScreen({ navigation }) {
    const [zip, setZip] = React.useState('');
    const [weather, setWeather] = React.useState(null);
    const [loading, setLoading] = React.useState(false);


    // Function to fetch weather data
    const fetchWeather = async () => {
        if (!zip) {
            alert('Please enter a zip code');
            return;
        } else if (zip.length !== 5) {
            alert('Please enter a valid 5 digit zip code');
            return;
        }
        
        try {
            setLoading(true);
            const apiKey = 'b88d8a93c89a5d26d286f7a9fdf1b028'
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?zip=${zip},US&appid=${apiKey}&units=imperial`
            );

            if (!response.ok) {
                throw new Error('Failed to fetch weather data');
            }

            const data = await response.json();
            setWeather(data); // Save fetched data to state
            console.log(data);
            navigation.navigate('Results', { 
                city: data.name,
                country: data.sys.country,
                //state: data.state,
                temp: data.main.temp,
                weather: data.weather[0].main,
                description: data.weather[0].description
            });
        } catch (error) {
                Alert.alert('Error', error.message || 'Failed to fetch weather data.');
        } finally {
                setLoading(false);
        }
    };

    return (
        <ImageBackground 
            source={require('../assets/images/WeatherMainImage.png')} 
            style={{width: '100%', height: '100%'}}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            
                <View style={styles.container}>
                    <Text style={styles.title}>Weather Forecast App</Text>
                    <View>
                        <Text style={styles.inputText}>Please enter the zip code</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={zip => setZip(zip)}
                            value={zip}
                            placeholder="Enter zip code"
                            placeholderTextColor={'black'}
                            keyboardType="numeric"
                            
                        />
                        <TouchableOpacity style={styles.button} onPress={fetchWeather}>
                            <Text>Go to Weather Page</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            
            </TouchableWithoutFeedback>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        textAlign: 'center',
        gap: 40,
        padding: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        opacity: 0.8
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    inputText: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
        
    },
    input: {
        height: 40,
        width: 200,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        textAlign: 'center',
        
        
    },
    button:{
        backgroundColor: '#f4511e',
        padding: 10,
        borderRadius: 10,
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
})