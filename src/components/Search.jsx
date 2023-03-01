
import React , {useState} from 'react'

function Search({onSearchText}) {
  const [searchText, setSearchText] = useState("")

  function handleSearch (event) {
    setSearchText(event.target.value)
    onSearchText(event.target.value)
  }


  return (
    <div className="search">
        <input
          type="text"
          placeholder="Search your Tracks"
          value={searchText}
          onChange={handleSearch}
        />
        <i>🔎</i>
  </div>
  )
}

export default Search