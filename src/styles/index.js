
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

    return class StylishComponent extends React.PureComponent {

        constructor(props) {

            super(props);

            this.state = {
                hocStyles: exports.compose(props.style || {}, ...stylesToCompose)
            }
        }

        componentWillReceiveProps(nextProps) {

            if (nextProps.style) {
                this.setState((prevState, props) => ({
                    hocStyles: exports.compose(prevState.style || {}, ...stylesToCompose, nextProps.style)
                }));
            }
        }
        render() {

            return <Component {...this.props} style={this.state.hocStyles} />;
        }
    }
}
