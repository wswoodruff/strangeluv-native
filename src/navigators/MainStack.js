const React = require('react');

const { StackNavigator } = require('react-navigation');
const MainTabs = require('./MainTabs');

// Styles

const gStyles = require('styles');
const { MenuIcon } = gStyles;

// Component
module.exports = (store, screens) => {

    return StackNavigator(
        {
            MainTabs: { screen: MainTabs(store, screens) }
        },
        {
            initialRouteName: 'MainTabs',
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
