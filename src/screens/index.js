
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

        initialRouteName: 'Home',

        tabBarOptions: {
            bottomNavigationOptions: {
                labelColor: 'white',
                rippleColor: 'white',
                tabs: {
                    Home: {
                        barBackgroundColor: '#37474F'
                    },
                    Counter: {
                        barBackgroundColor: '#e6158d'
                    }
                }
            }
        }
    };
};
