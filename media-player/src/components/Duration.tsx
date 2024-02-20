import './Duration.css'

function Duration(){
    return (
        <>
            <div className="duration-container">
                <div className='played'>1:27</div>
                <div className="progress-bar">
                    <div className="progress"></div>
                </div>
                <div className="length">4:16</div>
            </div>
        </>
    );
}

export default Duration;