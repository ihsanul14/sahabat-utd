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

    top: {
        height: 120,
    },

    TextInputStyleClass: {
        textAlign: 'center',

        // Setting up TextInput height as 50 pixel.
        height: 50,

        // Set border width.
        borderWidth: 2,

        // Set border Radius.
        borderRadius: 20,

        marginBottom: 20,
        borderColor: '#ddd',
    },

    logo: {
        width: '100%',
        height: 200,
    },

    cardSection: {
        borderRadius: 10,
        height: 320,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },

    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start', // if you want to fill rows left to right
        paddingBottom: 55,
    },

    item: {
        width: '50%', // is 50% of container width
    },

    forgot_password: {
        textAlign: 'right',
        color: 'red',
        marginRight: 20,
    },

    remember: {
        color: '#aaa',
        marginLeft: 30,
    },

    signup: {
        color: 'red',
        marginLeft: 20,
        textDecorationLine: 'underline',
        fontSize: 16,
    },

    login: {
        textAlign: 'right',
        paddingLeft: 50,
        marginRight: 20,
        textDecorationLine: 'underline',
        fontSize: 16,
    },

    btnSubmit: {
        alignSelf: 'center',
        position: 'absolute',
        top: 300,
    },
});

export default styles;
