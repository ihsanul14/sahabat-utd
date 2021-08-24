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
import {
    Card,
    ListItem,
    Icon,
    ButtonGroup,
    CheckBox,
} from 'react-native-elements';
import {
    ScrollView,
    TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import {Button} from 'native-base';
import Axios from 'axios';
import {StackActions} from '@react-navigation/native';
import config from '../config/contansta';

export default class index extends Component {
    state = {
        diabetes: false,
        penyakit_jantung: false,
        hipertensi: false,
        kanker: false,
        gangguan_imun: false,
        gagal_ginjal: false,
        gagal_hati: false,
        lainnya: false,
        lainnya_value: 'null',
        isLoading: false,
        name: undefined,
    };

    UNSAFE_componentWillMount() {
        this.fetchData();
    }

    storeMedis() {
        const data = {
            diabetes: this.state.diabetes,
            penyakit_jantung: this.state.penyakit_jantung,
            hipertensi: this.state.hipertensi,
            kanker: this.state.kanker,
            gangguan_imun: this.state.gangguan_imun,
            gagal_ginjal: this.state.gagal_ginjal,
            gagal_hati: this.state.gagal_hati,
        };
        this.setState({
            isLoading: true,
        });
        Axios.post(`${config.health}/profile/update`, data, {
            headers: {
                Authorization: `Bearer ${this.props.route.params.token}`,
            },
        })
            .then((res) => {
                console.log('informasi_medis_success', res.data);
                this.setState(
                    {
                        isLoading: false,
                    },
                    () => {
                        this.props.navigation.dispatch(
                            StackActions.replace('Dashboard', {
                                token: this.props.route.params.token,
                            }),
                        );
                    },
                );
            })
            .catch((err) => {
                this.setState({
                    isLoading: false,
                });
                console.log('informasi_medis_error', err.response.data);
            });
    }

    fetchData() {
        Axios.get(`${config.institution}/user/decoded`, {
            headers: {
                Authorization: `Bearer ${this.props.route.params.token}`,
            },
        })
            .then((res) => {
                // console.log('fetchData_informasi_medis', res.data);
                this.setState({
                    name: res.data.data.name,
                });
            })
            .catch((err) => {
                // console.log(
                //     'ERROR_informasi_kesehatan_error',
                //     err.response.data,
                // );
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
                        <ScrollView style={{flex: 1}}>
                            <View style={styles.top}>
                                <Image
                                    source={require('../../asset/shared/bg_user.png')}
                                    style={styles.logo}
                                />
                            </View>
                            <View style={[{flex: 1}]}>
                                <View
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
                                        {this.state.name}
                                    </Text>
                                </View>
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
                                                    textDecorationLine:
                                                        'underline',
                                                }}>
                                                Update Informasi Medis
                                            </Text>
                                        </View>
                                        <CheckBox
                                            checked={this.state.diabetes}
                                            title="Diabetes"
                                            onPress={() =>
                                                this.setState({
                                                    diabetes: !this.state
                                                        .diabetes,
                                                })
                                            }
                                        />
                                        <CheckBox
                                            checked={
                                                this.state.penyakit_jantung
                                            }
                                            title="Penyakit Jantung"
                                            onPress={() =>
                                                this.setState({
                                                    penyakit_jantung: !this
                                                        .state.penyakit_jantung,
                                                })
                                            }
                                        />
                                        <CheckBox
                                            checked={this.state.hipertensi}
                                            title="Hipertensi"
                                            onPress={() =>
                                                this.setState({
                                                    hipertensi: !this.state
                                                        .hipertensi,
                                                })
                                            }
                                        />
                                        <CheckBox
                                            checked={this.state.kanker}
                                            title="Kanker"
                                            onPress={() =>
                                                this.setState({
                                                    kanker: !this.state.kanker,
                                                })
                                            }
                                        />
                                        <CheckBox
                                            checked={this.state.gangguan_imun}
                                            title="Gangguan Imun"
                                            onPress={() =>
                                                this.setState({
                                                    gangguan_imun: !this.state
                                                        .gangguan_imun,
                                                })
                                            }
                                        />
                                        <CheckBox
                                            checked={this.state.gagal_ginjal}
                                            title="Gagal Ginjal"
                                            onPress={() =>
                                                this.setState({
                                                    gagal_ginjal: !this.state
                                                        .gagal_ginjal,
                                                })
                                            }
                                        />
                                        <CheckBox
                                            checked={this.state.gagal_hati}
                                            title="Gagal Hati"
                                            onPress={() =>
                                                this.setState({
                                                    gagal_hati: !this.state
                                                        .gagal_hati,
                                                })
                                            }
                                        />
                                        {/* <CheckBox
                                    checked={this.state.lainnya}
                                    title="Lainnya"
                                />
                                <TextInput
                                    underlineColorAndroid="transparent"
                                    style={styles.TextInputStyleClass}
                                    value={this.state.lainnya_value}
                                /> */}
                                        <Text></Text>
                                    </ScrollView>
                                    <View style={styles.btnSubmit}>
                                        <TouchableWithoutFeedback
                                            onPress={() => this.storeMedis()}>
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
                            <Text></Text>
                        </ScrollView>
                    </View>
                )}
            </>
        );
    }
}
