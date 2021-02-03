import React, { Component } from 'react';

class Menubutton extends Component {
	render() {
		return (
			<input
				type='button'
				value='메뉴'
				onClick={(e) => {
					e.preventDefault();
					this.props.mode();
				}}
			></input>
		);
	}
}

export default Menubutton;
