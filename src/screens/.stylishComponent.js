const React = require('react');
const { View, Text } = require('react-native');

const gStyles = require('styles'); // global styles
// const lStyles = require('./styles'); // local styles

class HomeView extends React.Component {

    static propTypes = {
        style: React.PropTypes.object.isRequired
    };

    render() {

        const { navigation, style } = this.props;

        return (
            <ScrollView style={{ padding: 128 }}>
                <Text style={style.title}>Welcome!</Text>
            </ScrollView>
        );
    }
}

module.exports = gStyles.addStyleHelpers(HomeView);
// module.exports = gStyles.addStyleHelpers(HomeView, lStyles);
