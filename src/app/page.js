import Intro from "@/components/intro/Intro";
import Movie from "@/components/movie/Movie";
import Portfolio from "@/components/portfolio/Portfolio";
import Profile from "@/components/profile/Profile";
import Slider from "@/components/slider/Slider";
import Unsplash from "@/components/unsplash/Unsplash";
import Youtube from "@/components/youtube/Youtube";
import React from "react";

const Home = () => {
  return (
    <>
      <Slider attr="slider__wrap nanumneo" />
      <Intro attr="intro__wrap bg-blue section nanumneo" />
      <Profile attr="profile__wrap section center nanumneo" />
      <Portfolio attr="profile__wrap section bg-blue center nanumneo" />
      <Youtube attr="youtube__wrap section nanumneo" />
      <Unsplash attr="unsplash__wrap section bg-blue nanumneo" />
      <Movie attr="movie__wrap section nanumneo" />
    </>
  );
};

export default Home;
