const React = require('react');
const { ScrollView, Text, Image } = require('react-native');

const gStyles = require('styles'); // global styles
const lStyles = require('./styles'); // local styles

const Styles = gStyles.compose(lStyles);

class HomeView extends React.Component {

    static propTypes = {
        navigation: React.PropTypes.object.isRequired
    };

    componentWillReceiveProps({ style }) {

        // Compose passed-in style
        Styles = gStyles.compose(style || {}, lStyles);
    }

    render() {

        const { navigation } = this.props;

        // Styles = Styles.compose(style, );

        return (
            <ScrollView style={{ padding: 128 }}>

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
