import Image from 'next/image';
import React from 'react';

const Movie = () => {
  return (
    <section id="movieSection" className="movie__wrap section">
      <div className="movie__inner container">
        <div className="movie__text">
          <h3>추천 movie</h3>
          <p>추천 영화를 구경하고 감상해보세요 !</p>
          <a href="#" className="button-green">
            자세히보기
          </a>
        </div>
        <div className="movie__item">
          <div>
            <Image
              width={200}
              height={308}
              src="/assets/img/movie/movie01.png"
              alt="영화썸네일이미지"
            />
          </div>
          <div>
            <Image
              width={200}
              height={308}
              src="/assets/img/movie/movie02.png"
              alt="영화썸네일이미지"
            />
          </div>
          <div>
            <Image
              width={200}
              height={308}
              src="/assets/img/movie/movie03.png"
              alt="영화썸네일이미지"
            />
          </div>
          <div>
            <Image
              width={200}
              height={308}
              src="/assets/img/movie/movie04.png"
              alt="영화썸네일이미지"
            />
          </div>
          <div>
            <Image
              width={200}
              height={308}
              src="/assets/img/movie/movie05.png"
              alt="영화썸네일이미지"
            />
          </div>
          <div>
            <Image
              width={200}
              height={308}
              src="/assets/img/movie/movie06.png"
              alt="영화썸네일이미지"
            />
          </div>
          <div>
            <Image
              width={200}
              height={308}
              src="/assets/img/movie/movie07.png"
              alt="영화썸네일이미지"
            />
          </div>
          <div>
            <Image
              width={200}
              height={308}
              src="/assets/img/movie/movie08.png"
              alt="영화썸네일이미지"
            />
          </div>
          <div>
            <Image
              width={200}
              height={308}
              src="/assets/img/movie/movie09.png"
              alt="영화썸네일이미지"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Movie;
