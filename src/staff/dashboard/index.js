import {Button} from 'native-base';
import React, {Component} from 'react';
import {Alert, Image, Text, View} from 'react-native';
import {Card} from 'react-native-elements';
import styles from './styles';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {
    ScrollView,
    TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import Axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import config from '../config/contansta';
import {StackActions} from '@react-navigation/native';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import Geolocation from '@react-native-community/geolocation';
import MapView, {Marker} from 'react-native-maps';

export default class index extends Component {
    state = {
        totalKasus: '',
        sembuh: '',
        meninggal: '',
        token: '',
        latitude: 5.19135452,
        longitude: 97.14677195,
        latitudeDelta: 0.009,
        longitudeDelta: 0.009,
    };

    numberFormat(n) {
        if (n < 1e3) return n;
        if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + 'K';
        if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + 'M';
        if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + 'B';
        if (n >= 1e12) return +(n / 1e12).toFixed(1) + 'T';
    }

    componentDidMount() {
        this.enableGps();
        this.fetchData();
        this.checkLoggedIn();
    }

    checkLoggedIn() {
        AsyncStorage.getItem('token').then((value) => {
            if (value == null) {
                this.props.navigation.dispatch(StackActions.replace('Login'));
            } else {
                this.setState(
                    {
                        token: value,
                    },
                    () => {
                        this.fetchData();
                        Axios.get(`${config.institution}/user/qr-data`, {
                            headers: {
                                Authorization: `Bearer ${value}`,
                            },
                        }).then((res) => {
                            AsyncStorage.setItem('qrcode', res.data.data);
                        });
                    },
                );
            }
        });
    }

    fetchData() {
        const self = this;
        Axios.get('https://covid19.keponet.com/api/negara/indonesia')
            .then(function (response) {
                console.log(response.data);
                self.setState({
                    totalKasus: self.numberFormat(response.data[0].Confirmed),
                    sembuh: self.numberFormat(response.data[0].Recovered),
                    meninggal: self.numberFormat(response.data[0].Deaths),
                });
            })
            .catch(function (error) {
                console.log(error.response);
            });
    }

    updateData() {
        this.props.navigation.navigate('InformasiKesehatan', {
            token: this.state.token,
        });
    }

    showProfile() {
        this.props.navigation.navigate('Profile', {
            token: this.state.token,
        });
    }

    btnRiwayat() {
        Alert.alert('Menu - Lihat Sejarah Resiko');
        // this.props.navigation.navigate('ScanQrClockOut');
    }

    ujiPcr() {
        // Alert.alert('Menu - Uji PCR');
        this.props.navigation.navigate('UjiPcrIndex');
    }

    btnKonsultasi() {
        Alert.alert('Menu - Hubungi Dokter');
        // this.props.navigation.navigate('ScanQrClockOut');
    }

    qrcode() {
        this.props.navigation.navigate('ScanQrResult', {
            token: this.state.token,
        });
    }

    logout() {
        this.confirmLogout();
    }

    confirmLogout() {
        Alert.alert(
            'Keluar Aplikasi',
            'Apakah anda ingin keluar ?',
            [
                {
                    text: 'Batal',
                    onPress: () => {},
                    style: 'cancel',
                },
                {
                    text: 'Setuju',
                    onPress: () => {
                        AsyncStorage.clear();
                        this.props.navigation.dispatch(
                            StackActions.replace('Loading'),
                        );
                    },
                },
            ],
            {cancelable: false},
        );
    }

    enableGps() {
        RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
            interval: 10000,
            fastInterval: 5000,
        })
            .then((data) => {
                console.log(data);
                // The user has accepted to enable the location services
                // data can be :
                //  - "already-enabled" if the location services has been already enabled
                //  - "enabled" if user has clicked on OK button in the popup
                this.getCurrentLocation();
            })
            .catch((err) => {
                console.log(err);
                // The user has not accepted to enable the location services or something went wrong during the process
                // "err" : { "code" : "ERR00|ERR01|ERR02", "message" : "message"}
                // codes :
                //  - ERR00 : The user has clicked on Cancel button in the popup
                //  - ERR01 : If the Settings change are unavailable
                //  - ERR02 : If the popup has failed to open
            });
    }

    getCurrentLocation() {
        console.log('DATAAAAAAA===');
        Geolocation.getCurrentPosition(
            (position) => {
                // console.log(initialPosition);
                const data = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                };
                Axios.post(
                    `${config.location}/location/user/create`,
                    {
                        coordinate: JSON.stringify(data),
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${this.state.token}`,
                        },
                    },
                )
                    .then((res) => {
                        console.log('STORE_CURRENT_LOCATION', res.data.message);
                    })
                    .catch((err) => {
                        console.log(
                            'ERROR_CURRENT_LOCATION',
                            err.response.data,
                        );
                    });
                console.log('AFTER AXIOS');
                this.setState({
                    longitude: position.coords.longitude,
                    latitude: position.coords.latitude,
                });
            },
            () => {
                // Alert.alert('Error', JSON.stringify(error));
            },
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
        );
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <ScrollView style={{flex: 1}}>
                    <View
                        style={{
                            alignSelf: 'flex-end',
                            position: 'absolute',
                            zIndex: 1,
                            top: 15,
                            right: 10,
                        }}>
                        <TouchableWithoutFeedback onPress={() => this.qrcode()}>
                            <Image
                                source={require('../../asset/icons/scanner.png')}
                                style={{
                                    width: 30,
                                    height: 30,
                                    position: 'relative',
                                }}
                            />
                        </TouchableWithoutFeedback>
                    </View>
                    <View
                        style={{
                            alignSelf: 'flex-end',
                            position: 'absolute',
                            zIndex: 1,
                            top: 15,
                            right: 58,
                        }}>
                        <TouchableWithoutFeedback
                            onPress={() => this.showProfile()}>
                            <Image
                                source={require('../../asset/icons/user.png')}
                                style={{
                                    width: 30,
                                    height: 30,
                                    position: 'relative',
                                }}
                            />
                        </TouchableWithoutFeedback>
                    </View>
                    <View
                        style={{
                            alignSelf: 'flex-end',
                            position: 'absolute',
                            zIndex: 1,
                            top: 15,
                            right: 105,
                        }}>
                        <TouchableWithoutFeedback onPress={() => this.logout()}>
                            <Image
                                source={require('../../asset/icons/logout.png')}
                                style={{
                                    width: 30,
                                    height: 30,
                                    position: 'relative',
                                }}
                            />
                        </TouchableWithoutFeedback>
                    </View>

                    <View style={styles.top}>
                        <Image
                            source={require('../../asset/shared/hero.png')}
                            style={styles.logo}
                        />
                    </View>
                    <View>
                        <Card containerStyle={styles.cardSection}>
                            <View style={styles.containerTop}>
                                <View style={styles.itemTop}>
                                    <Text>Tinjauan Khusus</Text>
                                </View>
                                <View style={[styles.itemTop]}>
                                    <Button rounded style={styles.infoCountry}>
                                        <Text>Indonesia</Text>
                                    </Button>
                                </View>
                            </View>
                            <Text
                                style={{
                                    fontSize: 18,
                                    paddingVertical: 15,
                                    marginTop: 10,
                                }}>
                                COVID-19
                            </Text>
                            <Button
                                rounded
                                style={{
                                    backgroundColor: '#ddd',
                                    display: 'flex',
                                    alignSelf: 'center',
                                    padding: 11,
                                    height: 20,
                                    marginBottom: 10,
                                }}>
                                <Text>{`${new Date().getFullYear()}-${(
                                    '0' +
                                    (new Date().getMonth() + 1)
                                ).slice(-2)}-${(
                                    '0' + new Date().getDate()
                                ).slice(-2)}`}</Text>
                            </Button>

                            <View style={styles.container}>
                                <View style={styles.item}>
                                    <Text style={styles.labelInfo}>
                                        Total kasus
                                    </Text>
                                    <Text style={styles.infoLabelNumber}>
                                        {this.state.totalKasus}
                                    </Text>
                                </View>
                                <View style={styles.item}>
                                    <Text style={styles.labelInfo}>Sembuh</Text>
                                    <Text
                                        style={[
                                            styles.infoLabelNumber,
                                            {color: 'green'},
                                        ]}>
                                        {this.state.sembuh}
                                    </Text>
                                </View>
                                <View style={styles.item}>
                                    <Text style={styles.labelInfo}>
                                        Meninggal
                                    </Text>
                                    <Text
                                        style={[
                                            styles.infoLabelNumber,
                                            {color: 'red'},
                                        ]}>
                                        {this.state.meninggal}
                                    </Text>
                                </View>
                            </View>
                        </Card>
                        <Text></Text>
                    </View>

                    <View
                        style={{
                            height: 300,
                            paddingHorizontal: 15,
                        }}>
                        <View
                            style={{
                                borderColor: '#ccc',
                                borderWidth: 1,
                                height: '100%',
                                width: '100%',
                                backgroundColor: 'red',
                            }}>
                            <MapView
                                style={{
                                    flex: 1,
                                }}
                                region={{
                                    latitude: this.state.latitude,
                                    longitude: this.state.longitude,
                                    latitudeDelta: this.state.latitudeDelta,
                                    longitudeDelta: this.state.longitudeDelta,
                                }}
                                zoomEnabled={true}
                                showsUserLocation={true}
                                onRegionChangeComplete={(region) =>
                                    this.setState(region)
                                }>
                                <Marker
                                    coordinate={{
                                        latitude: this.state.latitude,
                                        longitude: this.state.longitude,
                                    }}
                                />
                            </MapView>
                        </View>
                    </View>

                    <Grid>
                        <Row>
                            <Col>
                                <TouchableWithoutFeedback
                                    onPress={() => this.updateData()}>
                                    <Card
                                        containerStyle={{
                                            // display: 'flex',
                                            borderRadius: 10,
                                        }}>
                                        <Image
                                            source={require('../../asset/icons/reload.png')}
                                            style={{
                                                width: 50,
                                                height: 50,
                                                alignSelf: 'center',
                                            }}></Image>
                                        <Text
                                            style={{
                                                alignSelf: 'center',
                                                textAlign: 'center',
                                            }}>
                                            Perbaharui {'\n'}Data
                                        </Text>
                                    </Card>
                                </TouchableWithoutFeedback>
                            </Col>
                            <Col>
                                <TouchableWithoutFeedback
                                    onPress={() => this.btnRiwayat()}>
                                    <Card
                                        containerStyle={{
                                            // display: 'flex',
                                            borderRadius: 10,
                                        }}>
                                        <Image
                                            source={require('../../asset/icons/riwayat.png')}
                                            style={{
                                                width: 50,
                                                height: 50,
                                                alignSelf: 'center',
                                            }}></Image>
                                        <Text
                                            style={{
                                                alignSelf: 'center',
                                                textAlign: 'center',
                                            }}>
                                            Riwayat {'\n'}Resiko
                                        </Text>
                                    </Card>
                                </TouchableWithoutFeedback>
                            </Col>
                        </Row>
                    </Grid>
                    <Grid>
                        <Col>
                            <TouchableWithoutFeedback
                                onPress={() => this.ujiPcr()}>
                                <Card
                                    containerStyle={{
                                        display: 'flex',
                                        borderRadius: 10,
                                    }}>
                                    <Image
                                        source={require('../../asset/icons/uji_pcr.png')}
                                        style={{
                                            width: 50,
                                            height: 50,
                                            alignSelf: 'center',
                                        }}></Image>
                                    <Text
                                        style={{
                                            alignSelf: 'center',
                                            textAlign: 'center',
                                        }}>
                                        Uji {'\n'}PCR
                                    </Text>
                                </Card>
                            </TouchableWithoutFeedback>
                        </Col>
                        <Col>
                            <TouchableWithoutFeedback
                                onPress={() => this.btnKonsultasi()}>
                                <Card
                                    containerStyle={{
                                        display: 'flex',
                                        borderRadius: 10,
                                    }}>
                                    <Image
                                        source={require('../../asset/icons/konsultasi.png')}
                                        style={{
                                            width: 50,
                                            height: 50,
                                            alignSelf: 'center',
                                        }}></Image>
                                    <Text
                                        style={{
                                            alignSelf: 'center',
                                            textAlign: 'center',
                                        }}>
                                        Hubungi {'\n'}Dokter
                                    </Text>
                                </Card>
                            </TouchableWithoutFeedback>
                        </Col>
                    </Grid>
                    <Text></Text>
                </ScrollView>
            </View>
        );
    }
}
