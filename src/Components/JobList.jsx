import JobCard from "./JobCard";

function JobList({ jobs, savedJobs, toggleSave }) {
  if (jobs.length === 0) {
    return <p className="empty">No jobs found.</p>;
  }

  return (
    <div className="job-grid">
      {jobs.map(job => (
        <JobCard
          key={job.id}
          job={job}
          isSaved={savedJobs.some(j => j.id === job.id)}
          toggleSave={toggleSave}
        />
      ))}
    </div>
  );
}

export default JobList;