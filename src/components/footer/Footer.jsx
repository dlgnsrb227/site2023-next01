import Link from 'next/link';
import React from 'react';
import styles from './footer.module.css';

const siteMenu = [
  [
    {
      title: '사이트',
    },
  ],
  [
    {
      title: '유형',
    },
  ],
  [
    {
      title: '스크립트',
    },
  ],
  [
    {
      title: '레퍼런스',
    },
  ],
];

const Footer = () => {
  return (
    <footer
      id="footer"
      className="footer__wrap section bg-blue nanumneo"
      role="contentinfo"
    >
      <div className="footer__inner container">
        <div className="footer__text">
          <h5>Hooooong</h5>
          <p>
            더 궁금하신 것이나
            <br />
            문의하실 사항이 있다면 연락주세요.
          </p>
          <Link href="mailto:gnsrbdi@naver.com">gnsrbdi@naver.com</Link>
          <ul className="sns">
            <li>
              <Link href="/"> </Link>
            </li>
            <li>
              <Link href="/"> </Link>
            </li>
            <li>
              <Link href="/"> </Link>
            </li>
            <li>
              <Link href="/"> </Link>
            </li>
            <li>
              <Link href="/"> </Link>
            </li>
          </ul>
        </div>
        <div className="footer__menu">
          <div>
            <h4>사이트</h4>
            <ul>
              <li>
                <Link href="/">웹표준 사이트</Link>
              </li>
              <li>
                <Link href="/">반응형 사이트</Link>
              </li>
              <li>
                <Link href="/">패럴랙스 사이트</Link>
              </li>
              <li>
                <Link href="/">포트폴리오 사이트</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>유형</h4>
            <ul>
              <li>
                <Link href="/">이미지 유형</Link>
              </li>
              <li>
                <Link href="/">카드 유형</Link>
              </li>
              <li>
                <Link href="/">이미지/텍스트 유형</Link>
              </li>
              <li>
                <Link href="/">배너 유형</Link>
              </li>
              <li>
                <Link href="/">텍스트 유형</Link>
              </li>
              <li>
                <Link href="/">푸터 유형</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>스크립트</h4>
            <ul>
              <li>
                <Link href="/">검색 이펙트</Link>
              </li>
              <li>
                <Link href="/">퀴즈 이펙트</Link>
              </li>
              <li>
                <Link href="/">마우스 이펙트</Link>
              </li>
              <li>
                <Link href="/">슬라이드 이펙트</Link>
              </li>
              <li>
                <Link href="/">패럴랙스 이펙트</Link>
              </li>
              <li>
                <Link href="/">게임 이펙트</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>레퍼런스</h4>
            <ul>
              <li>
                <Link href="/">CSS</Link>
              </li>
              <li>
                <Link href="/">FONTS</Link>
              </li>
              <li>
                <Link href="/">BLOG</Link>
              </li>
              <li>
                <Link href="/">REFERENCE</Link>
              </li>
              <li>
                <Link href="/">TUTORIAL</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__right">
        <span>Copyright 2022. All Rights Reserved. - Designed by Hoong</span>
      </div>
    </footer>
  );
};

export default Footer;
