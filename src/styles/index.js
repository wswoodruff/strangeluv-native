const { default: styled } = require('styled-components/native');
const Theme = require('./theme');

const StyledText = styled.Text`
    color: ${Theme.primaryTextColor};
`;

module.exports = {

    ScrollView: styled.ScrollView`
        background-color: ${Theme.primaryBgColor};
        padding: 128px;
    `,
    Text: StyledText,
    Title: styled.Text`
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
