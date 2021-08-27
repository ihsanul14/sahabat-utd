import React, {Component} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {
    Container,
    Header,
    Item,
    Input,
    Icon,
    Button,
    Text,
    Card,
    CardItem,
    Content,
    Body,
    Right,
} from 'native-base';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Axios from 'axios';
import {Table, Row, Rows} from 'react-native-table-component';
import {timeout} from 'async';
import {now} from 'moment';
import {StackActions} from '@react-navigation/native';
import SyncStorage from 'sync-storage';

export default class index extends Component {
    state = {
        isLoading: false,
        email: '',
        password: '',
        token: '',
    };

    nextScreen() {
        const url = 'http://sahabat-utd.id:6005';
        const headers = {
            'Content-Type': 'application/json',
        };
        const body = {
            email: this.state.email,
            password: this.state.password,
        };
        Axios.post(`${url}/api/simaba/user/login`, JSON.stringify(body), {
            headers,
        })
            .then((res) => {
                if (res.data.code == 200) {
                    this.setState({
                        response: res.data,
                        isLoading: false,
                        token: res.data.token,
                    });
                    SyncStorage.set('token', this.state.token);
                    alert('sukses login');
                    this.props.navigation.dispatch(
                        StackActions.replace('StokDarahHome', {
                            token: this.state.token,
                        }),
                    );
                } else {
                    console.log('Error', res.data.message);
                    alert('email atau password salah');
                    this.props.navigation.dispatch(
                        StackActions.replace('Login'),
                    );
                }
            })
            .catch((err) => {
                console.log('test : ', err);
            });
    }
    render() {
        return (
            <>
                {this.state.isLoading ? (
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            padding: 10,
                            position: 'relative',
                        }}>
                        <ActivityIndicator size="large" color="red" />
                    </View>
                ) : (
                    <View style={styles.cellStyle}>
                        <Text
                            style={{
                                textAlignVertical: 'center',
                                textAlign: 'center',
                                marginBottom: 10,
                            }}>
                            Login
                        </Text>
                        <TextInput
                            placeholder="Email"
                            underlineColorAndroid="transparent"
                            style={styles.TextInputStyleClass}
                            onChangeText={(email) => this.setState({email})}
                        />
                        <TextInput
                            placeholder="password"
                            underlineColorAndroid="transparent"
                            secureTextEntry={true}
                            style={styles.TextInputStyleClass}
                            onChangeText={(password) =>
                                this.setState({password})
                            }
                        />

                        <Button>
                            <Text onPress={() => this.nextScreen()}>
                                Submit
                            </Text>
                        </Button>
                    </View>
                )}
            </>
        );
    }
}

const styles = StyleSheet.create({
    gridContainer: {
        width: 220,
    },
    rowStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    cellStyle: {
        flex: 1,
        margin: 10,
    },
});
