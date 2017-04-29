const React = require('react');
const { DrawerItems } = require('react-navigation');
const { ScrollView } = require('react-native');
const Styles = require('./styles');

module.exports = class CustomDrawerContentComponent extends React.Component {

    render() {

        return (

            <ScrollView style={Styles.drawerContainer}>
                <DrawerItems {...this.props} />
            </ScrollView>
        );
    }
};
