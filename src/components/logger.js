const consoleMethods = require('../constants');

class Logger {
	constructor() {
		this._log = [];
		this._handlers = new Set();
		this._reset = consoleMethods.map(method => {
			const originalFn = console[method];
			const customLog = (...args) => {
				this._log.push(
					method === 'dir'
						? { type: 'dir', value: args[0] }
						: { type: method, values: args }
				);
				for (const value of this._handlers) {
					value();
				}
			};
			customLog.restore = originalFn.restore;
			console[method] = customLog;
			return () => {
				if (console[method] === customLog) {
					console[method] = originalFn;
				}
			};
		});
	}

	getLog() {
		return this._log.slice();
	}

	onUpdate(fn) {
		this._handlers.add(fn);
		return () => this._handlers.delete(fn);
	}

	dispose() {
		this._reset.forEach(fn => fn());
	}
}

module.exports = Logger;
