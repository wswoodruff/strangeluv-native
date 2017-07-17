
const { default: styled } = require('styled-components/native');
const Theme = require('./theme');
const { styled: MaterialIcon } = require('components/MaterialIcon');

const StyledText = styled.Text`
    color: ${Theme.primaryTextColor};
`;

const gStyles = module.exports = {
    ScrollView: styled.ScrollView`
        background-color: ${Theme.primaryBgColor};
        padding: 128px;
    `,
    MenuIcon: MaterialIcon.attrs({
        size: Theme.iconSize
    })`
        padding-right: 12px;
    `,
    Text: StyledText,
    Title: StyledText.extend`
        font-size: 19px;
        font-weight: bold;
        text-align: center;
    `,
    Duck: styled.Image`
        height: 320px;
        width: 320px;
    `,
    Button: styled.Button`
        border: 1px solid blue;
        padding: 100px;
    `
};
