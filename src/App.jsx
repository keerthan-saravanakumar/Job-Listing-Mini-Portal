import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import JobList from "./Components/JobList";

function App() {
  const [jobs, setJobs] = useState([]);
  const [savedJobs, setSavedJobs] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [viewMode, setViewMode] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=12")
      .then(res => res.json())
      .then(data => {
        const realisticTitles = [
          "Frontend Developer (React)",
          "Backend Developer (Node.js)",
          "UI/UX Designer",
          "Full Stack Engineer",
          "AI/ML Engineer",
          "DevOps Engineer",
          "Cloud Engineer",
          "Data Analyst",
          "Product Manager",
          "Mobile App Developer",
          "Cyber Security Analyst",
          "Software Test Engineer",
        ];

        const companies = ["Google", "Amazon", "Microsoft", "Zoho", "Infosys", "Flipkart"];
        const locations = ["Bangalore", "Hyderabad", "Pune", "Chennai", "Mumbai"];

        const mappedJobs = data.map((post, index) => ({
          id: post.id,
          title: realisticTitles[index % realisticTitles.length],
          company: companies[index % companies.length],
          location: locations[index % locations.length],
          salary: `${8 + index} LPA`,
          description:
            "We are looking for a passionate developer to join our growing team and build scalable applications with modern technologies."
        }));

        setJobs(mappedJobs);
        setLoading(false);
      });
  }, []);

  const toggleSave = (job) => {
    const exists = savedJobs.find(j => j.id === job.id);
    if (exists) {
      setSavedJobs(savedJobs.filter(j => j.id !== job.id));
    } else {
      setSavedJobs([...savedJobs, job]);
    }
  };

  const displayedJobs = (viewMode === "all" ? jobs : savedJobs)
    .filter(job =>
      job.title.toLowerCase().includes(searchText.toLowerCase())
    );

  return (
    <div className="app">
      <Header savedCount={savedJobs.length} />

      <SearchBar searchText={searchText} setSearchText={setSearchText} />

      <div className="toggle">
        <button
          className={viewMode === "all" ? "active" : ""}
          onClick={() => setViewMode("all")}
        >
          All Jobs
        </button>
        <button
          className={viewMode === "saved jobs" ? "active" : ""}
          onClick={() => setViewMode("saved jobs")}
        >
          Saved Jobs
        </button>
      </div>

      {loading ? (
        <p className="loading">Loading opportunities...</p>
      ) : (
        <JobList jobs={displayedJobs} savedJobs={savedJobs} toggleSave={toggleSave} />
      )}
    </div>
  );
}

export default App;