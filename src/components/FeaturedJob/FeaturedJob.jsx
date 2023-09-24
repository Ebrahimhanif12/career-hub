import React, { useEffect, useState } from "react";
import Jobs from "../Jobs/Jobs";

const FeaturedJob = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);

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
      <div className="grid grid-cols-2 gap-4">
        {jobs.slice(0, dataLength).map((job) => (
          <Jobs job={job} key={jobs.id}></Jobs>
        ))}
      </div>
      <button
        onClick={() => setDataLength(jobs.length)}
        className={`btn btn-primary ${dataLength === jobs.length && "hidden"}`}
      >
        See All Jobs
      </button>
    </>
  );
};

export default FeaturedJob;
