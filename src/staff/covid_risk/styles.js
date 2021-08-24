import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    top: {
        height: 145,
    },

    logo: {
        width: '100%',
        height: 200,
    },

    btnPetugas: {
        borderRadius: 20,
        marginBottom: 10,
        color: 'white',
        height: 60,
        padding: 20,
    },

    wrapBtn: {
        alignSelf: 'center',
        padding: 10,
    },

    btnSubmit: {
        alignSelf: 'center',
        position: 'absolute',
        top: 215,
    },

    nameText: {
        fontSize: 22,
        fontWeight: 'bold',
        paddingBottom: 5,
        paddingLeft: 5,
    },

    statusLabel: {
        textAlign: 'center',
        // paddingBottom: 40,
    },

    cardSection: {
        borderRadius: 10,
        height: 270,
    },
});

export default styles;
