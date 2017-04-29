const React = require('react');
const { StyleSheet } = require('react-native');
const { TabNavigator } = require('react-navigation');
const { NavigationComponent } = require('react-native-material-bottom-navigation');
const Icon = require('react-native-vector-icons/MaterialIcons').default;

const Styles = StyleSheet.create({
    menuBtn: {
        marginRight: 12
    }
});

module.exports = (store, screens) => {

    return TabNavigator(
        {
            ...screens.routeConfig
        },
        {
            initialRouteName: screens.initialRouteName,
            tabBarComponent: NavigationComponent,
            tabBarPosition: 'bottom',
            tabBarOptions: screens.tabBarOptions,
            headerMode: 'screen',
            navigationOptions: {}
        }
    );
};
