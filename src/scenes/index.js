const React = require('react');
const Counter = require('./counter');
const Home = require('./home');


// This is our main route config,
// to have a single place to collect
// our scenes and configure their
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
