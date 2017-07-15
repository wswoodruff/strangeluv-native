
const Theme = require('styles/theme');

const {
    ScrollView,
    Duck,
    Text } = require('styles');

module.exports = {

    Duck: Duck.extend`
        margin-top: 20px;
        width: 120px;
        height: 120px;
    `,
    InheritStylesText: Text.extend`
        color: ${(props) => props.color || Theme.secondaryColor}
    `
};
