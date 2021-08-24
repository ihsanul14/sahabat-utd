import React from 'react';
import {Image, View} from 'react-native';
import styles from './styles';

export default function HeroProfile() {
    return (
        <>
            <View style={styles.top}>
                <View
                    style={{
                        position: 'absolute',
                        zIndex: 1,
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Image
                        source={require('../../../asset/icons/user_profile.png')}
                    />
                </View>

                <Image
                    source={require('../../../asset/shared/hero_empty.jpg')}
                    style={styles.logo}
                />
            </View>
        </>
    );
}
