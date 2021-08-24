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
        pregnancy: false,
        diabetic: false,
        heart_disease: false,
        hypertension: false,
        malignancy: false,
        autoimmune: false,
        chronic_kidney: false,
        liver: false,
        lainnya: false,
        lainnya_value: 'null',
        isLoading: false,
        name: undefined,
    };

    componentDidMount() {
        this.fetchData();
    }

    storeMedis() {
        const data = {
            pregnancy: this.state.pregnancy,
            diabetic: this.state.diabetic,
            heart_disease: this.state.heart_disease,
            hypertension: this.state.hypertension,
            malignancy: this.state.malignancy,
            autoimmune: this.state.autoimmune,
            chronic_kidney: this.state.chronic_kidney,
            liver: this.state.liver,
            weight: this.props.route.params.weight,
            height: this.props.route.params.height,
            blood_type: this.props.route.params.blood_type,
            age: this.props.route.params.age,
        };
        console.log('token_', `${this.props.route.params.token}`);
        console.log('data_store', data);
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
                                            checked={this.state.pregnancy}
                                            title="Kehamilan"
                                            onPress={() =>
                                                this.setState({
                                                    pregnancy: !this.state
                                                        .pregnancy,
                                                })
                                            }
                                        />
                                        <CheckBox
                                            checked={this.state.diabetic}
                                            title="Diabetes"
                                            onPress={() =>
                                                this.setState({
                                                    diabetic: !this.state
                                                        .diabetic,
                                                })
                                            }
                                        />
                                        <CheckBox
                                            checked={this.state.heart_disease}
                                            title="Penyakit Jantung"
                                            onPress={() =>
                                                this.setState({
                                                    heart_disease: !this.state
                                                        .heart_disease,
                                                })
                                            }
                                        />
                                        <CheckBox
                                            checked={this.state.hypertension}
                                            title="Hipertensi"
                                            onPress={() =>
                                                this.setState({
                                                    hypertension: !this.state
                                                        .hypertension,
                                                })
                                            }
                                        />
                                        <CheckBox
                                            checked={this.state.malignancy}
                                            title="Maligna"
                                            onPress={() =>
                                                this.setState({
                                                    malignancy: !this.state
                                                        .malignancy,
                                                })
                                            }
                                        />
                                        <CheckBox
                                            checked={this.state.autoimmune}
                                            title="Autoimun"
                                            onPress={() =>
                                                this.setState({
                                                    autoimmune: !this.state
                                                        .autoimmune,
                                                })
                                            }
                                        />
                                        <CheckBox
                                            checked={this.state.chronic_kidney}
                                            title="Ginjal Kronis"
                                            onPress={() =>
                                                this.setState({
                                                    chronic_kidney: !this.state
                                                        .chronic_kidney,
                                                })
                                            }
                                        />
                                        <CheckBox
                                            checked={this.state.liver}
                                            title="Hati"
                                            onPress={() =>
                                                this.setState({
                                                    liver: !this.state.liver,
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
