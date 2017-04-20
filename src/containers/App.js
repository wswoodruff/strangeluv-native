const React = require('react');
const { Provider } = require('react-redux');

module.exports = class App extends React.Component {

    static propTypes = {
        store: React.PropTypes.object.isRequired
    }

    render() {

        const { store, children } = this.props;

        return (
            <Provider store={store}>
                {children}
            </Provider>
        );
    }
};
