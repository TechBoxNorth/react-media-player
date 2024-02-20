import './Controls.css'

function Controls(){
    return (
        <>
            <div className="controls-container">
                <div className="loop-icon hover">
                    <span className="material-symbols-outlined">repeat</span>
                </div>
                <div className="backward hover">
                    <span className="material-symbols-outlined md-48">fast_rewind</span>
                </div>
                <div className="play hover">
                    <span className="material-symbols-outlined md-74">play_circle</span>
                </div>
                <div className="forward hover">
                    <span className="material-symbols-outlined md-48">fast_forward</span>
                </div>
                <div className="shuffle hover">
                    <span className="material-symbols-outlined">shuffle</span>
                </div>
            </div>
        </>
    );
}

export default Controls;