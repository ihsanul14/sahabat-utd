import {Button} from 'native-base';
import React, {Component} from 'react';
import {Image, Text, TouchableWithoutFeedback, View} from 'react-native';
import {Card} from 'react-native-elements';
import styles from './styles';

export default class index extends Component {
    state = {
        status: 'Positif COVID 19',
        description:
            'Segera lakukan isolasi mandiri dirumah \nsakit atau ruangan terisolasi pribadi!',
    };

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
                                source={require('../../../src/asset/icons/covid.png')}></Image>
                        </View>
                        <View style={{alignSelf: 'center', marginTop: 10}}>
                            <Text
                                style={{
                                    textAlign: 'center',
                                    fontWeight: 'bold',
                                    fontSize: 24,
                                }}>
                                {this.state.status}
                            </Text>
                        </View>
                        <View style={{alignSelf: 'center', marginTop: 45}}>
                            <Text>{this.state.description}</Text>
                        </View>
                        <View style={{paddingBottom: 25}}></View>
                        <Text></Text>
                        <View style={styles.btnSubmit}>
                            <TouchableWithoutFeedback
                                onPress={() => this.verifyOtp()}>
                                <Image
                                    source={require('../../asset/icons/btn_submit.png')}
                                    style={{width: 80, height: 80}}></Image>
                            </TouchableWithoutFeedback>
                        </View>
                    </Card>
                </View>
            </View>
        );
    }
}
