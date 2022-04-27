import styles from "./Movies.module.css";
import data from "../../utils/constants/data";
import {useState} from "react";
import Movie from "../Movie/Movie";

function Movies() {

  const [movies, setMovies] = useState(data);
    
  function handleClick(){
    const movie = {
        id: "xyz",
        title: "The Commando",
        poster: "https://m.media-amazon.com/images/M/MV5BYTQ5ZjM3YmQtNTQ4ZC00NzBmLTk5YTUtN2I1NWRhYzcyNzgzXkEyXkFqcGdeQXVyNDA1NDA2NTk@._V1_SX300.jpg",
        year: 2021,
        type:"movie"
    }
    setMovies([...movies, movie]);
  }

  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>Latest Movies</h2>
        
        <div className={styles.movie__container}>
          {movies.map((movie) => <Movie movie={movie} key={movie.id}/>)}
        </div>
      
        <button onClick={handleClick}>Add Movie</button>
      </section>
    </div>
  );
}

export default Movies;