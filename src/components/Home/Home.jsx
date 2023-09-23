import React from "react";
import JobCatagories from "../JobCatagories/JobCatagories";
import FeaturedJob from "../FeaturedJob/FeaturedJob";

const Home = () => {
  return (
    <div>
      <h2>This is Home</h2>
      <JobCatagories></JobCatagories>
      <FeaturedJob></FeaturedJob>
    </div>
  );
};

export default Home;
