import React, {Component} from 'react';
import styles from './styles';
import {
    View,
    Text,
    Image,
    TextInput,
    ImageBackground,
    Alert,
} from 'react-native';
import {Card, ListItem, Icon} from 'react-native-elements';
import {Button, Container, Content} from 'native-base';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {StackActions} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

export default class index extends Component {
    state = {
        // sebentar => belum ada api
        // message: 'Sangat Tinggi',
        data: {},
        message: '',
        token: '',
    };

    openDashboard() {
        console.log('NOO');
        AsyncStorage.getItem('token').then((value) => {
            this.setState({
                token: value,
            });
        });
        // this.props.navigation.navigate('Dashboard');
        this.props.navigation.dispatch(
            StackActions.replace('ClockIn', {
                token: this.state.token,
                data: this.state.data,
                message: this.state.message,
            }),
        );
    }

    UNSAFE_componentWillMount() {
        console.log('DATA_COVID', this.props.route.params.data);
        this.setState({
            data: this.props.route.params.data,
            message: this.props.route.params.message,
            // message: this.props.route.params.message,
        });
        this.setState = (state, callback) => {
            return;
        };
    }

    render() {
        return (
            <View style={styles.MainContainer}>
                <View style={styles.top}>
                    <Image
                        source={require('../../asset/shared/hero.png')}
                        style={styles.logo}
                    />
                </View>
                <View>
                    <Card containerStyle={styles.cardSection}>
                        <Text style={styles.nameText}>
                            {this.state.data.heading}
                        </Text>
                        <Text style={{paddingLeft: 5, paddingBottom: 20}}>
                            Resiko anda terjangkit Covid 19
                        </Text>
                        <View style={styles.wrapBtn}>
                            <Button
                                style={[
                                    styles.btnPetugas,
                                    {
                                        backgroundColor: this.state.data.color,
                                    },
                                ]}>
                                <Text
                                    style={{
                                        color: 'white',
                                        fontSize: 22,
                                    }}>
                                    {this.state.data.risk}
                                </Text>
                            </Button>
                        </View>
                        <Text
                            style={[
                                styles.statusLabel,
                                {
                                    color: this.state.data.color,
                                },
                            ]}>
                            {this.state.data.body_text}
                        </Text>
                        <View style={styles.btnSubmit}>
                            <TouchableWithoutFeedback
                                onPress={() => this.openDashboard()}>
                                <Image
                                    source={require('../../asset/icons/btn_submit.png')}
                                    style={{width: 80, height: 80}}></Image>
                            </TouchableWithoutFeedback>
                        </View>
                        {/* <Text
                            style={[
                                {
                                    marginTop: 75,
                                    textAlign: 'center',
                                    color: this.state.data.color,
                                },
                            ]}>
                            {this.state.data.text}
                        </Text> */}
                    </Card>
                </View>
            </View>
        );
    }
}
