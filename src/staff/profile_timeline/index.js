import React, {Component} from 'react';
import {
    Container,
    Header,
    Title,
    Button,
    Left,
    Right,
    Body,
    Icon,
    View,
} from 'native-base';
import {
    ActivityIndicator,
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
} from 'react-native';
// import styles from './styles';
import {Avatar, Card, ListItem} from 'react-native-elements';
import Timeline from 'react-native-timeline-flatlist';
import {StackActions} from '@react-navigation/native';
import Axios from 'axios';
import styles from './styles';
import config from '../config/contansta';

export default class index extends Component {
    state = {
        data: [],
        isLoading: false,
    };

    moveProfile() {
        this.props.navigation.dispatch(
            StackActions.replace('Profile', {
                token: this.props.route.params.token,
            }),
        );
    }

    UNSAFE_componentWillMount() {
        this.setState({
            isLoading: true,
        });
        Axios.get(`${config.productivity}/attendance/activity/today`, {
            headers: {
                Authorization: `Bearer ${this.props.route.params.token}`,
            },
        })
            .then((res) => {
                console.log('RESPON_DATA1111111111111', res.data);
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
            })
            .catch((err) => {
                console.log('ERROR_ACTIVITIES', err.response.data);
            });
        console.log('BARUUUUUUUUUUUUUUU', this.props.route.params.token);
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
                    <Container>
                        <View style={styles.MainContainer}>
                            <View style={styles.top}>
                                <Image
                                    source={require('../../asset/shared/hero.png')}
                                    style={styles.logo}
                                />
                            </View>
                            <View>
                                <Card containerStyle={styles.cardSection}>
                                    <ScrollView>
                                        <View style={styles.container}>
                                            <View style={styles.item}>
                                                <Text
                                                    style={styles.profile}
                                                    onPress={() =>
                                                        this.moveProfile()
                                                    }>
                                                    Profile
                                                </Text>
                                            </View>
                                            <View style={styles.item}>
                                                <Text
                                                    style={
                                                        styles.log_Aktivitas
                                                    }>
                                                    Log aktivitas
                                                </Text>
                                            </View>
                                        </View>
                                        <View
                                            style={
                                                {
                                                    // height: '90%',
                                                    // marginLeft: 40,
                                                }
                                            }>
                                            {this.state.data.map((l, i) => (
                                                <View>
                                                    {/* <Text>{l.enter.description}</Text> */}
                                                    <ListItem
                                                        key={i}
                                                        bottomDivider>
                                                        <Avatar
                                                            source={require('../../asset/icons/clock_in.png')}
                                                        />
                                                        <ListItem.Content>
                                                            <ListItem.Title>
                                                                {l.enter &&
                                                                    l.enter
                                                                        .description}
                                                            </ListItem.Title>
                                                            <ListItem.Subtitle>
                                                                {l.enter &&
                                                                    l.enter
                                                                        .time}
                                                            </ListItem.Subtitle>
                                                        </ListItem.Content>
                                                        <Avatar
                                                            source={require('../../asset/icons/clock_out.png')}
                                                        />
                                                        <ListItem.Content>
                                                            <ListItem.Title>
                                                                {l.exit &&
                                                                    l.exit
                                                                        .description}
                                                            </ListItem.Title>
                                                            <ListItem.Subtitle>
                                                                {(l.exit &&
                                                                    l.exit
                                                                        .time) ||
                                                                    'Belum Clockout'}
                                                            </ListItem.Subtitle>
                                                        </ListItem.Content>
                                                    </ListItem>
                                                </View>
                                            ))}
                                        </View>
                                        {/* <View style={styles.btnSubmit}>
                                <TouchableOpacity onPress={() => this.moveProfile()}>
                                    <Image
                                        source={require('../../asset/icons/btn_submit.png')}
                                        style={{width: 80, height: 80}}></Image>
                                </TouchableOpacity>
                            </View> */}
                                    </ScrollView>
                                </Card>
                            </View>
                        </View>
                    </Container>
                )}
            </>
        );
    }
}
