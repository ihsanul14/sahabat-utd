const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
    root: {padding: 20, minHeight: 270},
    title: {textAlign: 'center', fontSize: 30},
    codeFieldRoot: {
        marginTop: 20,
        width: 280,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    cellRoot: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    cellText: {
        color: '#000',
        fontSize: 36,
        textAlign: 'center',
    },
    focusCell: {
        borderBottomColor: '#007AFF',
        borderBottomWidth: 2,
    },
});

export default styles;
