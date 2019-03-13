const React = require('react');
const NavigationService = require('navigators/NavigationService');

// Styles
const GStyles = require('styles'); // global styles
const LStyles = require('./styles'); // local styles

const { ScrollView, Title } = GStyles;
const { Duck, InheritStylesText } = LStyles;

// Component
module.exports = class HomeView extends React.PureComponent {

    render() {

        return (
            <ScrollView>
                <InheritStylesText
                    color='#b71c1c' // Material Red900
                    onPress={() => NavigationService.navigate('Home')}>

                    Home

                </InheritStylesText>

                <InheritStylesText
                    onPress={() => NavigationService.navigate('Counter')}>

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
