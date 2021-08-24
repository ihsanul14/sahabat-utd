import React, {Component} from 'react';
import {View} from 'react-native';
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

export default class index extends Component {
    state = {
        isLoading: false,
        res: '',
    };

    componentDidMount() {
        const url = 'http://sahabat-utd.id:6000';
        const headers = {
            'Content-Type': 'application/json',
        };
        Axios.post(`${url}/api/simaba/stok-darah`, JSON.stringify({}), {
            headers,
        })
            .then((res) => {
                console.log(res.data);
                this.setState({
                    isLoading: false,
                });
                if (res.data.code == 200) {
                    this.setState({
                        res: res.data,
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
        const res = this.state.res;
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
                    <Container>
                        <Text>Tes : {res}</Text>
                    </Container>
                )}
            </>
        );
    }
}
