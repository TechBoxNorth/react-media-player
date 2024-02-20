
import './SongCard.css/'

function SongCard(){
    
    let imgPath:string = '';
    let artist:string = '';
    let song:string = '';
    
    return (
        <>
            <div className="container hover">
                <img src={imgPath} alt="" />
                <div className="song-info">
                    <p className="artist">{artist}</p>
                    <p className="song">{song}</p>
                </div>
                <div className="play-btn">
                    <span className="material-symbols-outlined md-48">play_circle</span>
                </div>
            </div>
        </>
    )
}

export default SongCard;