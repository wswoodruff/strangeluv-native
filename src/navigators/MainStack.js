const React = require('react');
const { StyleSheet } = require('react-native');
const { StackNavigator } = require('react-navigation');
const Icon = require('react-native-vector-icons/MaterialIcons').default;

const Styles = StyleSheet.create({
    menuBtn: {
        marginRight: 12
    }
});

module.exports = (store, scenes) => {

    return StackNavigator(
        {
            ...scenes.routeConfig
        },
        {
            initialRouteName: scenes.initialRouteName,
            headerMode: 'screen',
            navigationOptions: {
                header: ({ navigate }) => ({
                    right: (
                        <Icon
                            name='menu'
                            size={24}
                            style={Styles.menuBtn}
                            onPress={() => navigate('DrawerOpen')}
                        />
                    )
                })
            }
        }
    );
};
