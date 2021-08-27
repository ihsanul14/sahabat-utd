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
                    waktu: '2021-08-12T15:00:02+07:00',
                    wb_a: 0,
                    wb_b: 1,
                    wb_ab: 3,
                    wb_o: 4,
                },
            ],
        },
        HeadTable: ['Produk', 'A', 'B', 'AB', 'O', 'Subtotal'],
        DataTable: [
            ['Whole Blood', '0', '0', '0', '0', '0'],
            ['Packed Red Cell', '0', '0', '0', '0', '0'],
            ['Thrombocyte Concentrate', '0', '0', '0', '0', '0'],
            ['Fresh Frozen Plasma', '0', '0', '0', '0', '0'],
            ['AHF', '0', '0', '0', '0', '0'],
            ['Leucodepleted', '0', '0', '0', '0', '0'],
            ['Leucoreduce', '0', '0', '0', '0', '0'],
            ['Plasma Konvalesen', '0', '0', '0', '0', '0'],
        ],
    };
    nextScreen() {
        this.props.navigation.dispatch(
            StackActions.replace('StokDarahHome', {token: ''}),
        );
    }
    componentDidMount() {
        const url = 'http://sahabat-utd.id:6100';
        const headers = {
            'Content-Type': 'application/json',
        };
        Axios.post(`${url}/api/simaba/stok-darah`, JSON.stringify({}), {
            headers,
        })
            .then((res) => {
                if (res.data.code == 200) {
                    this.setState({
                        isLoading: false,
                        response: res.data,
                        DataTable: [
                            [
                                'Whole Blood',
                                res.data.data[0].wb_a,
                                res.data.data[0].wb_b,
                                res.data.data[0].wb_ab,
                                res.data.data[0].wb_o,
                                res.data.data[0].subtotal_wb,
                            ],
                            [
                                'Packed Red Cell',
                                res.data.data[0].prc_a,
                                res.data.data[0].prc_b,
                                res.data.data[0].prc_ab,
                                res.data.data[0].prc_o,
                                res.data.data[0].subtotal_prc,
                            ],
                            [
                                'Thrombocyte Concentrate',
                                res.data.data[0].tc_a,
                                res.data.data[0].tc_b,
                                res.data.data[0].tc_ab,
                                res.data.data[0].tc_o,
                                res.data.data[0].subtotal_tc,
                            ],
                            [
                                'Fresh Frozen Plasma',
                                res.data.data[0].ffp_a,
                                res.data.data[0].ffp_b,
                                res.data.data[0].ffp_ab,
                                res.data.data[0].ffp_o,
                                res.data.data[0].subtotal_ffp,
                            ],
                            [
                                'AHF',
                                res.data.data[0].ahf_a,
                                res.data.data[0].ahf_b,
                                res.data.data[0].ahf_ab,
                                res.data.data[0].ahf_o,
                                res.data.data[0].subtotal_ahf,
                            ],
                            [
                                'Leucodepleted',
                                res.data.data[0].ld_a,
                                res.data.data[0].ld_b,
                                res.data.data[0].ld_ab,
                                res.data.data[0].ld_o,
                                res.data.data[0].subtotal_ld,
                            ],
                            [
                                'Leucoreduce',
                                res.data.data[0].lr_a,
                                res.data.data[0].lr_b,
                                res.data.data[0].lr_ab,
                                res.data.data[0].lr_o,
                                res.data.data[0].subtotal_lr,
                            ],
                            [
                                'Plasma Konvalesen',
                                res.data.data[0].pk_a,
                                res.data.data[0].pk_b,
                                res.data.data[0].pk_ab,
                                res.data.data[0].pk_o,
                                res.data.data[0].subtotal_pk,
                            ],
                        ],
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
        const response = this.state.response;
        let state = this.state;
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
                            Informasi Stok Darah
                        </Text>
                        <Text
                            style={{
                                textAlignVertical: 'center',
                                textAlign: 'center',
                                marginBottom: 10,
                            }}>
                            Tanggal : {response.data[0].waktu.slice(0, 10)} ||
                            Waktu : {response.data[0].waktu.slice(11, 16)}
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
                                data={state.DataTable}
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
