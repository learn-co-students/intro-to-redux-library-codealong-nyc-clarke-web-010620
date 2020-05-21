import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
	
	handleOnClick = event => {
		this.props.increaseCount();
	};


	testShow(x) {
		if (x < 4) {
			return ( <div><p>0</p></div> )
		} else {
			let ans = 0
			let i 
			for (i = 0; i < x; i++) {
				if (i % 3 === 0 || i % 5 === 0) {
					ans += i; 
				}
			}

			return (
				<div>
					<p>Oh {ans}</p>
				</div>
			)
		}
	}


	render() {
		return (
			<div className="App">
				<button onClick={this.handleOnClick}>Click</button>
				<p>{this.props.items.length}</p>
				<br /><br />
				{this.testShow(1000)}
			</div>
		);
	}
}




const mapStateToProps = state => {
	return {
		items: state.items
	};
};

const mapDispatchToProps = dispatch => {
	return {
		increaseCount: () => dispatch({ type: 'INCREASE_COUNT' })
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
