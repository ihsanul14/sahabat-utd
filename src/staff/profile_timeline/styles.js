const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
    MainContainer: {
        // Setting up View inside content in Vertically center.
        // justifyContent: 'center',
        flex: 1,
    },

    top: {
        height: 148,
    },

    logo: {
        width: '100%',
        height: 240,
    },

    cardSection: {
        borderRadius: 10,
        height: '75%',
    },

    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start', // if you want to fill rows left to right
        // marginBottom: 60,
    },

    item: {
        width: '50%', // is 50% of container width
    },

    log_Aktivitas: {
        color: 'red',
        textDecorationLine: 'underline',
        fontSize: 20,
        paddingVertical: 10,
    },

    profile: {
        color: '#aaa',
        paddingLeft: 35,
        marginRight: 20,
        textDecorationLine: 'underline',
        fontSize: 20,
        paddingVertical: 10,
    },

    btnSubmit: {
        alignSelf: 'center',
        position: 'absolute',
        top: 430,
    },
});

export default styles;
