import React, { Component } from 'react';

class MenuBanner extends Component {
	render() {
		console.log('menu banner');
		return (
			<article>
				<p>MENU</p>

				<div>
					<a
						className='textstyle'
						href='veiw channels'
						onClick={(e) => {
							e.preventDefault();
							this.props.bannermode();
						}}
					>
						뒤로가기
					</a>
				</div>
				<div>
					<a
						className='textstyle'
						href='veiw channels'
						onClick={(e) => {
							e.preventDefault();
						}}
					>
						채널별로 보기
					</a>
				</div>
			</article>
		);
	}
}

export default MenuBanner;
