import React from "react"
import Song from "./Song"

function SongList({ songs, onSongClick, onDeleteSong }) {
  const songList = songs.map((song) => (
    <Song
      key={song.id}
      song={song}
      onSongClick={onSongClick}
      onDeleteSong={onDeleteSong}
    />
  ))
  return (
    <>
      <h2>Song List</h2>
      <div className="song-list">{songList}</div>
    </>
  )
}

export default SongList
