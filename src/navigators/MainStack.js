const React = require('react');
const { StyleSheet } = require('react-native');
const { StackNavigator } = require('react-navigation');
const MainTabs = require('./MainTabs');
const Icon = require('react-native-vector-icons/MaterialIcons').default;

module.exports = (store, screens) => {

    return StackNavigator(
        {
            MainTabs: { screen: MainTabs(store, screens) }
        },
        {
            initialRouteName: 'MainTabs',
            headerMode: 'screen',
            navigationOptions: {}
        }
    );
};
