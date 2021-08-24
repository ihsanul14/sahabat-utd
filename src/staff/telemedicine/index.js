import React, {Component} from 'react';
import {
    Container,
    Header,
    Tab,
    Tabs,
    ScrollableTab,
    Item,
    Icon,
    Input,
    Button,
    Text,
} from 'native-base';
import ListDoctor from './ListDoctor';
export default class index extends Component {
    render() {
        return (
            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" />
                        <Icon name="ios-people" />
                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                </Header>
                <Tabs renderTabBar={() => <ScrollableTab />}>
                    <Tab heading="Umum">
                        <ListDoctor />
                        <ListDoctor />
                    </Tab>
                    <Tab heading="Penyakit 1">
                        <ListDoctor />
                    </Tab>
                    <Tab heading="Penyakit 2">
                        <ListDoctor />
                        <ListDoctor />
                        <ListDoctor />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}
