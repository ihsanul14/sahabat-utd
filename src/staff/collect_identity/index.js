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
} from 'react-native';
import {Card, ListItem, Icon, ButtonGroup} from 'react-native-elements';
import {
    ScrollView,
    TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import {Button} from 'native-base';
import Axios from 'axios';
import {StackActions} from '@react-navigation/native';
import config from '../config/contansta';
import HeroProfile from '../shared/hero_profile/HeroProfile';

export default class index extends Component {
    state = {
        data: {},
        message: '',
    };

    UNSAFE_componentWillMount() {
        this.fetchData();
    }

    fetchData() {
        Axios.get(`${config.institution}/user/decoded`, {
            headers: {
                Authorization: `Bearer ${'this.props.route.params.token'}`,
            },
        })
            .then((res) => {
                console.log('COLLECT_IDENTITY', res.data);
                this.setState({
                    data: res.data.data,
                    message: res.data.message,
                });
            })
            .catch((err) => {
                console.log('ERROR_COLLECT_IDENTITY', err.response.data);
            });
    }

    collectDataSubmit() {
        this.props.navigation.dispatch(
            StackActions.replace('Dashboard', {
                token: 'this.props.route.params.token',
            }),
        );
    }

    moveProductivity() {
        // this.props.navigation.dispatch(StackActions.replace('Productivity'));
    }

    render() {
        return (
            <View style={styles.MainContainer}>
                <ScrollView style={{flex: 1}}>
                    <HeroProfile />
                    <View>
                        <View style={{alignSelf: 'center'}}>
                            <Text
                                style={{
                                    color: '#fff',
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                }}>
                                {this.state.data.name}
                            </Text>
                        </View>
                        {/* <View
                            style={{
                                alignSelf: 'center',
                                paddingTop: 5,
                            }}>
                            <Text
                                style={{
                                    color: '#fff',
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                }}>
                                Dede Kurniawan (statis)
                            </Text>
                        </View> */}
                        <Card containerStyle={styles.cardSection}>
                            <ScrollView>
                                <View
                                    style={{
                                        alignSelf: 'center',
                                        paddingTop: 5,
                                        paddingBottom: 35,
                                    }}>
                                    <Text
                                        style={{
                                            color: '#FF5976',
                                            textDecorationLine: 'underline',
                                        }}>
                                        Update Informasi Identitas
                                    </Text>
                                </View>
                                <TextInput
                                    placeholder="Nama"
                                    underlineColorAndroid="transparent"
                                    style={styles.TextInputStyleClass}
                                    value={this.state.data.name}
                                />
                                <TextInput
                                    placeholder="NIK"
                                    underlineColorAndroid="transparent"
                                    style={styles.TextInputStyleClass}
                                    value={this.state.data.identity_number}
                                />
                                <TextInput
                                    placeholder="Nomor Telepon"
                                    underlineColorAndroid="transparent"
                                    style={styles.TextInputStyleClass}
                                    value={this.state.data.phone_number}
                                />
                                <TextInput
                                    placeholder="Negara"
                                    underlineColorAndroid="transparent"
                                    style={styles.TextInputStyleClass}
                                    value={this.state.data.nationality}
                                />
                                <TextInput
                                    placeholder="Lokasi anda"
                                    underlineColorAndroid="transparent"
                                    style={styles.TextInputStyleClass}
                                    value={this.state.data.coordinate}
                                />
                                <TextInput
                                    placeholder="Email"
                                    underlineColorAndroid="transparent"
                                    style={styles.TextInputStyleClass}
                                    onChangeText={(email) =>
                                        this.setState({email})
                                    }
                                    value={this.state.data.email}
                                />
                                <TextInput
                                    placeholder="Alamat"
                                    underlineColorAndroid="transparent"
                                    style={styles.TextInputStyleClass}
                                    onChangeText={(alamat) =>
                                        this.setState({alamat})
                                    }
                                    value={this.state.data.alamat}
                                />
                                {/* <Image
                                    source={require('../../asset/icons/camera.png')}
                                    style={{
                                        width: 65,
                                        height: 65,
                                        alignSelf: 'center',
                                    }}></Image> */}
                                <Text></Text>
                            </ScrollView>
                            <View style={styles.btnSubmit}>
                                <TouchableWithoutFeedback
                                    onPress={() => this.collectDataSubmit()}>
                                    <Image
                                        source={require('../../asset/icons/btn_submit.png')}
                                        style={{
                                            width: 80,
                                            height: 80,
                                        }}></Image>
                                </TouchableWithoutFeedback>
                            </View>
                        </Card>
                        <Text></Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
