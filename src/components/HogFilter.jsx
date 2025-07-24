function HogFilter({ filterGreased, setFilterGreased, sortBy, setSortBy }) {
    return (
      <div className="ui form">
        <div className="inline field">
          <label htmlFor="greased">Greased Pigs Only?</label>
          <input
            type="checkbox"
            id="greased"
            checked={filterGreased}
            onChange={(e) => setFilterGreased(e.target.checked)}
          />
        </div>
        <div className="inline field">
          <label htmlFor="sort">Sort by:</label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="ui dropdown"
          >
            <option value="">None</option>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
          </select>
        </div>
      </div>
    );
  }
  
  export default HogFilter;