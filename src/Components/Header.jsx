function Header({ savedCount }) {
  return (
    <div className="header">
      <h1>JobSphere</h1>
      <p className="subtitle">Find your next opportunity effortlessly.</p>

      <div className="saved-pill">
        Saved Jobs: {savedCount}
      </div>
    </div>
  );
}

export default Header;