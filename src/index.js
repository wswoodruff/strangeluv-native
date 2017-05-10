const React = require('react');
const ReactNative = require('react-native');
const AppRegistry = ReactNative.AppRegistry;
const AppContainer = require('containers/App');
const CreateStore = require('wiring/create-store');

const { colors, shades, getMaterialTheme, ThemeProvider } = require('material-native');

if (__DEV__) {

    // Allows you to see network requests in Chrome's Network tab
    // when you have the react-native remote debugger open

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

    const theme = getMaterialTheme({
    	theme: 'light',
    	primary: colors.blue500,
    	darkPrimary: colors.blue700,
    });

    const AppContainerClass = React.createClass({

        render() {

            return (
                <ThemeProvider theme={theme}>
                    <AppContainer store={store}>
                        <RootNavigator />
                    </AppContainer>
                </ThemeProvider>
            );
        }
    });

    // register with the AppRegistery and :rocket: into space!

    AppRegistry.registerComponent('strangeluvnative', () => AppContainerClass);
};
