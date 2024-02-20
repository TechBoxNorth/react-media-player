import SongCard from './SongCard';
import './SongsView.css'

function SongsView(){
    return (
        <>
            <div className="songs-container">
                <SongCard />
                <SongCard />
                <SongCard />
                <SongCard />
                <SongCard />
                <SongCard />
                <SongCard />
                <SongCard />
            </div>
        </>
    );
}

export default SongsView;