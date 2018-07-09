# strangeluv-native

[![Greenkeeper badge](https://badges.greenkeeper.io/wswoodruff/strangeluv-native.svg)](https://greenkeeper.io/)

## Notable differences between `strangeluv-native` and [`strangeluv`](https://github.com/BigRoomStudios/strangeluv)

- `strangeluv-native` is a boilerplate for react-native. [`strangeluv`](https://github.com/BigRoomStudios/strangeluv) is a boilerplate for react-web.
- You must rename the 'strangeluvnative' project before npm installing
- `routes` in react-web are now referred to as `screens`.
- Using [react-navigation](https://github.com/react-community/react-navigation) as we do in this boilerplate, there is the concept of `navigators`. You've got StackNavigator, TabNavigator, and DrawerNavigator given by react-navigation. Other libraries like [`react-native-material-bottom-navigation`](https://github.com/timomeh/react-native-material-bottom-navigation) can integrate with react-navigation. This bottom-navigation library can be used as a TabNavigator in react-navigation. Here's a recipe for [strangeluv-native implementing react-native-material-bottom-navigation](https://github.com/wswoodruff/strangeluv-native/compare/master...recipe-react-native-material-bottom-navigation)

## > How I Learned to Stop Worrying and Love _React Native_

Here you find a fork of [this](https://github.com/BigRoomStudios/strangeluv) React/Redux starter kit. We've made it our own. We've also stolen most of this README from strangeluv. In here you'll find react-native, Redux, and a well-architected workflow that uses react-native's own Packager instead of Webpack. Follow the file-structure in this boilerplate to profit from well-thought, battle-proven code separation patterns used in [strangeluv](https://github.com/BigRoomStudios/strangeluv) for react-web.

## Table of Contents
1. [Toolset](#toolset)
1. [Getting Started](#getting-started)
1. [Application Structure](#application-structure)
1. [Styling](#styling)
1. [Development](#development)
1. [Recipes](#recipes)
1. [Thank You](#thank-you)

## Toolset
* [react](https://github.com/facebook/react)
* [react-native](https://github.com/facebook/react-native)
* [redux](https://github.com/rackt/redux)
* [react-navigation](https://github.com/react-community/react-navigation)
* [styled-components](https://github.com/styled-components/styled-components)
* [babel](https://github.com/babel/babel)
* [eslint](http://eslint.org)

## Getting Started

Setup your environment (Get ANDROID_HOME var all set, install xCode if ur on a Mac)
See this Getting Started guide on Facebook's Github: https://facebook.github.io/react-native/docs/getting-started.html

#### Git clone the project, then rename it
```bash
$ npm install -g react-native-cli
$ npm install -g react-native-rename
$ git clone https://github.com/wswoodruff/strangeluv-native my-project
$ cd my-project   # Then adjust package.json and readme as necessary
$ react-native-rename mynewprojectname # No spaces or capitals are allowed or this won't work on Android!
$ grep -e 'strangeluvnative' -rl . | xargs sed -i '' 's/strangeluvnative/mynewprojectname/g'
# Note: the grep line above was reported as non-working on another computer. If you'd like to PR
# a better find-and-replace one-liner or short script for this, that'd be welcome! =)

$ npm run fresh-install
# Make sure to answer "n to keep your version" when you're prompted with ".babelrc has changed in the new version.
Do you want to keep your .babelrc or replace it with the latest version?" after running fresh-install

$ npm run dev     # Compile and launch to iOS simulator
```

If all goes well you should see something like this,
```
| A bunch of lines printing to the console
| The iOS simulator pops up (Assuming you ran `npm run dev`)
| Another console suddenly appears
| Lines run, stuff happens, maybe the whole screen turns red idk figure it out
| You see a duck.
```

|`npm run <script>`|Description|
|------------------|-----------|
|`dev`, `i`, `ios`|Starts the app in an iOS simulator|
|`a`, `android`|Starts the app in an Android simulator|



## Application Structure
Note the [nestable `screens/`](https://github.com/davezuko/react-redux-starter-kit/wiki/Fractal-Project-Structure).

```
.
├── android/                 # Android app folder project (managed by react-native)
├── config/                  # Project configuration settings
├── ios/                     # iOS app folder project (managed by react-native)
├── src/                     # Application source code
│   ├── index.js             # Application bootstrap and rendering
│   ├── action-types/        # Action types
│   ├── actions/             # Action creators
│   ├── reducers/            # Redux reducers
│   ├── components/          # Reusable UI-only (dumb/stateless) components
│   ├── containers/          # Reusable container (smart/stateful) components
│   ├── navigators/          # Contains the app's main navigator
│   ├── static/              # Static assets (not imported anywhere in source code)
│   ├── styles/              # Application-wide styles
│   ├── wiring/              # Wiring between Redux and the app
│   └── screens/             # Main screen definitions and async split points
│       ├── index.js         # Bootstrap main application screens with store, connect with app navigator
│       └── home/            # Fractal route
│           ├── index.js     # Route definitions and async split points
│           ├── $$$/         # Any folders you might find under src/ like reducers/, etc.
│           └── screens/     # Nested screens
│           └── navigators/  # Nested navigators
│           └── components/  # Nested components
│           └── containers/  # Nested containers
└── tests                    # Unit tests
```

### Reducer wiring
The automatic wiring of reducers found in `strangeluv` is not yet available in strangeluv-native. This will have to be done via gulp scripts to grab files in the `reducers` folder and insert them into an array [Issue here]().
Reducers can be injected asynchronously (usually for code-splitting within a child route) as such:
```js
const Reducers = require('wiring/reducers');

// Let store be the app's store and myReducer be a new reducer

Reducers.inject(store, { key: 'reducerName', reducer: myReducer });
```
You can find an implementation of an async reducer in the [app's navigator](https://github.com/wswoodruff/strangeluv-native/blob/master/src/navigators/AppNavigator.js)

### Code Style Guide: A note on file- and directory-naming
Files should be named with `dash-case.js` except in the case of containers or components, which should use `PascalCase.js`.  This includes reducer, action, and action-type files.  Filenames need not repeat information specified by their directory names.  For example, `containers/Counter.js` or `containers/Counter/index.js` are preferred over `containers/CounterContainer.js` or `containers/CounterContainer/CounterContainer.js`.  The container may still be required into a file using the "full name" e.g.,
```js
const CounterContainer = require('./containers/Counter');
```

Omitting the `.js` extension in calls to `require()` is preferred, as it allows one to transition a simple module at `components/Counter.js` to a complex module with its own internals at `components/Counter/index.js` without affecting how it is referenced.

## Styling
### Styles composition with `src/styles/index.js`
The exports of styles/index.js are:
```
{
    default, // global styles for the app
    compose, // helper function, returns global styles composed with passed in arguments.
    addStyleHelpers // hoc (Higher Order Component) to facilitate styles inheritance, and keep styles updated if the styles prop changes.
}
```
- Please see [src/screens/home/components/HomeView.js](https://github.com/wswoodruff/strangeluv-native/blob/master/src/screens/home/components/HomeView.js)
   - gStyles is `global styles`, lStyles is `local styles`. `gStyles.addStyleHelpers` ensures that the `styles` prop is passed to this component. The `styles` prop will be a composition of styles in this cascade order:
```
global styles -> passed-in styles from parent via styles prop -> local styles
```
Local styles get the last say in everything. Whatever you require as `lStyles` in HomeView.js's case, will get the last say.

Let's test this. Go in `src/screens/home/components/styles.js` and comment out the `width` and `height` props. The global styles are setting the duck to a larger size. So if you comment these out, you should be able to refresh and see a larger duck on the homepage.

- the File `src/screens/.stylishComponent.js` should serve as a good template for creating a new component that's `connected` with cascading styles.

## Troubleshooting

#### Got a red sreen? Try these:

- Reload the simulator
- `$ npm run clean` will clean watchman's cache. This fixes problems often.
- `$ npm run fresh-install` removes your iOS and Android builds, removes node_modules, clears caches, runs `npm install` and `react-native upgrade` (which rebuilds the iOS and Android folders and prompts you with questions. You should answer `n` to those.
- _Double check and make sure your packager terminal is in your project root_
- `Repeat!` Seriously - keep repeating these, things will eventually work, if not then please open an issue!
- `$ npm run rc-start` starts react-native's packager while clearing it's cache.
- `$ npm run clean` clears watchman cache, and other cache related to react-native.
- It's very important to clear the cache for react-native's packager and watchman on a regular basis, as well as any other cache you ever come across while programming. Especially if you've been switching projects :+1:!


## Development
### Code Style
We favor the [hapi style guide](hapijs.com/styleguide).  Yes, even when coding for the browser or for react-native!  The idea is to maintain fluency for developers who work both on the server, browser, and in react-native.  It is supposed to be the same language, after all!  Node and V8 move fast enough on their own, so we plan to keep up-to-date with that ecosystem rather than the hyperspeed with which transpilers make available incompletely-spec'd JS features.  It's worth noting that for the time being that includes ES6 modules.  We additionally have some standard React lint rules.  Just `npm run lint` to see how you're doing!

### Developer Tools
- You get Redux dev tools inside react-native's "native" debugger! To enable remote debugging, open the menu once inside the app via Cmd+D, etc. and hit "Debug JS Remotely".

#### Works with 
- [remote-redux-devtools](https://github.com/zalmoxisus/remote-redux-devtools) and 
- [remote-redux-devtools-on-debugger](https://github.com/jhen0409/remote-redux-devtools-on-debugger)
- HMR support for reducers! Your reducers will update without reloading if you've enabled hot module reloading.

#### Requiring with `./src` as root
You can require the top-level folders like `require(containers/App);` because of the setup in `.babelrc`.

### Routing
We use `react-navigation` 
[navigator definitions](https://reactnavigation.org/docs/navigators/stack#StackNavigatorConfig) and
[route definitions](https://reactnavigation.org/docs/navigators/stack#RouteConfigs) (`<route>/index.js`)

to define units of logic within our application. See the [application structure](#application-structure) section for more information.

## Recipes
 - branch [`recipe-react-native-material-bottom-navigation`](https://github.com/wswoodruff/strangeluv-native/compare/master...recipe-react-native-material-bottom-navigation)  integrating [react-native-material-bottom-navigation](https://github.com/timomeh/react-native-material-bottom-navigation)

 - branch [`recipe-drawer`](https://github.com/wswoodruff/strangeluv-native/compare/master...recipe-drawer) integrating [DrawerNavigator](https://reactnavigation.org/docs/navigators/drawer) from react-navigation

 - branch [`recipe-react-native-material-kit`](https://github.com/wswoodruff/strangeluv-native/compare/master...recipe-react-native-material-kit) integrating [react-native-material-kit](https://github.com/xinthink/react-native-material-kit)

 - branch [`recipe-drawer-material-kit-bottom-navigation`](https://github.com/wswoodruff/strangeluv-native/compare/master...recipe-drawer-material-kit-bottom-navigation) integrating the `trifecta` of components used in the above recipes: drawer, react-native-material-kit, and react-native-material-bottom-navigation.

 - branch [`recipe-material-native`](https://github.com/wswoodruff/strangeluv-native/compare/master...recipe-material-native) implementing a first look into the latest effort to bring excellent material design to react-native. This lib is brand-new, aiming to supercede and replace shortcomings in `react-native-material-kit` and `react-native-material-design`.


-- After merging each of these, you'll want to run an npm script:
```bash
npm run fresh-start
```

## Deployment

### For production
This article, [First Time Deploying With React Native](https://medium.com/the-react-native-log/first-time-deploying-with-react-native-f524eb3e705d) seems interesting, I haven't tried it yet though. I will update this section soon after I do it myself.

## Thank You
* [Bigroom Studios](https://github.com/BigRoomStudios), [Devin Ivy](https://github.com/devinivy) and contributors - for creating [strangeluv](https://github.com/BigRoomStudios/strangeluv)
* [Dave Zuko](https://github.com/davezuko) - for creating the [boilerplate](https://github.com/davezuko/react-redux-starter-kit) that strangeluv forked (at v3).  It contains a huge amount of effort from dozens of collaborators, and made for a fantastic start.
