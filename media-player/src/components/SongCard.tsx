
import './SongCard.css/'

interface ISongCardProps {
    art:string;
    artist:string;
    song:string;
}

function SongCard(props:ISongCardProps){
    
    return (
        <>
            <div className="container hover">
                <img src={props.art} alt="" />
                <div className="song-info">
                    <p className="artist">{props.artist}</p>
                    <p className="song">{props.song}</p>
                </div>
                <div className="play-btn">
                    <span className="material-symbols-outlined md-48">play_circle</span>
                </div>
            </div>
        </>
    )
}

export default SongCard;