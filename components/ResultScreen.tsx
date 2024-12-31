import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

export default function ResultScreen({ route }) {
    const zip = route.params.zip;
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Zip code entered is: {zip}</Text>
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