/* eslint-disable no-unused-vars */
import React from 'react'
import Slider from '../../components/slider/Slider'
import Featurproduct from '../../components/featurproduct/Featurproduct';
import Categories from '../../components/categories/Categories';
import Contact from '../../components/contact/Contact';

const Home = () => {
  return (
    <div>
      <Slider />
      <Featurproduct type="Featured" />
      <Categories />
      <Featurproduct type="trending" />
      <Contact />
    </div>
  );
}

export default Home
