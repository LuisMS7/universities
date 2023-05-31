# Universities Project

`Author` - [Luis Moyón](https://github.com/LuisMS7/)

## Requirements

-   [Node v18.16.0](https://nodejs.org/en/)
-   [Yarn](https://yarnpkg.com)
-   [nvm](https://github.com/nvm-sh/nvm)

## Installation

### For MacOS and Linux

```bash
# install node v18.16.0
$ nvm install

# switch to node v18.16.0
$ nvm use

# install dependencies
$ yarn install
```

#### For Windows

```bash
# install node v18.16.0
$ nvm install v18.16.0

# switch to node v18.16.0
$ nvm use v18.16.0

```

## Running the app

```bash
# run the app
$ yarn run dev
```

## Running the tests

```bash
$ yarn run test
```

## Architecture

The architecture of this project follows the Feature Folder Structure for React.\
Each folder contains a subfolder `__tests__` where all the tests of the files corresponding to the folder are located.

### General folder structure

The folder structure of the project is as follows:

```
src/
├── assets/
├── components/
├── features/
├── lib/
├── types/
├── utils/
└── App.tsx
```

### assets folder

Assets folder contains all the project static files like the images used on the project.

### components folder

Components folder contains all the components that can be reused in different features.

### features folder

Features folder encapsulate all the features of our business or app.

### lib folder

Lib folder contains any application-specific files that are used globally throughout the app like axios instance and constants.

### store folder

Store folder houses the state management files. It contains the Redux store configuration.

### types folder

Types folder contains types that describe business objects or general project types.

### utils folder

Utils folder contains functions or code that can perform quick tasks. Also, it contains test utils like mocks.

### App.tsx

Apps.tsx is the main component of the project. It connects all the components.
<br>
<br>

### Feature folder structure

The folder structure of a feature is as follows:

```
src/
├── ...
└── features/
    ├── feature/
    |   ├── components/
    |   ├── store/
    |   └── utils/
    └── ... (other features)
```

### components folder

Components folder contains all the feature-specific components.

### hooks folder

Hooks folder contains all the custom feature-specific hooks.

### store folder

Store folder contains the feature-specific store slice for state management that includes reducer, actions and selectors.

### utils folder

Utils folder contains all the feature-specific utils.
