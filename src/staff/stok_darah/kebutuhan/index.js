import React, {Component} from 'react';
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
        response: {
            data: [
                {
                    uid: '1',
                    waktu: '2021-08-18T07:10:09Z',
                    no_form: 'UTD-180821-0018',
                    rumah_sakit: 'RSUP Dr Kariadi Semarang',
                    produk_darah: 'PRC',
                    golongan_darah: 'B',
                    rhesus: '+',
                    jumlah_permintaan: '1',
                    jumlah_terpenuhi: 0,
                    keterangan: 'DATA DUMMY',
                    ditambahkan: '2021-08-18T13:21:34Z',
                    diupdate: '',
                },
            ],
        },
        HeadTable: [
            'No',
            'Rumah Sakit',
            'Produk Darah',
            'Golongan Darah',
            'Rhesus',
            'Jumlah Permintaan',
            'Jumlah Terpenuhi',
            'Status',
        ],
    };
    nextScreen() {
        this.props.navigation.dispatch(StackActions.replace('StokDarahHome'));
    }
    componentDidMount() {
        const url = 'http://sahabat-utd.id:6007';
        const headers = {
            'Content-Type': 'application/json',
        };
        Axios.post(`${url}/api/simaba/resipien`, JSON.stringify({}), {
            headers,
        })
            .then((res) => {
                if (res.data.code == 200) {
                    this.setState({
                        isLoading: false,
                        response: res.data,
                    });
                } else {
                    console.log('Error', res.data.message);
                }
            })
            .catch((err) => {
                console.log('tes : ', err);
            });
    }
    render() {
        const res = this.state.response;
        let state = this.state;
        let dataTable = [];
        {
            res.data.map((dat, i) =>
                dataTable.push([
                    i + 1,
                    dat.rumah_sakit,
                    dat.produk_darah,
                    dat.golongan_darah,
                    dat.rhesus,
                    dat.jumlah_permintaan,
                    dat.jumlah_terpenuhi,
                    dat.keterangan,
                ]),
            );
        }
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
                            Informasi Kebutuhan Darah
                        </Text>
                        <Text
                            style={{
                                textAlignVertical: 'center',
                                textAlign: 'center',
                                marginBottom: 10,
                            }}>
                            Tanggal : {res.data[0].ditambahkan.slice(0, 10)} ||
                            Waktu : {res.data[0].ditambahkan.slice(11, 16)}
                        </Text>
                        <Table
                            borderStyle={{
                                borderWidth: 1,
                                borderColor: '#ffa1d2',
                            }}>
                            <Row
                                data={state.HeadTable}
                                style={styles.HeadStyle}
                                textStyle={styles.TableText}
                            />
                            <Rows
                                data={dataTable}
                                textStyle={styles.TableText}
                            />
                        </Table>
                        <Button style={styles.button}>
                            <Text onPress={() => this.nextScreen()}>
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
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 10,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
});
