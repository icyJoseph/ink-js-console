const countRows = require('../components/countRows');
const down = require('./down');

function topStop(s, props) {
	let lines = 0;
	for (
		let i = Math.max(0, s.lastEntryToDisplayIndex - props.lines);
		i < s.lastEntryToDisplayIndex;
		i++
	) {
		lines += countRows(s.log[i], s.depth);
		if (lines >= props.lines) {
			return s;
		}
	}
	lines += countRows(s.log[s.lastEntryToDisplayIndex], s.depth) - s.offset;
	if (lines >= props.lines) {
		return s;
	}
	const updatedS = down(s);
	if (updatedS === s) {
		// We've hit the bottom, there just isn't enough log available
		// Pin to the bottom, so we'll get that log when it arrives
		return { ...s, pinned: true };
	}
	return topStop(updatedS, props);
}

module.exports = topStop;
