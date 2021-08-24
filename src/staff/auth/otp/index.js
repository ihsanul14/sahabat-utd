import React, {Component} from 'react';
import styles from './styles';
import {
    View,
    Text,
    Image,
    TextInput,
    ImageBackground,
    TouchableOpacity,
    Alert,
    ActivityIndicator,
} from 'react-native';
import {Card, ListItem, Button, Icon} from 'react-native-elements';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Axios from 'axios';
import config from '../../config/contansta';
import {StackActions} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import Hero from '../../shared/hero/Hero';

export default class index extends Component {
    state = {
        username: '',
        password: '',
        login_pin: '',
        error: null,
        isLoading: false,
    };

    componentDidMount() {
        console.log(this.props.route.params);
    }

    verifyOtp() {
        const {login_pin} = this.state;
        if (login_pin == '') {
            Alert.alert('Kosong!', 'Form tidak boleh dikosongkan.');
        } else {
            this.setState({
                isLoading: true,
            });
            Axios.post(`${config.institution}/auth/login/verify`, {
                username: this.props.route.params.username,
                password: this.props.route.params.password,
                login_pin: this.state.login_pin,
            })
                .then((res) => {
                    console.log('VERIFY_SUCCESS', res.data);
                    AsyncStorage.clear();
                    AsyncStorage.setItem('token', res.data.token);
                    this.setState({
                        isLoading: false,
                    });
                    if (res.data.code == 200) {
                        if (res.data.message == 'Login Successful') {
                            Alert.alert('Status', res.data.message);
                            Axios.get(`${config.institution}/user/detail`, {
                                headers: {
                                    Authorization: `Bearer ${res.data.token}`,
                                },
                            })
                                .then((response) => {
                                    this.props.navigation.dispatch(
                                        StackActions.replace('Dashboard', {
                                            token: response.data.token,
                                        }),
                                    );
                                })
                                .catch((error) => {
                                    console.log(
                                        'ERROR_OTP',
                                        error.response.data,
                                    );

                                    this.props.navigation.dispatch(
                                        StackActions.replace(
                                            'AskIdentityAfterOTP',
                                            {
                                                token: res.data.token,
                                            },
                                        ),
                                    );
                                });
                        } else {
                            Alert.alert('Status', res.data.message);
                        }
                    } else {
                        Alert.alert('Status', res.data.message);
                    }
                })
                .catch((err) => {
                    Alert.alert('Error', 'Login Gagal!');
                    console.log(err.response.data);
                });
        }
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
                    <View style={styles.MainContainer}>
                        <Hero />
                        <View style={styles.cardPadding}>
                            <Card containerStyle={styles.cardSection}>
                                <View style={styles.container}>
                                    <View style={styles.item}>
                                        <Text style={styles.login}>Login</Text>
                                    </View>
                                    <View style={styles.item}>
                                        <Text style={styles.signup}>
                                            Signup
                                        </Text>
                                    </View>
                                </View>
                                {/* {!this.state.error && (
                            <View
                                style={{
                                    display: 'flex',
                                    paddingBottom: 15,
                                }}>
                                <Text
                                    style={{
                                        alignSelf: 'center',
                                        color: 'green',
                                        fontSize: 25,
                                    }}>
                                    Login sukses!
                                </Text>
                            </View>
                        )} */}
                                {/* <Text
                            style={{
                                alignSelf: 'center',
                                color: 'green',
                                fontSize: 18,
                                marginBottom: 13,
                            }}>
                            Akun berhasil didaftarkan!
                        </Text> */}
                                <TextInput
                                    placeholder="Masukkan kode OTP"
                                    underlineColorAndroid="transparent"
                                    keyboardType="numeric"
                                    style={styles.TextInputStyleClass}
                                    maxLength={6}
                                    onChangeText={(login_pin) =>
                                        this.setState({login_pin})
                                    }
                                />
                                {/* <Text
                            style={{
                                alignSelf: 'center',
                                color: '#FF5976',
                                marginBottom: 13,
                            }}>
                            Kirim ulang verifikasi
                        </Text> */}
                                {/* {this.state.error ? (
                            <View style={{display: 'flex'}}>
                                <Text
                                    style={{alignSelf: 'center', color: 'red'}}>
                                    Kirim ulang verifikasi
                                </Text>
                            </View>
                        ) : (
                            <Text></Text>
                        )} */}
                                <View style={styles.btnSubmit}>
                                    <TouchableWithoutFeedback
                                        onPress={() => this.verifyOtp()}>
                                        <Image
                                            source={require('../../../asset/icons/btn_submit.png')}
                                            style={{
                                                width: 80,
                                                height: 80,
                                            }}></Image>
                                    </TouchableWithoutFeedback>
                                </View>
                            </Card>
                        </View>
                    </View>
                )}
            </>
        );
    }
}
