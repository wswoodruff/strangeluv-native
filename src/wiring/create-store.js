const Redux = require('redux');
const Reducers = require('./reducers');
const Middleware = require('./middleware');
const Enhancers = require('./enhancers');

const createStore = __DEV__ ? require('utils/reactotron-config').createStore : Redux.createStore;

module.exports = (initialState = {}) => {

    const composeFunc = Redux.compose;

    const store = createStore(
        Reducers.makeRoot(),
        initialState,
        composeFunc(
            Redux.applyMiddleware(...Middleware),
            ...Enhancers
        )
    );

    store.asyncReducers = {};

    return store;
};
