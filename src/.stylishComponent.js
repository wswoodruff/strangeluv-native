const React = require('react');
const T = require('prop-types');

// Styles

const Theme = require('styles/theme');

const gStyles = require('styles'); // global styles
// const lStyles = require('./styles'); // local styles

const {
    ScrollView,
    Text } = gStyles;

const StylishText = Text.extend`
    color: ${Theme.primaryColor}
`;

// Component

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
