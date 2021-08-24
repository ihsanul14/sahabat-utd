import React, {useState} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Platform,
    TextInput,
    Image,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Button, Col, Grid, Input, Item} from 'native-base';
import styles from './styles';
import {TouchableWithoutFeedback} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function TimePickerCustom() {
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedValue) => {
        setShow(Platform.OS === 'ios');
        const currentDate = selectedValue || new Date();
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const formatDate = (date, time) => {
        return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    };

    return (
        <View>
            {/* <Grid>
                <Col size={5}>
                    <TouchableWithoutFeedback onPress={() => alert('tes')}>
                        <TextInput
                            placeholder="Tanggal lahir"
                            underlineColorAndroid="transparent"
                            style={[styles.TextInputStyleClass]}
                            value={formatDate(date, time)}
                            onFocus={showDatepicker}
                            onKeyPress={showDatepicker}
                        />
                    </TouchableWithoutFeedback>
                </Col>
                <Col>
                    <TouchableWithoutFeedback onPress={showDatepicker}>
                        <Image
                            source={require('../../../asset/icons/camera.png')}
                            style={{width: 50, height: 50}}
                        />
                    </TouchableWithoutFeedback>
                </Col>
            </Grid>
             */}
            <Item last style={styles.TextInputStyleClass}>
                <Input
                    placeholder="Tanggal lahir"
                    value={formatDate(date, time)}
                />
                <FontAwesome5
                    name={'calendar-alt'}
                    size={20}
                    onPress={showDatepicker}
                />
            </Item>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    timeZoneOffsetInMinutes={0}
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
        </View>
    );
}
