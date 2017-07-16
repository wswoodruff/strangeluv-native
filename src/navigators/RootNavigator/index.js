const React = require('react');
const T = require('prop-types');
const Reducers = require('wiring/reducers');
const Connect = require('react-redux').connect;
const { addNavigationHelpers } = require('react-navigation');
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

    const AppNavigator = require('../MainStack')(store, Screens);

    class AppNavigatorClass extends React.PureComponent {

        static propTypes = {
            dispatch: T.any.isRequired,
            nav: T.any.isRequired
        }

        render() {

            const { dispatch, nav } = this.props;

            return (
                <AppNavigator
                    navigation={
                        addNavigationHelpers({
                            dispatch,
                            state: nav
                        })
                    }
                />
            );
        };
    };

    const appNavReducer = require('reducers/nav')(AppNavigator);
    Reducers.inject(store, { key: 'nav', reducer: appNavReducer });

    return internals.connect(AppNavigatorClass);
};
