const Reducers = require('wiring/reducers');
const Connect = require('react-redux').connect;
const { createStackNavigator: CreateStackNavigator } = require('react-navigation');

const internals = {};

internals.connect = Connect(
    (state) => ({
        nav: state.nav
    })
);

module.exports = (store) => {

    const Screens = require('screens')(store);

    if (!Screens.routeConfig || !Screens.initialRouteName) {
        throw new Error('Screens must export props "routeConfig" and "initialRouteName"');
    }

    const AppNavigator = CreateStackNavigator(
        Screens.routeConfig,
        {
            initialRouteName: Screens.initialRouteName
        }
    );

    const appNavReducer = require('reducers/nav')(AppNavigator);

    Reducers.inject(store, { key: 'nav', reducer: appNavReducer });

    return internals.connect(AppNavigator);
};
