import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {StatusBar, Platform} from 'react-native';
import {useEffect} from "react";

export default function App() {
    useEffect(() => {
        StatusBar.setBarStyle('light-content');
    }, []);

    return (
        <View style={styles.root}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/icon/logo.png')}/>
            </View>
            <View style={styles.container}>
                <Text style={styles.signIn}>Sign In</Text>
                <View style={styles.metamaskStyle}>
                    <Image style={styles.iconItem} source={require('../assets/icon/img_metamask_logo.png')}/>
                    <Text style={styles.textItem}>Continue with Metamask</Text>
                </View>
                <View style={styles.continueWithStyle}>
                    <Image style={styles.iconItem} source={require('../assets/icon/img_google_logo.png')}/>
                    <Text style={styles.textItem}>Continue with Google</Text>
                </View>
                <View style={styles.continueWithStyle}>
                    <Image style={styles.iconItem} source={require('../assets/icon/ic_microsoft.png')}/>
                    <Text style={styles.textItem}>Continue with Microsoft</Text>
                </View>
                <View style={styles.otherStyle}>
                    <Text style={styles.textItem}>Other</Text>
                </View>
                <Text style={styles.baseText}>
                    Already have an account?
                    <Text style={styles.innerText}> Sign in with email</Text>
                </Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#28292F',
        flexDirection: 'column'
    },
    logo: {
        height: 14,
        width: 115
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 14,
        marginTop: 48,
        backgroundColor: '#28292F',
    },
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    signIn: {
        fontSize: 34,
        textAlign: 'center',
        letterSpacing: 0.374,
        fontWeight: '400',
        marginTop: 58,
        marginBottom: 35,
        color: '#FFF'
    },
    metamaskStyle: {
        flexDirection: 'row',
        marginHorizontal: 21,
        height: 50,
        backgroundColor: '#F7861C',
        borderWidth: 1,
        borderColor: '#4E4F55',
        alignItems: 'center',
        marginBottom: 14
    },
    continueWithStyle: {
        flexDirection: 'row',
        marginHorizontal: 21,
        height: 50,
        backgroundColor: '#38393F',
        borderWidth: 1,
        borderColor: '#4E4F55',
        alignItems: 'center',
        marginBottom: 14
    },
    iconItem: {
        width: 34,
        height: 34,
        marginStart: 14,
        position: "absolute"
    },
    textItem: {
        fontSize: 15,
        textAlign: 'center',
        fontWeight: '500',
        color: '#FFF',
        flex: 1
    },
    otherStyle: {
        flexDirection: 'row',
        marginHorizontal: 21,
        height: 50,
        borderWidth: 1,
        borderColor: '#D1D1D1',
        alignItems: 'center',
        justifyContent: 'center'
    },
    baseText: {
        color: 'white',
        fontSize: 15,
        fontWeight: '500',
        textAlign: 'center',
        marginTop: 28
    },
    innerText: {
        color: '#FD5A63',
    },

});

