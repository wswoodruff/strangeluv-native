const React = require('react');
const PropTypes = require('prop-types');

// Styles
const Theme = require('styles/theme');
const GStyles = require('styles'); // global styles
// const LStyles = require('./styles'); // local styles

const { ScrollView } = GStyles;

const StylishText = GStyles.Text`
    color: ${Theme.primaryColor}
`;

module.exports = class Stylish extends React.PureComponent {

    static propTypes = {};

    render() {

        return (
            <ScrollView>
                <StylishText>Welcome!</StylishText>
            </ScrollView>
        );
    }
}
