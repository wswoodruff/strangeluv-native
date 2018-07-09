const { default: styled } = require('styled-components/native');
const Theme = require('styles/theme');

module.exports = {
    BeginButton: styled.TouchableOpacity`
        margin-top: 50%;
        padding: 10px;
    `,
    BtnText: styled.Text`
        text-align: center;
        font-size: 30px;
        color: ${Theme.secondaryColor};
    `
};
