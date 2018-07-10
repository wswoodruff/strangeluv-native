const React = require('react');
const { ViroARSceneNavigator } = require('react-viro');

const PlaygroundScene = require('../scenes/Playground');

// Styles

// Component

module.exports = class ARPlayground extends React.PureComponent {

    render() {

        return (
            // VIRO_API_KEY set in globals.js
            <ViroARSceneNavigator
                apiKey={process.env.VIRO_API_KEY}
                initialScene={{
                    scene: PlaygroundScene
                }}
            />
        );
    }
};
