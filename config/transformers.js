const babelTransformer = require('./babel-transformer');

module.exports.transform = function(src, filename, options) {

    const extension = String(filename.slice(filename.lastIndexOf('.')));
    let result;

    try {

        switch (extension) {

            case '.js':
            case '.jsx':
                result = babelTransformer(src, filename);
                break;

            default:
                result = babelTransformer(src, filename);
                break;
        }

    } catch (e) {

        throw new Error(e);
        return;
    }

    return {
        ast: result.ast,
        code: result.code,
        map: result.map,
        filename
    };
};
