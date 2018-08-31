const { default: styled } = require('styled-components/native');
const Theme = require('styles/theme');

module.exports = {

    StylishText: styled.Text`
        color: ${Theme.primaryColor};
    `
};
