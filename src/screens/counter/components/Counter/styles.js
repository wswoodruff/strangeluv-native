const { default: styled } = require('styled-components/native');
const { Text } = require('styles');
const Theme = require('styles/theme');

module.exports = {

    StylishText: styled(Text)`
        color: ${Theme.primaryColor};
    `
};
