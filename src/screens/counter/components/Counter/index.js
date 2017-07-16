const React = require('react');
const { ScrollView, Text, Button } = require('react-native');
const { CoreRipple } = require('material-native');

const T = require('prop-types');

// Styles

const gStyles = require('styles'); // global styles
const lStyles = require('./styles'); // local styles

const {
    ScrollView,
    Text,
    Title,
    Button } = gStyles;

const { StylishText } = lStyles;

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

                <Text style={style.title}>Counter:</Text>
                <Text>{' '}</Text>
                <StylishText>{counter}</StylishText>

                <CoreRipple
                    accent
                    pointerEvents='box-only'
                    shadowAniEnabled
                    maskBorderRadius={3}
                    style={style.primaryBtn}
                    onPress={increment}
                >
					<Text style={style.text}>Increment</Text>
				</CoreRipple>
                <Text>{' '}</Text>
                <CoreRipple
                    accent
                    pointerEvents='box-only'
                    shadowAniEnabled
                    maskBorderRadius={3}
                    style={style.primaryBtn}
                    onPress={doubleAsync}
                >
					<Text style={style.text}>Double (Async)</Text>
				</CoreRipple>
            </ScrollView>
        );
    }
}
