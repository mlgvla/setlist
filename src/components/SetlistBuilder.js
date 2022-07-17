import React, { useState, useEffect } from "react"
import SongList from "./SongList"
import Setlist from "./Setlist"

function SetlistBuilder() {
  const [songList, setSongList] = useState([])
  const [setList, setSetList] = useState([])

  useEffect(() => {
    fetch("http://localhost:3110/tracks")
      .then((res) => res.json())
      .then((songs) => setSongList(songs))
  }, [])

  function handleSongListClick(song) {
    const setListSongIdx = setList.findIndex(
      (setListSong) => setListSong.id === song.id
    )
    if (setListSongIdx < 0) {
      setSetList([...setList, song])
    } else {
      alert(song.song + "is already in Set List")
    }
  }

  function handleSetListSongClick(song) {
    const modifiedSetList = setList.filter(
      (setListSong) => setListSong.id !== song.id
    )
    setSetList(modifiedSetList)
  }

  function removeSongFromStateLists(song, stateArray, setStateFunction) {
    const modifiedList = stateArray.filter(
      (listSong) => listSong.id !== song.id
    )
    setStateFunction(modifiedList)
  }
  function handleDeleteSong(song) {
    fetch("http://localhost:3110/tracks/" + song.id, {
      method: "DELETE",
    })
    removeSongFromStateLists(song, songList, setSongList)
    removeSongFromStateLists(song, setList, setSetList)
  }

  return (
    <div className="builder">
      <SongList
        songs={songList}
        onSongClick={handleSongListClick}
        onDeleteSong={handleDeleteSong}
      />
      <div className="vl"></div>
      <Setlist
        songs={setList}
        onSetListSongClick={handleSetListSongClick}
        onDeleteSong={handleDeleteSong}
      />
    </div>
  )
}

export default SetlistBuilder
