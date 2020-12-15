import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import play from '../images/play.svg'

const TrackList = () => {
  const dispatch = useDispatch()
  const album = useSelector(state => state.selectedAlbum)

  const onTrackSelect = (id) => {
    dispatch({
      type: 'CHANGE_TRACK',
      payload: id
    })
  }

  return (
    <div className='album-right'>
      <h2>{album.albumName}</h2>
      <ul className='track-list'>
        {album.tracks && album.tracks.map(data =>
          (
            <li className='track-item' key={data.trackId}>
              <img width='15' height='15' className='play-btn' onClick={() => onTrackSelect(data.trackId)} src={play} alt='play'/>
              <span className='track-name'>{data.trackName}</span>
              <span className='track-duration'>{data.trackDuration}</span>
            </li>
          )
        )}
      </ul>
    </div>
  )
}

export default TrackList;
