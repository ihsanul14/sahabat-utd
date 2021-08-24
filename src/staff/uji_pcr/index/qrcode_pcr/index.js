import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';

export default class index extends Component {
    render() {
        return (
            <View>
                <View style={{marginLeft: 15, marginTop: 15}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                        Rumah Sakit A
                    </Text>
                    <Text style={{fontSize: 16, marginTop: 10}}>
                        10:00, 27 September 2020
                    </Text>
                </View>
                <View style={{marginTop: 20}}>
                    <Image
                        source={require('../../../../asset/icons/qrcode.png')}
                        style={{alignSelf: 'center'}}
                    />
                </View>
                <Text
                    style={{
                        textAlign: 'center',
                        marginTop: 20,
                        paddingHorizontal: 80,
                    }}>
                    Tunjukkan QR-code untuk verifikasi jadwal uji PCR
                </Text>
            </View>
        );
    }
}
