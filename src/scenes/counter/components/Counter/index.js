const React = require('react');
const { ScrollView, Text, Button } = require('react-native');

const { MKButton } = require('react-native-material-kit');

const IncrementBtn = MKButton.coloredButton()
    .withText('Home')
    .build();

const CounterBtn = MKButton.coloredButton()
    .withText('Counter')
    .build();


class Counter extends React.Component {

    render() {

        const { counter, increment, doubleAsync } = this.props;

        return (

            <ScrollView style={{ margin: 128 }}>
                <Text>Counter:</Text>
                <Text>{' '}</Text>
                <Text>{counter}</Text>
                <IncrementBtn
                    onPress={increment}
                    title='Increment'
                />
                <Text>{' '}</Text>
                <IncrementBtn
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
