import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';

export default function Hero() {
    return (
        <>
            <View style={styles.top}>
                <Image
                    source={require('../../../asset/shared/hero.png')}
                    style={styles.logo}
                />
            </View>
            <View style={{marginLeft: 40}}>
                <Text style={{color: 'white', fontSize: 20}}>
                    Selamat Datang!
                </Text>
                <Text
                    style={{
                        color: 'white',
                        fontSize: 13,
                        marginTop: 10,
                    }}>
                    Aplikasi untuk kesehatan fisik {'\n'}dan ekonomi anda.
                </Text>
            </View>
        </>
    );
}
