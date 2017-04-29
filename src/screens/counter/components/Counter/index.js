const React = require('react');
const { ScrollView, Text, Button } = require('react-native');

const gStyles = require('styles'); // global styles

let Styles = gStyles.default;

class Counter extends React.Component {

    componentWillReceiveProps({ style }) {

        Styles = gStyles.compose(style || {});
    }

    render() {

        const { counter, increment, doubleAsync } = this.props;

        return (

            <ScrollView style={{ padding: 128 }}>
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

module.exports = Counter;
