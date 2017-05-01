const React = require('react');
const { StyleSheet } = require('react-native');
const { TabNavigator } = require('react-navigation');
const { NavigationComponent } = require('react-native-material-bottom-navigation');
const Icon = require('react-native-vector-icons/MaterialIcons').default;
const style = StyleSheet.create(require('styles').default);

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
                        <Icon
                            name='menu'
                            size={24}
                            style={style.menuBtn}
                            onPress={() => navigation.navigate('DrawerOpen')}
                        />
                    )
                }
            }
        }
    );
};
