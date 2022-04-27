import styles from "./Movie.module.css";

function Movie(props){

    const {title, year, poster} = props.movie;
    
    return (
        <div className={styles.movie}>
            <img src={poster} 
            alt="poster pada movie" 
            className={styles.movie__image} />
            <h3 className={styles.movie_title}>{title}</h3>
            <p className={styles.movie__date}>{year}</p>
        </div>
    );
}

export default Movie;