"use strict";

const { h, Component, Color } = require("ink");
const PropTypes = require("prop-types");
const importJsx = require("import-jsx");

const { LogOutput } = importJsx("./components/");

class UI extends Component {
	componentDidMount() {
		this.timer = setInterval(() => console.log("Tick"), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	render({ name }) {
		return (
			<div>
				<Color green>I love {name}</Color>
				<br />
				<LogOutput lines={20} />
			</div>
		);
	}
}

UI.propTypes = {
	name: PropTypes.string
};

UI.defaultProps = {
	name: "Ink"
};

module.exports = UI;
