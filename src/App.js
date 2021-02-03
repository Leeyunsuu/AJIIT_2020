import './App.css';
import React, { Component } from 'react';
import Todayvideolist from './components/Todayvideolist';
import Menubutton from './components/Menubutton';
import MenuBanner from './components/MenuBanner';
// import Channelvideo from './components/Channelvideo';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			viewmode: 'main',
			bannermode: 'home',
			contents_id: '0',
			Web_Drama_Contents: [
				{
					id: 1,
					status: 'finished',
					channel: '짧은대본',
					title: '"가희" 편',
					add: 'd',
				},
				{
					id: 2,
					status: 'finished',
					channel: '짧은대본',
					title: '"진원" 편',
					add: 'd',
				},
				{
					id: 3,
					status: 'finished',
					channel: '짧은대본',
					title: '"시영" 편',
					add: 'd',
				},
				{
					id: 4,
					status: 'finished',
					channel: '짧은대본',
					title: '짧게말해서',
					add: 'd',
				},
				{
					id: 5,
					status: 'finished',
					channel: '대나무숲TV',
					title: '씬넘버파란',
					add: 'd',
				},
				{
					id: 6,
					status: 'finished',
					channel: '대나무숲TV',
					title: '연애,오늘 배송 되나요?',
					add: 'd',
				},
				{
					id: 7,
					status: 'finished',
					channel: '대나무숲TV',
					title: '어서오세요,마녀상점',
					add: 'd',
				},
				{
					id: 8,
					status: 'finished',
					channel: '대나무숲TV',
					title: '네 맛대로 하는 연애',
					add: 'd',
				},
			],
		};
	}

	getReadContent() {
		let i = 0;
		while (i < this.state.contents.length) {
			const data = this.state.contents[i];
			if (data.id === this.state.contents_id) {
				return data;
			}
			i = i + 1;
		}
	}
	BANNER() {
		let mode = this.state.bannermode,
			_banner = null;
		switch (mode) {
			case 'home':
				console.log(this.state.bannermode);
				break;
			case 'menu':
				console.log(this.state.bannermode);
				_banner = (
					<MenuBanner
						bannermode={() => {
							this.setState({
								bannermode: 'home',
							});
						}}
						data={this.getReadContent}
					></MenuBanner>
				);
				break;
			default:
				console.log('default');
		}
		return _banner;
	}
	// View() {
	// 	let mode = this.state.bannermode,
	// 		_view = null;
	// 	switch (mode) {
	// 		case 'main':
	// 			break;
	// 		case 'channelvideo':
	// 			break;
	// 		default:
	// 	}
	// }
	render() {
		return (
			<div className='App'>
				<Menubutton
					mode={() => {
						this.setState({
							bannermode: 'menu',
						});
					}}
				></Menubutton>
				{this.BANNER()}
				<Todayvideolist
					mode={(id) => {
						this.setState({
							contents_id: Number(id),
						});
						// <div className='textstyle'>오늘 업로드 된 작품</div>;
					}}
					data={this.state.Web_Drama_Contents}
				></Todayvideolist>
				{/* <Channelvideo data={this.state.Web_Drama_Contents}></Channelvideo> */}
			</div>
		);
	}
}

export default App;
