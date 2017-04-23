
const { Platform } = require('react-native');
// const { devTools } = require('remote-redux-devtools');
// const devToolsEnhancer = require('remote-redux-devtools').default;

//
// console.log(devToolsEnhancer);

const enhancers = module.exports = [];

if (__DEV__) {
    // enhancers.push(devToolsEnhancer());
}
// if (__DEBUG__) {
    // const devToolsExtension = window.devToolsExtension;
    // if (typeof devToolsExtension === 'function') {
    //     enhancers.push(devToolsExtension());
    // }
// }


// "postinstall": "remotedev-debugger --hostname localhost --port 8000 --injectserver"
