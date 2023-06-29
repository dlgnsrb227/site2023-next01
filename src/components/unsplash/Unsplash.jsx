import Image from 'next/image';
import React from 'react';

const Unsplash = (props) => {
  return (
    <section id="unsplashSection" className={props.attr}>
      <div className="unsplash__inner container">
        <div className="unsplash__text">
          <h3>추천 unsplash 이미지</h3>
          <p>
            unsplash에서 다양한 이미지를 다운로드 받으세요.
            <br />
            추천 이미지를 구경하고 가세요.
          </p>
          <a href="#" className="button-blue">
            자세히보기
          </a>
        </div>
        <div className="unsplash__item">
          <div>
            <Image
              width={400}
              height={219}
              src="/assets/img/unsplash/unsplash01.png"
              alt="유튜브썸네일이미지"
            />
          </div>
          <div>
            <Image
              width={400}
              height={219}
              src="/assets/img/unsplash/unsplash02.png"
              alt="유튜브썸네일이미지"
            />
          </div>
          <div>
            <Image
              width={400}
              height={219}
              src="/assets/img/unsplash/unsplash03.png"
              alt="유튜브썸네일이미지"
            />
          </div>
          <div>
            <Image
              width={400}
              height={219}
              src="/assets/img/unsplash/unsplash04.png"
              alt="유튜브썸네일이미지"
            />
          </div>
          <div>
            <Image
              width={400}
              height={219}
              src="/assets/img/unsplash/unsplash05.png"
              alt="유튜브썸네일이미지"
            />
          </div>
          <div>
            <Image
              width={400}
              height={219}
              src="/assets/img/unsplash/unsplash06.png"
              alt="유튜브썸네일이미지"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Unsplash;
