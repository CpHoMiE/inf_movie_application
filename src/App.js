import React,{Component} from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  state = {
  }

  componentDidMount(){
    this._parseMovies();
  }

  _renderMovies = () =>{
    const movieDatas = this.state.movies_data.map((MovieData)=>{

    return <Movie
            title={MovieData.title}
            poster={MovieData.medium_cover_image}
            key={MovieData.id}
            genres={MovieData.genres}
            synopsis={MovieData.synopsis}/>
    });
    return movieDatas;
  }

  _parseMovies = async () =>{
    const movies_data = await this._callMovieApi();
    this.setState({
      movies_data
    });
  }

  _callMovieApi = () =>{
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    .then(response=>response.json())
    .then(response_json=>response_json.data.movies)
    .catch(err=>console.log(err));
  }

  render(){
    const { movies_data } = this.state;
    return (
      <div className={movies_data ? "App" : "App-Loading"}>
        {movies_data ? this._renderMovies() : 'Loading...'}
      </div>
      // <div className="App">
      // {this.state.movies_data ? this._renderMovies() : 'Loading...'}
      // </div>
    );
  }
}

export default App;
