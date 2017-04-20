const Redux = require('redux');
const Reducers = require('./reducers');
const Middleware = require('./middleware');
const Enhancers = require('./enhancers');

module.exports = (initialState = {}) => {

    const store = Redux.createStore(
        Reducers.makeRoot(),
        initialState,
        Redux.compose(
            Redux.applyMiddleware(...Middleware),
            ...Enhancers
        )
    );

    store.asyncReducers = {};

    return store;
};
