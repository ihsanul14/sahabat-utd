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
import {Card, ListItem, Icon, ButtonGroup} from 'react-native-elements';
import {
    ScrollView,
    TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import {Button, Input, Item} from 'native-base';
import Axios from 'axios';
import {StackActions} from '@react-navigation/native';
import config from '../config/contansta';
import HeroProfile from '../shared/hero_profile/HeroProfile';

export default class index extends Component {
    state = {
        weight: undefined,
        height: undefined,
        blood_type: undefined,
        age: undefined,
        isLoading: false,
    };

    storeInformasiKesehatan() {
        this.setState({
            isLoading: true,
        });
        Axios.post(
            `${config.health}/profile/update`,
            {
                weight: this.state.weight,
                height: this.state.height,
                blood_type: this.state.blood_type,
                age: this.state.age,
            },
            {
                headers: {
                    Authorization: `Bearer ${this.props.route.params.token}`,
                },
            },
        )
            .then((res) => {
                console.log('informasi_kesehatan_success', res.data);
                this.setState(
                    {
                        isLoading: false,
                    },
                    () => {
                        this.props.navigation.dispatch(
                            StackActions.replace('InformasiMedis', {
                                token: this.props.route.params.token,
                                weight: this.state.weight,
                                height: this.state.height,
                                blood_type: this.state.blood_type,
                                age: this.state.age,
                            }),
                        );
                    },
                );
            })
            .catch((err) => {
                this.setState({
                    isLoading: false,
                });
                console.log('informasi_kesehatan_error', err.response.data);
            });
    }

    sendData() {
        console.log('InformasiMedis', this.props.route.params.token);
        this.props.navigation.dispatch(
            StackActions.replace('InformasiMedis', {
                token: this.props.route.params.token,
                weight: this.state.weight,
                height: this.state.height,
                blood_type: this.state.blood_type,
                age: this.state.age,
            }),
        );
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
                            <HeroProfile />
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
                                        Dede Kurniawan (statis)
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
                                                Update Informasi Kesehatan
                                            </Text>
                                        </View>
                                        <TextInput
                                            placeholder="Berat badan"
                                            underlineColorAndroid="transparent"
                                            style={styles.TextInputStyleClass}
                                            value={this.state.weight}
                                            keyboardType="numeric"
                                            onChangeText={(weight) =>
                                                this.setState({weight})
                                            }
                                        />
                                        <TextInput
                                            placeholder="Tinggi"
                                            underlineColorAndroid="transparent"
                                            style={styles.TextInputStyleClass}
                                            value={this.state.height}
                                            keyboardType="numeric"
                                            onChangeText={(height) =>
                                                this.setState({height})
                                            }
                                        />
                                        <TextInput
                                            placeholder="Golongan darah"
                                            underlineColorAndroid="transparent"
                                            style={styles.TextInputStyleClass}
                                            value={this.state.blood_type}
                                            onChangeText={(blood_type) =>
                                                this.setState({blood_type})
                                            }
                                        />
                                        <TextInput
                                            placeholder="Umur"
                                            underlineColorAndroid="transparent"
                                            style={styles.TextInputStyleClass}
                                            onChangeText={(age) =>
                                                this.setState({age})
                                            }
                                            value={this.state.age}
                                            keyboardType="numeric"
                                        />
                                    </ScrollView>
                                    <View style={styles.btnSubmit}>
                                        <TouchableWithoutFeedback
                                            onPress={() => this.sendData()}>
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
