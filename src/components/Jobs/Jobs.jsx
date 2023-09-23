const Jobs = ({ job }) => {
  const { logo } = job;
  return (
    <div>
      <img src={logo} alt="" />
    </div>
  );
};

export default Jobs;
