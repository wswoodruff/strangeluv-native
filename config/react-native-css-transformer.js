
// TODO transform .css files with react-native-css at the
// bottom of this file,
// Add a hook for custom transforms

const ReactNativeCSS = require('react-native-css');

module.exports = (src, filename, options) => {

    const babelConfig = Object.assign({}, babelRC, {
        filename,
        sourceFileName: filename
    });
    const result = babel.transform(src, babelConfig);
    return {
        ast: result.ast,
        code: result.code,
        map: result.map,
        filename: filename
    };
}
