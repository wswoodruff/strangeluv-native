const React = require('react');
const { Image } = require('react-native');
const Icon = require('react-native-vector-icons/MaterialIcons').default;

module.exports = {

    screen: require('./components/HomeView'),
    path: 'home',
    navigationOptions: {
        title: 'Welcome',
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => <Image source={require('./assets/duck.jpg')} />,
        tabBarIcon: () => (
            <Icon size={24} color='white' name='home' />
        )
    }
};
