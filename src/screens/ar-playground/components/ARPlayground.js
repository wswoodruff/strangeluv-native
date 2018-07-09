const React = require('react');
const T = require('prop-types');
const { ScrollView } = require('react-native');

// Styles

const { BeginButton, BtnText } = require('./styles');

// Component

module.exports = class HomeView extends React.PureComponent {

    static propTypes = {
        navigation: T.object.isRequired
    };

    constructor() {

        super();

        this.navigate = this._navigate.bind(this);
    }

    _navigate(navigation, path) {

        return (...a) => {

            navigation.navigate(path);
        };
    }

    render() {

        const { navigation } = this.props;

        return (
            <ScrollView>
                <BeginButton>
                    <BtnText>
                        Start Demo
                    </BtnText>
                </BeginButton>
            </ScrollView>
        );
    }
};
