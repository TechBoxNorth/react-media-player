
import './SongCard.css/'

function SongCard(){
    return (
        <>
            <div className="container">
                <img src="" alt="" />
                <div className="song-info">
                    <p className="artist">Artist Name</p>
                    <p className="song">Song Name</p>
                </div>
                <div className="play-btn">
                    <span className="material-symbols-outlined">play_circle</span>
                </div>
            </div>
        </>
    )
}

export default SongCard;