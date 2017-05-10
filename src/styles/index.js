
const React = require('react');
const { StyleSheet } = require('react-native');
const { colors, shades, typo, getMaterialTheme } = require('material-native');

exports.materialTheme = getMaterialTheme({
    theme: 'light',
    primary: colors.lightBlue400,
    accent: 'white'
});

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
    primaryBtn: {
        shadowColor: 'rgba(0, 0, 0, 0.35)',
        shadowOpacity: 1,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 2,
        },

        marginVertical: 4,
        borderRadius: 3,
        // backgroundColor: colors.lightBlue400,
        backgroundColor: colors.green700,
        paddingHorizontal: 16,
        alignItems: 'center'
    },
    text: {
        ...typo.body1,
        paddingVertical: 6,
        fontWeight: 'bold',
        color: 'white'
    }
};

//
// if (module.hot) {
//     module.hot.accept(() => {
//         // const nextRootReducer = require('../reducers/index').default;
//         // store.replaceReducer(nextRootReducer);
//     });
// }

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
