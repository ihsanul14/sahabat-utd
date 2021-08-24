/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {Component, useState, useEffect} from 'react';
import socketIOClient from 'socket.io-client';
import {View, Text} from 'react-native';

const ENDPOINT = 'http://209.97.173.134:3001';

const AppSocket = () => {
    const [response] = useState({
        activity: '-',
        risk: '-',
        message: '-',
    });
    const [header, setResponse] = useState('Status Kesehatan Staff', null);

    function getSocketConncetion() {
        const socket = socketIOClient(ENDPOINT, {
            transports: ['websocket'],
            jsonp: false,
            reconnection: true,
            reconnectionDelay: 500,
            reconnectionAttempts: Infinity,
        });
        socket.connect();
        socket.on('connect', () => {
            socket.emit('storeClientInfo', {customId: '123213'});
            console.log('connected to productivity server');
        });
        socket.on('connect_error', (err) => {
            console.log(err);
        });
        socket.on('from-security-risk', (data) => {
            console.log(data.activity, data.risk);
            setResponse({
                activity: data.activity,
                risk: data.risk,
                message: data.message,
            });
            console.log(response);
        });
    }

    useEffect(() => {
        getSocketConncetion();
    });

    return (
        <View>
            <Text>{header}</Text>
            <Text>{response.activity}</Text>
            <Text>{response.risk}</Text>
            <Text>{response.message}</Text>
        </View>
    );
};

export default AppSocket;
