function SearchBar() {
  return (
    <div className="search-bar">

      <label htmlFor="searchTask">
        Search Tasks
      </label>

      <input
        id="searchTask"
        type="text"
        placeholder="Search tasks..."
      />

    </div>
  );
}

export default SearchBar;