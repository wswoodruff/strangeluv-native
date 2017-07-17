const React = require('react');
const Icon = require('react-native-vector-icons/MaterialIcons').default;
const { default: MaterialIcon } = require('components/MaterialIcon');

module.exports = {

    screen: require('./containers/Counter'),
    path: 'counter',
    navigationOptions: {
        title: 'Counter',
        drawerLabel: 'Counter',
        tabBarIcon: () => (
            <MaterialIcon
                size={24}
                color='white'
                name='add'
            />
        )
    }
};
