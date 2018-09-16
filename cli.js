#!/usr/bin/env node
'use strict';

const importJsx = require('import-jsx');
const {h, render} = require('ink');
const meow = require('meow');

const Ui = importJsx('./ui');

const cli = meow(`
	Usage
	  $ ink-js-console [input]

	Options
	  --name  Lorem ipsum [Default: false]

	Examples
	  $ ink-js-console
	  I love Ink
	  $ ink-js-console --name=ponies
	  I love ponies
`);

render(h(Ui, cli.flags));
