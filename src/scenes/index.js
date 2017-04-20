const React = require('react');
const Counter = require('./counter');
const Home = require('./home');

module.exports = (store) => {

    return [
        {
            Home,
            Counter
        },
        {
            // Main app navigation config
            // https://reactnavigation.org/docs/navigators/stack#StackNavigatorConfig
            initialRouteName: 'Home'
        }
    ];
};
