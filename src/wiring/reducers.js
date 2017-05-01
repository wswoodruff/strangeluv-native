const Redux = require('redux');
const Wiring = require('./');

exports.makeRoot = (store, asyncReducers) => {

    return Redux.combineReducers({
        ...Wiring(store), // Everything in reducers/
        ...asyncReducers
    });
};

exports.inject = (store, { key, reducer }) => {

    console.log(key, reducer);

    store.asyncReducers[key] = reducer;
    const root = exports.makeRoot(store, store.asyncReducers);
    store.replaceReducer(root);
};
