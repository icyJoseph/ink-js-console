const topStop = require("./topStop");

module.exports = function expand(s, p) {
	if (s.depth <= 0) {
		return s;
	}
	return topStop({ ...s, depth: s.depth - 1 }, p);
};
