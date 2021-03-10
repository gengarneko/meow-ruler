# epub-ruler

> Made with create-storybook-react-library

[![NPM](https://img.shields.io/npm/v/epub-ruler.svg)](https://www.npmjs.com/package/epub-ruler) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Build Status](https://img.shields.io/travis/com/21epub/epub-ruler)](https://travis-ci.com/github/21epub/epub-ruler) [![Codecov](https://img.shields.io/codecov/c/github/21epub/epub-ruler)](https://codecov.io/gh/21epub/epub-ruler)

## Intro

This is a component for react.

## Feature

- [x] Easy-to-use
- [x] Typescript Support
- [x] Storybook UI component

## Install

```bash
npm install --save epub-ruler
```

## Usage

```tsx
import React, { Component } from 'react'

import MyComponent from 'epub-ruler'
import 'epub-ruler/dist/index.css'

class Example extends Component {
  render() {
    return <MyComponent />
  }
}
```

For Details: See Example

## Developing and running on localhost

First install dependencies and then install peerDeps for storybook dev:

```sh
npm install
npm run install-peers
```

To run Example in hot module reloading mode:

```sh
npm start   # or npm run storybook
```

To create a bundle library module build:

```sh
npm run build
```

## Testing

To run unit tests:

```sh
npm test
```

## License

MIT © [21epub](https://github.com/21epub)
