import React from 'react';

const VideoDetail = ({video}) => {
    // Prevent breaking before video exists
    if (!video) { // This should only be used on heavy components
        return (<div>Loading...</div>);
    }

    const videoId = video.id.videoId;
    // const url = 'https://www.youtube.com/embed/' + videoId;
    const url = `https://www.youtube.com/embed/${videoId}`; // ES6 Syntax

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    )
}

export default VideoDetail;
