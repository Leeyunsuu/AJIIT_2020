import React from 'react';
import PropTypes from "prop-types";

function Video_templete({ Title, Poster, rating }){
  return(
    <div> 
      <img src={Poster} alt={Title} />
      <h2> {Title} </h2>
      <h4> 10/{rating} </h4>
    </div>
  );
}

Video_templete.propTypes= {
  Title: PropTypes.string.isRequired,
  Poster: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

const Drama_Title = [ 
  {
    id: 1,
    name: "highteen",
    image: "https://upload.wikimedia.org/wikipedia/ko/7/7a/%EC%9B%B9%EB%93%9C%EB%9D%BC%EB%A7%88_%EC%97%90%EC%9D%B4%ED%8B%B4_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg",
    rating: 5.1
  },
  {
    id: 2,
    name:"Web_Drama",
    image:"https://upload.wikimedia.org/wikipedia/ko/b/bc/38%EC%82%AC%EA%B8%B0%EB%8F%99%EB%8C%80.jpg",
    rating: 5.2
  },
  {
    id: 3,
    name:"Web_Drama2",
    image:"https://upload.wikimedia.org/wikipedia/ko/e/e5/2016%EC%8B%9C%EA%B7%B8%EB%84%90.jpg",
    rating: 5.3
  },
  {
    id: 4,
    name:"Web_drama3",
    image:"https://upload.wikimedia.org/wikipedia/ko/b/bd/%EB%93%9C%EB%9D%BC%EB%A7%88_%EB%8F%84%EA%B9%A8%EB%B9%84.jpg",
    rating: 5.4
  }

]

// function Make_Title_box(List) {
//   console.log();
//   return (
//     <Video_templete key={List.id} Title={List.name} Poster={List.image} />
//   )
// }

function App() {
  return (
    <div className="App">
      {/* {console.log(Drama_Title.map(Make_Title_box))}
      {Drama_Title.map(Make_Title_box)} */}
      {Drama_Title.map(List => (<Video_templete key={List.id} Title={List.name} Poster={List.image} rating={List.rating} />) )}
    </div>
  );
}

export default App;