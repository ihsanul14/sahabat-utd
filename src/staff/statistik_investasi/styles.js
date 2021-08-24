import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    MainContainer: {
        // Setting up View inside content in Vertically center.
        // justifyContent: 'center',
        flex: 1,
    },

    top: {
        height: 145,
    },

    TextInputStyleClass: {
        textAlign: 'center',

        // Setting up TextInput height as 50 pixel.
        height: 50,

        // Set border width.
        borderWidth: 2,

        // Set border Radius.
        borderRadius: 20,

        marginTop: 10,
        marginBottom: 20,
        borderColor: '#ddd',
    },

    logo: {
        width: '100%',
        height: 210,
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
        paddingBottom: 30,
    },

    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start', // if you want to fill rows left to right
        paddingBottom: 50,
    },

    item: {
        width: '50%', // is 50% of container width
    },

    signup: {
        color: '#aaa',
        marginLeft: 20,
        textDecorationLine: 'underline',
        fontSize: 16,
    },

    login: {
        textAlign: 'right',
        color: 'red',
        paddingLeft: 50,
        marginRight: 20,
        textDecorationLine: 'underline',
        fontSize: 16,
    },

    btnSubmit: {
        alignSelf: 'center',
        position: 'absolute',
        top: 580,
    },
});

export default styles;
