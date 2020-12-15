import { albums } from './JSON/album.js'
const initState = {
  album: albums,
  selectedAlbum: '',
  selectedTrack: ''
}

const Reducer = (state = initState, action) => {
  switch (action.type) {
    case 'CHANGE_ALBUM':
      return {
        ...state,
        selectedAlbum: action.payload
      }
    case 'CHANGE_TRACK':
      return {
        ...state,
        selectedTrack: action.payload
      }

      // you can have as many case statements as you need
    default:
      return state
  }
}

export default Reducer
