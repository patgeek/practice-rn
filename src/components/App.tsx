/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    PushNotificationIOS
} from 'react-native';
import PushNotification from 'react-native-push-notification';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    constructor(props: Props) {
        super(props);
        this._onPress = this._onPress.bind(this);
        PushNotification.configure({
            onRegister: (token) => {
                console.log( 'TOKEN:', token );
            },
            onNotification: (notification) => {
                console.log( 'NOTIFICATION:', notification );
            },
            requestPermissions: true,
        });
    }
    _onPress() {
        console.log("Pushed");
        PushNotification.localNotificationSchedule({
            title: "Notification Title",
            message: "This notification is useless right now.",
            date: new Date(Date.now() + (5 * 1000)),
        });
        
    }

    render() {
        return (
            <View style={styles.container}>
            <Text style={styles.welcome}>
                Welcome to React Native!
            </Text>
            <Text style={styles.instructions}>
                To get started, edit App.js
            </Text>
            <Text style={styles.instructions}>
                {instructions}
            </Text>
            <TouchableOpacity onPress={this._onPress}>
                <Text style={styles.instructions}>
                    Notify
                </Text>
            </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
        welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
        instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
