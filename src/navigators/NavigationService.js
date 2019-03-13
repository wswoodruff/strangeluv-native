// https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html
const { NavigationActions } = require('react-navigation');

let _navigator;

exports.setTopLevelNavigator = (navigatorRef) => {

    _navigator = navigatorRef;
};

exports.navigate = (routeName, key = null, params = {}) => {

    _navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            key,
            params
        })
    );
};
