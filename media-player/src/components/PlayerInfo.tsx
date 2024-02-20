import './PlayerInfo.css'

function PlayerInfo(){
    return (
        <>
            <div className="player-info-container">
                <div className="plus-icon hover">
                    <span className="material-symbols-outlined">add_circle</span>
                </div>
                <div className="player-info-text">
                    <p className="player-info-artist">Artist Name</p>
                    <p className="player-info-song">Song Name</p>
                </div>
                <div className="heart-icon hover">
                <span className="material-symbols-outlined">favorite</span>
                </div>
            </div>
        </>
    );
}

export default PlayerInfo;