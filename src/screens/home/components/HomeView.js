const React = require('react');
const { ScrollView, Text, Image } = require('react-native');

const gStyles = require('styles'); // global styles
const lStyles = require('./styles'); // local styles

const { MKButton } = require('react-native-material-kit');

const HomeBtn = MKButton.coloredButton()
    .withText('Home')
    .build();

const CounterBtn = MKButton.coloredButton()
    .withText('Counter')
    .build();


class HomeView extends React.Component {

    static propTypes = {
        navigation: React.PropTypes.object.isRequired
    };

    render() {

        const { navigation, style } = this.props;

        return (
            <ScrollView style={{ padding: 128 }}>

                <HomeBtn onPress={() => {

                    navigation.navigate('Home');
                }} />

                <CounterBtn onPress={() => {

                    navigation.navigate('Counter');
                }} />

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
