const React = require('react');
const { ScrollView, Text } = require('react-native');

const { MKButton } = require('react-native-material-kit');

const IncrementBtn = MKButton.coloredButton()
    .withText('Increment')
    .build();

const CounterBtn = MKButton.coloredButton()
    .withText('Double (Async)')
    .build();


class Counter extends React.Component {

    render() {

        const { counter, increment, doubleAsync } = this.props;

        return (

            <ScrollView style={{ padding: 128 }}>
                <Text>Counter:</Text>
                <Text>{' '}</Text>
                <Text>{counter}</Text>
                <IncrementBtn
                    onPress={increment}
                />
                <Text>{' '}</Text>
                <CounterBtn
                    onPress={doubleAsync}
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

module.exports = Counter;
