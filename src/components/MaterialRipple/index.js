const React = require('react');
const PropTypes = require('prop-types');
const { CoreRipple } = require('material-native');

// Styles

const { default: styled } = require('styled-components/native');
const gStyles = require('styles'); // global styles

// Component

class MaterialRipple extends React.PureComponent {

    render() {

        return (
            <CoreRipple
                pointerEvents='box-only'
                shadowAniEnabled
                maskBorderRadius={3}
                {...this.props}
            >
                {this.props.children}
            </CoreRipple>
        );
    }
}

exports.default = MaterialRipple;

exports.styled = styled(MaterialRipple);
