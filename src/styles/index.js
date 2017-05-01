
const React = require('react');
const { StyleSheet } = require('react-native');

const gStyles = exports.default = {

    title: {
        fontSize: 19,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    duck: {
        height: 320,
        width: 320
    }

};

exports.compose = (...stylesToCompose) => {

    return StyleSheet.create(Object.assign({},
        gStyles,
        ...stylesToCompose
    ))
}

exports.addStyleHelpers = (Component, ...stylesToCompose) => {

    let hocStyles = exports.compose(...stylesToCompose);

    return class StylishComponent extends React.Component {

        componentWillReceiveProps({ style }) {

            hocStyles = exports.compose(style || {}, ...stylesToCompose);
        }
        render() {

            return <Component {...this.props} style={hocStyles} />;
        }
    }
}
