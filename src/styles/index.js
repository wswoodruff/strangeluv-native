
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
    },
    menuBtn: {
        marginRight: 12
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

    return class StylishComponent extends React.PureComponent {

        componentWillReceiveProps({ style }) {

            hocStyles = exports.compose(style || {}, ...stylesToCompose);
            // To give passed-in styles the last say in style cascading:
            // hocStyles = exports.compose(...stylesToCompose, style || {});
        }
        render() {

            return <Component {...this.props} style={hocStyles} />;
        }
    }
}
