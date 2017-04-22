const React = require('react');
const Counter = require('./counter');
const Home = require('./home');
const { StyleSheet, ScrollView } = require('react-native');
const { StackNavigator, DrawerView } = require('react-navigation');
const Icon = require('react-native-vector-icons/MaterialIcons').default;

const styles = StyleSheet.create({
    drawerContainer: {
        flex: 1
    },
    menuBtn: {
        marginRight: 12
    }
});

const drawerRoutes = (store) => {

    const appStackNav = StackNavigator(
        {
            Home,
            Counter
        },
        {
            // Main app navigation config
            // https://reactnavigation.org/docs/navigators/stack#StackNavigatorConfig
            initialRouteName: 'Home',
            headerMode: 'screen',
            navigationOptions: {
                header: ({ navigate }) => ({
                    right: (
                        <Icon
                            name='menu'
                            size={24}
                            style={styles.menuBtn}
                            onPress={() => navigate('DrawerOpen')}
                        />
                    )
                })
            }
        }
    );

    return {
        Main: { screen: appStackNav }
    };
};


class CustomDrawerContentComponent extends React.Component {

    render() {

        return (

            <ScrollView style={styles.drawerContainer}>
                <DrawerView.Items {...this.props} />
            </ScrollView>
        );
    }
}

// Drawer nav
module.exports = (store) => {

    return [

        drawerRoutes(store),

        {
            // Main app navigation config (drawer nav)
            // https://reactnavigation.org/docs/navigators/drawer#DrawerNavigatorConfig
            initialRouteName: 'Main',
            drawerPosition: 'right',
            contentComponent: CustomDrawerContentComponent
        }
    ];
};
