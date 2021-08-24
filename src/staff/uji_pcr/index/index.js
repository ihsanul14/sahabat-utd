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
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';

export default class index extends Component {
    state = {
        isLoading: false,
    };

    homePcr() {
        this.props.navigation.navigate('HomePcr');
    }

    optionRs() {
        this.props.navigation.navigate('OptionRs');
    }

    componentDidMount() {
        this.enableGps();
    }

    enableGps() {
        RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
            interval: 10000,
            fastInterval: 5000,
        })
            .then((data) => {
                console.log(data);
                // The user has accepted to enable the location services
                // data can be :
                //  - "already-enabled" if the location services has been already enabled
                //  - "enabled" if user has clicked on OK button in the popup
            })
            .catch((err) => {
                console.log(err);
                // The user has not accepted to enable the location services or something went wrong during the process
                // "err" : { "code" : "ERR00|ERR01|ERR02", "message" : "message"}
                // codes :
                //  - ERR00 : The user has clicked on Cancel button in the popup
                //  - ERR01 : If the Settings change are unavailable
                //  - ERR02 : If the popup has failed to open
            });
    }

    render() {
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
                        <Header searchBar rounded>
                            <Item>
                                <Icon name="ios-search" />
                                <Input placeholder="Cari nama rumah sakit" />
                                <Icon name="ios-people" />
                            </Item>
                            <Button transparent>
                                <Text>Search</Text>
                            </Button>
                        </Header>
                        <Content>
                            <TouchableWithoutFeedback
                                onPress={() => this.homePcr()}>
                                <Card>
                                    <CardItem
                                        style={{
                                            backgroundColor: '#FF5976',
                                            borderRadius: 10,
                                        }}>
                                        <Body>
                                            <Text style={{color: 'white'}}>
                                                Uji PCR di rumah
                                            </Text>
                                        </Body>
                                    </CardItem>
                                </Card>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback
                                onPress={() => this.optionRs()}>
                                <Card>
                                    <CardItem
                                        style={{
                                            borderRadius: 10,
                                        }}>
                                        <Body>
                                            <Text>Rumah Sakit A</Text>
                                        </Body>
                                        <Right>
                                            <Text>0.5 mil</Text>
                                        </Right>
                                    </CardItem>
                                </Card>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback
                                onPress={() => this.optionRs()}>
                                <Card>
                                    <CardItem
                                        style={{
                                            borderRadius: 10,
                                        }}>
                                        <Body>
                                            <Text>Rumah Sakit B</Text>
                                        </Body>
                                        <Right>
                                            <Text>0.2 mil</Text>
                                        </Right>
                                    </CardItem>
                                </Card>
                            </TouchableWithoutFeedback>
                        </Content>
                    </Container>
                )}
            </>
        );
    }
}
