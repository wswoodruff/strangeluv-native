const React = require('react');
const Reducers = require('../wiring/reducers');
const Connect = require('react-redux').connect;
const { DrawerNavigator, addNavigationHelpers } = require('react-navigation');
const internals = {};

internals.connect = Connect(
    (state) => ({
        nav: state.nav
    })
);

module.exports = (store) => {

    const Scenes = require('../scenes')(store);

    // https://reactnavigation.org/docs/navigators/stack#RouteConfigs
    // https://reactnavigation.org/docs/navigators/stack#StackNavigatorConfig

    // If you don't want a StackNavigator as your root navigator like you
    // see below, change it here and in '../scenes'.
    // Make sure ../scenes exports a correct
    // config for your root stack:

    // Scenes returns [ routeConfig, stackNavigatorConfig ]

    const AppDrawerNavigator = DrawerNavigator(...Scenes);

    class AppNavigator extends React.Component {

        render() {

            const { dispatch, nav } = this.props;

            return (
                <AppDrawerNavigator
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

    AppNavigator.propTypes = {
        dispatch: React.PropTypes.any.isRequired,
        nav: React.PropTypes.any.isRequired
    };

    const appNavReducer = require('../reducers/nav')(AppDrawerNavigator);

    Reducers.inject(store, { key: 'nav', reducer: appNavReducer });

    return internals.connect(AppNavigator);
};
