const React = require('react');
const { CoreRipple } = require('material-native');
const T = require('prop-types');
// const MaterialRipple = require('components/MaterialRipple');

// Styles

const gStyles = require('styles'); // global styles
const lStyles = require('./styles'); // local styles

const {
    ScrollView,
    Text,
    Title } = gStyles;

const {
    Duck,
    InheritStylesText } = lStyles;

// Component

module.exports = class HomeView extends React.PureComponent {

    static propTypes = {
        navigation: T.object.isRequired
    };

    constructor() {

        super();

        this.navigate = this._navigate.bind(this);
    }

    _navigate(navigation, path) {

        return () => {

            navigation.navigate(path);
        }
    }

    render() {

        const { navigation, style } = this.props;

        return (
            <ScrollView>

                <CoreRipple
                    accent
                    pointerEvents='box-only'
                    shadowAniEnabled
                    maskBorderRadius={3}
                    onPress={() => {

                        navigation.navigate('Home');
                    }}
                >
                    <Text>Home</Text>
                </CoreRipple>
                <Text>{' '}</Text>
                <CoreRipple
                    accent
                    pointerEvents='box-only'
                    shadowAniEnabled
                    maskBorderRadius={3}
                    onPress={() => {

                        navigation.navigate('Counter');
                    }}
                >
                    <Text>Counter</Text>
                </CoreRipple>

                <Title> Welcome! </Title>

                <Duck
                    source={require('../assets/duck.jpg')}
                />
            </ScrollView>
        );
    }
}
