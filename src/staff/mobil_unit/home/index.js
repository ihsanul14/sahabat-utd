import React, {Component, useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {
    Container,
    Header,
    Item,
    Input,
    Icon,
    Button,
    Text,
    Card,
    CardItem,
    Content,
    Body,
    Right,
} from 'native-base';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Axios from 'axios';
import {Table, Row, Rows} from 'react-native-table-component';
import {timeout} from 'async';
import {now} from 'moment';
import {StackActions} from '@react-navigation/native';

export default class index extends Component {
    state = {
        isLoading: false,
        date: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'],
        parseDate: {
            Senin: 'Monday',
            Selasa: 'Tuesday',
            Rabu: 'Wednesday',
            Kamis: 'Thursday',
            Jumat: 'Friday',
            Sabtu: 'Saturday',
            Minggu: 'Sunday',
        },
    };
    nextScreen(modul, date) {
        this.props.navigation.dispatch(
            StackActions.replace(modul, {
                day: this.state.parseDate[date],
                hari: date,
            }),
        );
    }
    // componentDidMount() {}
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
                    <View style={styles.cellStyle}>
                        <Text
                            style={{
                                textAlignVertical: 'center',
                                textAlign: 'center',
                                marginBottom: 10,
                            }}>
                            Jadwal Mobil Unit
                        </Text>
                        {this.state.date.map((x, i) => (
                            <Button key={i} style={styles.button}>
                                <Text
                                    onPress={() =>
                                        this.nextScreen('MobilUnit', x)
                                    }>
                                    {x}
                                </Text>
                            </Button>
                        ))}
                        <Button style={styles.button}>
                            <Text
                                onPress={() =>
                                    this.nextScreen('StokDarahHome')
                                }>
                                Kembali
                            </Text>
                        </Button>
                    </View>
                )}
            </>
        );
    }
}

const styles = StyleSheet.create({
    gridContainer: {
        width: 220,
    },
    rowStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    cellStyle: {
        flex: 1,
        margin: 10,
    },
    button: {
        margin: 0,
        marginBottom: 10,
        borderRadius: 10,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
});
