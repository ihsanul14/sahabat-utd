import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TextInput, ActivityIndicator} from 'react-native';
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
import qs from 'qs';

export default function RegisterUTD(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [nama, setNama] = useState('');
    const [email, setEmail] = useState('');
    const [nomorTelepon, setNomorTelepon] = useState('');

    function homeScreen() {
        props.navigation.dispatch(StackActions.replace('Home'));
    }
    function nextScreen() {
        const url = 'http://sahabat-utd.id:6005';
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
        };
        const body = {
            role: 'pendonor',
            nama: nama,
            email: email,
            nomor_telepon: nomorTelepon,
        };
        console.log(body);
        Axios.post(`${url}/api/simaba/user/register`, qs.stringify(body), {
            headers,
        })
            .then((res) => {
                if (res.data.code == 200) {
                    setIsLoading(false);
                    alert(
                        'anda telah terdaftar, silakan cek email untuk mendapatkan credential',
                    );
                    props.navigation.dispatch(
                        StackActions.replace('LoginUTD'), //diganti dengan nama komponen login
                    );
                } else {
                    console.log('Error', res.data.message);
                    alert('username sudah digunakan');
                    props.navigation.dispatch(
                        StackActions.replace('RegisterUTD'), //diganti dengan nama komponen register
                    );
                }
            })
            .catch((err) => {
                console.log('test : ', err);
            });
    }

    // useEffect(() => {
    //     const url = 'http://sahabat-utd.id:6005';
    //     const headers = {
    //         'Content-Type': 'application/x-www-form-urlencoded',
    //     };
    //     const body = {
    //         role: 'pendonor',
    //         nama: nama,
    //         email: email,
    //         nomor_telepon: nomorTelepon,
    //     };
    //     console.log(body);
    //     Axios.post(`${url}/api/simaba/user/register`, qs.stringify(body), {
    //         headers,
    //     })
    //         .then((res) => {
    //             if (res.data.code == 200) {
    //                 setIsLoading(false);
    //                 alert(
    //                     'anda telah terdaftar, silakan cek email untuk mendapatkan credential',
    //                 );
    //                 this.props.navigation.dispatch(
    //                     StackActions.replace('LoginUTD'), //diganti dengan nama komponen login
    //                 );
    //             } else {
    //                 console.log('Error', res.data.message);
    //                 alert('username sudah digunakan');
    //                 this.props.navigation.dispatch(
    //                     StackActions.replace('RegisterUTD'), //diganti dengan nama komponen register
    //                 );
    //             }
    //         })
    //         .catch((err) => {
    //             console.log('test : ', err);
    //         });
    // }, []);
    return (
        <>
            {isLoading ? (
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
                        Register
                    </Text>
                    <TextInput
                        placeholder="Nama Lengkap"
                        underlineColorAndroid="transparent"
                        style={styles.TextInputStyleClass}
                        onChangeText={(nama) => setNama(nama)}
                    />
                    <TextInput
                        placeholder="Email"
                        underlineColorAndroid="transparent"
                        style={styles.TextInputStyleClass}
                        onChangeText={(email) => setEmail(email)}
                    />
                    <TextInput
                        placeholder="Nomor Handphone"
                        underlineColorAndroid="transparent"
                        style={styles.TextInputStyleClass}
                        onChangeText={(nomorTelepon) =>
                            setNomorTelepon(nomorTelepon)
                        }
                    />
                    <Button style={styles.button}>
                        <Text onPress={() => nextScreen()}>Submit</Text>
                    </Button>
                    <Button style={styles.button}>
                        <Text onPress={() => homeScreen()}>Kembali</Text>
                    </Button>
                </View>
            )}
        </>
    );
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
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 10,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
});
