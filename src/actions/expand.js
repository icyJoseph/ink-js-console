const countRows = require('../components/countRows');
const getDepth = require('../components/getDepth');

function expand(s, p) {
	if (s.log.length === 0) {
		return s;
	}
	let { lastEntryToDisplayIndex, offset } = s;
	if (s.pinned) {
		lastEntryToDisplayIndex = s.log.length - 1;
		offset = 0;
	}
	let lines = -1 * offset;
	let maxDepth = 0;
	for (let i = lastEntryToDisplayIndex; i >= 0 && lines < p.lines; i--) {
		const entry = s.log[i];
		lines += countRows(entry, s.depth);
		if (entry.type === 'dir') {
			maxDepth = Math.max(maxDepth, getDepth(entry.value));
		}
	}
	if (s.depth >= maxDepth) {
		return s;
	}
	return { ...s, depth: s.depth + 1 };
}

module.exports = expand;
