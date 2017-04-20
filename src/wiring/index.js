
module.exports = (store) => {

    // Currently does not work
    // if (module.hot) {
    //     module.hot.accept(() => {

    //         store.replaceReducer(require('../reducers')(AppNavigator));
    //     });
    // }

    return require('../reducers');
};
