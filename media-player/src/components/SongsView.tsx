import SongCard from './SongCard.tsx';
import './SongsView.css'

function SongsView(){
    
    interface ISong {
        art: string;
        artist: string;
        song: string;
    }

    const songObjects:ISong[] = [
        {
            'art': './src/assets/being_boiled.jpg',
            'artist': 'The Human League',
            'song': 'Being Boiled'
        },
        {
            'art': './src/assets/dancing_with_tears.jpg',
            'artist': 'Ultravox',
            'song': 'Dancing with tears in my eyes'
        },
        {
            'art': './src/assets/fade_to_grey.jpg',
            'artist': 'Visage',
            'song': 'Fade to grey'
        },
        {
            'art': './src/assets/maid_of_orleans.jpg',
            'artist': 'Orchestral Manoeuvres in the Dark',
            'song': 'Maid of Orlens'
        },
        {
            'art': './src/assets/new_life.png',
            'artist': 'Depeche Mode',
            'song': 'New Life'
        },
        {
            'art': './src/assets/only_you.jpg',
            'artist': 'Yazoo',
            'song': 'Only You'
        },
        {
            'art': './src/assets/pocket_calculator.png',
            'artist': 'Kraftwerk',
            'song': 'Pocket Calculator'
        }
    ]
    
    
    

    return (
        <>
            <div className="songs-container">
                {
                    songObjects.map(() => <SongCard />)
                }
            </div>
        </>
    );
}

export default SongsView;