import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

export default function ResultScreen({ route }) {
    const { city, state, temp, country, weather, description } = route.params
    return (
        <View style={styles.container}>
            <Text style={styles.text}>City Entered: {city}, {state}</Text>
            <Text style={styles.text}>Country: {country}</Text>
            <Text style={styles.text}>Temperature: {temp}</Text>
            <Text style={styles.text}>Weather: {weather}</Text>
            <Text style={styles.text}>Description: {description}</Text>

        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})