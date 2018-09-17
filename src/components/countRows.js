const { inspect } = require('util');

function sum(values) {
	return values.reduce((acc, count) => acc + count, 0);
}
function countDirValueRows(value, depth) {
	if (Array.isArray(value)) {
		if (depth === 0 || value.length === 0) {
			return 1;
		}
		return (
			// +2 for row with the `[` character and row with the `]` character
			2 + sum(value.map(v => countDirValueRows(v, depth - 1)))
		);
	} else if (value && typeof value === 'object') {
		if (depth === 0 || Object.keys(value).length === 0) {
			return 1;
		}
		return (
			2 + // +2 for row with the `{` character and row with the `}` character
			sum(
				Object.keys(value).map(name =>
					countDirValueRows(value[name], depth - 1)
				)
			)
		);
	}
	return inspect(value).split('\n').length;
}

function countNormalValueRows(values) {
	return (
		1 +
		sum(
			values.map(
				v => (typeof v === 'string' ? v : inspect(v)).split('\n').length - 1
			)
		)
	);
}

function countRows(entry, depth) {
	if (!entry) return 0;
	if (entry.type === 'dir') {
		return countDirValueRows(entry.value, depth);
	}
	return countNormalValueRows(entry.values);
}

module.exports = countRows;
