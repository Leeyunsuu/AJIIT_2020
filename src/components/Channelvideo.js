import React, { Component } from 'react';

class Channelvideo extends Component {
	render() {
		const data = this.props.data;
		var shortscript,
			bambooforest = [];
		let i = 0;
		while (i < data.length) {
			if (data.channel === '짧은대본') {
				shortscript.push(
					<div key={data[i].id}>
						<p>
							<a
								className='textstyle'
								href={data[i].id}
								data-id={data[i].id}
								onClick={(e) => {
									e.preventDefault();
								}}
							>
								{data[i].title}
							</a>
						</p>
					</div>,
				);
			} else if (data.channel === '대나무숲TV') {
				bambooforest.push(
					<div key={data[i].id}>
						<p>
							<a
								className='textstyle'
								href={data[i].id}
								data-id={data[i].id}
								onClick={(e) => {
									e.preventDefault();
								}}
							>
								{data[i].title}
							</a>
						</p>
					</div>,
				);
				i++;
			}
		}
		return (
			<nav>
				<div className='textstyle container_banner'>채널 목록</div>
				<div>{shortscript}</div>
				<div>{bambooforest}</div>
			</nav>
		);
	}
}

export default Channelvideo;
