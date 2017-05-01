const React = require('react');
const { View, Text } = require('react-native');

const gStyles = require('styles'); // global styles
// const lStyles = require('./styles'); // local styles

class HomeView extends React.Component {

    static propTypes = {
        styles: React.PropTypes.object.isRequired
    };

    render() {

        const { navigation, styles } = this.props;

        return (
            <ScrollView style={{ padding: 128 }}>
                <Text style={styles.title}>Welcome!</Text>
            </ScrollView>
        );
    }
}

module.exports = gStyles.addStyleHelpers(HomeView);
// module.exports = gStyles.addStyleHelpers(HomeView, lStyles);
