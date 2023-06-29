import Link from 'next/link';
import React from 'react';
import styles from './header.module.css';

const Links = [
  {
    id: 1,
    title: '소개',
    url: '/intro',
  },
  {
    id: 2,
    title: '프로필',
    url: '/profile',
  },
  {
    id: 3,
    title: '포트폴리오',
    url: '/port',
  },
  {
    id: 4,
    title: '유튜브',
    url: '/youtube',
  },
  {
    id: 5,
    title: '영화',
    url: '/movie',
  },
  {
    id: 6,
    title: '이미지',
    url: '/unsplash',
  },
];

function LinkDesc({ id, title, url }) {
  return (
    <li key={id}>
      <Link href={url}>{title}</Link>
    </li>
  );
}

const Header = () => {
  return (
    <header
      id="header"
      className="header__wrap bg-blue nanumneo"
      role="heading"
      aria-level="1"
    >
      <div className={styles.header__inner}>
        <h1 className={styles.header__logo}>
          <Link href="/">
            Hoong <em>Site</em>
          </Link>
        </h1>
        <nav className={styles.header__nav} role="navigation">
          <ul>
            {Links.map((link) => (
              <LinkDesc key={link.id} url={link.url} title={link.title} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
