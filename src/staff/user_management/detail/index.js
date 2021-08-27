import React, {Component} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
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
import SyncStorage from 'sync-storage';

export default class index extends Component {
    state = {
        isLoading: false,
        response: {
            data: [],
        },
        HeadTable: ['Email', 'Nomor telepon'],
        DataTable: [],
        token: SyncStorage.get('token') || '',
    };

    nextScreen() {
        this.props.navigation.dispatch(StackActions.replace('StokDarahHome'));
    }
    componentDidMount() {
        const url = 'http://sahabat-utd.id:6005';
        const headers = {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.state.token,
        };
        const body = {
            email: '',
        };
        Axios.post(`${url}/api/simaba/user`, JSON.stringify(body), {
            headers,
        })
            .then((res) => {
                if (res.data.code == 200) {
                    this.setState({
                        response: res.data,
                        isLoading: false,
                    });
                } else {
                    console.log('Error', res.data.message);
                }
            })
            .catch((err) => {
                console.log('test : ', err);
                this.props.navigation.dispatch(
                    StackActions.replace('LoginUTD'),
                );
            });
    }
    render() {
        {
            this.state.response.data.map((x) =>
                this.state.DataTable.push([x.nama, x.email]),
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
                        <Table
                            borderStyle={{
                                borderWidth: 1,
                                borderColor: '#ffa1d2',
                            }}>
                            <Row
                                data={this.state.HeadTable}
                                style={styles.HeadStyle}
                                textStyle={styles.TableText}
                            />
                            <Rows
                                data={this.state.DataTable}
                                textStyle={styles.TableText}
                            />
                        </Table>
                        <Button>
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
});
