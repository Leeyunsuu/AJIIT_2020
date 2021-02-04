import React, { Component } from 'react';

class Channelvideo extends Component {
	render() {
		console.log(this.props.data);
		return (
			<nav>
				<div className='textstyle container_banner'>채널 별 보기</div>
				<ul></ul>
			</nav>
		);
	}
}

export default Channelvideo;
