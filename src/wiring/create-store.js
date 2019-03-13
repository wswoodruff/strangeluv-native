const { applyMiddleware, createStore, compose } = require('redux');
const Reducers = require('./reducers');
const Middleware = require('./middleware');
const Enhancers = require('./enhancers');

module.exports = (initialState = {}) => {

    const createStoreFunc = __DEV__ ? require('utils/reactotron-config').createStore : createStore;

    const store = createStoreFunc(
        Reducers.makeRoot(),
        initialState,
        compose(
            applyMiddleware(...Middleware),
            ...Enhancers
        )
    );

    store.asyncReducers = {};

    return store;
};
