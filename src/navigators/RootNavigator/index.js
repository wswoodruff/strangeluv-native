const Reducers = require('wiring/reducers');
const Connect = require('react-redux').connect;
const { createDrawerNavigator: CreateDrawerNavigator } = require('react-navigation');
const DrawerComponent = require('./DrawerComponent');
const MainStack = require('../MainStack');

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

    // https://reactnavigation.org/docs/navigators
    // https://reactnavigation.org/docs/navigators/stack#RouteConfigs

    // Screens returns { routeConfig, initialRouteName }

    const AppNavigator = CreateDrawerNavigator(
        {
            Main: { screen: MainStack(store, Screens) }
        },
        {
            // nav config
            initialRoute: 'Main',
            drawerPosition: 'right',
            contentComponent: DrawerComponent
        }
    );

    const appNavReducer = require('reducers/nav')(AppNavigator);
    Reducers.inject(store, { key: 'nav', reducer: appNavReducer });

    return internals.connect(AppNavigator);
};
