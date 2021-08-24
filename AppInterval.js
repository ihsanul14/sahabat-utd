import React, {Component} from 'react';
import {Text} from 'react-native';

export default class AppInterval extends Component {
    state = {
        name: 'Not Found',
        token: 'Not Found',
        status: false,
    };

    test11() {
        console.log('OKE');
        this.setState({
            status: true,
        });
    }

    UNSAFE_componentWillMount() {
        var th = this;
        setInterval(function () {
            th.test11();
        }, 5000);
    }

    render() {
        return <Text>Test</Text>;
    }
}
