const React = require('react');
const T = require('prop-types');

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

        return (...a) => {

            navigation.navigate(path);
        }
    }

    render() {

        const { navigation, style } = this.props;

        return (
            <ScrollView>
                <InheritStylesText
                    color='#b71c1c' // Material Red900
                    onPress={this.navigate(navigation, 'Home')}>

                    Home

                </InheritStylesText>

                <InheritStylesText
                    onPress={this.navigate(navigation, 'Counter')}>

                    Counter

                </InheritStylesText>

                <Title> Welcome! </Title>

                <Duck
                    source={require('../assets/duck.jpg')}
                />
            </ScrollView>
        );
    }
}
