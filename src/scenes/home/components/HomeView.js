const React = require('react');
const { ScrollView, Text, Image } = require('react-native');
const Styles = require('./styles');

class HomeView extends React.Component {

    static propTypes = {
        navigation: React.PropTypes.object.isRequired
    };

    render() {

        const { navigation } = this.props;

        return (
            <ScrollView style={{ margin: 128 }}>

                <Text onPress={() => {

                    navigation.navigate('Home');
                }}>Home</Text>
                <Text onPress={() => {

                    navigation.navigate('Counter');
                }}>Counter</Text>

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
