import React, {Component} from 'react';
import styles from './styles';
import {View, Text, Image, TextInput, ImageBackground} from 'react-native';
import {Card, ListItem, Icon} from 'react-native-elements';
import {Button, Container, Content} from 'native-base';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {StackActions} from '@react-navigation/native';

export default class index extends Component {
    state = {
        data: {},
        token: '',
    };

    backDashboard() {
        this.props.navigation.dispatch(
            StackActions.replace('Dashboard', {
                token: this.state.token,
            }),
        );
    }

    UNSAFE_componentWillMount() {
        console.log('CLOCK_OUT', this.props.route.params.data);
        this.setState({
            data: this.props.route.params.data,
            token: this.props.route.params.token,
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
                            {this.state.data.name}
                        </Text>
                        <Text style={{textAlign: 'center', fontSize: 15}}>
                            {this.state.clockIn ? 'Masuk' : 'Keluar'} ruangan
                            pada :
                        </Text>
                        <Text
                            style={{
                                fontWeight: 'bold',
                                textAlign: 'center',
                                fontSize: 60,
                                paddingBottom: 25,
                            }}>
                            {this.state.data.time}
                        </Text>
                        <View style={styles.btnSubmit}>
                            <TouchableWithoutFeedback
                                onPress={() => this.backDashboard()}>
                                <Image
                                    source={require('../../asset/icons/btn_submit_blue.png')}
                                    style={{width: 80, height: 80}}></Image>
                            </TouchableWithoutFeedback>
                        </View>
                    </Card>
                </View>
            </View>
        );
    }
}
