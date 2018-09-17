function pin(s) {
	return {
		...s,
		pinned: true,
		lastEntryToDisplayIndex: s.log.length - 1,
		offset: 0
	};
}

module.exports = pin;
