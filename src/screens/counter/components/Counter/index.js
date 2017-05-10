const React = require('react');
const { ScrollView, Text, Button } = require('react-native');
const { CoreRipple } = require('material-native');


const gStyles = require('styles'); // global styles

class Counter extends React.Component {

    render() {

        const { counter, increment, doubleAsync, style } = this.props;

        return (

            <ScrollView style={{ padding: 128 }}>

                <Text style={style.title}>Counter:</Text>
                <Text>{' '}</Text>
                <Text>{counter}</Text>
                
                <CoreRipple
                    accent
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

Counter.propTypes = {
    counter: React.PropTypes.number.isRequired,
    doubleAsync: React.PropTypes.func.isRequired,
    increment: React.PropTypes.func.isRequired
};

module.exports = gStyles.addStyleHelpers(Counter);
