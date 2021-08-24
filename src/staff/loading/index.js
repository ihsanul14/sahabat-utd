import {StackActions} from '@react-navigation/native';
import {View} from 'native-base';
import React, {Component} from 'react';
import {Image, ImageBackground} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';

export default class index extends Component {
    state = {
        isLoading: true,
    };

    nextScreen() {
        this.props.navigation.dispatch(StackActions.replace('Dashboard'));
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState(
                {
                    isLoading: false,
                },
                () => {
                    this.checkLoggedIn();
                },
            );
        }, 2000);
    }

    checkLoggedIn() {
        AsyncStorage.getItem('token').then((value) => {
            if (value == null) {
                this.props.navigation.dispatch(StackActions.replace('Login'));
            } else {
                this.props.navigation.dispatch(
                    StackActions.replace('Dashboard', {
                        token: value,
                    }),
                );
            }
        });
    }

    render() {
        return (
            <>
                {this.state.isLoading && (
                    <TouchableWithoutFeedback onPress={() => this.nextScreen()}>
                        <ImageBackground
                            resizeMode="stretch"
                            source={require('../../asset/pages/Loading_blue.png')}
                            style={{
                                width: '100%',
                                height: '100%',
                            }}></ImageBackground>
                    </TouchableWithoutFeedback>
                )}
            </>
        );
    }
}
