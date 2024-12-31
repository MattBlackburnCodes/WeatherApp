import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
    Button, 
    Keyboard, 
    TouchableWithoutFeedback,
    TouchableOpacity,
    ImageBackground 

} from 'react-native';
import React from 'react';

export default function HomeScreen({ navigation }) {
    const [zip, setZip] = React.useState('');

    const handlePress = () => {
        if (zip.length !== 5) {
            alert('Please enter a valid 5 digit zip code');
        }
        else{
            Keyboard.dismiss();
            navigation.navigate('Results', {zip});
        }
        
    }

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
                            keyboardType="numeric"
                            placeholderTextColor={'black'}
                            
                        />
                        <TouchableOpacity style={styles.button} onPress={handlePress}>
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
        color: 'black'
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