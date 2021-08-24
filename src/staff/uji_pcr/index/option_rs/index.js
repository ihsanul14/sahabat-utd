import React, {Component} from 'react';
import {
    Container,
    Content,
    Textarea,
    Form,
    Grid,
    Col,
    Card,
    Row,
    Button,
} from 'native-base';
import {Text, View} from 'react-native';
import {CheckBox, Overlay} from 'react-native-elements';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import styles from './styles';
import {MyCodeField} from './MyCodeField';

export default class index extends Component {
    state = {
        showPin: false,
        showMoney: true,
        virtualAccount: true,
        creditCard: false,
    };

    btnVirtualAccount() {
        this.setState({
            virtualAccount: true,
            creditCard: false,
        });
    }

    btnCreditCard() {
        this.setState({
            virtualAccount: false,
            creditCard: true,
        });
    }

    togglePin() {
        this.setState({
            showPin: !this.state.showPin,
        });
    }

    toggleMoney() {
        this.setState({
            showMoney: !this.state.showMoney,
        });
    }

    render() {
        return (
            <Container
                style={{
                    flex: 1,
                    justifyContent: 'center',
                }}>
                <Overlay
                    isVisible={this.state.showPin}
                    onBackdropPress={() => this.togglePin()}>
                    <>
                        <MyCodeField
                            navigation={this.props.navigation}
                            toggleOverlay={() => this.togglePin()}
                        />
                    </>
                </Overlay>
                <Overlay
                    isVisible={this.state.showMoney}
                    onBackdropPress={() => this.toggleMoney()}>
                    <View style={{padding: 20}}>
                        <Text>Maaf, saldo anda tidak cukup!</Text>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-evenly',
                                marginTop: 15,
                            }}>
                            <Button
                                style={{
                                    padding: 10,
                                    borderRadius: 20,
                                    backgroundColor: '#FF5976',
                                }}>
                                <Text style={{color: 'white'}}>Top up</Text>
                            </Button>
                            <Button
                                onPress={() => this.toggleMoney()}
                                style={{
                                    padding: 10,
                                    borderRadius: 20,
                                    backgroundColor: '#fff',
                                }}>
                                <Text>Cancel</Text>
                            </Button>
                        </View>
                    </View>
                </Overlay>
                <Content padder>
                    <Text style={{fontSize: 20}}>Rumah Sakit A (statis)</Text>
                    <Text style={{marginTop: 10, paddingBottom: 10}}>
                        Pilih jadwal
                    </Text>
                    <Grid>
                        <Row style={{marginVertical: 5}}>
                            <Col>
                                <Card
                                    style={{
                                        borderRadius: 20,
                                        backgroundColor: '#FF5976',
                                    }}>
                                    <Text
                                        style={{
                                            textAlign: 'center',
                                            padding: 15,
                                            color: 'white',
                                        }}>
                                        10:00
                                    </Text>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{borderRadius: 20}}>
                                    <Text
                                        style={{
                                            textAlign: 'center',
                                            padding: 15,
                                        }}>
                                        10:00
                                    </Text>
                                </Card>
                            </Col>
                        </Row>
                        <Row style={{marginVertical: 5}}>
                            <Col>
                                <Card
                                    style={{
                                        borderRadius: 20,
                                    }}>
                                    <Text
                                        style={{
                                            textAlign: 'center',
                                            padding: 15,
                                        }}>
                                        15:00
                                    </Text>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{borderRadius: 20}}>
                                    <Text
                                        style={{
                                            textAlign: 'center',
                                            padding: 15,
                                        }}>
                                        16:00
                                    </Text>
                                </Card>
                            </Col>
                        </Row>
                    </Grid>
                    <Text style={{marginTop: 10, paddingBottom: 10}}>
                        Metode Pembayaran
                    </Text>
                    <Grid>
                        <Row>
                            <Col size={2}>
                                <Text
                                    style={{
                                        padding: 15,
                                    }}>
                                    Transfer Virtual Account
                                </Text>
                            </Col>
                            <Col>
                                <CheckBox
                                    center
                                    checkedIcon="dot-circle-o"
                                    uncheckedIcon="circle-o"
                                    checkedColor={'#FF5976'}
                                    onPress={() => this.btnVirtualAccount()}
                                    checked={this.state.virtualAccount}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col size={2}>
                                <Text
                                    style={{
                                        padding: 15,
                                    }}>
                                    Kartu kredit
                                </Text>
                            </Col>
                            <Col>
                                <CheckBox
                                    center
                                    checkedIcon="dot-circle-o"
                                    uncheckedIcon="circle-o"
                                    checkedColor={'#FF5976'}
                                    onPress={() => this.btnCreditCard()}
                                    checked={this.state.creditCard}
                                />
                            </Col>
                        </Row>
                    </Grid>
                </Content>
                <View
                    style={{
                        width: '100%',
                        position: 'absolute',
                        bottom: 0,
                    }}>
                    <Card
                        style={{
                            paddingVertical: 10,
                            paddingHorizontal: 10,
                        }}>
                        <Grid>
                            <Row>
                                <Col size={4}>
                                    <View style={{marginLeft: 10}}>
                                        <Text
                                            style={{
                                                fontSize: 17,
                                            }}>
                                            Biaya Uji PCR
                                        </Text>
                                        <Text
                                            style={{
                                                color: '#FF5976',
                                                fontSize: 16,
                                            }}>
                                            Rp.25.000
                                        </Text>
                                    </View>
                                </Col>
                                <Col size={2}>
                                    <Button
                                        onPress={() => this.togglePin()}
                                        style={{
                                            borderRadius: 15,
                                            backgroundColor: '#FF5976',
                                        }}>
                                        <Text
                                            style={{
                                                paddingHorizontal: 30,
                                                color: 'white',
                                            }}>
                                            Bayar
                                        </Text>
                                    </Button>
                                </Col>
                            </Row>
                        </Grid>
                    </Card>
                </View>
            </Container>
        );
    }
}
