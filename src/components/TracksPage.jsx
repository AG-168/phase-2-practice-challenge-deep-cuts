import React, {useState, useEffect} from 'react'
import Search from './Search'
import AddTrackForm from './AddTrackForm'
import TracksList from './TracksList'

function TracksPage() {
  const [tracks, setTracks] = useState([])
  const [searchText, setSearchText] = useState("")
  


  useEffect(()=>(
    fetch('http://localhost:8001/tracks')
    .then((r)=>r.json())
    .then((data)=>setTracks(data))
  ),[])

  const filteredTracks = tracks.filter((track)=>{
    return track.title.includes(searchText) || track.artist.includes(searchText)
  })

  function handleNewTrack (newTrack) {
    fetch('http://localhost:8001/tracks', {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify(newTrack)
    })
    .then((r)=>r.json())
    .then((data)=>setTracks([...tracks,data]))
  }

  function handleSearchText (searchText) {
    setSearchText(searchText)
  }
    
  return (
    <div>
      <Search onSearchText={handleSearchText}/>
      <AddTrackForm onHandleSubmit={handleNewTrack}/>
      <TracksList tracksList={filteredTracks}/>
    </div>
  )
}

export default TracksPage