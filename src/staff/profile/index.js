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
import {Button} from 'native-base';
import Axios from 'axios';
import {StackActions} from '@react-navigation/native';
import config from '../config/contansta';

export default class index extends Component {
    state = {
        data: {},
        isLoading: false,
    };

    componentDidMount() {
        this.setState({
            isLoading: true,
        });
        const tokenStr = this.props.route.params.token;
        console.log('TOKEN_LOCAL', tokenStr);
        Axios.get(`${config.institution}/user/decoded`, {
            headers: {
                Authorization: `Bearer ${tokenStr}`,
            },
        }).then((res) => {
            this.setState(
                {
                    data: res.data.data,
                },
                () => {
                    this.setState({
                        isLoading: false,
                    });
                },
            );
        });
    }

    moveProductivity() {
        const tokenStr = this.props.route.params.token;
        console.log('moveProductivity', tokenStr);
        this.props.navigation.dispatch(
            StackActions.replace('Productivity', {
                token: tokenStr,
            }),
        );
    }

    moveStatistikInvestasi() {
        const tokenStr = this.props.route.params.token;
        console.log('moveStatistikInvestasi', tokenStr);
        this.props.navigation.dispatch(
            StackActions.replace('StatistikInvestasi', {
                token: tokenStr,
            }),
        );
    }

    editProfile() {
        const tokenStr = this.props.route.params.token;
        this.props.navigation.navigate('EditProfile', {
            token: tokenStr,
            data: this.state.data,
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
                            <View
                                style={{
                                    alignSelf: 'flex-end',
                                    position: 'absolute',
                                    zIndex: 1,
                                    top: 15,
                                    right: 15,
                                }}>
                                <TouchableWithoutFeedback
                                    onPress={() => this.editProfile()}>
                                    <Image
                                        source={require('../../asset/icons/edit_profile.png')}
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
                                    source={require('../../asset/shared/bg_user.png')}
                                    style={styles.logo}
                                />
                            </View>
                            <View style={[{flex: 1}]}>
                                <Text style={styles.labelName}>
                                    {this.state.data.name}
                                </Text>
                                <Card containerStyle={styles.cardSection}>
                                    <ScrollView>
                                        <View style={styles.container}>
                                            <View style={styles.item}>
                                                <Text style={styles.login}>
                                                    Profile
                                                </Text>
                                            </View>
                                            <View style={styles.item}>
                                                <Text
                                                    style={styles.signup}
                                                    onPress={() =>
                                                        this.moveProductivity()
                                                    }>
                                                    Log aktivitas
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={{paddingLeft: '10%'}}>
                                            <View style={styles.wrapInfo}>
                                                <Text style={styles.titleText}>
                                                    NIK
                                                </Text>
                                                <Text style={styles.bodyText}>
                                                    {this.state.data.nik ||
                                                        'Masih kosong!'}
                                                </Text>
                                            </View>
                                            <View style={styles.wrapInfo}>
                                                <Text style={styles.titleText}>
                                                    Nomor Telepon
                                                </Text>
                                                <Text style={styles.bodyText}>
                                                    {this.state.data
                                                        .phone_number ||
                                                        'Masih kosong!'}
                                                </Text>
                                            </View>
                                            <View style={styles.wrapInfo}>
                                                <Text style={styles.titleText}>
                                                    Email
                                                </Text>
                                                <Text style={styles.bodyText}>
                                                    {this.state.data.email ||
                                                        'Masih kosong!'}
                                                </Text>
                                            </View>
                                            <View style={styles.wrapInfo}>
                                                <Text style={styles.titleText}>
                                                    Kebangsaan
                                                </Text>
                                                <Text style={styles.bodyText}>
                                                    {this.state.data
                                                        .kebangsaan ||
                                                        'Masih kosong!'}
                                                </Text>
                                            </View>
                                            <View>
                                                <Text style={styles.titleText}>
                                                    Alamat
                                                </Text>
                                                <Text style={styles.bodyText}>
                                                    {this.state.data.alamat ||
                                                        'Masih kosong!'}
                                                </Text>
                                            </View>
                                            <Text></Text>
                                            <View style={styles.btnSubmit}>
                                                <TouchableWithoutFeedback
                                                    onPress={() =>
                                                        this.moveStatistikInvestasi()
                                                    }>
                                                    <Image
                                                        source={require('../../asset/icons/link.png')}
                                                        style={{
                                                            width: 80,
                                                            height: 80,
                                                        }}></Image>
                                                </TouchableWithoutFeedback>
                                            </View>
                                        </View>
                                    </ScrollView>
                                </Card>
                                <Text></Text>
                            </View>
                        </ScrollView>
                    </View>
                )}
            </>
        );
    }
}
