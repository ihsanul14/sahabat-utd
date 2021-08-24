import {StackActions} from '@react-navigation/native';
import {Button} from 'native-base';
import React, {Component} from 'react';
import {Image, Text, TouchableWithoutFeedback, View} from 'react-native';
import {Card} from 'react-native-elements';
import styles from './styles';
import Hero from '../../staff/shared/hero/Hero';

export default class index extends Component {
    lengkapiDataDiri() {
        this.props.navigation.navigate('InformasiKesehatan', {
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
                <Hero />
                <View style={styles.cardPadding}>
                    <Card containerStyle={styles.cardSection}>
                        <Text></Text>
                        <View style={{alignSelf: 'center', marginTop: 35}}>
                            <Text
                                style={{
                                    textAlign: 'center',
                                    fontSize: 18,
                                }}>
                                Apakah anda ingin melengkapi,{'\n'}data
                                kesehatan anda
                            </Text>
                        </View>
                        <View style={{paddingHorizontal: 30}}>
                            <View style={{alignSelf: 'center', marginTop: 20}}>
                                <Button
                                    block
                                    rounded
                                    onPress={() => this.batalkan()}
                                    style={{
                                        width: '100%',
                                        padding: 15,
                                        backgroundColor: '#fff',
                                    }}>
                                    <Text>Tidak, lain kali!</Text>
                                </Button>
                            </View>
                            <View style={{alignSelf: 'center', marginTop: 20}}>
                                <Button
                                    block
                                    rounded
                                    onPress={() => this.lengkapiDataDiri()}
                                    style={{
                                        width: '100%',
                                        padding: 15,
                                        backgroundColor: '#FF5976',
                                    }}>
                                    <Text style={{color: 'white'}}>
                                        Ya, saya ingin hadiah!
                                    </Text>
                                </Button>
                            </View>
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
