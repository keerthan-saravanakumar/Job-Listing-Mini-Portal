function SearchBar({ searchText, setSearchText }) {
  return (
    <div className="search-wrapper">
      <input
        type="text"
        placeholder="Search job roles..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;