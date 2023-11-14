import React from 'react';

class VideoPlayer extends React.Component {

    render() {
        return (
            <div>
                <video autoPlay loop width="300" height="200">
                    <source
                        src={require("./img/nyan cat.mp4")}
                        type="video/mp4"/>
                </video>
            </div>
        );
    }
}

export default VideoPlayer;