const { default: styled } = require('styled-components/native');
const Theme = require('../../../styles/theme');

module.exports = {
    BeginButton: styled.TouchableOpacity`
        padding: 6px;
        border: 1px solid ${Theme.secondaryColor};
        border-radius: 5px;
        margin: 50% 20px 0;
    `,
    BtnText: styled.Text`
        text-align: center;
        font-size: 20px;
        color: ${Theme.secondaryColor};
    `
};
