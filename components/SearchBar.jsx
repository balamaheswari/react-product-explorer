
function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search product..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="border p-2 w-full rounded"
    />
  );
}

export default SearchBar;