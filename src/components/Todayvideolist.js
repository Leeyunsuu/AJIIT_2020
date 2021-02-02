import React, { Component } from 'react';

class Todayvideolist extends Component {
	shouldComponentUpdate(newProps) {
		console.log('ListUpdate');
		if (this.props.data === newProps.data) {
			return false;
		} else {
			return true;
		}
	}
	render() {
		console.log('list');
		var lists = [];
		var data = this.props.data;
		var i = 0;
		while (i < data.length) {
			lists.push(
				<span key={data[i].id}>
					<p>
						<a
							className='textstyle'
							href={data[i].id}
							data-id={data[i].id}
							onClick={(e) => {
								e.preventDefault();
								this.props.mode(e.target.dataset.id);
							}}
						>
							{data[i].title}
						</a>
					</p>
				</span>,
			);
			i++;
		}
		return (
			<nav>
				<div className='textstyle container_banner'>최근 추가된 작품</div>
				<span>{lists}</span>
			</nav>
		);
	}
}

export default Todayvideolist;
