const React = require('react');
const { default: Icon } = require('react-native-vector-icons/MaterialIcons');

// Styles
const { default: styled } = require('styled-components/native');
const StyledIcon = styled(Icon);

// Component

exports.default = class MaterialIcon extends React.PureComponent {

    render() {

        return (
            <Icon {...this.props} />
        );
    }
};

// Custom styled-component

exports.styled = StyledIcon;
