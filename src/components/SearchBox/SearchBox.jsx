import "./searchBox.css";

function SearchBox() {
  return (
    <div className="search-box">
      <input
        type="text"
        className="outline-none border border-gray-200 border-r-0 box-border p-2 appearance-none"
        spellCheck="false"
      />
      <button className="bg-purple p-2 border border-purple text-white text-center">
        Search
      </button>
    </div>
  )
}

export default SearchBox
