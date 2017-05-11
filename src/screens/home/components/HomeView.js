const React = require('react');
const { ScrollView, Text, Image } = require('react-native');

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

                <Text onPress={() => {

                    navigation.navigate('Home');
                }}>Home</Text>
                <Text onPress={() => {

                    navigation.navigate('Counter');
                }}>Counter</Text>

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
