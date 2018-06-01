const React = require('react');
const T = require('prop-types');

// Styles
const GStyles = require('styles'); // global styles
const LStyles = require('./styles'); // local styles

const { ScrollView, Title } = GStyles;
const { Duck, InheritStylesText } = LStyles;

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
        };
    }

    render() {

        const { navigation } = this.props;

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
};
