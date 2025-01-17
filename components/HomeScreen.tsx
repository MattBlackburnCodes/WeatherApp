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
        try {
            if (!zip) {
                alert('Please enter a zip code');
                return;
            } else if (zip.length !== 5) {
                alert('Please enter a valid 5 digit zip code');
                return;
            }
        }
        catch (error) {
            Alert.alert('Error', error.message || '"Unexprected input please enter a a numeric value"');
        }
        
        
        try {
            setLoading(true);
            const response = await fetch(
                `https://weather-backend-at4amlmzc-matt-blackburns-projects.vercel.app/api/weather?zip=${zip}`
            );

            if (!response.ok) {
                throw new Error('Zip code could not be found!');
            }

            const data = await response.json();
            setWeather(data); // Save fetched data to state
            navigation.navigate('Results', { 
                city: data.name,
                country: data.sys.country,
                temp: data.main.temp,
                feels_like: data.main.feels_like,
                temp_min: data.main.temp_min,
                temp_max: data.main.temp_max,
                weather: data.weather[0].main,
                description: data.weather[0].description,
                zip: zip,
                weatherIcon: data.weather[0].icon
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
        paddingTop: 150,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        opacity: 0.8
    },
    title: {
        fontSize: 35,
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