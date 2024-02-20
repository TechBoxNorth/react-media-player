import Controls from './Controls';
import Duration from './Duration';
import PlayerInfo from './PlayerInfo';
import './PlayerView.css'

function PlayerView(){
    return (
        <>
            <div className="player-container">
                <div className="song-art">
                    <img className='song-img' src="" alt="" />
                </div>
                <PlayerInfo />
                <Duration />
                <Controls />
            </div>
        </>
    );
}

export default PlayerView;