import React, { Component } from 'react';

class Menubutton extends Component {
	render() {
		return (
			<input
				type='button'
				onClick={(e) => {
					e.preventDefault();
					this.props.mode();
				}}
			></input>
		);
	}
}

export default Menubutton;
