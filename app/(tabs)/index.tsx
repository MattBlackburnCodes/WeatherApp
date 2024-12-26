import { Text, View, StyleSheet } from 'react-native';
import { jsiConfigureProps } from 'react-native-reanimated/lib/typescript/core';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Weather Forecast App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#f5fcff'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})