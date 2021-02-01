import React, { Component } from 'react';
class Todayvideolist extends Component {
	// shouldComponentUpdate(newProps) {
	// 	console.log('ListUpdate');
	// 	if (this.props.data === newProps.data) {
	// 		return false;
	// 	} else {
	// 		return true;
	// 	}
	// }
	render() {
		console.log('list');
		var lists = [];
		var data = this.props.data;
		var i = 0;
		while (i < data.length) {
			lists.push(
				<li key={data[i].id}>
					<a
						href={data[i].id}
						data-id={data[i].id}
						onClick={(e) => {
							e.preventDefault();
							this.props.mode(e.target.dataset.id);
						}}
					>
						{data[i].title}
					</a>
				</li>,
			);
			i++;
		}
		return (
			<nav>
				<ul>{lists}</ul>
			</nav>
		);
	}
}

export default Todayvideolist;
