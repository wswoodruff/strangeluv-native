const React = require('react');
const { ScrollView, Text } = require('react-native');
const Icon = require('react-native-vector-icons/MaterialIcons').default;
const { MKButton } = require('react-native-material-kit');

const IncrementBtn = MKButton.coloredButton()
    .withText('Increment')
    .build();

const CounterBtn = MKButton.coloredButton()
    .withText('Double (Async)')
    .build();


class Counter extends React.Component {

    static navigationOptions = {
        tabBar: {
            icon: () => (<Icon size={24} color='white' name='add' />)
        }
    }

    render() {

        const { counter, increment, doubleAsync } = this.props;

        return (

            <ScrollView style={{ margin: 128 }}>
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

console.log(Counter);

module.exports = Counter;
