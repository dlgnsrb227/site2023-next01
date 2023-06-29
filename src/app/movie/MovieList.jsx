import Image from "next/image";
import React from "react";
import styles from "./page.module.scss";

const MovieList = ({ movie }) => {
  return (
    <li className={styles.li}>
      <a href={`https://www.themoviedb.org/movie/${movie.id}`}>
        <Image
          width={400}
          height={218}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <em>
          <span className={styles.title}>{movie.title}</span>
          <span className={styles.star}>{movie.vote_average}</span>
        </em>
      </a>
    </li>
  );
};

export default MovieList;
