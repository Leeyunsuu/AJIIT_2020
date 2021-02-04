import './App.css';
import React, { Component } from 'react';
import Todayvideolist from './components/Todayvideolist';
import Menubutton from './components/Menubutton';
import MenuBanner from './components/MenuBanner';
import Channelvideo from './components/Channelvideo';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			viewmode: 'main',
			bannermode: 'home',
			contents_id: '0',
			channelcontents: [],
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
	shortscript() {
		let i = 0,
			_content = Array.from(this.state.Web_Drama_Contents);
		const channel = '짧은대본';
		while (i < _content.length) {
			if (_content[i].channel === channel) {
				console.log('정답');
			}
			i = i + 1;
		}
		return i;
	}
	BANNER() {
		let mode = this.state.bannermode,
			_banner = null;
		switch (mode) {
			case 'none':
				console.log(this.state.bannermode);
				break;
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
					/>
				);
				break;
			default:
				console.log('default');
		}
		return _banner;
	}
	MAINVIEW() {
		let viewmode = this.state.viewmode,
			_mainview = null;
		switch (viewmode) {
			case 'main':
				console.log(viewmode);
				_mainview = (
					<Todayvideolist
						mode={(id) => {
							this.setState({
								contents_id: Number(id),
							});
						}}
						data={this.state.Web_Drama_Contents}
					></Todayvideolist>
				);
				break;
			case 'channelvideo':
				this.setState({
					bannermode: 'none',
				});
				console.log(viewmode);
				break;
			default:
				console.log(viewmode);
		}
		return _mainview;
	}

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
				{this.MAINVIEW()}
				<Channelvideo data={this.shortscript()}></Channelvideo>
			</div>
		);
	}
}

export default App;
