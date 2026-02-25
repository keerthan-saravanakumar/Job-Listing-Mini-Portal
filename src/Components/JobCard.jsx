function JobCard({ job, isSaved, toggleSave }) {
  return (
    <div className="job-card">
      <h2>{job.title}</h2>
      <p className="company">{job.company} • {job.location}</p>
      <span className="salary">{job.salary}</span>

      <p className="description">
        {job.description.slice(0, 100)}...
      </p>

      <button
        className={isSaved ? "saved-btn" : "save-btn"}
        onClick={() => toggleSave(job)}
      >
        {isSaved ? "Saved ✓" : "Save Job"}
      </button>
    </div>
  );
}

export default JobCard;