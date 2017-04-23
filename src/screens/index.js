const React = require('react');
const Counter = require('./counter');
const Home = require('./home');


// This is our main route config,
// to have a single place to collect
// our screens and configure their
// relationships via other navigators

module.exports = (store) => {

    return {
        routeConfig: {
            Home,
            Counter
        },
        initialRouteName: 'Home'
    };
};
