import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
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

export default function MobilUnit(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [res, setRes] = useState({
        data: [
            {
                pelaksanaan: '2021-08-10T00:00:00Z',
                instansi: 'PT TECHPACK',
                alamat: 'JL RAYA KARANG AWEN KM 18 MRANGGEN DEMAK',
                mulai: '08:00:00',
                status: 'BATAL',
            },
        ],
    });
    const [headTable] = useState([
        'Pelaksanaan',
        'Jam',
        'Instansi',
        'Keterangan',
    ]);
    var dataTable = [];
    useEffect(() => {
        var t = new Date().toISOString().slice(0, 10);
        const url = 'http://sahabat-utd.id:6006';
        const headers = {
            'Content-Type': 'application/json',
        };
        const body = {bulan: t.slice(5, 7), hari: props.route.params.day};
        Axios.post(`${url}/api/simaba/mobil-unit`, JSON.stringify(body), {
            headers,
        })
            .then((r) => r.data)
            .then((data) => {
                setRes(data);
            })
            .catch((err) => console.log('test : ', err))
            .finally(() => {
                setIsLoading(false);
            });
    }, []);
    function nextScreen() {
        props.navigation.dispatch(StackActions.replace('MobilUnitHome'));
    }
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
                        Informasi Jadwal Kegiatan Donor Darah{' '}
                        {props.route.params.hari}
                    </Text>
                    <Table
                        borderStyle={{
                            borderWidth: 1,
                            borderColor: '#ffa1d2',
                        }}>
                        <Row
                            data={headTable}
                            style={styles.HeadStyle}
                            textStyle={styles.TableText}
                        />
                        {res.data.map((dat, i) => (
                            <Row
                                data={[
                                    dat.pelaksanaan.slice(8, 10) +
                                        dat.pelaksanaan.slice(4, 8) +
                                        dat.pelaksanaan.slice(0, 4),
                                    dat.mulai.slice(0, 5),
                                    dat.instansi,
                                    dat.status,
                                ]}
                                key={i}
                                textStyle={styles.TableText}
                            />
                        ))}
                    </Table>
                    <Button style={styles.button}>
                        <Text onPress={() => nextScreen()}>Kembali</Text>
                    </Button>
                </View>
            )}
        </>
    );
}
