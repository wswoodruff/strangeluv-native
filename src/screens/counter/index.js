const React = require('react');
const Icon = require('react-native-vector-icons/MaterialIcons').default;

module.exports = {

    screen: require('./containers/Counter'),
    path: 'counter',
    navigationOptions: {
        title: 'Counter',
        drawerLabel: 'Counter',
        tabBarIcon: () => (
            <Icon size={24} color='white' name='add' />
        )
    }
};
