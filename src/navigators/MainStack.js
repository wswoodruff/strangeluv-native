const React = require('react');
const { createStackNavigator: CreateStackNavigator } = require('react-navigation');

// Styles

const LStyles = require('./styles');
const { MenuIcon } = LStyles;

// Component

module.exports = (store, screens) => {

    return CreateStackNavigator(
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
                            name='menu'
                            onPress={() => navigation.openDrawer()}
                        />
                    )
                };
            }
        }
    );
};
