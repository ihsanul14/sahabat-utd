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
    TouchableWithoutFeedback,
    ScrollView,
    ActivityIndicator,
} from 'react-native';
import {Card, ListItem, Icon, CheckBox} from 'react-native-elements';
import {StackActions} from '@react-navigation/native';
import {Button, Col, Grid, Input, Item, Root, Toast} from 'native-base';
import DateTimePicker from '@react-native-community/datetimepicker';
import PhoneInput from 'react-native-phone-input';
import CountryPicker, {
    CountryCode,
    Country,
    DARK_THEME,
} from 'react-native-country-picker-modal';
import {event} from 'react-native-reanimated';
import Axios from 'axios';
import config from '../../config/contansta';
import TimePickerCustom from './TimePickerCustom';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class index extends Component {
    state = {
        name: '',
        birth_date: new Date(),
        phone_number: '',
        email: '',
        image_identity: '',
        user_type: 'GUEST',
        country: null,
        countryCode: null,
        isLoading: false,
    };

    onSelect(country: Country) {
        this.setState({
            country: country,
            countryCode: country.callingCode[0],
        });
    }

    moveLoginPage() {
        this.props.navigation.dispatch(StackActions.replace('Login'));
    }

    register() {
        const data = {
            name: this.state.name,
            email: this.state.email,
            birth_date: this.state.birth_date,
            phone_number: `${this.state.countryCode}${this.state.phone_number}`,
            user_type: 'GUEST',
        };
        console.log(data);
        const {name, birth_date, email, phone_number} = this.state;
        if (name == '' || email == '') {
            Alert.alert('Kosong!', 'Form tidak boleh dikosongkan.');
        } else {
            this.setState({
                isLoading: true,
            });
            Axios.post(`${config.institution}/auth/register`, data)
                .then((res) => {
                    this.setState({
                        name: '',
                        birth_date: new Date(),
                        phone_number: '',
                        email: '',
                        image_identity: '',
                        user_type: 'GUEST',
                        country: null,
                        countryCode: null,
                        isLoading: false,
                    });
                    Alert.alert(
                        'Status',
                        'Verifikasi akun anda melalui email terdaftar',
                    );
                    console.log('BERHASIL', res.data);
                })
                .catch((err) => {
                    this.setState({
                        name: '',
                        birth_date: new Date(),
                        phone_number: '',
                        email: '',
                        image_identity: '',
                        user_type: 'GUEST',
                        country: null,
                        countryCode: null,
                        isLoading: false,
                    });
                    Alert.alert('Status', err.response.data.message);
                    console.log('GAGAL', err.response.data);
                });
            // this.props.navigation.dispatch(StackActions.replace('LoginOtp'));
        }
    }

    getPicture() {
        // this.props.navigation.navigate('CaptureProfile');
    }

    showBirth() {
        // this.setState({
        //     show: true,
        // });
    }

    setDate(newDate) {
        // const date = new Date(newDate).format('y/m/d');
        // console.log('DATEEEEE', date);
        this.setState({birth_date: newDate});
    }

    formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('-');
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
                        <ScrollView>
                            <View style={styles.top}>
                                <Image
                                    source={require('../../../asset/shared/hero.png')}
                                    style={styles.logo}
                                />
                            </View>
                            <View style={styles.cardPadding}>
                                <Card containerStyle={styles.cardSection}>
                                    <View style={styles.container}>
                                        <View style={styles.item}>
                                            <View>
                                                <Text
                                                    style={styles.login}
                                                    onPress={() =>
                                                        this.moveLoginPage()
                                                    }>
                                                    Login
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={styles.item}>
                                            <Text style={styles.signup}>
                                                Signup
                                            </Text>
                                        </View>
                                    </View>
                                    <TextInput
                                        placeholder="Nama Pengguna"
                                        underlineColorAndroid="transparent"
                                        style={styles.TextInputStyleClass}
                                        onChangeText={(name) =>
                                            this.setState({name})
                                        }
                                        value={this.state.name}
                                    />
                                    <TimePickerCustom />
                                    <TextInput
                                        placeholder="Email"
                                        underlineColorAndroid="transparent"
                                        style={[styles.TextInputStyleClass]}
                                        onChangeText={(email) =>
                                            this.setState({email})
                                        }
                                        value={this.state.email}
                                        keyboardType="email-address"
                                    />
                                    {/* <View
                                        style={{
                                            backgroundColor: '#eee',
                                            borderRadius: 10,
                                            borderColor: '#ddd',
                                            padding: 10,
                                        }}>
                                        <CountryPicker
                                            onSelect={(val) => {
                                                console.log(val);
                                                this.onSelect(val);
                                            }}
                                            // theme={DARK_THEME}
                                        />
                                    </View> */}
                                    {/* <Grid>
                                        <Col>
                                            <Text
                                                style={{
                                                    textAlign: 'center',
                                                    height: 50,
                                                    borderWidth: 2,
                                                    borderRadius: 20,
                                                    marginBottom: 20,
                                                    marginTop: 22,
                                                    borderColor: '#ddd',
                                                    textAlignVertical: 'center',
                                                }}>
                                                {this.state.countryCode}
                                            </Text>
                                        </Col>
                                        <Col size={3}>
                                            <TextInput
                                                placeholder="Nomor hp"
                                                underlineColorAndroid="transparent"
                                                style={[
                                                    styles.TextInputStyleClass,
                                                    {marginTop: 22},
                                                ]}
                                                onChangeText={(phone_number) =>
                                                    this.setState({
                                                        phone_number,
                                                    })
                                                }
                                                value={this.state.phone_number}
                                                keyboardType="numeric"
                                            />
                                        </Col>
                                    </Grid> */}

                                    {/* <TextInput
                                        placeholder="Nomor hp"
                                        underlineColorAndroid="transparent"
                                        style={styles.TextInputStyleClass}
                                        onChangeText={(phone_number) =>
                                            this.setState({
                                                phone_number,
                                            })
                                        }
                                        value={this.state.phone_number}
                                        keyboardType="numeric"
                                    /> */}
                                    <Item style={styles.TextInputStyleClass}>
                                        <Text
                                            style={{
                                                backgroundColor: '#ddd',
                                                padding: 5,
                                                borderRadius: 10,
                                            }}>
                                            +62
                                        </Text>
                                        <Input
                                            placeholder="Nomor hp"
                                            onChangeText={(phone_number) =>
                                                this.setState({
                                                    phone_number,
                                                })
                                            }
                                            maxLength={14}
                                            value={this.state.phone_number}
                                            keyboardType="numeric"
                                        />
                                    </Item>
                                    {/* <TouchableWithoutFeedback
                                onPress={() => this.getPicture()}>
                                <Image
                                    source={require('../../../asset/icons/camera.png')}
                                    style={{
                                        width: 65,
                                        height: 65,
                                        alignSelf: 'center',
                                    }}></Image>
                            </TouchableWithoutFeedback> */}
                                    {/* <Grid>
                                <Col>
                                    <CheckBox
                                        checked={true}
                                        title="Akun referal"></CheckBox>
                                </Col>
                                <Col>
                                    <TextInput
                                        placeholder="Masukkan Kode"
                                        underlineColorAndroid="transparent"
                                        style={styles.TextInputStyleClassCustom}
                                        keyboardType="numeric"
                                        onChangeText={(no_hp) =>
                                            this.setState({no_hp})
                                        }
                                    />
                                </Col>
                            </Grid>
                             */}
                                    <TouchableWithoutFeedback
                                        style={styles.btnSubmit}
                                        onPress={() => this.register()}>
                                        <Image
                                            source={require('../../../asset/icons/btn_submit.png')}
                                            style={{
                                                width: 80,
                                                height: 80,
                                                alignSelf: 'center',
                                            }}></Image>
                                    </TouchableWithoutFeedback>
                                </Card>
                            </View>
                        </ScrollView>
                    </View>
                )}
            </>
        );
    }
}
