/* eslint-disable no-unused-vars */
import React from 'react'
import Slider from '../../components/slider/Slider'
import Featurproduct from '../../components/featurproduct/Featurproduct';
import Categories from '../../components/categories/Categories';

const Home = () => {
  return (
    <div>
      <Slider />
      <Featurproduct type="Featured" />
      <Categories />
      <Featurproduct type="trending" />
    </div>
  );
}

export default Home
