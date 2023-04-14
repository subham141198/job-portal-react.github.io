import React from "react";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Category from "../../components/Category/Category";
import FeaturedJob from "../../components/FeaturedJob/FeaturedJob";

const Home = () => {
  return (
    <>
      <Header></Header>
      <Banner></Banner>    
      <Category></Category>
      <FeaturedJob></FeaturedJob>
    </>
  );
};

export default Home;
