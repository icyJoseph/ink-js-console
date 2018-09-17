const up = require('./up');

function pageUp(s, props) {
	for (let i = 0; i < props.lines; i++) {
		s = up(s, props);
	}
	return s;
}

module.exports = pageUp;
