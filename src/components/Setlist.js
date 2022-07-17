import React from "react"
import Song from "./Song"

function Setlist({ songs, onSetListSongClick, onDeleteSong }) {
  const setList = songs.map((song) => (
    <Song
      key={song.id}
      song={song}
      onSongClick={onSetListSongClick}
      onDeleteSong={onDeleteSong}
    />
  ))
  return (
    <>
      <h2>Setlist</h2>
      <div className="setlist">{setList}</div>
    </>
  )
}

export default Setlist
