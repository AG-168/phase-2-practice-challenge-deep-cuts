import React, {useState} from 'react'

function AddTrackForm({onHandleSubmit}) {

  const [formImage, setFormImage] =useState("")
  const [formTitle, setFormTitle] = useState("")
  const [formArtist, setFormArtist] = useState("")
  const [formBPM, setFormBPM] = useState("")
  const newTrack = {
    "title":formTitle,
      "artist":formArtist,
      "BPM":formBPM,
      "image":formImage
  }

  function handleFormImage (e) {
    setFormImage(e.target.value)
  }

  function handleFormTitle (e) {
    setFormTitle(e.target.value)
  }

  function handleFormArtist (e) {
    setFormArtist(e.target.value)
  }

  function handleFormBPM (e) {
    setFormBPM(parseInt(e.target.value))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onHandleSubmit(newTrack)
  }


  return (
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="image" placeholder="Image URL" value={formImage} onChange={handleFormImage}/>
          <input type="text" name="title" placeholder="title" value={formTitle} onChange={handleFormTitle}/>
          <input type="text" name="artist" placeholder="Artist" value={formArtist} onChange={handleFormArtist}/>
          <input type="number" name="BPM" placeholder="BPM" step="1.00" value={formBPM}  onChange={handleFormBPM}/>
        </div>
        <input className="" type="submit" value="Add Track" />
      </form>
  )
}

export default AddTrackForm