import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";

const Jobs = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <div className=" flex justify-start ml-8 ">
          <figure>
            <img src={logo} alt="" />
          </figure>
        </div>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div className="flex">
            <button className="mr-4 font-extrabold border  border-[#7E90FE] text-[#9873FF] rounded p-2">
              {remote_or_onsite}
            </button>
            <button className="mr-4 font-extrabold border  border-[#7E90FE] text-[#9873FF] rounded p-2">
              {job_type}
            </button>
          </div>
          <div className="flex">
            <p className="flex">
              <MdLocationOn className="text-2xl"></MdLocationOn> {location}
            </p>
            <p className="flex">
              <AiOutlineDollar className="text-2xl"></AiOutlineDollar> {salary}
            </p>
          </div>
          <div className="card-actions ">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
