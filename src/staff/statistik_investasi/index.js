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
import {Button, Col, Grid} from 'native-base';
import Axios from 'axios';
import {StackActions} from '@react-navigation/native';

export default class index extends Component {
    state = {
        diabetes: true,
        penyakit_jantung: true,
        hipertensi: true,
        kanker: true,
        gangguan_imun: true,
        gagal_ginjal: true,
        gagal_hati: true,
        lainnya: true,
        lainnya_value: 'null',
    };

    moveProductivity() {
        // this.props.navigation.dispatch(StackActions.replace('Productivity'));
    }

    render() {
        return (
            <View style={styles.MainContainer}>
                <ScrollView style={{flex: 1}}>
                    <Image
                        source={require('../../asset/icons/add_user.png')}
                        style={{
                            position: 'absolute',
                            top: 17,
                            bottom: 0,
                            right: 17,
                            zIndex: 1,
                            width: 25,
                            height: 25,
                        }}></Image>
                    <View style={styles.top}>
                        <Image
                            source={require('../../asset/shared/bg_user.png')}
                            style={styles.logo}
                        />
                    </View>
                    <View style={[{flex: 1}]}>
                        <View style={{alignSelf: 'center', paddingTop: 5}}>
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
                                            textDecorationLine: 'underline',
                                        }}>
                                        Statistik Investasi
                                    </Text>
                                </View>
                                <Grid>
                                    <Col>
                                        <Text style={{textAlign: 'center'}}>
                                            Tabungan SEHAT-RI
                                        </Text>
                                        <Text
                                            style={{
                                                textAlign: 'center',
                                                fontSize: 24,
                                                fontWeight: 'bold',
                                            }}>
                                            225
                                        </Text>
                                        <Text style={{textAlign: 'center'}}>
                                            Point
                                        </Text>
                                    </Col>
                                    <Col>
                                        <Text style={{textAlign: 'center'}}>
                                            Point Anggota Baru
                                        </Text>
                                        <Text
                                            style={{
                                                textAlign: 'center',
                                                fontSize: 24,
                                                color: 'green',
                                                fontWeight: 'bold',
                                            }}>
                                            110
                                        </Text>
                                        <Text style={{textAlign: 'center'}}>
                                            Point
                                        </Text>
                                    </Col>
                                </Grid>
                            </ScrollView>
                            {/* <View style={styles.btnSubmit}>
                                <TouchableWithoutFeedback
                                    onPress={() => this.login()}>
                                    <Image
                                        source={require('../../asset/icons/btn_submit.png')}
                                        style={{width: 80, height: 80}}></Image>
                                </TouchableWithoutFeedback>
                            </View> */}
                        </Card>
                        <Card containerStyle={styles.cardSection}>
                            <Grid>
                                <Col>
                                    <Image
                                        source={require('../../asset/icons/user_icon.png')}></Image>
                                </Col>
                                <Col size={2}>
                                    <View style={{marginLeft: 3, marginTop: 5}}>
                                        <Text
                                            style={{
                                                color: '#aaa',
                                                fontSize: 17,
                                            }}>
                                            Hilmy Fauzi
                                        </Text>
                                        <Text
                                            style={{
                                                color: 'red',
                                                fontSize: 16,
                                                paddingBottom: 5,
                                            }}>
                                            3 Anggota &nbsp;
                                            <Image
                                                source={require('../../asset/icons/connect.png')}></Image>
                                        </Text>
                                        <Text>
                                            <Col>
                                                <Text
                                                    style={{
                                                        color: 'green',
                                                        fontSize: 12,
                                                    }}>
                                                    3 Negatif Covid
                                                </Text>
                                            </Col>
                                            <Col>
                                                <Text
                                                    style={{
                                                        color: 'red',
                                                        fontSize: 12,
                                                        marginLeft: 10,
                                                    }}>
                                                    2 Positif Covid
                                                </Text>
                                            </Col>
                                        </Text>
                                    </View>
                                </Col>
                            </Grid>
                            {/* <View style={styles.btnSubmit}>
                                <TouchableWithoutFeedback
                                    onPress={() => this.login()}>
                                    <Image
                                        source={require('../../asset/icons/btn_submit.png')}
                                        style={{width: 80, height: 80}}></Image>
                                </TouchableWithoutFeedback>
                            </View> */}
                        </Card>
                        <Card containerStyle={styles.cardSection}>
                            <Grid>
                                <Col>
                                    <Image
                                        source={require('../../asset/icons/user_icon.png')}></Image>
                                </Col>
                                <Col size={2}>
                                    <View style={{marginLeft: 3, marginTop: 5}}>
                                        <Text
                                            style={{
                                                color: '#aaa',
                                                fontSize: 17,
                                            }}>
                                            Hilmy Fauzi
                                        </Text>
                                        <Text
                                            style={{
                                                color: 'red',
                                                fontSize: 16,
                                                paddingBottom: 5,
                                            }}>
                                            3 Anggota &nbsp;
                                            <Image
                                                source={require('../../asset/icons/connect.png')}></Image>
                                        </Text>
                                        <Text>
                                            <Col>
                                                <Text
                                                    style={{
                                                        color: 'green',
                                                        fontSize: 12,
                                                    }}>
                                                    3 Negatif Covid
                                                </Text>
                                            </Col>
                                            <Col>
                                                <Text
                                                    style={{
                                                        color: 'red',
                                                        fontSize: 12,
                                                        marginLeft: 10,
                                                    }}>
                                                    2 Positif Covid
                                                </Text>
                                            </Col>
                                        </Text>
                                    </View>
                                </Col>
                            </Grid>
                            <View style={styles.btnSubmit}>
                                <TouchableWithoutFeedback
                                    onPress={() => this.login()}>
                                    <Image
                                        source={require('../../asset/icons/btn_submit.png')}
                                        style={{width: 80, height: 80}}></Image>
                                </TouchableWithoutFeedback>
                            </View>
                        </Card>
                        <Card containerStyle={styles.cardSection}>
                            <Grid>
                                <Col>
                                    <Image
                                        source={require('../../asset/icons/user_icon.png')}></Image>
                                </Col>
                                <Col size={2}>
                                    <View style={{marginLeft: 3, marginTop: 5}}>
                                        <Text
                                            style={{
                                                color: '#aaa',
                                                fontSize: 17,
                                            }}>
                                            Hilmy Fauzi
                                        </Text>
                                        <Text
                                            style={{
                                                color: 'red',
                                                fontSize: 16,
                                                paddingBottom: 5,
                                            }}>
                                            3 Anggota &nbsp;
                                            <Image
                                                source={require('../../asset/icons/connect.png')}></Image>
                                        </Text>
                                        <Text>
                                            <Col>
                                                <Text
                                                    style={{
                                                        color: 'green',
                                                        fontSize: 12,
                                                    }}>
                                                    3 Negatif Covid
                                                </Text>
                                            </Col>
                                            <Col>
                                                <Text
                                                    style={{
                                                        color: 'red',
                                                        fontSize: 12,
                                                        marginLeft: 10,
                                                    }}>
                                                    2 Positif Covid
                                                </Text>
                                            </Col>
                                        </Text>
                                    </View>
                                </Col>
                            </Grid>
                            {/* <View style={styles.btnSubmit}>
                                <TouchableWithoutFeedback
                                    onPress={() => this.login()}>
                                    <Image
                                        source={require('../../asset/icons/btn_submit.png')}
                                        style={{width: 80, height: 80}}></Image>
                                </TouchableWithoutFeedback>
                            </View> */}
                        </Card>

                        <Text></Text>
                    </View>
                    <Text></Text>
                </ScrollView>
            </View>
        );
    }
}
