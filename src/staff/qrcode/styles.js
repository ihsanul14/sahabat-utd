import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
    },

    top: {
        height: 100,
    },

    logo: {
        width: '100%',
        height: 210,
    },

    cardSection: {
        borderRadius: 10,
    },

    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start', // if you want to fill rows left to right
    },

    wrapLabelName: {
        paddingHorizontal: 20,
    },

    labelName: {
        fontWeight: 'bold',
        fontSize: 23,
        color: '#fff',
    },
});

export default styles;
