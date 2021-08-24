import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    top: {
        height: 95,
    },

    logo: {
        width: '100%',
        height: 200,
    },

    cardSection: {
        borderRadius: 10,
    },

    wrapBtnDate: {
        flex: 1,
        marginBottom: 70,
    },

    btnDate: {
        paddingRight: 15,
        paddingLeft: 15,
        backgroundColor: '#eee',
        alignSelf: 'center',
    },

    infoCountry: {
        padding: 10,
        backgroundColor: '#eee',
        alignSelf: 'flex-end',
    },

    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start', // if you want to fill rows left to right
        paddingBottom: 55,
    },

    containerTop: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start', // if you want to fill rows left to right
        paddingBottom: 35,
    },

    itemTop: {
        width: '50%', // is 50% of container width
        alignSelf: 'center',
    },

    item: {
        width: '33%', // is 50% of container width
        alignSelf: 'center',
    },

    infoLabelNumber: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    labelInfo: {
        textAlign: 'center',
    },

    containerGrid: {
        backgroundColor: '#333',
        borderRadius: 10,
    },

    itemGrid: {},
});

export default styles;
