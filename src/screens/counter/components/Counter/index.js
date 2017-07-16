const React = require('react');

const Icon = require('react-native-vector-icons/MaterialIcons').default;
const { MKButton } = require('react-native-material-kit');
const T = require('prop-types');

const IncrementBtn = MKButton.coloredButton()
    .withText('Increment')
    .build();

const CounterBtn = MKButton.coloredButton()
    .withText('Double (Async)')
    .build();

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
            <ScrollView>
                <Title>Counter:</Title>
                <Text>{' '}</Text>

                <StylishText>{counter}</StylishText>
                <IncrementBtn
                    onPress={increment}
                    title='Increment'
                />
                <Text>{' '}</Text>
                <CounterBtn
                    onPress={doubleAsync}
                    title='Double (Async)'
                />
            </ScrollView>
        );
    }
}
