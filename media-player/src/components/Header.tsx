import './Header.css'

function Header(){
    return (
        <>
            <header>
                <div className="nav-arrow hover">
                    <span className="material-symbols-outlined">arrow_back_ios</span>
                </div>
                <div className="playlist">
                    Playlist - 80's Synth
                </div>
                <div className="dots-icon hover">
                    <span className="material-symbols-outlined">more_vert</span>
                </div>
            </header>
        </>
    );
}

export default Header;