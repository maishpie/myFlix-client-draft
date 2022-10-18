import React from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export class MainView extends React.Component {

  constructor(){
    super();
    this.state = {
      movies: [
        { 
          _id: 1, 
          Title: 'A New York Christmas Wedding', 
          Description: 'A Yuletide angel shows a bride what could have been if she had followed her secret feelings for her best friend.', 
          ImagePath: 'https://m.media-amazon.com/images/M/MV5BYjM2NjZhYWMtODQwYy00ZmMzLTlhMzctMTI5MGZjMDdkOTBjXkEyXkFqcGdeQXVyMjE5OTk3NjY@._V1_QL75_UY281_CR1,0,190,281_.jpg'
        },
        {
          _id: 2, 
          Title: 'A Secret Love', 
          Description: 'A former baseball player keeps her lesbian relationship a secret from her family for seven decades.', 
          ImagePath: 'https://m.media-amazon.com/images/M/MV5BNzRlMmUzNjUtMDczOC00YjQ5LWE0NDMtY2RkNzI5ODA4NmU3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'
        },
        {
          _id: 3, 
          Title: 'Beauty', 
          Description: 'A young singer on the brink of a promising career finds herself torn between a domineering family, industry pressures and her love for her girlfriend.', 
          ImagePath: 'https://m.media-amazon.com/images/M/MV5BYTA4YTlkNTktMGQwNC00N2QwLWFlMzYtMWRmZjM3ZmUzMzFjXkEyXkFqcGdeQXVyMTM2Mzg4MA@@._V1_FMjpg_UX1000_.jpg'
        }
      ],
      selectedMovie: null
    };
  }

  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }

  render() {
    const { movies, selectedMovie } = this.state;

    if (movies.length === 0) return <div className="main-view">The list is empty!</div>;

    return (
      <div className="main-view">
        {selectedMovie
          ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
          : movies.map(movie => (
            <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }}/>
          ))
        }
      </div>
    );
  }
}