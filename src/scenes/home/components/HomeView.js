const React = require('react');
const { View, Text, Image, StyleSheet, Button } = require('react-native');
const Styles = require('./styles');
const Icon = require('react-native-vector-icons/MaterialIcons').default;

class HomeView extends React.Component {

    static navigationOptions = ({ navigation }) => ({

        headerRight: (<Icon size={24} color='white' name='home' onPress={() => {

            navigation.navigate('DrawerOpen');
        }} />)
    });

    static propTypes = {
        navigation: React.PropTypes.object.isRequired
    };

    render() {

        const { navigation } = this.props;

        return (

            <View style={{ margin: 128 }}>

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
            </View>
        );
    }
}

module.exports = HomeView;
