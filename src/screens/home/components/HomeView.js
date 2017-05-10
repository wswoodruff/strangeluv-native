const React = require('react');
const { ScrollView, Text, Image } = require('react-native');
const { RectRipple } = require('material-native');

const gStyles = require('styles'); // global styles
const lStyles = require('./styles'); // local styles

class HomeView extends React.Component {

    static propTypes = {
        navigation: React.PropTypes.object.isRequired
    };

    render() {

        const { navigation, style } = this.props;

        return (
            <ScrollView style={{ padding: 128 }}>

                <RectRipple
                    style={style.rect}
                    onPress={() => {

                        navigation.navigate('Home');
                    }}
                >
					<Text style={style.text}>Home</Text>
				</RectRipple>
                <Text>{' '}</Text>
                <RectRipple
                    style={style.rect}
                    onPress={() => {

                        navigation.navigate('Counter');
                    }}
                >
					<Text style={style.text}>Counter</Text>
				</RectRipple>

                <Text style={style.title}>Welcome!</Text>
                <Image
                    style={style.duck}
                    source={require('../assets/duck.jpg')}
                />
            </ScrollView>
        );
    }
}

module.exports = gStyles.addStyleHelpers(HomeView, lStyles);
