
import './App.css'
import Header from './components/Header.tsx'
import PlayerView from './components/PlayerView.tsx'
import SongsView from './components/SongsView.tsx'

function App(){

  return (
    <>
      <div className="app-container">
        <Header />
        <div className="view-container">
          <SongsView />
          <PlayerView />
        </div>
      </div>
    </>
  )
}

export default App
