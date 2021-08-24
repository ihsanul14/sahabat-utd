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
import QRCode from 'react-native-qrcode-svg';
import Axios from 'axios';
import config from '../config/contansta';
import {StackActions} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

export default class index extends Component {
    constructor(props) {
        super(props);
        this.didBlurListener = this.props.navigation.addListener(
            'blur',
            (obj) => {
                console.log('LOST_FOCUS');
                this.clearIntervalFunc();
            },
        );
    }

    state = {
        name: 'Dede Kurniawan',
        token: '',
        statusInterval: 0,
        status: false,
        data: {},
        message: '',
        statusClockIn: '',
        afterClockIn: 'on',
        clockInStatus: 'on',
        clockOutStatus: 'on',
        isLoading: false,
    };

    openDashboard() {
        // this.props.navigation.navigate('Dashboard');
    }

    UNSAFE_componentWillMount() {
        this.loadDataFirst();
        // this.setState = (state, callback) => {
        //     return;
        // };
        AsyncStorage.getItem('clockInStatus').then((value) => {
            if (value == null) {
                this.setState({
                    clockInStatus: 'off',
                });
            } else {
                this.setState({
                    clockInStatus: value,
                });
            }
        });
        AsyncStorage.getItem('clockOutStatus').then((value) => {
            if (value == null) {
                this.setState({
                    clockOutStatus: 'off',
                });
            } else {
                this.setState({
                    clockOutStatus: value,
                });
            }
        });
    }

    loadDataFirst() {
        this.setState({
            isLoading: true,
        });
        const tokenStr = this.props.route.params.token;
        Axios.get(`${config.institution}/user/qr-data`, {
            headers: {
                Authorization: `Bearer ${tokenStr}`,
            },
        }).then((res) => {
            this.setState({
                token: res.data.data,
                name: res.data.data.name,
                isLoading: false,
            });
        });

        console.log('TES');
        this.setState({
            statusInterval: setInterval(() => this.afterScanned(), 5000),
            status: false,
        });
    }

    clearIntervalFunc() {
        clearInterval(this.state.statusInterval);
    }

    moveScreenClockIn(data) {
        console.log('SUDAH MASUK');
        const tokenStr = this.props.route.params.token;
        console.log('moveScreenClockIn', data.data);
        this.props.navigation.dispatch(
            StackActions.replace('CovidRisk', {
                token: tokenStr,
                data: data.data,
                message: data.message,
            }),
        );
        clearInterval(this.state.statusInterval);
    }

    afterScanned() {
        const tokenStr = this.props.route.params.token;
        console.log('afterScanned_token', tokenStr);
        Axios.post(`${config.productivity}/attendance/user/enter`, null, {
            headers: {
                Authorization: `Bearer ${tokenStr}`,
            },
        })
            .then((res) => {
                console.log('CEK_CODE_ENTER', res.data.code);
                console.log('CEK_VALUE_ENTER', this.state.clockInStatus);
                if (this.state.clockInStatus == 'off') {
                    this.setState(
                        {
                            clockInStatus: 'on',
                            clockOutStatus: 'off',
                        },
                        () => {
                            console.log(
                                'CLOCK_OUT_CLOCK_IN==========================================',
                                this.state.clockOutStatus,
                            );
                            AsyncStorage.removeItem('clockOutStatus');
                            AsyncStorage.setItem('clockOutStatus', 'off');
                            AsyncStorage.setItem('clockInStatus', 'on');
                            this.moveScreenClockIn(res.data);
                        },
                    );
                }
                console.log(
                    'FIRST_DILUAR===================',
                    this.state.clockOutStatus,
                );
            })
            .catch((enter) => {
                Axios.post(
                    `${config.productivity}/attendance/user/exit`,
                    null,
                    {
                        headers: {
                            Authorization: `Bearer ${tokenStr}`,
                        },
                    },
                )
                    .then((response) => {
                        console.log(
                            'FIRST11111111111111===================',
                            this.state.clockOutStatus,
                        );
                        console.log('CEK_CODE_EXIT', response.data.code);
                        console.log(
                            'CEK_VALUE_EXIT',
                            this.state.clockOutStatus,
                        );
                        console.log('EXIT', this.state.clockOutStatus);
                        if (this.state.clockOutStatus == 'off') {
                            console.log(
                                'FIRST===================',
                                this.state.clockOutStatus,
                            );
                            this.setState(
                                {
                                    clockOutStatus: 'on',
                                    clockInStatus: 'off',
                                },
                                () => {
                                    console.log(
                                        'CLOCK_IN_CLOCK_OUT=====================================================',
                                        this.state.clockInStatus,
                                    );
                                    AsyncStorage.removeItem('clockOutStatus');
                                    AsyncStorage.setItem(
                                        'clockInStatus',
                                        'off',
                                    );
                                    AsyncStorage.setItem(
                                        'clockOutStatus',
                                        'on',
                                    );
                                    this.props.navigation.dispatch(
                                        StackActions.replace('ClockOut', {
                                            data: response.data.data,
                                            token: tokenStr,
                                        }),
                                    );
                                    clearInterval(this.state.statusInterval);
                                },
                            );
                        } else {
                            console.log(
                                'SECOND===================',
                                this.state.clockOutStatus,
                            );
                        }
                    })
                    .catch((error) => {
                        console.log(
                            'AFTERSCANNED_ERR_EXIT',
                            error.response.data,
                        );
                    });
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
                    <View style={styles.MainContainer}>
                        <View style={styles.top}>
                            <Image
                                source={require('../../asset/shared/hero.png')}
                                style={styles.logo}
                            />
                        </View>
                        <View>
                            <View style={styles.wrapLabelName}>
                                <Text style={styles.labelName}>
                                    Halo, {this.state.name}
                                </Text>
                                <Text style={{color: 'white', marginTop: 5}}>
                                    Silahkan tunjukan QR Code ini kepada
                                    {'\n'} Petugas keamanan!
                                </Text>
                            </View>
                            <Card containerStyle={styles.cardSection}>
                                <QRCode
                                    value={this.state.token}
                                    size={300}></QRCode>
                            </Card>
                        </View>
                    </View>
                )}
            </>
        );
    }
}
