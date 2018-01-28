import React from 'react';
import VideoListItem from './video_list_item';

// no need for state. It doesn't record itself. It doesn't need to
// rerender itself. So it is a Plain functional component. Recieves
// object called 'props' (in this case, an array of videos).
// Because this is functional, the 'props' is an argument
const VideoList = (props) => {

    const videoItems = props.videos.map((video) => {
       return(
           <VideoListItem
               onVideoSelect={props.onVideoSelect}
               key={video.etag}
               video={video} />
       )
    });

    return <div>
        {/*className gets used to not get confused between react class and css class. bootstrap*/}
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    </div>
}

export default VideoList;
