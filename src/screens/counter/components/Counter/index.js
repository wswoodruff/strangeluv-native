const React = require('react');
const { CoreRipple } = require('material-native');
const { default: MaterialRipple } = require('components/MaterialRipple');

const T = require('prop-types');

// Styles

const gStyles = require('styles'); // global styles
const lStyles = require('./styles'); // local styles

const {
    ScrollView,
    Text,
    Title,
    Button } = gStyles;

const {
    StyledMaterialRipple,
    StylishText,
    WhiteText } = lStyles;

// Component

module.exports = class Counter extends React.PureComponent {

    static propTypes = {
        counter: T.number.isRequired,
        doubleAsync: T.func.isRequired,
        increment: T.func.isRequired
    }

    render() {

        const {
            counter,
            increment,
            doubleAsync } = this.props;

        return (
            <ScrollView style={{ padding: 128 }}>
                <Text>Counter:</Text>
                <Text>{' '}</Text>
                <StylishText>{counter}</StylishText>

                <StyledMaterialRipple
                    onPress={increment}
                >
                    <WhiteText>Increment</WhiteText>
                </StyledMaterialRipple>

                <Text>{' '}</Text>
                <StyledMaterialRipple
                    onPress={doubleAsync}
                >
					<WhiteText>Double (Async)</WhiteText>
				</StyledMaterialRipple>
            </ScrollView>
        );
    }
}
