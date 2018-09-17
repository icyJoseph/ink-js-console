# ink-js-console [![Build Status](https://travis-ci.org/icyJoseph/ink-js-console.svg?branch=master)](https://travis-ci.org/icyJoseph/ink-js-console)

> Javascript based ink-console.

Migration still in progress. `LogOutput` component renders and logs interval ticks.

# Credit

This a clone of [ink-console](https://github.com/ForbesLindesay/ink-console.git) by Forbes Lindesay.

I migrated and will maintain this clone in JavaScript.

Again, all credit for the original [ink-console](https://github.com/ForbesLindesay/ink-console.git) written in TypeScript goes to:

[Forbes Lindesay](https://github.com/ForbesLindesay)

```json
"repository": {
    "type": "git",
    "url": "https://github.com/ForbesLindesay/ink-console.git"
  },
  "author": {
    "name": "Forbes Lindesay",
    "url": "http://github.com/ForbesLindesay"
  },
```

## Install

```
$ npm install ink-js-console
```

## Usage

```js
const { h, render } = require("ink");
const Console = require("ink-js-console");

render(<Console lines={20}/>);
```

## Props

### lines

Type: `number`<br>
Default: `20`

## License

MIT © [icyJoseph](https://icjoseph.com)
