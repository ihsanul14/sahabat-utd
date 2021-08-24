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
import config from '../../config/contansta';
import HeroProfile from '../../shared/hero_profile/HeroProfile';

export default class index extends Component {
    state = {
        name: undefined,
        identity_number: undefined,
        phone_number: undefined,
        nationality: undefined,
        address: undefined,
        birth_date: undefined,
        isLoading: false,
    };

    componentDidMount1() {
        // this.setState({
        //     isLoading: true,
        // });
        const tokenStr = this.props.route.params.token;
        const data = this.props.route.params.data;
        this.setState({
            name: data.name,
            identity_number: data.identity_number,
            phone_number: data.phone_number,
            nationality: data.nationality,
            address: data.address,
            birth_date: data.birth_date,
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
                                            placeholder="Nama"
                                            underlineColorAndroid="transparent"
                                            style={styles.TextInputStyleClass}
                                            value={this.state.name}
                                            keyboardType="numeric"
                                            onChangeText={(name) =>
                                                this.setState({name})
                                            }
                                        />
                                        <TextInput
                                            placeholder="NIK"
                                            underlineColorAndroid="transparent"
                                            style={styles.TextInputStyleClass}
                                            value={this.state.identity_number}
                                            keyboardType="numeric"
                                            onChangeText={(identity_number) =>
                                                this.setState({identity_number})
                                            }
                                        />
                                        <TextInput
                                            placeholder="Nomor Hp"
                                            underlineColorAndroid="transparent"
                                            style={styles.TextInputStyleClass}
                                            value={this.state.phone_number}
                                            onChangeText={(phone_number) =>
                                                this.setState({phone_number})
                                            }
                                        />
                                        <TextInput
                                            placeholder="Email"
                                            underlineColorAndroid="transparent"
                                            style={styles.TextInputStyleClass}
                                            onChangeText={(email) =>
                                                this.setState({email})
                                            }
                                            value={this.state.email}
                                            keyboardType="email-address"
                                        />
                                        <TextInput
                                            placeholder="Kebangsaan"
                                            underlineColorAndroid="transparent"
                                            style={styles.TextInputStyleClass}
                                            onChangeText={(nationality) =>
                                                this.setState({nationality})
                                            }
                                            value={this.state.nationality}
                                        />
                                        <TextInput
                                            placeholder="Alamat"
                                            underlineColorAndroid="transparent"
                                            style={styles.TextInputStyleClass}
                                            onChangeText={(address) =>
                                                this.setState({address})
                                            }
                                            value={this.state.address}
                                        />
                                        <TextInput
                                            placeholder="Tanggal Lahir"
                                            underlineColorAndroid="transparent"
                                            style={styles.TextInputStyleClass}
                                            onChangeText={(birth_date) =>
                                                this.setState({birth_date})
                                            }
                                            value={this.state.birth_date}
                                        />
                                    </ScrollView>
                                    <View style={styles.btnSubmit}>
                                        <TouchableWithoutFeedback
                                            onPress={() => {}}>
                                            <Image
                                                source={require('../../../asset/icons/btn_submit.png')}
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
