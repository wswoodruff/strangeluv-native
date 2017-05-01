const React = require('react');
const { ScrollView, Text, Image } = require('react-native');
const Icon = require('react-native-vector-icons/MaterialIcons').default;
const { MKButton } = require('react-native-material-kit');

const HomeBtn = MKButton.coloredButton()
    .withText('Home')
    .build();

const CounterBtn = MKButton.coloredButton()
    .withText('Counter')
    .build();

const gStyles = require('styles'); // global styles
const lStyles = require('./styles'); // local styles

class HomeView extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        tabBarIcon: () => (
            <Icon size={24} color='white' name='home' />
        ),
        headerRight: (
            <Icon
                name='menu'
                size={24}
                style={Styles.menuBtn}
                onPress={() => navigation.navigate('DrawerOpen')}
            />
        )
    });

    static propTypes = {
        navigation: React.PropTypes.object.isRequired
    };

    render() {

        const { navigation, style } = this.props;

        return (

            <ScrollView style={{ padding: 128 }}>

                <HomeBtn onPress={() => {

                    navigation.navigate('Home');
                }} />

                <CounterBtn onPress={() => {

                    navigation.navigate('Counter');
                }} />
                
                <Text style={style.title}>Welcome!</Text>
                <Image
                    style={style.duck}
                    source={require('../assets/duck.jpg')}
                />
            </ScrollView>
        );
    }
}

module.exports = gStyles.addStyleHelpers(HomeView, lStyles);
