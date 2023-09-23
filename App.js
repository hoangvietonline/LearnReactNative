import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useState} from "react";

export default function App() {
    const [count, setCount] = useState(0);
    const [textChange, onChangeText] = useState('')

    const onPress = () => setCount(prevCount => prevCount + 1);

    return (
        <View style={styles.container}>
            <Text>Text change : {textChange}</Text>
            <Text style={styles.text}>Count: {count}</Text>
            <Text>Open up App.js to start working on your app!</Text>

            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text>Press Here</Text>
            </TouchableOpacity>

            <TextInput style={styles.inputText}
                       placeholder={'enter text'}
                       onChangeText={onChangeText}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        marginTop: 30,
        padding: 10,
    },
    text: {
        alignItems: 'center',
        color: 'purple',
        marginBottom: 30
    },
    inputText: {
        height: 40,
        margin: 16,
        borderWidth: 1,
        padding: 10
    }
});
