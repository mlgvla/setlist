import React from "react"

function Song({ song, onSongClick, onDeleteSong }) {
  const { id, artist, image } = song

  function deleteClicked(e) {
    e.stopPropagation()
    onDeleteSong(song)
  }
  return (
    <div className="song" onClick={() => onSongClick(song)}>
      <img src={image} />
      <div className="song-info">
        <h3>{song.song}</h3>
        <h4>{artist}</h4>
      </div>
      <button onClick={deleteClicked}>X</button>
    </div>
  )
}

export default Song
