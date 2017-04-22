const React = require('react');
const { ScrollView, Text, Image } = require('react-native');
const Styles = require('./styles');

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

        const { navigation } = this.props;

        return (
            <ScrollView style={{ margin: 128 }}>

                <HomeBtn onPress={() => {

                    navigation.navigate('Home');
                }} />

                <CounterBtn onPress={() => {

                    navigation.navigate('Counter');
                }} />

                <Text style={Styles.title}>Welcome!</Text>
                <Image
                    style={Styles.duck}
                    source={require('../assets/duck.jpg')}
                />
            </ScrollView>
        );
    }
}

module.exports = HomeView;
