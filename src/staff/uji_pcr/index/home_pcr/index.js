import React, {Component} from 'react';
import {Container, Header, Content, Textarea, Form} from 'native-base';
import {Image, TouchableWithoutFeedback} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {StackActions} from '@react-navigation/native';

export default class index extends Component {
    state = {
        token: undefined,
    };

    componentDidMount() {
        AsyncStorage.getItem('token').then((value) => {
            this.setState({
                token: value,
            });
        });
    }

    submitForm() {
        this.props.navigation.dispatch(
            StackActions.replace('Dashboard', {
                token: this.state.token,
            }),
        );
    }

    render() {
        return (
            <Container>
                <Content padder>
                    <Form>
                        <Textarea
                            rowSpan={5}
                            bordered
                            placeholder="Alamat  Rumah..."
                            style={{borderRadius: 10}}
                        />
                        <TouchableWithoutFeedback
                            onPress={() => this.submitForm()}>
                            <Image
                                source={require('../../../../asset/icons/btn_submit.png')}
                                style={{
                                    width: 80,
                                    height: 80,
                                    alignSelf: 'center',
                                }}
                            />
                        </TouchableWithoutFeedback>
                    </Form>
                </Content>
            </Container>
        );
    }
}
