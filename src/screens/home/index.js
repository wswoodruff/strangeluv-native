const React = require('react');
const { Image } = require('react-native');

module.exports = {

    screen: require('./components/HomeView'),
    path: 'home',
    navigationOptions: {
        title: 'Welcome',
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => <Image source={require('./assets/duck.jpg')} />
    }
};
