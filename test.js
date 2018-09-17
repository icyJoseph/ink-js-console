import { h, renderToString, Text } from "ink";
import test from "ava";
import Console from ".";

// TODO: improve tests!!!!!!
test("output", t => {
	const actual = renderToString(<Console lines={20} />);
	const expected = renderToString(<Console lines={20} />);

	t.is(actual, expected);
});
