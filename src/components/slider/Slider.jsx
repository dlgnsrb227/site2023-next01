import Image from "next/image";
import React from "react";

const Slider = (props) => {
  return (
    <section id="sliderSection" className={props.attr}>
      <div className="slider__inner">
        <h2 className="blind">배너 슬라이드</h2>
        <div className="slider__img">
          <div className="slider s1 container">
            <div className="text">
              <h3>
                New
                <br />
                portfolio
              </h3>
              <p>
                재능은 노력끝에서 발견된다.
                <br />
                어떤 일이라도 노력하고 즐기면 그 결과는 빛을 바란다고
                생각합니다.
              </p>
              <a href="/" className="more button-green">
                자세히보기
              </a>
            </div>
            <div className="img" aria-label="hidden">
              <Image
                width={300}
                height={300}
                src="/assets/img/slider/slidericon04.png"
                alt="클립이미지"
              />
              <Image
                width={300}
                height={300}
                src="/assets/img/slider/slidericon08.png"
                alt="전구이미지"
              />
              <Image
                width={300}
                height={300}
                src="/assets/img/slider/slidericon10.png"
                alt="핀이미지"
              />
            </div>
            <div className="circle" aria-label="hidden">
              <span className="circle c1"></span>
              <span className="circle c2"></span>
              <span className="circle c3"></span>
              <span className="circle c4"></span>
              <span className="circle c5"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
