const React = require('react');
const { View } = require('react-native');
const { StackNavigator } = require('react-navigation');

// Styles

const lStyles = require('./styles');
const { MenuIcon } = lStyles;

// Component

module.exports = (store, screens) => {

    return StackNavigator(
        {
            ...screens.routeConfig
        },
        {
            initialRouteName: screens.initialRouteName,
            tabBarPosition: 'bottom',
            tabBarOptions: screens.tabBarOptions,
            headerMode: 'screen',
            navigationOptions: ({ navigation }) => {
                return {
                    headerRight: (
                        <MenuIcon
                            name="menu"
                            onPress={() => navigation.navigate('DrawerOpen')}
                        />
                    )
                }
            }
        }
    );
};
