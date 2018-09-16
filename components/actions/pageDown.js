const down = require("./down");

module.exports = function pageDown(s, props) {
	for (let i = 0; i < props.lines; i++) {
		s = down(s);
	}
	return s;
};
