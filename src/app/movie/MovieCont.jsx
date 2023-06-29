import React from "react";
import MovieList from "./MovieList";
import styles from "./page.module.scss";

const MovieCont = ({ movies }) => {
  return (
    <div className={[styles.movie__cont, styles.container].join(" ")}>
      <ul className={styles.ul}>
        {movies.map((movie, index) => (
          <MovieList key={index} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default MovieCont;
