const Redux = require('redux');
const Reducers = require('./reducers');
const Middleware = require('./middleware');
const Enhancers = require('./enhancers');

module.exports = (initialState = {}) => {

    let composeFunc = Redux.compose;

    if (__DEV__) {
        composeFunc = require('redux-devtools-extension').composeWithDevTools({ realtime: true, port: 5678 });
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
