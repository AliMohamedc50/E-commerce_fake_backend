/* eslint-disable no-unused-vars */
import React from 'react'
import Slider from '../../components/slider/Slider'
import Featurproduct from '../../components/featurproduct/Featurproduct';

const Home = () => {
  return (
    <div>
      <Slider />
      <Featurproduct type="Featured" />
      {/* <Featurproduct type="trending" /> */}
    </div>
  );
}

export default Home
