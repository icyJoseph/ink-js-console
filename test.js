import {h, renderToString, Text} from 'ink';
import test from 'ava';
import Console from '.';

test('output', t => {
	const actual = renderToString(<Console/>);
	const expected = renderToString(<Text green>I love Ink</Text>);

	t.is(actual, expected);
});
