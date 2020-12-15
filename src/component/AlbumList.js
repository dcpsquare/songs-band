import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TrackList from './TrackList';

const AlbumList = () => {
  const dispatch = useDispatch()
  const albumList = useSelector(state => state.album)

  const onAlbumSelect = (data) => {
    dispatch({
      type: 'CHANGE_ALBUM',
      payload: data
    })
  }

  return (
    <div className='album-container'>
      <div className='album-left'>
        <h2>Discography</h2>
        <ul className='album-list'>
          {albumList && albumList.map(data =>
            (
              <li className='album-item' key={data.albumId}>
                <div className='album-name'>
                  <span>{data.albumName}</span>
                  <span>=</span>
                  <span>{data.albumYear}</span>
                </div>
                <div className='album-action'>
                  <button className='album-btn' onClick={() => onAlbumSelect(data)}>Listen</button>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
      <TrackList />
    </div>
  )
}

export default AlbumList;
