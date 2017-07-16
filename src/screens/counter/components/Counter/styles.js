
const { Text } = require('styles');
const Theme = require('styles/theme');
const { styled: StylishMaterialRipple } = require('components/MaterialRipple');

module.exports = {

    StyledMaterialRipple: StylishMaterialRipple`
        padding: 10px;
        background-color: ${Theme.secondaryColor};
    `,
    StylishText: Text.extend`
        color: ${Theme.primaryColor};
    `,
    WhiteText: Text.extend`
        color: white;
    `
};
