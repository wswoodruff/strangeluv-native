const React = require('react');
const { ScrollView, Text, Image } = require('react-native');
const { CoreRipple } = require('material-native');

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

                <CoreRipple
                    accent
                    pointerEvents='box-only'
                    shadowAniEnabled
                    maskBorderRadius={3}
                    style={style.primaryBtn}
                    onPress={() => {

                        navigation.navigate('Home');
                    }}
                >
					<Text style={style.text}>Home</Text>
				</CoreRipple>
                <Text>{' '}</Text>
                <CoreRipple
                    accent
                    pointerEvents='box-only'
                    shadowAniEnabled
                    maskBorderRadius={3}
                    style={style.primaryBtn}
                    onPress={() => {

                        navigation.navigate('Counter');
                    }}
                >
					<Text style={style.text}>Counter</Text>
				</CoreRipple>

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
