import {Badge, Col, Grid, Row} from 'native-base';
import {Text, Image, View} from 'react-native';
import React from 'react';

export default function ListDoctor() {
    return (
        <>
            <View style={{marginTop: 30, paddingBottom: 50}}>
                <Grid>
                    <Row style={{backgroundColor: 'red'}}>
                        <Col size={2}>
                            <Image
                                source={require('../../asset/icons/user_icon.png')}
                                style={{
                                    width: 65,
                                    height: 65,
                                    alignSelf: 'center',
                                }}
                            />
                        </Col>
                        <Col size={3}>
                            <View>
                                <Text
                                    style={{
                                        fontSize: 18,
                                        paddingTop: 3,
                                    }}>
                                    dr. Hilmy Fauzi
                                </Text>
                                <Text
                                    style={{
                                        color: 'green',
                                        fontSize: 13,
                                    }}>
                                    Online
                                </Text>
                                <Text
                                    style={{
                                        color: 'green',
                                        fontSize: 12,
                                    }}>
                                    Dokter umum
                                </Text>
                            </View>
                        </Col>
                        <Col size={1}>
                            <Text></Text>
                            <Badge
                                style={{
                                    backgroundColor: 'white',
                                    borderColor: 'blue',
                                    borderWidth: 1,
                                }}>
                                <Text>4.3</Text>
                            </Badge>
                        </Col>
                    </Row>
                </Grid>
            </View>
        </>
    );
}
