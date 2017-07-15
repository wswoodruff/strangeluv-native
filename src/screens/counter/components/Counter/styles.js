
const { Text } = require('styles');
const Theme = require('styles/theme');

module.exports = {

    StylishText: Text.extend`
        color: ${Theme.primaryColor};
    `
};
