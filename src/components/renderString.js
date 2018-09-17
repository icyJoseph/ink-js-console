const { inspect } = require('util');
const chalk = require('chalk');
const indentString = require('indent-string');

function renderDirOutputValue(value, depth, options) {
	if (Array.isArray(value)) {
		if (value.length === 0) {
			return '[]';
		}
		if (depth === 0) {
			return (
				'[Array] ' + chalk.blue('(press ' + options.expandKey + ' to expand)')
			);
		}
		return (
			'[\n' +
			indentString(
				value
					.map(v => renderDirOutputValue(v, depth - 1, options) + ',')
					.join('\n'),
				2
			) +
			'\n]'
		);
	} else if (value && typeof value === 'object') {
		if (Object.keys(value).length === 0) {
			return '{}';
		}
		if (depth === 0) {
			return (
				'[Object] ' + chalk.blue('(press ' + options.expandKey + ' to expand)')
			);
		}
		return (
			'{\n' +
			indentString(
				Object.keys(value)
					.map(
						name =>
							name +
							': ' +
							renderDirOutputValue(value[name], depth - 1, options) +
							','
					)
					.join('\n'),
				2
			) +
			'\n}'
		);
	}
	return inspect(value, { colors: true });
}

function renderNormalEntry(entry) {
	return entry.values
		.map(v => (typeof v === 'string' ? v : inspect(v)))
		.join(' ');
}

function renderDirOutput(entry, options) {
	return renderDirOutputValue(entry.value, options.depth, options);
}

function renderEntry(entry, options) {
	if (entry.type === 'dir') {
		return renderDirOutput(entry, options);
	}
	return renderNormalEntry(entry);
}

function renderString(s, p) {
	const dirOptions = { depth: s.depth, expandKey: 'l' };
	let { lastEntryToDisplayIndex, offset } = s;
	if (s.pinned) {
		lastEntryToDisplayIndex = s.log.length - 1;
		offset = 0;
	}
	const output = [];
	function addLine(str) {
		if (output.length < p.lines) {
			output.push(str);
		}
	}
	if (s.log.length > 0) {
		// TODO: make expand key configurable
		const lastEntry = renderEntry(
			s.log[lastEntryToDisplayIndex],
			dirOptions
		).split('\n');
		lastEntry
			.slice(0, lastEntry.length - offset)
			.reverse()
			.forEach(addLine);
		for (
			let i = lastEntryToDisplayIndex - 1;
			i >= 0 && output.length < p.lines;
			i--
		) {
			renderEntry(s.log[i], dirOptions)
				.split('\n')
				.reverse()
				.forEach(addLine);
		}
	}
	output.reverse();
	while (output.length < p.lines) {
		output.push('');
	}
	return output.join('\n');
}

module.exports = renderString;
