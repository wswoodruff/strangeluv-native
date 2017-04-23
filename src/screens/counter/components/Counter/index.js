const React = require('react');
const { ScrollView, Text, Button } = require('react-native');

class Counter extends React.Component {

    render() {

        const { counter, increment, doubleAsync } = this.props;

        return (

            <ScrollView style={{ margin: 128 }}>
                <Text>Counter:</Text>
                <Text>{' '}</Text>
                <Text>{counter}</Text>
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

Counter.propTypes = {
    counter: React.PropTypes.number.isRequired,
    doubleAsync: React.PropTypes.func.isRequired,
    increment: React.PropTypes.func.isRequired
};

console.log(Counter);

module.exports = Counter;
