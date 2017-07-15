const React = require('react');
const { DrawerItems } = require('react-navigation');

// Styles

const gStyles = require('styles');

const { ScrollView } = gStyles;

module.exports = class CustomDrawerContentComponent extends React.Component {

    render() {

        return (

            <ScrollView>
                <DrawerItems {...this.props} />
            </ScrollView>
        );
    }
};
