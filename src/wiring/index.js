
const wiringReducers = require('./reducers');

module.exports = (store) => {

    if (module.hot) {
        module.hot.accept(() => {

            const updatedReducers = require('reducers');

            Object.keys(updatedReducers).forEach((key) => {

                const hotReducer = updatedReducers[key];
                const injectVal = {};
                injectVal.key = key;
                injectVal.reducer = hotReducer;

                wiringReducers.inject(store, injectVal);
            });
        });
    }

    return require('reducers');
};
