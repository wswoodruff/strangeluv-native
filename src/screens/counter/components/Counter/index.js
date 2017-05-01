const React = require('react');
const { ScrollView, Image, Text, Button } = require('react-native');
const Icon = require('react-native-vector-icons/MaterialIcons').default;
const { MKButton } = require('react-native-material-kit');

const IncrementBtn = MKButton.coloredButton()
    .withText('Increment')
    .build();

const CounterBtn = MKButton.coloredButton()
    .withText('Double (Async)')
    .build();

const gStyles = require('styles'); // global styles

class Counter extends React.Component {

    render() {

        const { counter, increment, doubleAsync, style } = this.props;

        return (

            <ScrollView style={{ padding: 128 }}>
                <Text style={style.title}>Counter:</Text>
                <Text>{' '}</Text>
                <Text>{counter}</Text>
                <IncrementBtn
                    onPress={increment}
                    title='Increment'
                    style={style.button}
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

Counter.propTypes = {
    counter: React.PropTypes.number.isRequired,
    doubleAsync: React.PropTypes.func.isRequired,
    increment: React.PropTypes.func.isRequired
};

module.exports = gStyles.addStyleHelpers(Counter);
