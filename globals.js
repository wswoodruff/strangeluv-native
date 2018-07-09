// Inject node globals into React Native global scope.
global.Buffer = require('buffer').Buffer;
global.process = require('process');

global.process.env.NODE_ENV = __DEV__ ? 'development' : 'production';
global.process.env.VIRO_API_KEY = 'B9684495-469F-447D-9AF1-EF6DA8404858'; // key for bill@bigroomstudios

// Needed so that 'stream-http' chooses the right default protocol.
global.location = {
    protocol: 'file:'
};
