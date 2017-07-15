const React = require('react');
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
            <ScrollView>
                <Title>Counter:</Title>
                <Text>{' '}</Text>
                <StylishText>{counter}</StylishText>
                <Button
                    onPress={increment}
                    title='Increment'
                />
                <Text>{' '}</Text>
                <Button
                    onPress={doubleAsync}
                    title='Double (Async)'
                />
            </ScrollView>
        );
    }
}
