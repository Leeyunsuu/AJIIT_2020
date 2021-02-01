import './App.css';
import React, { Component } from 'react';
import Todayvideolist from './components/Todayvideolist';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mode: 'today video list',
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
			let data = this.state.contents[i];
			if (data.id === this.state.contents_id) {
				return data;
			}
			i = i + 1;
		}
	}
	getContent() {}
	render() {
		return (
			<div className='App'>
				<div className='textstyle'>오늘 업로드 된 작품</div>
				<Todayvideolist
					mode={(id) => {
						this.setState({
							contents_id: Number(id),
						});
					}}
					data={this.state.Web_Drama_Contents}
				></Todayvideolist>
			</div>
		);
	}
}

export default App;
