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
import {StackActions} from '@react-navigation/native';
import Axios from 'axios';
import {Root, Toast} from 'native-base';
import config from '../../config/contansta';
import Hero from '../../shared/hero/Hero';

export default class index extends Component {
    state = {
        username: '',
        password: '',
        isLoading: false,
    };

    login() {
        const {username, password} = this.state;
        if (username == '' || password == '') {
            Alert.alert('Kosong!', 'Form tidak boleh dikosongkan.');
        } else {
            this.setState({
                isLoading: true,
            });
            Axios.post(`${config.institution}/auth/login`, {
                username: username,
                password: password,
            })
                .then((res) => {
                    console.log(res.data);
                    this.setState({
                        isLoading: false,
                    });
                    if (res.data.code == 200) {
                        this.props.navigation.dispatch(
                            StackActions.replace('LoginOtp', {
                                username: this.state.username,
                                password: this.state.password,
                            }),
                        );
                    } else {
                        Alert.alert('Error', res.data.message);
                    }
                })
                .catch((err) => {
                    Alert.alert('Error', 'Login Gagal!');
                    console.log(err);
                });
        }
    }

    moveRegisterPage() {
        this.props.navigation.dispatch(StackActions.replace('Register'));
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
                                        <Text
                                            style={styles.signup}
                                            onPress={() =>
                                                this.moveRegisterPage()
                                            }>
                                            Signup
                                        </Text>
                                    </View>
                                </View>
                                <TextInput
                                    placeholder="Username/Email"
                                    underlineColorAndroid="transparent"
                                    style={styles.TextInputStyleClass}
                                    onChangeText={(username) =>
                                        this.setState({username})
                                    }
                                    value={this.state.username}
                                />
                                <TextInput
                                    placeholder="Kata Sandi"
                                    underlineColorAndroid="transparent"
                                    secureTextEntry={true}
                                    style={styles.TextInputStyleClass}
                                    onChangeText={(password) =>
                                        this.setState({password})
                                    }
                                />
                                <View style={styles.btnSubmit}>
                                    <TouchableWithoutFeedback
                                        onPress={() => this.login()}>
                                        <Image
                                            source={require('../../../asset/icons/btn_submit.png')}
                                            style={{
                                                width: 80,
                                                height: 80,
                                            }}
                                        />
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
