const Theme = require('styles/theme');
const { default: styled } = require('styled-components/native');

module.exports = {
    Duck: styled.Image`
        margin-top: 20px;
        width: 120px;
        height: 120px;
    `,
    InheritStylesText: styled.Text`
        color: ${(props) => props.color || Theme.secondaryColor}
    `
};
