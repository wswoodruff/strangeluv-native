
const { default: styled } = require('styled-components/native');
const Theme = require('./theme');
const { colors, getMaterialTheme } = require('material-native');

const StyledText = styled.Text`
    color: ${Theme.primaryTextColor};
`;

const gStyles = module.exports = {

    ScrollView: styled.ScrollView`
        background-color: ${Theme.primaryBgColor};
        padding: 128px;
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

exports.materialTheme = getMaterialTheme({
    theme: 'light',
    primary: colors.lightBlue400,
    accent: 'white'
});

// primaryBtn: {
//     shadowColor: 'rgba(0, 0, 0, 0.35)',
//     shadowOpacity: 1,
//     shadowRadius: 2,
//     shadowOffset: {
//         height: 1,
//         width: 2,
//     },
//
//     marginVertical: 4,
//     borderRadius: 3,
//     // backgroundColor: colors.lightBlue400,
//     backgroundColor: colors.green700,
//     paddingHorizontal: 16,
//     alignItems: 'center'
// }
