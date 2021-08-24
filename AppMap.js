import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import React, {Component} from 'react';
import {View} from 'react-native';

export default class AppMap extends Component {
    state = {
        latitude: 5.19135452,
        longitude: 97.14677195,
        latitudeDelta: 0.009,
        longitudeDelta: 0.009,
    };

    componentDidUpdate() {
        Geolocation.getCurrentPosition(
            (position) => {
                const initialPosition = JSON.stringify(position);
                console.log(initialPosition);
            },
            (error) => Alert.alert('Error', JSON.stringify(error)),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
        );
    }

    render() {
        return (
            <View style={{height: 200}}>
                <MapView
                    style={{flex: 1}}
                    region={this.state}
                    onRegionChangeComplete={(region) => this.setState(region)}>
                    <Marker
                        coordinate={{
                            latitude: 5.19135452,
                            longitude: 97.14677195,
                        }}
                    />
                </MapView>
            </View>
        );
    }
}
