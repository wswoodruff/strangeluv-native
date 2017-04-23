const React = require('react');
const ReactNative = require('react-native');
const AppRegistry = ReactNative.AppRegistry;
const AppContainer = require('./containers/App');

const CreateStore = require('./wiring/create-store');

if (__DEV__) {

    global.XMLHttpRequest = global.originalXMLHttpRequest ?
        global.originalXMLHttpRequest :
        global.XMLHttpRequest;

    global.FormData = global.originalFormData ?
        global.originalFormData :
        global.FormData;
}

// TODO: Empty object until we get persistant storage hooked up
const store = CreateStore({});

// TODO: does not yet have a reducer
// const { setPlatform, setVersion } = require('./actions/Device');

// App version, keep pJson in sync with your app store versions

// TODO: does not yet have a reducer
// const pJson = require('../package');
// const appVersion = pJson.version;

module.exports = (platform) => {

    const RootNavigator = require('./navigators/RootNavigator')(store);

    const AppContainerClass = React.createClass({

        render() {

            return (
                <AppContainer store={store}>
                    <RootNavigator />
                </AppContainer>
            );
        }
    });

    // register with the AppRegistery and :rocket: into space!

    AppRegistry.registerComponent('strangeluvnative', () => AppContainerClass);
};
