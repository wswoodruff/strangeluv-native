const Theme = require('styles/theme');
const { Duck, Text } = require('styles');
const { default: styled } = require('styled-components/native');

module.exports = {
    Duck: styled(Duck)`
        margin-top: 20px;
        width: 120px;
        height: 120px;
    `,
    InheritStylesText: styled(Text)`
        color: ${(props) => props.color || Theme.secondaryColor}
    `
};
