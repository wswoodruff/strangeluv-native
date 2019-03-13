const Reactotron = require('reactotron-react-native').default;
const { reactotronRedux } = require('reactotron-redux');

const reactotron = Reactotron
.configure() // controls connection & communication settings
.use(reactotronRedux())
.useReactNative() // add all built-in react native plugins
.connect(); // let's connect!

module.exports = reactotron;
