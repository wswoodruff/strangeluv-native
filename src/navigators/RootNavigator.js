const {
    createStackNavigator: CreateStackNavigator,
    createAppContainer: CreateAppContainer
} = require('react-navigation');

module.exports = (store) => {

    const Screens = require('screens')(store);

    if (!Screens.routeConfig || !Screens.initialRouteName) {
        throw new Error('Screens must export props "routeConfig" and "initialRouteName"');
    }

    return CreateAppContainer(
        CreateStackNavigator(
            Screens.routeConfig,
            {
                initialRouteName: Screens.initialRouteName
            }
        )
    );
};
