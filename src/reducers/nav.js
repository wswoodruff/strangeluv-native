// Do not add this to the list in reducers/index.js

module.exports = (AppStackNavigator) => {

    return (state, action) => {

        const type = action.type;

        switch (type) {

            default:

                const newState = AppStackNavigator.router.getStateForAction(action, state);
                return (newState ? newState : state);
        }
    };
};
