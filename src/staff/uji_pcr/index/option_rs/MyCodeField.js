import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styles from './styles';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {Button} from 'native-base';
import {useNavigation} from '@react-navigation/native';

const CELL_COUNT = 4;

export const MyCodeField = (props) => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [layout, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    const qrcode = () => {
        props.toggleOverlay();
        props.navigation.navigate('QrcodePcr');
    };

    return (
        <SafeAreaView style={styles.root}>
            <Text style={styles.title}>Masukkan PIN</Text>
            <CodeField
                ref={ref}
                {...layout}
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({index, symbol, isFocused}) => (
                    <View
                        // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
                        onLayout={getCellOnLayoutHandler(index)}
                        key={index}
                        style={[
                            styles.cellRoot,
                            isFocused && styles.focusCell,
                        ]}>
                        <Text style={styles.cellText}>
                            {symbol || (isFocused ? <Cursor /> : null)}
                        </Text>
                    </View>
                )}
            />
            <Button
                block
                onPress={qrcode}
                style={{
                    backgroundColor: '#FF5976',
                    borderRadius: 15,
                    marginTop: 30,
                }}>
                <Text style={{color: 'white', padding: 20}}>Verifikasi</Text>
            </Button>
        </SafeAreaView>
    );
};
