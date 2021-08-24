import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    MainContainer: {
        // Setting up View inside content in Vertically center.
        // justifyContent: 'center',
        flex: 1,
    },

    cardPadding: {
        paddingHorizontal: 15,
    },

    logo: {
        width: '100%',
        height: 240,
    },

    top: {
        height: 168,
    },

    // TextInputStyleClass: {
    //     textAlign: 'center',
    //     height: 50,
    //     borderWidth: 2,
    //     borderRadius: 20,
    //     marginBottom: 20,
    //     borderColor: '#ddd',
    // },

    TextInputStyleClass: {
        textAlign: 'center',
        height: 50,
        borderWidth: 2,
        borderRadius: 20,
        marginBottom: 25,
        borderColor: '#fff',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        elevation: 3,
    },

    TextInputStyleClassCustom: {
        textAlign: 'center',
        height: 50,
        borderWidth: 2,
        borderRadius: 20,
        borderColor: '#ddd',
    },

    title: {
        fontSize: 19,
        color: '#fff',
    },

    subtitle: {
        color: '#fff',
    },

    cardSection: {
        borderRadius: 10,
        // paddingBottom: 30,
    },

    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start', // if you want to fill rows left to right
        paddingBottom: 25,
        marginTop: 20,
    },

    item: {
        width: '50%', // is 50% of container width
    },

    signup: {
        color: 'red',
        marginLeft: 15,
        textDecorationLine: 'underline',
        fontSize: 16,
    },

    login: {
        textAlign: 'right',
        color: '#aaa',
        paddingLeft: 50,
        marginRight: 30,
        textDecorationLine: 'underline',
        fontSize: 16,
    },

    btnSubmit: {
        alignSelf: 'center',
        position: 'absolute',
        top: 300,
    },

    info: {
        // width: 200,
        borderRadius: 5,
        backgroundColor: '#f0f0f0',
        padding: 10,
        marginTop: 20,
    },
    button: {
        marginTop: 20,
        padding: 10,
    },
});

export default styles;
