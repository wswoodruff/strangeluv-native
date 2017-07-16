const React = require('react');
const PropTypes = require('prop-types');
const { CoreRipple } = require('material-native');

// Styles

const Theme = require('styles/theme');

const { default: styled } = require('styled-components/native');
const gStyles = require('styles'); // global styles

const StyledWrapper = styled.View``;

// Component

module.exports = class MaterialRipple extends React.PureComponent {

    static propTypes = {};

    render() {

        console.log(this.props);

        return (
            // <StyledWrapper>
                <CoreRipple
                    pointerEvents='box-only'
                    shadowAniEnabled
                    maskBorderRadius={3}
                    {...this.props}
                >
                    {...this.props.children}
                </CoreRipple>
            // </StyledWrapper>
        );
    }
}
