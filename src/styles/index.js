
const { StyleSheet } = require('react-native');

const gStyles = exports.default = {

    title: {
        fontSize: 19,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    duck: {
        marginTop: 20,
        width: 120,
        height: 120,
        resizeMode: 'contain'
    }
};

exports.compose = (...cStyles) => {

    return StyleSheet.create(Object.assign({},
        gStyles,
        ...cStyles
    ))
}
