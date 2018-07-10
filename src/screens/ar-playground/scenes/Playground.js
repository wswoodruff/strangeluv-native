const React = require('react');
const T = require('prop-types');
const Motion = require('strange-motion/motion');

const {
    ViroARScene,
    ViroText,
    ViroMaterials,
    ViroBox,
    Viro3DObject,
    ViroAmbientLight,
    ViroSpotLight,
    ViroARPlane,
    ViroARPlaneSelector,
    ViroQuad,
    ViroNode,
    ViroAnimations,
    ViroConstants } = require('react-viro');

// Styles

// Component

module.exports = class Playground extends React.PureComponent {

    constructor() {

        super();

        this.state = {
            trackingState: 'initializing',
            trackingReason: ''
        };

        this.onTrackingUpdated = this._onTrackingUpdated.bind(this);
    }

    _onTrackingUpdated(trackingState, reason) {

        let newTrackingState = '';
        let newTrackingReason = '';

        console.log('trackingState', trackingState);

        switch (trackingState) {
            case ViroConstants.TRACKING_LIMITED:
                newTrackingState = 'limited';
                break;
            case ViroConstants.TRACKING_NORMAL:
                newTrackingState = 'normal';
                break;
        }

        console.log('reason', reason);

        switch (reason) {
            case ViroConstants.TRACKING_REASON_NONE:
                newTrackingReason = 'none';
            case ViroConstants.TRACKING_REASON_EXCESSIVE_MOTION:
                newTrackingReason = 'excessive-motion';
            case ViroConstants.TRACKING_REASON_INSUFFICIENT_FEATURES:
                newTrackingReason = 'insufficient-features';
        }

        this.setState({
            trackingState: newTrackingState,
            trackingReason: newTrackingReason
        });
    }

    render() {

        const { trackingState, trackingReason } = this.state;

        let trackingText = '';

        switch (trackingState) {
            case 'initializing':
                trackingText = 'Initializing Tracking...';
                break;
            case 'normal':
                trackingText = 'Normal';
                break;
            case 'limited':
                trackingText = 'Limited Tracking...';
                break;
            case 'none':
                trackingText = 'No Tracking...';
                break;
        };

        let reasonText = '';

        if (trackingState !== 'normal') {
            switch (trackingReason) {
                case 'none':
                    reasonText = 'For absolutely no reason at all...';
                    break;
                case 'excessive-motion':
                    reasonText = 'You\'re shaking me around too much!';
                    break;
                case 'limited':
                    reasonText = 'Limited Tracking...';
                    break;
                case 'insufficient-features':
                    reasonText = 'insufficient features, need more objects in view...';
                    break;
            };
        }

        return (
            <ViroARScene onTrackingUpdated={this.onTrackingUpdated}>
                <ViroText
                    text='Status:'
                    scale={[.5, .5, .5]}
                    position={[0, 0.2, -1]}
                />
                <ViroText
                    text={trackingText}
                    scale={[.5, .5, .5]}
                    position={[0, 0.1, -1]}
                />
                <ViroText
                    text={'Reason:'}
                    scale={[.5, .5, .5]}
                    position={[0, -0.2, -1]}
                />
                <ViroText
                    text={reasonText}
                    scale={[.5, .5, .5]}
                    position={[0, -0.3, -1]}
                />

                <ViroBox position={[0, -.5, -1]}
                    animation={{name: "rotate", run: true, loop: true}}
                    scale={[.3, .3, .1]} materials={["grid"]}
                />

                <ViroAmbientLight color={"#aaaaaa"} influenceBitMask={1} />

                <ViroSpotLight
                    innerAngle={5}
                    outerAngle={90}
                    direction={[0,-1,-.2]}
                    position={[0, 3, 1]}
                    color="#aaaaaa"
                    castsShadow={true} />

                {/* Node that contains a light, an object and a surface to catch its shadow
                notice that the dragType is "FixedToWorld" so the object can be dragged
                along real world surfaces and points. */}
                <ViroNode position={[-.5, -.5, -.5]} dragType="FixedToWorld" onDrag={()=>{}} >

                    {/* Spotlight to cast light on the object and a shadow on the surface, see
                    the Viro documentation for more info on lights & shadows */}
                    <ViroSpotLight
                        innerAngle={5}
                        outerAngle={45}
                        direction={[0,-1,-.2]}
                        position={[0, 3, 0]}
                        color="#ffffff"
                        castsShadow={true}
                        influenceBitMask={2}
                        shadowMapSize={2048}
                        shadowNearZ={2}
                        shadowFarZ={5}
                        shadowOpacity={.7} />

                    <Viro3DObject
                        source={require('../assets/emoji_smile/emoji_smile.vrx')}
                        position={[0, .2, 0]}
                        scale={[.2, .2, .2]}
                        type="VRX"
                        lightReceivingBitMask={3}
                        shadowCastingBitMask={2}
                        transformBehaviors={['billboardY']}
                        resources={[require('../assets/emoji_smile/emoji_smile_diffuse.png'),
                        require('../assets/emoji_smile/emoji_smile_specular.png'),
                        require('../assets/emoji_smile/emoji_smile_normal.png')]}/>

                    <ViroQuad
                        rotation={[-90,0,0]}
                        width={.5} height={.5}
                        arShadowReceiver={true}
                        lightReceivingBitMask={2} />

                </ViroNode>

                {/* Node that contains a light, an object and a surface to catch its shadow
                notice that the dragType is "FixedToWorld" so the object can be dragged
                along real world surfaces and points. */}
                <ViroNode position={[.5,-.5,-.5]} dragType="FixedToWorld" onDrag={()=>{}} >

                    {/* Spotlight to cast light on the object and a shadow on the surface, see
                    the Viro documentation for more info on lights & shadows */}
                    <ViroSpotLight
                        innerAngle={5}
                        outerAngle={45}
                        direction={[0,-1,-.2]}
                        position={[0, 3, 0]}
                        color="#ffffff"
                        castsShadow={true}
                        influenceBitMask={4}
                        shadowMapSize={2048}
                        shadowNearZ={2}
                        shadowFarZ={5}
                        shadowOpacity={.7} />

                    <Viro3DObject
                        source={require('../assets/object_soccerball/object_soccer_ball.vrx')}
                        position={[0, .15, 0]}
                        scale={[.3, .3, .3]}
                        type="VRX"
                        lightReceivingBitMask={5}
                        shadowCastingBitMask={4}
                        transformBehaviors={['billboardY']}
                        resources={[require('../assets/object_soccerball/object_soccer_ball_diffuse.png'),
                        require('../assets/object_soccerball/object_soccer_ball_normal.png'),
                        require('../assets/object_soccerball/object_soccer_ball_specular.png')]}/>

                    <ViroQuad
                        rotation={[-90,0,0]}
                        width={.5} height={.5}
                        arShadowReceiver={true}
                        lightReceivingBitMask={4} />

                </ViroNode>
            </ViroARScene>
        );
    }
};

ViroMaterials.createMaterials({
    grid: {
        diffuseTexture: require('../assets/grid_bg.jpg')
    }
});

ViroAnimations.registerAnimations({
    rotate: {
        properties: {
            rotateY: '+=90'
        },
        duration: 250
    }
});
