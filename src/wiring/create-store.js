const Redux = require('redux');
const Reducers = require('./reducers');
const Middleware = require('./middleware');
const Enhancers = require('./enhancers');

module.exports = (initialState = {}) => {

    let composeFunc = Redux.compose;

    if (__DEV__) {
        composeFunc = require('remote-redux-devtools').composeWithDevTools({ realtime: true });
    }

    const store = Redux.createStore(
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
