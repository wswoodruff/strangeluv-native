# strangeluv-native

## Notable differences between `strangeluv-native` and [`strangeluv`](https://github.com/BigRoomStudios/strangeluv)

- `strangeluv-native` is a boilerplate for react-native. [`strangeluv`](https://github.com/BigRoomStudios/strangeluv) is a boilerplate for react-web.
- You must rename the 'strangeluvnative' project before npm installing
- `routes` in react-web are now referred to as `scenes`.
- Using [react-navigation](https://github.com/react-community/react-navigation) as we do in this boilerplate, there is the concept of `navigators`. You've got StackNavigator, TabNavigator, and DrawerNavigator given by react-navigation. Other libraries like [`react-native-material-bottom-navigation`](https://github.com/timomeh/react-native-material-bottom-navigation) can integrate with react-navigation. This bottom-navigation library can be used as a TabNavigator in react-navigation. Here's a recipe for [strangeluv-native implementing react-native-material-bottom-navigation](https://github.com/wswoodruff/strangeluv-native/compare/master...recipe-react-native-material-bottom-navigation)

## > How I Learned to Stop Worrying and Love _React Native_

Here you find a fork of [this](https://github.com/BigRoomStudios/strangeluv) React/Redux starter kit. We've made it our own. We've also stolen most of this README from strangeluv. In here you'll find react-native, Redux, and a well-architected workflow that uses react-native's own Packager instead of Webpack. Follow the file-structure in this boilerplate to profit from well-thought, battle-proven code separation patterns used in [strangeluv](https://github.com/BigRoomStudios/strangeluv) for react-web.

## Table of Contents
1. [Toolset](#toolset)
1. [Requirements](#requirements)
1. [Getting Started](#getting-started)
1. [Application Structure](#application-structure)
1. [Development](#development)
1. [Recipes](#recipes)
1. [Thank You](#thank-you)

## Toolset
* [react](https://github.com/facebook/react)
* [react-native](https://github.com/facebook/react-native)
* [redux](https://github.com/rackt/redux)
* [react-navigation](https://github.com/react-community/react-navigation)
* [babel](https://github.com/babel/babel)
* [eslint](http://eslint.org)

## Requirements
```
# Only been used with
* react-native `0.41.2`
```

## Getting Started

Setup your environment (Get ANDROID_HOME var all set, install xCode if ur on a Mac)
See this Getting Started guide on Facebook's Github: https://facebook.github.io/react-native/docs/getting-started.html

#### Git clone the project, then rename it
```bash
$ npm install -g react-native
$ npm install -g react-native-rename
$ git clone https://github.com/wswoodruff/strangeluv-native
$ mv strangeluv-native my-project
$ cd my-project   # Then adjust package.json and readme as necessary
$ react-native-rename mynewprojectname # No spaces or capitals are allowed or this won't work on Android!
$ grep -e 'strangeluvnative' -rl . | xargs sed -i '' 's/strangeluvnative/mynewprojectname/g'
$ # Note: the grep line above was reported as non-working on another computer. If you'd like to PR
$ # a better find-and-replace one-liner or short script for this, that'd be welcome! =)
```

Now inside your `ios` folder, make sure all of the top-level files and folders match your project's name.

If you've worked on another react-native project, you may need to clear your watchman cache,
and you may be met with a red screen.

If you've been working on other react-native projects, do these steps:
```bash
$ # If you ran npm install by this point, go ahead and rm -rf node_modules
$ watchman watch-del-all
$ rm -fr $TMPDIR/react-*
```

Now launch!
```bash
$ # Side note, you'll almost certainly see a red screen at some point during this setup.
$ npm install     # Install project dependencies
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
|`dev`|Starts the app in an iOS simulator|



## Application Structure
Note the [nestable `scenes/`](https://github.com/davezuko/react-redux-starter-kit/wiki/Fractal-Project-Structure).

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
│   └── scenes/              # Main scene definitions and async split points
│       ├── index.js         # Bootstrap main application scenes with store, connect with app navigator
│       └── home/            # Fractal route
│           ├── index.js     # Route definitions and async split points
│           ├── $$$/         # Any folders you might find under src/ like reducers/, etc.
│           └── scenes/      # Nested scenes
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

### Style Guide: A note on file- and directory-naming
Files should be named with `dash-case.js` except in the case of containers or components, which should use `PascalCase.js`.  This includes reducer, action, and action-type files.  Filenames need not repeat information specified by their directory names.  For example, `containers/Counter.js` or `containers/Counter/index.js` are preferred over `containers/CounterContainer.js` or `containers/CounterContainer/CounterContainer.js`.  The container may still be required into a file using the "full name" e.g.,
```js
const CounterContainer = require('./containers/Counter');
```

Omitting the `.js` extension in calls to `require()` is preferred, as it allows one to transition a simple module at `components/Counter.js` to a complex module with its own internals at `components/Counter/index.js` without affecting how it is referenced.

## Development
### Style
We favor the [hapi style guide](hapijs.com/styleguide).  Yes, even when coding for the browser or for react-native!  The idea is to maintain fluency for developers who work both on the server, browser, and in react-native.  It is supposed to be the same language, after all!  Node and V8 move fast enough on their own, so we plan to keep up-to-date with that ecosystem rather than the hyperspeed with which transpilers make available incompletely-spec'd JS features.  It's worth noting that for the time being that includes ES6 modules.  We additionally have some standard React lint rules.  Just `npm run lint` to see how you're doing!

### Developer Tools
Does not yet work with the [Redux DevTools Chrome Extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) nor [React DevTools Chrome Extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi), but this is in the works!  Issue links, respectively: [Redux DevTools](https://github.com/wswoodruff/strangeluv-native/issues/3) and [React DevTools](https://github.com/wswoodruff/strangeluv-native/issues/4).

### Routing
We use `react-navigation` 
[navigator definitions](https://reactnavigation.org/docs/navigators/stack#StackNavigatorConfig) and
[route definitions](https://reactnavigation.org/docs/navigators/stack#RouteConfigs) (`<route>/index.js`)

to define units of logic within our application. See the [application structure](#application-structure) section for more information.

## Recipes
 - Incorporating bottom navigation using [react-native-material-bottom-navigation](https://github.com/timomeh/react-native-material-bottom-navigation) [[recipe](https://github.com/wswoodruff/strangeluv-native/compare/master...recipe-react-native-material-bottom-navigation)]
 - Right side [DrawerNavigator](https://reactnavigation.org/docs/navigators/drawer) from react-native[[recipe](https://github.com/wswoodruff/strangeluv-native/compare/master...recipe-drawer)]

## Deployment
### For development (`npm run dev`)
Runs a react-native Packager build with HMR _currently for views only_.

### For production
This article, [First Time Deploying With React Native](https://medium.com/the-react-native-log/first-time-deploying-with-react-native-f524eb3e705d) seems interesting, I haven't tried it yet though.

### Styles
Styles are currently done using .js files, with react-native [StyleSheet](https://facebook.github.io/react-native/docs/stylesheet.html) settings.

## Thank You
* [Bigroom Studios](https://github.com/BigRoomStudios), [Devin Ivy](https://github.com/devinivy) and contributors - for creating [strangeluv](https://github.com/BigRoomStudios/strangeluv)
* [Dave Zuko](https://github.com/davezuko) - for creating the [boilerplate](https://github.com/davezuko/react-redux-starter-kit) that strangeluv forked (at v3).  It contains a huge amount of effort from dozens of collaborators, and made for a fantastic start.
