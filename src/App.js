import React from "react";
import axios from "axios";

class App extends React.Component {
	state = {
		isloading: true,
		movies: [],
	};

	SaveMovies = async () => {
		const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
	};
	componentDidMount() {
		//Compiled하고 마지막에
		this.SaveMovies();
	}
	render() {
		const { isloading } = this.state;
		return <div> {isloading ? "loading..." : "it is already"} </div>;
	}
}

export default App;
