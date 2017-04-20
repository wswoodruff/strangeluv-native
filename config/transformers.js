const babel = require('./babel-transformer');
const Css2ReactNative = require('css-to-react-native').transform;

// const ReactNativeCSS = require('react-native-css');
// const reactNativeCss = require('./react-native-css-transformer');

module.exports = function(data, callback) {

    const extension = String(data.filename.slice(data.filename.lastIndexOf('.')));
    let result;

    try {

        switch (extension) {

            case '.js':
            case '.jsx':
                result = babel(data.sourceCode, data.filename, data.options);
                break;
            // case '.css':
            // case '.scss':

            //     const tmpFile = `module.exports = {hi: 'hello!'};`;
            //     result = babel(tmpFile, data.filename, data.options);
            //     break;

            default:
                result = babel(data.sourceCode, data.filename, data.options);
                break;
        }

    } catch (e) {
        callback(e);
        return;
    }
    callback(null, result);
};
