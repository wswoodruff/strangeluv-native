if (__DEV__) {
    require('utils/reactotron-config');
}

const React = require('react');
const { AppRegistry } = require('react-native');
const AppContainer = require('containers/App');
const CreateReactClass = require('create-react-class');
const CreateStore = require('wiring/create-store');
const NavigationService = require('navigators/NavigationService');

require('../globals');

// TODO: Empty object until we get persistant storage hooked up
const store = CreateStore({});

module.exports = () => {

    const RootNavigator = require('./navigators/RootNavigator')(store);

    const AppContainerClass = CreateReactClass({

        render() {

            return (
                <AppContainer store={store}>
                    <RootNavigator
                        ref={(navigatorRef) => {

                            NavigationService.setTopLevelNavigator(navigatorRef);
                        }}
                    />
                </AppContainer>
            );
        }
    });

    AppRegistry.registerComponent('strangeluvnative', () => AppContainerClass);
};
