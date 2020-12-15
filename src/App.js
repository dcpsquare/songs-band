import RjImage from './images/boy.png'
import './App.css'
import CurrentPlayContainer from './component/CurrentPlay'
import AlbumListContainer from './component/AlbumList'

function App () {
  return (
    <div className='Album'>
      <header className='Album-header'>
        <img src={RjImage} className='Album-logo' alt='logo' />
      </header>
      <CurrentPlayContainer />
      <AlbumListContainer />
    </div>
  )
}

export default App
