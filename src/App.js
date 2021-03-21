import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
	constructor(props) {
		super(props);
		console.log("hello");
	}
	state = {
		count: 0
	};

	add = () => {
		this.setState(current => ({
			count: current.count + 1
		}));
	};
	minus = () => {
		this.setState(current => ({
			count: current.count - 1
		}));
	};
	componentDidMount() {
		console.log("I'm rendering");
	}
	componentWillUnmount() {
		console.log("Goodbye, cruel world");
	}
	componentDidUpdate() {
		console.log("I'm Updated");
	}
	render() {
		console.log("render");
		return (
			//onClick 호출 함수를 ()없이 작성하는 이유는 클릭 시에만 실행되도록 하기 위해서이다.
			//()를 작성하면 즉시 호출되기 때문
			<div>
				<h1>The number is: {this.state.count}</h1>
				<button onClick={this.add}>Add</button>
				<button onClick={this.minus}>Minus</button>
			</div>
		);
	}
}

export default App;
