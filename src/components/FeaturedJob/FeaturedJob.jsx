import React, { useEffect, useState } from "react";
import Jobs from "../Jobs/Jobs";

const FeaturedJob = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <>
      <div className="text-center">
        <h2 className="text-5xl">Featured Jobs : {jobs.length}</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div>
        {jobs.map((job) => (
          <Jobs job={job} key={jobs.id}></Jobs>
        ))}
      </div>
    </>
  );
};

export default FeaturedJob;
