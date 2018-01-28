import React from 'react';

/*const VideoListItem = (props) => {
    const video = props.video;
    OR*/
const VideoListItem = ({video, onVideoSelect}) => { // ES6 - grab this property from the props object and declare a new variable called video
    const imageUrl = video.snippet.thumbnails.default.url;

    // onVideoSelect = (video) => {
    //     console.log("beep");
    // }

    // console.log(video);
    return (
        <li
            onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>

                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    );
}

export default VideoListItem;
