import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DiscImage from '../images/cd.png';

const CurrentPlay = () => {
  const dispatch = useDispatch();
  const trackID = useSelector(state => state.selectedTrack);
  const album = useSelector(state => state.selectedAlbum);
  const [song, setSong] = useState('');
  const audioRef = useRef();
  const [track, setTrack] = useState();

  const updateSong = (source) => {
    setSong(source);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      audioRef.current.play();
    }
  }

  const onTrackChange = (state) => {
    let newSong = song;
    const index = album.tracks.findIndex((item) => item.trackId === trackID);
    if (state === 'prev' && index > 0) {
      newSong = album.tracks[index - 1];
    } else {
      newSong = album.tracks[0];
    }

    if (state === 'next' && index < album.tracks.length) {
      newSong = album.tracks[index + 1]
    } else {
      newSong = album.tracks[0]
    }

    dispatch({
      type: 'CHANGE_TRACK',
      payload: newSong.trackId
    })
  }

  useEffect(() => {
    if (album && album.tracks && trackID) {
      const newTrack = album.tracks.filter((item) => item.trackId === trackID)[0];
      setTrack(newTrack)
      updateSong(newTrack.trackSrc)
    }
  }, [trackID, album])

  return (
    <div className='current-container'>
      <div className='current-left'>
        <img src={DiscImage} alt='Disc' />
      </div>
      <div className='current-right'>
        <h3>Now Playing</h3>
        {album.albumName && <h4>{album.albumName}</h4>}
        {track && <h5> {track.trackName}</h5>}
        {track && <button className='prev-btn' onClick={() => onTrackChange('prev')}>Prev</button>}
        {song &&
          <audio controls autoPlay ref={audioRef} controlsList='​nodownload' className='current-track'>
            <source src={song} type='audio/mpeg' />
            Your browser does not support the audio element.
          </audio>}
        {track && <button className='next-btn' onClick={() => onTrackChange('next')}>Next</button>}
      </div>
    </div>
  )
}

export default CurrentPlay;
