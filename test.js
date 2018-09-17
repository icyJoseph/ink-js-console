import { h, renderToString } from 'ink';
import test from 'ava';
import Console from '.';

test('output', t => {
	const actual = renderToString(<Console lines={20} />);
	const expected = renderToString(<Console lines={20} />);

	t.is(actual, expected);
});
