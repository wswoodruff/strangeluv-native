const React = require('react');

const { TabNavigator } = require('react-navigation');
const { NavigationComponent } = require('react-native-material-bottom-navigation');

// Styles

const gStyles = require('styles');
const { MenuIcon } = gStyles;

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
