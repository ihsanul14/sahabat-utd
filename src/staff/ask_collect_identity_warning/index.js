import {StackActions} from '@react-navigation/native';
import Axios from 'axios';
import {Button} from 'native-base';
import React, {Component} from 'react';
import {Image, Text, TouchableWithoutFeedback, View} from 'react-native';
import {Card} from 'react-native-elements';
import config from '../config/contansta';
import styles from './styles';

export default class index extends Component {
    lengkapiDataDiri() {
        this.props.navigation.navigate('CollectIdentity', {
            token: this.props.route.params.token,
        });
    }

    batalkan() {
        this.props.navigation.dispatch(
            StackActions.replace('Dashboard', {
                token: this.props.route.params.token,
            }),
        );
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
                    <View style={{marginHorizontal: 25}}>
                        <Text style={{color: '#fff', lineHeight: 20}}>
                            Berdasarkan hasil uji PCR pada {'\n'}27 Agustus 2020
                            pukul 10:00 (statis?)
                        </Text>
                    </View>
                    <Card containerStyle={styles.cardSection}>
                        <Text></Text>
                        <View style={{alignSelf: 'center'}}>
                            <Image
                                source={require('../../../src/asset/icons/warning.png')}></Image>
                        </View>
                        <View style={{alignSelf: 'center', marginTop: 15}}>
                            <Text
                                style={{
                                    textAlign: 'center',
                                    fontWeight: 'bold',
                                }}>
                                Data diri anda belum lengkap,{'\n'}silahkan
                                lengkapi dulu!
                            </Text>
                        </View>
                        <View style={{alignSelf: 'center', marginTop: 15}}>
                            <Button
                                block
                                rounded
                                onPress={() => this.lengkapiDataDiri()}
                                style={{
                                    padding: 15,
                                    backgroundColor: '#FF5976',
                                }}>
                                <Text style={{color: 'white'}}>
                                    Lengkapi data diri
                                </Text>
                            </Button>
                        </View>
                        <View style={{alignSelf: 'center', marginTop: 20}}>
                            <Button
                                block
                                rounded
                                onPress={() => this.batalkan()}
                                style={{
                                    padding: 15,
                                    backgroundColor: '#fff',
                                }}>
                                <Text>Batalkan</Text>
                            </Button>
                        </View>
                        <View style={{paddingBottom: 25}}></View>
                        {/* <Text></Text>
                        <View style={styles.btnSubmit}>
                            <TouchableWithoutFeedback
                                onPress={() => this.verifyOtp()}>
                                <Image
                                    source={require('../../asset/icons/btn_submit.png')}
                                    style={{width: 80, height: 80}}></Image>
                            </TouchableWithoutFeedback>
                        </View> */}
                    </Card>
                </View>
            </View>
        );
    }
}
