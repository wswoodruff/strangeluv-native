const React = require('react');
const T = require('prop-types');
const { Provider } = require('react-redux');

module.exports = class App extends React.PureComponent {

    static propTypes = {
        store: T.object.isRequired,
        children: T.node.isRequired
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
