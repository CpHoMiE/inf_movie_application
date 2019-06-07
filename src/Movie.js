import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import LinesEllipsis from 'react-lines-ellipsis';

/* This Functions are Stateless Functional Component */

function Movie({title,poster,genres,synopsis}){
  return(
    <div className="Movie">
      <div className="Movie_Columns">
        <Poster movie_poster_url = {poster} alt={title}/>
      </div>
      <div className="Movie_Columns">
        <h2>{title}</h2>
        <div className="Movie_Genres">
          {genres.map((genre,index)=><MovieGenre genre={genre} key={index} />)}
        </div>
        <div className="Movie_Synopsis">
          <LinesEllipsis
            text={synopsis}
            maxLine='3'
            ellipsis="..."
            trimRight
            basedOn="letters">
          </LinesEllipsis>
        </div>
      </div>
    </div>
  );
}

/* stateless functional component */
function Poster({movie_poster_url,alt}){
  return(
    <img className="Movie_Poster" src={movie_poster_url} title={alt} alt={alt}></img>
  );
}

function MovieGenre({genre}){
  return(
    <span className="Movie_Genre">{genre} </span>
  );
}

/* Parent Component로부터 넘어오는 props Data Field의 Data type 요건을 정의해놓는다. */
/* isRequired 선언 시, 해당 조건은 필수가 됨. 맞지 않는 Data type이 들어오면 console로 에러 리턴 */
Movie.propTypes = {
  title:PropTypes.string.isRequired,
  poster:PropTypes.string.isRequired,
  genres:PropTypes.array.isRequired,
  synopsis:PropTypes.string.isRequired
}
Poster.propTypes = {
  movie_poster_url:PropTypes.string.isRequired,
  alt:PropTypes.string.isRequired
}
MovieGenre.propTypes={
  genre:PropTypes.string.isRequired
}

export default Movie;
